<template>
    <input
        ref="textRef"
        type="text"
        class="kanban-edit-area"
        @focusout="handleText"
        @keyup.enter="focusoutText"
    />
</template>
<script lang="ts">
import { defineComponent, ref, Prop, onMounted } from "vue";

export default defineComponent({
    emits: ["cancel", "add"],
    setup(props, context) {
        const textRef = ref<HTMLInputElement>();
        onMounted(() => {
            textRef.value?.focus();
        });
        const handleText = () => {
            if (textRef.value?.value.trim() === "") {
                context.emit("cancel");
            } else {
                context.emit("add", textRef.value?.value);
            }
        };
        const focusoutText = () => {
            textRef.value?.blur();
        };
        return {
            handleText,
            textRef,
            focusoutText,
        };
    },
});
</script>
<style lang="scss" scoped>
.kanban-edit-area {
    width: 100%;
    background-color: white;
    margin-bottom: 5px;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
}
</style>
