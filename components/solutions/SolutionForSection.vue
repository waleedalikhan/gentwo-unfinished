<template>
  <section
    class="solution-bg rounded-25 xl:px-0 px-5 lg:py-16 py-8 overflow-hidden"
    data-aos="fade-up"
    data-aos-duration="700"
    data-aos-offset="-200"
  >
    <div class="flex lg:flex-nowrap flex-wrap xl:w-10/12 lg:w-10/12 w-full mx-auto">
      <div class="w-56 md:mx-0 mx-auto lg:order-first order-last">
        <h1
          class="
            heading
            cambon-font-title
            text-192px
            lg:block
            hidden
            mb-20
            text-center
          "
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="400"
          data-aos-offset="-200"
        >
          2
        </h1>
        
      </div>
      <div class="lg:flex-1 w-full lg:mb-0 mb-10">
        <h2
          class="text-gradient cambon-font-title lg:text-64px text-5xl"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="200"
          data-aos-offset="-200"
        >
          To Whom
        </h2>
        <p
          class="
            text-teal
            lg:text-banner-secondary-font
            lg:leading-tight
            text-lg
            mierb-font
            lg:mt-20
            mb-12"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="400"
          data-aos-offset="-200"
        >
          All financial intermediaries globally.
        </p>
        <button
          class="
            bg-pistachio
            rounded-xl
            sm:px-6
            px-4
            py-3
            text-lg text-white
            mierb-font
            md:mx-0
            mx-auto
          "
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="600"
          data-aos-offset="-200"
        >
          See testimonials and case studies
        </button>
      </div>
      <div class="lg:w-1/3">
        
        <img
          class="md:block hidden"
          src="/img/solutions-page/solution-for-section/tooltips.png"
          alt=""
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
          data-aos-offset="-200"
        />
        <img
          class="xl:hidden block"
          src="/img/solutions-page/solution-for-section/tooltips-mob.png"
          alt=""
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
          data-aos-offset="-200"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class SolutionForSection extends Vue {}
</script>

<style scoped lang="scss">
.solution-bg {
  background: rgba(232, 237, 236, 1);
  .text-gradient {
    background: linear-gradient(
      to top,
      rgba(91, 122, 114, 0.93),
      rgba(54, 99, 88, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 100%;
  }

  .heading {
    font-feature-settings: "case" on;
    color: rgba(232, 237, 236, 1);
    background: linear-gradient(
      to top,
      rgba(91, 122, 114, 0.93),
      rgba(54, 99, 88, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 80%;
  }
}
</style>
