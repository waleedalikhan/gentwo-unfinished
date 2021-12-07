<template>
  <section
    class="flex items-center justify-center px-4 py-10 my-6 overflow-hidden  section-gradient rounded-25 lg:py-20 lg:px-0 md:px-12 second-section"
  >
    <div
      class="hidden  bg-light-teal bg-light-teal-lighter bg-medium-teal bg-light-secondary-body"
    ></div>
    <div class="flex flex-wrap">
      <div class="flex flex-wrap w-full mx-auto lg:w-2/3">
        <div class="w-full mb-10 xl:mb-16">
          <p
            class="text-xl  mierb-font text-gradient-white lg:text-banner-secondary-font md:text-2xl"
          >
            Our one overarching objective is to make all assets accessible and
            help our clients to become true innovators.
          </p>
        </div>
        <div class="flex flex-wrap items-end w-full">
          <div
            class="
              xl:w-35%
              w-full
              xl:h-403px
              xl:mb-0
              mb-10
              flex flex-col
              justify-center
            "
          >
            
            <h1
              class="my-8 text-3xl leading-tight  cambon-font-title lg:text-5xl text-gradient-white"
            >
              Disruptive <br />
              Securitization. <br />
              Creating access <br class="hidden xl:block" />
              to all <br class="block xl:hidden" />
              assets.
            </h1>
            <div>
              <button
                class="px-8 py-3 text-lg text-white  btn-gradient rounded-xl mierb-font"
              >
                Learn more about us
              </button>
            </div>
          </div>
          <div class="xl:w-65% w-full">
            <p class="text-lg text-gradient-white mierb-font md:text-2xl"> We are serving Asset Managers, Family Offices, Banks, Brokers , VCs, Private Equity Specialists or Project Finance worldwide.</p>
            <p class="text-lg text-gradient-white mierb-font md:text-2xl"> We combine decades of industry experience with the latest advances in technology to help our clients thrive in the digital age.</p>
            <p class="text-lg text-gradient-white mierb-font md:text-2xl"> We establish white-labelled cellular issuance platforms with no bank issuer risk. </p>
            <p class="text-lg text-gradient-white mierb-font md:text-2xl"> This allows to turn quickly all bankable and non-bankable assets from public, private or digital markets off-balance sheet and into Swiss securities with Swiss ISINs.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import gsap, { Power3 } from "gsap";

@Component({})
export default class WhatWeDoSection extends Vue {
  mounted() {
    gsap.from(".second-section", {
      opacity: 0,
      height: "1000px",
      y: 100,
      ease: Power3.easeOut,
      duration: 1,
      delay: 1.3
    });
  }
}
</script>

<style scoped lang="scss">
.text-gradient-white {
  background: linear-gradient(
    to right,
    rgba(218, 214, 205, 1),
    rgba(255, 255, 255, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.section-gradient {
  position: relative;
  background: radial-gradient(
      98.07% 408.85% at 97.95% 97.56%,
      rgba(191, 152, 68, 0.49) 0%,
      rgba(51, 44, 30, 0.640882) 54.72%,
      rgba(43, 38, 27, 0.65) 100%
    ),
    url("~assets/img/hero-home.jpg") center / cover no-repeat;

  .btn-gradient {
    background: linear-gradient(
        273.53deg,
        rgba(255, 255, 255, 0.18) 27.77%,
        rgba(255, 255, 255, 0) 94.7%
      ),
      #9f906f;
    backdrop-filter: blur(12px);
  }
}
</style>
