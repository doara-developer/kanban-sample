import { mount } from "@vue/test-utils";
import KanbanAreaNumber from "@client/components/atoms/KanbanAreaNumber.vue";

describe("KanbanAreaNumber.vue", () => {
    test("renders props.msg when passed", () => {
        const dummyNumber = "5";
        const wrapper = mount(KanbanAreaNumber, {
            slots: {
                default: dummyNumber,
            },
        });
        expect(wrapper.find(".kanban-area-number").text()).toBe(dummyNumber);
    });
});
