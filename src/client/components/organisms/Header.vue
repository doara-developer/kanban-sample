<template>
    <header class="header">
        <PageTitle>Kanban Sample</PageTitle>
    </header>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PageTitle from "@client/components/atoms/PageTitle.vue";

export default defineComponent({
    components: {
        PageTitle,
    },
});
</script>
<style lang="scss" scoped>
.header {
    width: 100%;
    background-color: #0052cc;
    color: white;
    padding: 10px;
}
</style>
