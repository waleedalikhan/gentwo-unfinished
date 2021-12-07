<template>
  <a
    :href="url"
    target="_blank"
    class="
      g2-button
      border border-dark-grey
      rounded-xl
      outline-none
      focus:outline-none
      items-center
      mierb-font
      text-dark-grey
      py-3
      pl-4
      pr-8
      cursor-pointer
      mb-4
      relative
      justify-center
    "
    :class="{ 'inline-flex': inline, 'flex w-full': !inline }"
  >
    <span>{{ buttonText }}</span>
    <img src="/img/icons/go-to-icon.svg" alt="" class="mx-3 absolute right-0" />
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class ViewButton extends Vue {
  @Prop() buttonText!: string;
  @Prop() url!: string;
  @Prop() inline!: boolean;
}
</script>

<style ${2|scoped,|} lang="scss"></style>
