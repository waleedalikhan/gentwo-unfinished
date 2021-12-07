<template>
  <section class="pb-6 mb-6">
    <div class="items-center justify-between hidden mb-6 lg:flex">
      <div>
        <h2 class="text-banner-secondary-font text-concrete mierb-font">Ecosystem</h2>
      </div>
      <div>
        <button
          class="px-4 py-1 text-white rounded-full outline-none  bg-concrete mierb-font focus:outline-none"
        >
          Overview
        </button>
        <button
          class="px-4 py-1 mx-4 uppercase bg-transparent rounded-full outline-none  mierb-font focus:outline-none text-concrete"
        >
          assetrush
        </button>
        <nuxt-link to="/ecosystem/partners">
        <button
          class="px-4 py-1 bg-transparent rounded-full outline-none  mierb-font focus:outline-none text-concrete"
        >
          Partner Network
        </button>
        </nuxt-link>
      </div>
    </div>
    <div
      class="flex flex-wrap items-center justify-center h-full px-4 py-8 bg-green-600  lg:min-h-682px rounded-25 banner xl:px-0 lg:py-0"
    >
      <div class="w-full text-center">
        <p
          class="text-xl  md:text-banner-secondary-font text-ecosystem-heading mierb-font banner-text-one"
        >
          Ecosystem
        </p>
        <h1
          class="pb-3 my-5 text-5xl  lg:text-banner-font banner-heading cambon-font-title banner-text-two lg:block"
        >
          Where it all comes together
        </h1>
        <p
          class="text-2xl  md:text-banner-secondary-font px-10 lg:px-32 text-ecosystem-heading mierb-font banner-text-three lg:block"
        >
          With a growing ecosystem of trusted partners, we are fosteringcollaboration and enable synergies that were previously impossible.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import gsap from "gsap";

@Component({})
export default class EcoSystemBanner extends Vue {
  mounted() {
    gsap.from(".banner", {
      y: 100,
      height: "1500px",
      duration: 1,
      ease: "ease.out"
    });
    gsap.from(".banner-text-one", {
      y: -400,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "ease.out"
    });
    gsap.from(".banner-text-two", {
      y: 200,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "ease.out"
    });
    gsap.from(".banner-text-three", {
      y: 200,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: "ease.out"
    });
  }
}
</script>

<style scoped lang="scss">
.banner {
  background: linear-gradient(
      103.01deg,
      rgba(33, 63, 71, 0.97) 37.15%,
      rgba(36, 71, 81, 0.79) 61.66%,
      #43798d 91.63%
    ),
    url("/img/ecosystem-page/ecosystem-banner.jpg") center / cover no-repeat;
  .banner-heading {
    background: linear-gradient(
      to right,
      rgba(77, 135, 144, 1),
      rgba(161, 194, 203, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
