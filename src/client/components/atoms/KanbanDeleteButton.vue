<template>
    <div class="kanban-delete-button">x</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({});
</script>
<style lang="scss" scoped>
.kanban-delete-button {
    font-size: 1rem;
    background-color: #c6e2d8;
    width: 20px;
    border-radius: 10px;
    text-align: center;
    margin: auto 0 auto auto;
    cursor: pointer;
    box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
}
</style>
