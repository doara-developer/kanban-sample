<template>
    <div class="kanban-area">
        <div class="kanban-area-header">
            <KanbanAreaTitle><slot></slot></KanbanAreaTitle>
            <KanbanAreaNumber>{{ data.length }}</KanbanAreaNumber>
        </div>
        <div class="kanban-area-content">
            <Kanban v-for="item in data" :key="item.id">
                <template #title>{{ item.title }}</template>
            </Kanban>
            <KanbanPlusButton />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import Kanban from "@client/components/molecules/Kanban.vue";
import KanbanAreaTitle from "@client/components/atoms/KanbanAreaTitle.vue";
import KanbanAreaNumber from "@client/components/atoms/KanbanAreaNumber.vue";
import KanbanPlusButton from "@client/components/atoms/KanbanPlusButton.vue";

export type KanbanData = {
    id: string;
    title: string;
};
export default defineComponent({
    components: {
        Kanban,
        KanbanAreaTitle,
        KanbanAreaNumber,
        KanbanPlusButton,
    },
    props: {
        data: {
            type: Array as PropType<KanbanData[]>,
            default: [],
        },
    },
});
</script>
<style lang="scss" scoped>
.kanban-area {
    border-radius: 5px;
    background-color: #e7f1ed;
    color: #4a4a4a;
    width: 250px;
    margin: 10px;
}
.kanban-area-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.kanban-area-content {
    font-size: 1.2rem;
    width: 100%;
    padding: 5px;
}
</style>
