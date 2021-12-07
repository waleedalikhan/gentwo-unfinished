<template>
  <button
    class="
      bg-light-element-bg
      outline-none
      focus:outline-none
      rounded-32
      pl-4
      pr-2
      py-2
      flex
      text-dark-grey
      items-center
      mierb-font
    "
  >
    <span class="mr-3">{{ buttonText }}</span>
    <span v-if="additionalText" class="mr-3 text-light-secondary-body">{{
      additionalText
    }}</span>
    <img src="/img/icons/arrow-down-icon.svg" alt="" />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class SelectionButton extends Vue {
  @Prop() buttonText!: string;
  @Prop() additionalText!: string;
}
</script>

<style scoped lang="scss">
</style>
