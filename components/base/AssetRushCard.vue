<template>
  <div
    class="
      asset-card
      g2-card 
      md:px-12
      px-4
      md:pt-16
      pt-6
      md:pb-10
      pb-6
      flex flex-wrap
      rounded-25
    "
  >
    <div class="lg:w-1/2 w-full lg:mb-0 mb-6">
      <img
        src="/img/ecosystem-page/asset-text.svg"
        alt=""
        data-aos="fade-up"
        data-aos-duration="600"
      />
      <img
        src="/img/ecosystem-page/asset-date.svg"
        alt=""
        class="mt-20 mb-10"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="200"
      />
      <img
        src="/img/ecosystem-page/asset-author.svg"
        alt=""
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="400"
      />
    </div>
    <div v-if="showInfo" class="lg:w-1/2 w-full lg:pl-6 flex flex-wrap">
      <div class="w-full md:mb-0 mb-5">
        <p
          class="text-lg text-white mierb-font"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
        >
          ASSETRUSH unites the community to build platforms of the next
          generation and explore how a modular solution can be a cornerstone to
          grow your business. Everybody can be an innovator, and everybody can
          create tailor-made products to give investors easy access to
          innovative investment solutions for all asset classes. .. <br />
          <span class="text-eco-orange"> → Read more</span>
        </p>
      </div>
      <div
        class="w-full flex justify-end items-end"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="600"
      >
        <button
          class="
            bg-transparent
            outline-none
            focus:outline-none
            px-6
            py-3
            border border-eco-orange
            rounded-xl
            text-lg text-eco-orange
          "
        >
          Visit ASSETRUSH
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class AssetRushCard extends Vue {
  @Prop({ default: true }) showInfo!: boolean;
}
</script>

<style scoped lang="scss">
.asset-card {
  background: linear-gradient(
      133.46deg,
      rgba(130, 24, 42, 0.7) 16.16%,
      rgba(31, 44, 113, 0.86) 96.48%
    ),
    url("/img/ecosystem-page/asset-card-bg.jpg") center / cover no-repeat;
}
</style>
