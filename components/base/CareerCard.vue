<template>
  <div
    class="
      g2-card 
      p-5
      rounded-xl
      shadow-explore-card-shadow
      bg-light-white
      flex flex-wrap
    "
  >
    <div class="w-full h-news-card-height-small">
      <img
        :src="cardImg"
        alt=""
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div class="w-full py-6">
      <h1 class="cambon-font text-dark-grey text-2xl mb-2">
        {{ cardTitle }}
      </h1>
      <p class="text-dark-grey text-lg font-semibold">
        {{ cardLocation }}
        <span class="text-light-secondary-body font-normal">{{
          cardRatio
        }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class CareerCard extends Vue {
  @Prop() cardImg!: string;
  @Prop() cardTitle!: string;
  @Prop() cardLocation!: string;
  @Prop() cardRatio!: string;
}
</script>

<style scoped lang="scss">
</style>
