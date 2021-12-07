<template>
  <section
    class="
      helping-bg
      rounded-25
      outline-none
      focus:outline-none
      lg:py-16
      py-8
      lg:px-0
      px-6
      overflow-hidden
    "
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="-200"
  >
    <div
      class="flex lg:flex-nowrap flex-wrap xl:w-10/12 lg:w-10/12 w-full mx-auto"
    >
      <div class="w-56 md:mx-0 mx-auto lg:order-first order-last">
        <h1
          class="
            heading-text
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
          3
        </h1>
        
      </div>
      <div class="lg:flex-1 w-full lg:mb-0 mb-10">
        <h2
          class="
            sub-heading
            cambon-font-title
            lg:text-64px
            text-5xl
            2xl:mb-12
            lg:mb-12
            md:mb-10
            mb-5
          "
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-delay="400"
          data-aos-offset="-200"
        >
        How
        </h2>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="800"
          data-aos-offset="-200"
        >
          <p class="mierb-font md:text-3xl text-lg text-teal">
            We provide you the infrastructure for servicing to turn any investment idea/strategy into a bankable security for easy and transparent investing. 
          </p>
          
        </div>
        
      </div>
      <img
          class="md:block hidden"
          src="/img/solutions-page/helping-section/platform-overview.svg"
          alt=""
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="400"
          data-aos-offset="-200"
        />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class HelpingSection extends Vue {}
</script>

<style scoped lang="scss">
.helping-bg {
  background: #ebf2f4;
  .heading-text {
    // color: #ebf2f4;
    background: linear-gradient(
      to left,
      rgba(109, 147, 161, 1),
      rgba(14, 100, 124, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 100%;
  }

  .sub-heading {
    background: linear-gradient(
      to left,
      rgba(109, 147, 161, 1),
      rgba(14, 100, 124, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 120%;
  }

  .advisor-bg {
    background: linear-gradient(
      325.79deg,
      rgba(124, 152, 145, 0.837) -41.12%,
      rgba(37, 70, 79, 0.9) 106.03%
    );

    .advisor-text {
      background: linear-gradient(
        150deg,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.62),
        rgba(255, 255, 255, 0)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 120%;
    }
    .advisor-caption {
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0.4)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 120%;
    }
  }
}
</style>
