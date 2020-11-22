import { mount } from "@vue/test-utils";
import KanbanDeleteButton from "@client/components/atoms/KanbanDeleteButton.vue";

describe("KanbanDeleteButton.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = mount(KanbanDeleteButton);
        expect(wrapper.find(".kanban-delete-button").text()).toBe("x");
    });
});
