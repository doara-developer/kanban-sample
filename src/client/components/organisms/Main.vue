<template>
    <KanbanArea>Kanban1</KanbanArea>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import KanbanArea from "@client/components/molecules/KanbanArea.vue";

export default defineComponent({
    components: {
        KanbanArea,
    },
});
</script>
