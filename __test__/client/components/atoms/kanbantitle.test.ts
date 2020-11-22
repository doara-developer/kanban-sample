import { mount } from "@vue/test-utils";
import KanbanTitle from "@client/components/atoms/KanbanTitle.vue";

describe("KanbanTitle.vue", () => {
    test("renders props.msg when passed", () => {
        const dummyTitle = "Dummy Title";
        const wrapper = mount(KanbanTitle, {
            slots: {
                default: dummyTitle,
            },
        });
        expect(wrapper.find(".kanban-title").text()).toBe(dummyTitle);
    });
});
