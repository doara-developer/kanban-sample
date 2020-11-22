import { mount } from "@vue/test-utils";
import KanbanPlusButton from "@client/components/atoms/KanbanPlusButton.vue";

describe("KanbanPlusButton.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = mount(KanbanPlusButton);
        expect(wrapper.find(".kanban-plus-button").text()).toBe("+");
    });
});
