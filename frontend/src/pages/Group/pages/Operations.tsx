import { useParams } from "react-router-dom";
import { twJoin } from "tailwind-merge";
import { Address } from "viem";

import AddressTag from "../../../components/AddressTag";
import Crumbs from "../../../components/Crumbs";
import Heading from "../../../components/Heading";
import Page from "../../../components/Page";
import { OperationType } from "../../../gql/graphql";
import useGroupOperations from "../../../hooks/useGroupOperations";

export default function Operations() {
  const groupId = useParams<"id">().id!;

  const operations = useGroupOperations(groupId);

  return (
    <Page>
      <div className="flex flex-col gap-2">
        <div>
          <Crumbs
            crumbs={[
              {
                label: `Group ${groupId}`,
                to: `/groups/${groupId}`,
              },
            ]}
          />
          <Heading>Group {groupId} operations</Heading>
        </div>

        {operations.isLoading && <div>Loading...</div>}
        {operations.error && <div>Error: {operations.error.message}</div>}
        {operations.data && (
          <div className="grid gap-x-2 auto-cols-auto auto-rows-auto">
            {operations.data.operations.map((operation) => (
              <div
                key={operation.id}
                className="grid items-center col-span-5 py-1 grid-cols-subgrid even:bg-gray-100"
              >
                <div className="min-w-0 truncate">{operation.id}</div>

                <AddressTag address={operation.member as Address} />

                <div>{operation.amount}</div>
                <div
                  className={twJoin(
                    "px-2 py-1 text-xs rounded",
                    operation.type === OperationType.Deposit
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800",
                  )}
                >
                  {operation.type === OperationType.Deposit
                    ? "Deposit"
                    : "Withdraw"}
                </div>

                <AddressTag address={operation.tokenAddress as Address} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Page>
  );
}
