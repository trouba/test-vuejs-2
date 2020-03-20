// mutations.spec.js
import { expect } from "chai";
import { mutations } from "./users";

// destructure assign `mutations`
const { setUsers, setUser, resetUser } = mutations;

const dummyUsers = [
  {
    id: 1
  },
  {
    id: 2
  }
];

const dummyUser = {
  first_name: "toto",
  last_name: "lala",
  avatar: "",
  email: "toto@lala.mail"
};

describe("mutations", () => {
  it("Add users to the users store", () => {
    // mock state
    const state = { all: [] };
    // apply mutation
    setUsers(state, dummyUsers);
    // assert result
    expect(state.all.length).to.equal(2);
  });

  it("Add one to the current user store", () => {
    // mock state
    const state = { current: {} };

    // apply mutation
    setUser(state, dummyUser);
    // assert result
    expect(state.current.first_name).to.equal("toto");
  });

  it("Add users to the store", () => {
    // mock state
    const state = { current: dummyUser };
    expect(state.current.first_name).to.equal("toto");
    // apply mutation
    resetUser(state);

    // assert result
    expect(state.current.first_name).to.equal("");
  });
});
