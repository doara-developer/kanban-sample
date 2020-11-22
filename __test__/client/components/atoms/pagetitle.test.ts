import { mount } from "@vue/test-utils";
import PageTitle from "@client/components/atoms/PageTitle.vue";

describe("PageTitle.vue", () => {
    test("renders props.msg when passed", () => {
        const dummyTitle = "Dummy Title";
        const wrapper = mount(PageTitle, {
            slots: {
                default: dummyTitle,
            },
        });
        expect(wrapper.find("h1").text()).toBe(dummyTitle);
    });
});
