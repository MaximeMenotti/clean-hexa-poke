import { ITeam } from "./ITeam";
import { Pokemon } from "./Pokemon";

export class PokeTeam implements ITeam<Pokemon> {
  public id: string;
  public members: Pokemon[];

  constructor() {
    this.id = "";
    this.members = [];
  }

  public isFull(): boolean {
    return this.members.length >= 6;
  }
}
