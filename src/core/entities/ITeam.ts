export interface ITeam<MemberType> {
  id: string;
  members: MemberType[];
  isFull(): boolean;
}
