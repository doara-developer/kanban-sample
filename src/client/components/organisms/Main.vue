<template>
    <div class="main">
        <KanbanArea
            v-for="item in state"
            :key="item.id"
            :data="item.data"
            :item-id="item.id"
            @new="addItem"
            @deleteItem="deleteItem"
        >
            {{ item.title }}
        </KanbanArea>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import KanbanArea, {
    KanbanData,
} from "@client/components/organisms/KanbanArea.vue";

type KabanAreaData = {
    id: string;
    title: string;
    data: KanbanData[];
};
type AddItemArg = {
    id: string;
    value: string;
};
type DeleteItemArg = {
    id: string;
    areaId: string;
};
export default defineComponent({
    components: {
        KanbanArea,
    },
    setup() {
        const state = reactive<KabanAreaData[]>([
            {
                id: "1",
                title: "Todo",
                data: [
                    {
                        id: "1",
                        title: "kanban1",
                    },
                    {
                        id: "2",
                        title: "kanban2",
                    },
                ],
            },
            {
                id: "2",
                title: "Doing",
                data: [],
            },
            {
                id: "3",
                title: "Done",
                data: [],
            },
        ]);
        const addItem = ({ id, value }: AddItemArg) => {
            const item = state.find((item) => item.id === id);
            item?.data.push({
                id: String(item.data.length + 1),
                title: value,
            });
        };
        const deleteItem = ({ id, areaId }: DeleteItemArg) => {
            const itemList = state.find((item) => item.id === areaId);
            if (itemList?.data !== undefined) {
                itemList.data = itemList?.data.filter((item) => item.id !== id);
            }
        };
        return {
            state,
            addItem,
            deleteItem,
        };
    },
});
</script>
<style lang="scss" scoped>
.main {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}
</style>
