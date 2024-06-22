import { Role } from "../model";

export default function intToRole(role: number): Role {
  if (role === 0) {
    return Role.VIEWER;
  }

  if (role === 1) {
    return Role.MANAGER;
  }

  if (role === 2) {
    return Role.ADMIN;
  }

  throw new Error(`Unknown role: ${role}`);
}
