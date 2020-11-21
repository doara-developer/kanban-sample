<template>
    <div class="kanban-area-title"><slot></slot></div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({});
</script>
<style lang="scss" scoped>
.kanban-area-title {
    font-size: 1.2rem;
    padding: 5px;
}
</style>
