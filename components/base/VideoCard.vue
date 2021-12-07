<template>
  <div
    class="
      g2-card
      md:bg-white
      md:shadow-explore-card-shadow
      md:p-2
      rounded-xl
      inline-flex
      flex-wrap
      md:w-400px w-full
    "
  >
    <div class="w-full h-40">
      <img :src="cardThumbnail" alt="" class="rounded-lg h-full w-full" />
    </div>
    <div class="w-full flex md:flex-nowrap flex-wrap items-center py-5">
      <div class="w-1/2 md:ml-3 md:mb-0 mb-5">
        <img src="/img/icons/play-button-icon.png" alt="" />
      </div>
      <div>
        <h1 class="text-medium-bronze mierb-font text-2xl mb-4 font-semibold">
          {{ cardTitle }}
        </h1>
        <p class="mierb-font text-light-secondary-body">{{ cardDate }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class VideoCard extends Vue {
  @Prop() cardThumbnail!: string;
  @Prop() cardTitle!: string;
  @Prop() cardDate!: string;
}
</script>

<style scoped lang="scss">
</style>
