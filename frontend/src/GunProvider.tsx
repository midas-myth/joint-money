import { PropsWithChildren, useState } from "react";
import { useAccountEffect, useSignMessage } from "wagmi";
import { gun } from "./gun";
import React from "react";

const Context = React.createContext({
  isLoggedIn: false,
});

export function useGun() {
  return React.useContext(Context);
}

export default function GunProvider(props: PropsWithChildren) {
  const { signMessage } = useSignMessage();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useAccountEffect({
    onConnect(data) {
      console.log("Connected!", data);

      const currentSignature = localStorage.getItem(
        "signature," + data.address
      );

      const user = gun.user();

      if (currentSignature) {
        console.log("Using cached signature", data.address, currentSignature);

        user.auth(data.address, currentSignature, (ack) => {
          if ("err" in ack) {
            console.error("Auth error", ack);
            return;
          }

          console.log("Signed in", ack);

          setIsLoggedIn(true);
        });
        return;
      }

      signMessage(
        {
          message: "This message signature will be used to authenticate you.",
          account: data.address,
        },
        {
          onSuccess(signature) {
            localStorage.setItem("signature," + data.address, signature);

            // Check if the user already exists
            gun.get(`~${data.address}`).once((existingUser) => {
              if (existingUser) {
                console.log("User already exists. Authenticating...");
                user.auth(data.address, signature, (ack) => {
                  if (!("err" in ack)) {
                    console.log("Signed in", ack);
                    setIsLoggedIn(true);
                  } else {
                    console.error("Auth error", ack.err);
                  }
                });
              } else {
                console.log("Creating new user...");
                user.create(data.address, signature, (ack) => {
                  console.log(ack);

                  user.auth(data.address, signature, (ack) => {
                    console.log("Signed in", ack);
                    setIsLoggedIn(true);
                  });
                });
              }
            });
          },
        }
      );
    },
    onDisconnect() {
      console.log("Disconnected!");
    },
  });

  const stableValue = React.useMemo(() => ({ isLoggedIn }), [isLoggedIn]);

  return <Context.Provider value={stableValue} {...props} />;
}
