<template>
  <a
    :href="url"
    :title="title"
    :download="title"
    class="
      g2-button
      bg-dark-grey
      rounded-xl
      outline-none
      focus:outline-none
      flex
      items-center
      mierb-font
      text-white
      w-full
      py-3
      px-4
      cursor-pointer
      mb-4
    "
  >
    <img src="/img/icons/download-icon.svg" alt="" class="mr-3" />
    <span>{{ buttonText }}</span>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class DownloadButton extends Vue {
  @Prop() buttonText!: string;
  @Prop() url!: string;
  @Prop() title!: string;
}
</script>

<style ${2|scoped,|} lang="scss">
</style>
