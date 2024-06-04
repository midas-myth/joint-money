import { useLocalStorage } from "@uidotdev/usehooks";
import { cloneDeep, entries, merge, random, set, unset } from "lodash";
import { useAccount } from "wagmi";

import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Page from "../components/Page";

export default function Aliases() {
  const { address } = useAccount();

  if (!address) {
    return (
      <Page>
        <div className="flex flex-col gap-2">
          <Heading>Aliases</Heading>
          <div className="text-gray-500">
            You must be signed in to view your aliases.
          </div>
        </div>
      </Page>
    );
  }

  return <AliasesLoggedIn />;
}

function AliasesLoggedIn() {
  const { address } = useAccount();
  const [aliases, setAliases] = useLocalStorage("aliases," + address, {
    groups: {} as Record<string, string>,
    addresses: {} as Record<string, string>,
  });

  return (
    <Page>
      <div className="flex flex-col gap-2">
        <Heading>Aliases</Heading>
        <div className="flex flex-col gap-2">
          <div>Groups</div>
          <div className="flex flex-col gap-1">
            {entries(aliases.groups).map(([key, value]) => (
              <div key={key} className="flex items-center gap-1">
                <Input
                  value={key}
                  onChange={(e) => {
                    setAliases((old) => {
                      const newValue = cloneDeep(old);
                      set(newValue.groups, e.target.value, value);
                      unset(newValue.groups, key);
                      return newValue;
                    });
                  }}
                />
                :
                <Input
                  value={value}
                  onChange={(e) => {
                    setAliases((old) => {
                      const newValue = cloneDeep(old);
                      set(newValue.groups, key, e.target.value);
                      return newValue;
                    });
                  }}
                />
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              setAliases((old) =>
                merge({}, old, {
                  groups: {
                    [random(0, 1000)]: "New Group",
                  },
                }),
              );
            }}
          >
            Add
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <div>Addresses</div>
          <div className="flex flex-col gap-1">
            {entries(aliases.addresses).map(([key, value]) => (
              <div key={key} className="flex items-center gap-1">
                <Input
                  value={key}
                  onChange={(e) => {
                    setAliases((old) => {
                      const newValue = cloneDeep(old);
                      set(newValue.addresses, e.target.value, value);
                      unset(newValue.addresses, key);
                      return newValue;
                    });
                  }}
                />
                :
                <Input
                  value={value}
                  onChange={(e) => {
                    setAliases((old) => {
                      const newValue = cloneDeep(old);
                      set(newValue.addresses, key, e.target.value);
                      return newValue;
                    });
                  }}
                />
              </div>
            ))}
          </div>
          <Button
            onClick={() => {
              setAliases((old) =>
                merge({}, old, {
                  addresses: {
                    [random(0, 1000)]: "New Address",
                  },
                }),
              );
            }}
          >
            Add
          </Button>
        </div>
      </div>
    </Page>
  );
}
