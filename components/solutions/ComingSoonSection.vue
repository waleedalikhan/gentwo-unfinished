<template>
  <section
    class="rounded-25 md:pt-20 md:py-0 py-10 coming-soon-bg overflow-hidden"
  >
    <div class="flex flex-wrap">
      <div class="w-full lg:px-0 px-6">
        <div class="flex items-center justify-center">
          <h2
            class="
              text-light-warm-white
              md:text-banner-secondary-font
              text-2xl
              mierb-font
              mr-5
            "
          >
            GenTwo Pro
          </h2>
          <span
            class="rounded-full bg-white text-sm text-teal mierb-font px-4 py-1"
            >Coming soon</span
          >
        </div>
      </div>
      <div class="w-full lg:w-4/6 md:text-center my-6 lg:px-0 px-6 mx-auto">
        <h1
          class="
            cambon-font-title
            text-white
            md:text-5xl
            text-banner-secondary-font
            md:leading-snug
          "
        >
          Your online portal to oversee all issuance platforms, 
          products and workflows
        </h1>
      </div>
      <div class="w-full md:text-center lg:px-0 px-6">
        <h2
          class="
            text-light-warm-white
            md:text-banner-secondary-font
            text-2xl
            mierb-font
            mr-5
          "
        >
          Upgrade your investment strategy with GenTwo Pro
        </h2>
      </div>
      <div class="w-full h-442px mt-6 coming-soon-img"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class ComingSoonSection extends Vue {}
</script>

<style scoped lang="scss">
.coming-soon-bg {
  background: #2e3f43;
  .coming-soon-img {
    background: url("/img/solutions-page/coming-soon-section/coming-soon-banner.png")
      left / cover no-repeat;
  }
}
</style>
