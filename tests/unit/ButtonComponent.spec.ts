import { mount } from "@vue/test-utils";
import ButtonComponent from "@/components/Common/Button/ButtonComponent.vue";

describe("ButtonComponent", () => {
  test("check dataTestId prop is working as expected", async () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        disabled: true,
        text: "test",
        type: "button",
        dataTestId: "test-datatest-id",
      },
    });
    expect(wrapper.find("[data-testid='test-datatest-id']").exists()).toBe(
      true
    );
  });
  test("check disabled:true prop is working as expected", async () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        disabled: true,
        text: "test text",
        type: "button",
        dataTestId: "test-datatest-id",
      },
    });
    expect(
      wrapper.find("[data-testid='test-datatest-id']").element["disabled"]
    ).toBe(true);
  });

  test("check disabled:false prop is working as expected", async () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        disabled: false,
        text: "test text",
        type: "button",
        dataTestId: "test-datatest-id",
      },
    });
    expect(
      wrapper.find("[data-testid='test-datatest-id']").element["disabled"]
    ).toBe(false);
  });

  test("check text prop is working as expected", async () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        disabled: false,
        text: "test text",
        type: "button",
        dataTestId: "test-datatest-id",
      },
    });
    expect(wrapper.find("[data-testid='test-datatest-id']").text()).toBe(
      "test text"
    );
  });

  test("check ttype is working as expected", async () => {
    const wrapper = mount(ButtonComponent, {
      props: {
        disabled: false,
        text: "test text",
        type: "submit",
        dataTestId: "test-datatest-id",
      },
    });
    expect(
      wrapper.find("[data-testid='test-datatest-id']").element["type"]
    ).toBe("submit");
  });
});
