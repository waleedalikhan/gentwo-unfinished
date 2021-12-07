<template>
  <div
    class="rounded-xl bg-dark-element-bg px-6 pt-3 pb-5 w-full"
    :class="[hasFixedHeight ? 'md:h-188px h-full' : 'h-full']"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class VideoDetailCard extends Vue {
  @Prop({ default: true }) hasFixedHeight!: boolean;
}
</script>

<style scoped lang="scss">
</style>
