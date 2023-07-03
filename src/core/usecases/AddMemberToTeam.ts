import { ITeam } from "../entities/ITeam";

export function addMemberToTeam<MemberType>(
  team: ITeam<MemberType>,
  member: MemberType
) {
  if (team.isFull()) {
    throw new Error("Team is full");
  }

  team.members.push(member);
}
