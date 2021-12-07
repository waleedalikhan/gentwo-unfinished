<template>
  <div class="bg-white rounded-xl shadow-explore-card-shadow p-6 g2-card">
    <div class="flex flex-wrap">
      <div class="w-full flex justify-between">
        <div class="sm:w-1/2 w-full">
          <img :src="cardImg" alt="" class="w-full h-full object-contain" />
        </div>
        <div class="w-36 sm:block hidden">
          <a :href="cardLink" target="_blank">
            <ViewButton :buttonText="cardButtonText" />
          </a>
        </div>
      </div>
      <div class="w-full my-4">
        <p class="text-dark-grey md:text-2xl text-xl mierb-font font-semibold">
          {{ cardTitle }}
        </p>
      </div>
      <div class="w-full">
        <p class="mierb-font text-light-secondary-body md:text-lg text-base">
          {{ cardText }}
        </p>
      </div>
      <div class="w-36 sm:hidden block mt-6">
        <a :href="cardLink" target="_blank">
          <ViewButton :buttonText="cardButtonText" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class EcoPartnerCard extends Vue {
  @Prop() cardImg!: string;
  @Prop() cardButtonText!: string;
  @Prop() cardTitle!: string;
  @Prop() cardText!: string;
  @Prop() cardLink!: string;
}
</script>

<style scoped lang="scss">
</style>
