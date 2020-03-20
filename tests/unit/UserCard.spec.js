// Importer `shallowMount` de Vue Test Utils et le composant à tester
import { shallowMount } from "@vue/test-utils";
import UserCard from "../../src/components/UserCard.vue";

function getMountedComponent(Component, propsData, stubs) {
  return shallowMount(Component, {
    propsData,
    stubs
  });
}

const dummyUser = {
  first_name: "toto",
  last_name: "lala",
  avatar: "",
  email: "toto@lala.mail"
};

describe("User card", () => {
  it("Renders correctly with the given props", () => {
    expect(
      getMountedComponent(
        UserCard,
        {
          user: dummyUser
        },
        ["router-link"]
      ).text()
    ).toBe("toto lala See profile 👉");
  });
});
