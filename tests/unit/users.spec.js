// mutations.spec.js
import axios from "axios";
import { mutations, actions } from "../../src/store/modules/users.js";

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
    expect(state.all.length).toEqual(2);
  });

  it("Add one to the current user store", () => {
    // mock state
    const state = { current: {} };

    // apply mutation
    setUser(state, dummyUser);
    // assert result
    expect(state.current.first_name).toEqual("toto");
  });

  it("Add users to the store", () => {
    // mock state
    const state = { current: dummyUser };
    expect(state.current.first_name).toEqual("toto");
    // apply mutation
    resetUser(state);

    // assert result
    expect(state.current.first_name).toEqual("");
  });
});

// Get all users action

jest.mock("axios");

axios.get.mockImplementation(url => {
  console.log(url);
  switch (url) {
    case "https://reqres.in/api/users?page=1":
      return Promise.resolve({
        data: {
          data: [
            {
              first_name: "toto",
              last_name: "lala",
              avatar: "",
              email: "toto@lala.mail"
            },
            {
              first_name: "toto",
              last_name: "lala",
              avatar: "",
              email: "toto@lala.mail"
            }
          ]
        }
      });
    case "https://reqres.in/api/users/1":
      return Promise.resolve({
        data: {
          data: {
            first_name: "toto",
            last_name: "lala",
            avatar: "",
            email: "toto@lala.mail"
          }
        }
      });
    default:
      return Promise.reject(new Error("not found"));
  }
});

describe("actions", () => {
  it("gets users", async () => {
    const commit = jest.fn();

    await actions.getAllUsers({ commit });

    expect(commit).toHaveBeenCalled();

    expect(commit).toHaveBeenCalledWith("setUsers", [
      {
        first_name: "toto",
        last_name: "lala",
        avatar: "",
        email: "toto@lala.mail"
      },
      {
        first_name: "toto",
        last_name: "lala",
        avatar: "",
        email: "toto@lala.mail"
      }
    ]);
  });
});

describe("actions", () => {
  it("gets current user", async () => {
    const commit = jest.fn();

    await actions.getUser({ commit }, { id: 1 });

    expect(commit).toHaveBeenCalledWith("setUser", {
      first_name: "toto",
      last_name: "lala",
      avatar: "",
      email: "toto@lala.mail"
    });
  });
});
