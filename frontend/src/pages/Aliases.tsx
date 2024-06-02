import { useCallback, useEffect, useState } from "react";
import { useGun } from "../GunProvider";
import Heading from "../components/Heading";
import Page from "../components/Page";
import { gun } from "../gun";

export default function Aliases() {
  const [aliases, setAliases] = useState("");
  const { isLoggedIn } = useGun();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    const chain = gun
      .user()
      .get("aliases")
      .on((data) => {
        setAliases(data);
      });

    return () => {
      chain.off();
    };
  }, [isLoggedIn]);

  const handleAliasesChange = useCallback(
    (event) => {
      if (!isLoggedIn) {
        return;
      }

      gun.user().get("aliases").put(event.target.value);
    },
    [isLoggedIn]
  );

  return (
    <Page>
      <div className="flex flex-col gap-2">
        <Heading>Aliases</Heading>
        {!isLoggedIn && <p>Not logged in</p>}
        {isLoggedIn && (
          <textarea
            value={aliases}
            onChange={handleAliasesChange}
            className="block w-full p-2 bg-gray-100 border border-gray-300 rounded"
            rows={10}
          />
        )}
      </div>
    </Page>
  );
}
