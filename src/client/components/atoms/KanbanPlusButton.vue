<template>
    <div class="kanban-plus-button">+</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({});
</script>
<style lang="scss" scoped>
.kanban-plus-button {
    font-size: 1.2rem;
    background-color: #c6e2d8;
    width: 40px;
    border-radius: 10px;
    text-align: center;
    margin: auto;
    cursor: pointer;
    box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
}
</style>
