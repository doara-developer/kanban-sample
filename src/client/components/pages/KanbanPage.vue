<template>
    <div>
        <Header />
        <Main />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "@client/components/organisms/Header.vue";
import Main from "@client/components/organisms/Main.vue";

export default defineComponent({
    components: {
        Header,
        Main,
    },
});
</script>
