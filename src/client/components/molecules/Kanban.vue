<template>
    <div class="kanban">
        <KanbanTitle><slot name="title"></slot></KanbanTitle>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import KanbanTitle from "@client/components/atoms/KanbanTitle.vue";

export default defineComponent({
    components: { KanbanTitle },
});
</script>
<style lang="scss" scoped>
.kanban {
    width: 100%;
    background-color: white;
    cursor: pointer;
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
}
</style>
