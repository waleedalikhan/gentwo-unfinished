<template>
  <section class="pb-6 mb-6 my-0">
    <div class="items-center justify-between hidden mb-6 lg:flex">
      <div>
        <h2 class="text-banner-secondary-font text-concrete mierb-font">Ecosystem</h2>
      </div>
      <div>
        <nuxt-link to="/ecosystem">
          <button
            class="
              px-4
              py-1
              text-concrete
              rounded-full
              outline-none
              bg-transparent
              mierb-font
              focus:outline-none
            "
          >
            Overview
          </button>
        </nuxt-link>
        <button
          class="
            px-4
            py-1
            mx-4
            uppercase
            bg-transparent
            rounded-full
            outline-none
            mierb-font
            focus:outline-none
            text-concrete
          "
        >
          assetrush
        </button>
        <nuxt-link to="/ecosystem/partners">
          <button
            class="
              px-4
              py-1
              text-white
              rounded-full
              outline-none
              bg-concrete
              mierb-font
              focus:outline-none
            "
          >
            Partner Network
          </button>
        </nuxt-link>
      </div>
    </div>
    <div
      class="
        flex flex-wrap
        items-center
        justify-center
        lg:h-500px
        h-full
        px-4
        py-8
        rounded-25
        banner
        xl:px-0
        lg:py-0
      "
    >
      <div class="w-full flex flex-wrap xl:px-16 px-4 items-center">
        <div class="lg:w-1/2 w-full lg:mb-9 mb-6">
          <h1
            class="
              cambon-font-title
              md:text-64px
              text-banner-secondary-font text-gradient
              banner-heading
            "
          >
            Our clients and partners
          </h1>
        </div>
        <div class="lg:w-1/2 w-full">
          <p class="md:text-2xl text-lg text-warm-white mierb-font banner-text">
            Today more than 100 clients and partners are enjoying the benefits
            of GenTwo solutions.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import gsap from "gsap";

@Component({})
export default class EcoPartnerBanner extends Vue {
  mounted() {
    gsap.from(".banner", {
      height: "1200px",
      opacity: 0,
      y: 200,
      duration: 1,
      ease: "ease.out",
    });
    gsap.from(".banner-heading", {
      y: 200,
      duration: 1,
      delay: 0.3,
      opacity: 0,
      ease: "ease.out",
    });
    gsap.from(".banner-text", {
      y: 200,
      duration: 1,
      delay: 0.6,
      opacity: 0,
      ease: "ease.out",
    });
  }
}
</script>

<style scoped lang="scss">
.banner {
  background: linear-gradient(
      70.21deg,
      #25464f 32.29%,
      rgba(37, 70, 79, 0) 52.95%
    ),
    rgba(37, 70, 79, 0.9);
}
.text-gradient {
  background: linear-gradient(
    to right,
    rgba(194, 219, 222, 1),
    rgba(227, 223, 206, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
</style>
