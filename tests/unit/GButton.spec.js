import { mount } from "@vue/test-utils";
import { PRIMARY, SECONDARY } from "@/constants";
import GButton from "@/components/GButton";

const createButtonFactory = ({ color, round }) => {
  const wrapper = mount(GButton, { propsData: { color, round } });
  return wrapper;
};

describe("GButton test", () => {
  describe("methods test", () => {
    it("click test", async () => {
      const wrapper = createButtonFactory({ color: PRIMARY, round: false });
      const { vm } = wrapper;
      const spy = jest.spyOn(vm, "$emit");
      await wrapper.trigger("click");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith("click");
    });
  });

  describe("shape test", () => {
    it("shape round false", () => {
      const wrapper = createButtonFactory({ color: PRIMARY, round: false });
      expect(
        wrapper
          .find("button")
          .classes()
          .includes("round")
      ).toBeFalsy();
    });
    it("shape round true", () => {
      const wrapper = createButtonFactory({ color: PRIMARY, round: true });
      expect(
        wrapper
          .find("button")
          .classes()
          .includes("round")
      ).toBeTruthy();
    });
  });

  describe("color test", () => {
    it("Secondary test", () => {
      const wrapper = createButtonFactory({ color: SECONDARY, round: false });
      expect(
        wrapper
          .find("button")
          .classes()
          .includes(SECONDARY)
      ).toBeTruthy();
    });

    it("Wrong color test", () => {
      const wrapper = createButtonFactory({ color: SECONDARY, round: false });
      const validator = wrapper.vm.$options.props.color.validator;
      expect(validator("eddie")).toBeFalsy();
    });
  });
});
