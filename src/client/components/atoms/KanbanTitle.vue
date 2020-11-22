<template>
    <div class="kanban-title"><slot></slot></div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({});
</script>
<style lang="scss" scoped>
.kanban-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 210px;
}
</style>
