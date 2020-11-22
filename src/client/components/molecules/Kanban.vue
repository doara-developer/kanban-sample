<template>
    <div class="kanban">
        <KanbanTitle><slot name="title"></slot></KanbanTitle>
        <KanbanDeleteButton @click="deleteItem" />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import KanbanTitle from "@client/components/atoms/KanbanTitle.vue";
import KanbanDeleteButton from "@client/components/atoms/KanbanDeleteButton.vue";

export default defineComponent({
    components: { KanbanTitle, KanbanDeleteButton },
    emits: ["delete"],
    setup(props, context) {
        const deleteItem = () => {
            if (confirm("削除しますか？")) {
                context.emit("delete");
            }
        };
        return {
            deleteItem,
        };
    },
});
</script>
<style lang="scss" scoped>
.kanban {
    display: flex;
    width: 100%;
    background-color: white;
    cursor: pointer;
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
}
</style>
