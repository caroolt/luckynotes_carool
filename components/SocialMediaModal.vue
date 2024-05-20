<template>
  <UModal v-model="isOpen">
    <form
      @submit.prevent="() => emit('input', descInput)"
      class="flex flex-col gap-2 p-5"
    >
      <UFormGroup label="Create social media description" name="name">
        <textarea v-model="descInput" type="textarea" class="w-full min-h-[100px] border-[1px] border-primary h-full outline-none first-letter:resize-none rounded p-3" />
      </UFormGroup>
      <div>
        <UButton type="submit">
          Save
        </UButton>
      </div>
    </form>
  </UModal>
</template>

<script lang="ts" setup>
const props = defineProps<{
  desc: string;
}>();

const isOpen = defineModel({
  default: false,
});
const descInput = ref<string>(props.desc);

const emit = defineEmits<{
  (e: "input", desc: string): void;
}>();

onMounted(() => {
    descInput.value = props.desc;
    });
</script>
