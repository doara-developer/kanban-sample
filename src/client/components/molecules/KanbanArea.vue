<template>
    <div class="kanban-area">
        <div class="kanban-area-title"><slot></slot></div>
        <div class="kanban-area-content">
            <Kanban v-for="item in data" :key="item.id">
                {{ item.title }}
            </Kanban>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import Kanban from "@client/components/atoms/Kanban.vue";

export type KanbanData = {
    id: string;
    title: string;
};
export default defineComponent({
    components: {
        Kanban,
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
.kanban-area-title {
    font-size: 1.2rem;
    width: 100%;
    padding: 5px;
}
.kanban-area-content {
    font-size: 1.2rem;
    width: 100%;
    padding: 5px;
}
</style>
