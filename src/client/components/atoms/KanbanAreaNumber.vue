<template>
    <div class="kanban-area-number"><slot></slot></div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({});
</script>
<style lang="scss" scoped>
.kanban-area-number {
    font-size: 1rem;
    background-color: #c6e2d8;
    width: 35px;
    border-radius: 10px;
    text-align: center;
}
</style>
