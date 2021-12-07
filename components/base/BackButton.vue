<template>
  <nuxt-link :to="link">
    <button
      class="
        outline-none
        focus:outline-none
        bg-light-element-bg
        rounded-full
        px-5
        py-3
        text-dark-grey
        mierb-font
        flex
        items-center
      "
    >
      <img src="/img/icons/arrow-left-icon-dark.svg" alt="" />
      <span class="ml-3">{{ text }}</span>
    </button>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class BackButton extends Vue {
  @Prop() link!: string;
  @Prop() text!: string;
}
</script>

<style  scoped lang="scss">
</style>
