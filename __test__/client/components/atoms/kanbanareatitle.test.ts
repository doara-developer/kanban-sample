import { mount } from "@vue/test-utils";
import KanbanAreaTitle from "@client/components/atoms/KanbanAreaTitle.vue";

describe("KanbanAreaTitle.vue", () => {
    test("renders props.msg when passed", () => {
        const dummyTitle = "Dummy Title";
        const wrapper = mount(KanbanAreaTitle, {
            slots: {
                default: dummyTitle,
            },
        });
        expect(wrapper.find(".kanban-area-title").text()).toBe(dummyTitle);
    });
});
