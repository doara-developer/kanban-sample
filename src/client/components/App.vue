<template>
    <div>
        <KanbanPage />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import KanbanPage from "@client/components/pages/KanbanPage.vue";

export default defineComponent({
    components: {
        KanbanPage,
    },
});
</script>
