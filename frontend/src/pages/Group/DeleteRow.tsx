// import { useNavigate } from "react-router-dom";
// import { useAccount } from "wagmi";

// import Button from "../../components/Button";

// export default function DeleteRow({ groupId }: { groupId: string }) {
//   const { address } = useAccount();
//   const { writeContractAsync } = useWriteJointMoneyErc20DeleteGroup();
//   const navigate = useNavigate();

//   const handleDeleteGroup = async () => {
//     await writeContractAsync({
//       args: [BigInt(groupId)],
//       account: address!,
//     });
//     navigate("/");
//   };

//   return (
//     <div className="flex gap-2">
//       <Button className="bg-red-500" onClick={handleDeleteGroup}>
//         Delete group
//       </Button>
//     </div>
//   );
// }

export {};
