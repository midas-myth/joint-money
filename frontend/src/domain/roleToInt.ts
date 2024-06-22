import { Role } from "../gql/graphql";

export default function roleToInt(role: Role): number {
  if (role === Role.Viewer) {
    return 0;
  }

  if (role === Role.Manager) {
    return 1;
  }

  if (role === Role.Admin) {
    return 2;
  }

  throw new Error(`Unknown role: ${role}`);
}
