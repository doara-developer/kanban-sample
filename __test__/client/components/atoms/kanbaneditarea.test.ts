import { mount } from "@vue/test-utils";
import KanbanEditArea from "@client/components/atoms/KanbanEditArea.vue";

describe("KanbanEditArea.vue", () => {
    test("renders props.msg when passed", () => {
        mount(KanbanEditArea);
    });
});
