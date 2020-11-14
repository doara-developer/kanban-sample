<template>
    <div class="kanban"><slot></slot></div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({});
</script>
<style lang="scss" scoped>
.kanban {
    width: 100%;
    background-color: white;
    cursor: pointer;
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 5px;
}
</style>
