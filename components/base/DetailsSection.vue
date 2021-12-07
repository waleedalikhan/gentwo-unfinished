<template>
  <section class="title-description-block py-10 md:bg-light-white bg-light-BG rounded-25 lg:px-0 px-4">
    <div
      v-if="isCentered"
      class="flex flex-wrap lg:w-3/4 w-full mx-auto"
    >
      <slot></slot>
    </div>
    <div v-else class="flex flex-wrap w-full">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class DetailsSection extends Vue {
  @Prop({ default: true }) isCentered!: boolean;
}
</script>

<style scoped lang="scss">
</style>
