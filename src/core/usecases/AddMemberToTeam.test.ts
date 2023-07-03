import { describe, it } from "vitest";
import { ITeam } from "../entities/ITeam";
import { addMemberToTeam } from "./AddMemberToTeam";

class TestTeam implements ITeam<string> {
  id: string;
  members: string[];
  isFull() {
    return false;
  }

  constructor() {
    this.id = "dummy_id";
    this.members = [];
  }
}

describe.concurrent("AddMemberToTeam", () => {
  it("should add member to team is the team is not full", async ({
    expect,
  }) => {
    const testTeam = new TestTeam();
    addMemberToTeam(testTeam, "test");
    expect(testTeam.members).toEqual(["test"]);
  });

  it("should throw error if team is already full", async ({ expect }) => {
    class TestFullTeam implements ITeam<string> {
      id: "dummy_id";
      members: [];
      isFull() {
        return true;
      }

      constructor() {
        this.id = "dummy_id";
        this.members = [];
      }
    }

    const testTeam = new TestFullTeam();
    expect(() => addMemberToTeam(testTeam, "test")).toThrowError();
  });
});
