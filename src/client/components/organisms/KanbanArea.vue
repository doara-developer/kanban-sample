<template>
    <div class="kanban-area">
        <div class="kanban-area-header">
            <KanbanAreaTitle><slot></slot></KanbanAreaTitle>
            <KanbanAreaNumber>{{ data.length }}</KanbanAreaNumber>
        </div>
        <div class="kanban-area-content">
            <Kanban
                v-for="item in data"
                :key="item.id"
                @delete="deleteItem(item.id)"
            >
                <template #title>{{ item.title }}</template>
            </Kanban>
            <KanbanPlusButton
                v-if="state.isProgress === false"
                @click="changeStatus(true)"
            />
            <KanbanEditArea
                v-if="state.isProgress === true"
                @cancel="changeStatus(false)"
                @add="addData"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, reactive } from "vue";
import Kanban from "@client/components/molecules/Kanban.vue";
import KanbanAreaTitle from "@client/components/atoms/KanbanAreaTitle.vue";
import KanbanAreaNumber from "@client/components/atoms/KanbanAreaNumber.vue";
import KanbanPlusButton from "@client/components/atoms/KanbanPlusButton.vue";
import KanbanEditArea from "@client/components/atoms/KanbanEditArea.vue";

export type KanbanData = {
    id: string;
    title: string;
};
type KanbanAreaState = {
    isProgress: boolean;
};
export default defineComponent({
    components: {
        Kanban,
        KanbanAreaTitle,
        KanbanAreaNumber,
        KanbanPlusButton,
        KanbanEditArea,
    },
    props: {
        itemId: {
            type: String,
            default: "",
        },
        data: {
            type: Array as PropType<KanbanData[]>,
            default: [],
        },
    },
    emits: ["new", "delete-item"],
    setup(props, context) {
        const state = reactive<KanbanAreaState>({
            isProgress: false,
        });
        const changeStatus = (status: boolean) => {
            state.isProgress = status;
        };
        const addData = (value: string) => {
            context.emit("new", { id: props.itemId, value: value });
            changeStatus(false);
        };
        const deleteItem = (id: string) => {
            context.emit("delete-item", { id: id, areaId: props.itemId });
        };
        return {
            state,
            changeStatus,
            addData,
            deleteItem,
        };
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
