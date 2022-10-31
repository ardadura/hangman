import LoginApp from "@/components/Login/LoginApp.vue";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
  const wrapper = mount(LoginApp, {
    data() {
      return { email: "asd@asd.com", password: 12341234 };
    },
  });
  test("check email input is exist", async () => {
    expect(wrapper.find("[data-testid='login-email']").exists()).toBe(true);
  });

  test("check register button exist", async () => {
    expect(wrapper.find("[data-testid='login-register']").exists()).toBe(true);
  });

  test("check register button change the layout from login to register", async () => {
    await wrapper.find('[data-testid="login-register"]').trigger("click");
    expect(wrapper.emitted("changeLayout")).toHaveLength(1);
  });

  test("check form data reactivity", async () => {
    const emailInput = wrapper.find('[data-testid="login-email"]');
    const passwordInput = wrapper.find('[data-testid="login-password"]');

    await emailInput.setValue("test email");
    await passwordInput.setValue("test password");

    expect(wrapper.vm.email).toBe("test email");
    expect(wrapper.vm.password).toBe("test password");
  });
});
