<template>
  <section class="my-6">
    <div class="flex-wrap justify-between hidden mb-6 lg:flex">
      <div>
        <h1 class="text-banner-secondary-font text-concrete mierb-font">
          Company
        </h1>
      </div>
      <div class="flex items-center">
        <nuxt-link to="/company">
          <button
            class="
              px-4
              py-1
              mr-5
              text-concrete
              rounded-full
              outline-none
              focus:outline-none
              bg-transparent
              mierb-font
            "
          >
            About Us
          </button>
        </nuxt-link>
        <button
          class="
            px-4
            py-1
            mr-5
            rounded-full
            outline-none
            focus:outline-none
            bg-concrete
            text-white
            mierb-font
          "
        >
          Team
        </button>
        <nuxt-link to="/company/about-careers">
          <button
            class="
              px-4
              py-1
              mr-5
              rounded-full
              outline-none
              focus:outline-none
              text-concrete
              mierb-font
            "
          >
            Careers
          </button>
        </nuxt-link>
        <nuxt-link to="/company/about-contact">
          <button
            class="
              px-4
              py-1
              mr-5
              rounded-full
              outline-none
              focus:outline-none
              bg-transparent
              text-concrete
              mierb-font
            "
          >
            Contact
          </button>
        </nuxt-link>
      </div>
    </div>
    <div
      class="
        flex flex-wrap
        lg:h-500px
        h-full
        rounded-25
        team-banner
        items-center
        xl:px-16
        lg:px-10
        md:px-6
        px-4
        lg:py-0
        py-6
      "
    >
      <div class="lg:w-1/2 w-full lg:mb-0 mb-6">
        <p
          class="
            mierb-font
            font-semibold
            text-offWhite
            md:text-banner-secondary-font
            text-2xl
            mb-5
            team-caption
          "
        >
          About Us
        </p>
        <h1 class="cambon-font-title text-gradient md:text-64px text-4xl team-title">
          Who we are
        </h1>
      </div>
      <div class="lg:w-1/2 w-full">
        <p class="mierb-font md:text-2xl text-lg text-warm-white team-text">
          GenTwo unites decades of experience to assit clients and business
          partners with multiple interactive services into the huge untapped
          market with a recipe for success. Our unique methods have been tried
          and tested by major experts, analysts and investment banks, approving
          our successful business model. <br />
          <br />
          Our founders gathered the most qualified financial experts to benefit
          our clients and business partners.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import gsap from "gsap";

@Component({})
export default class AboutTeamBanner extends Vue {
  mounted() {
    gsap.from(".team-banner", {
      height: "1200px",
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "ease.out",
    });
    gsap.from(".team-caption", {
      y: 200,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "ease.out",
    });
    gsap.from(".team-title", {
      y: 200,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "ease.out",
    });
    gsap.from(".team-text", {
      y: 200,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: "ease.out",
    });
  }
}
</script>

<style scoped lang="scss">
.team-banner {
  background: linear-gradient(
      70.21deg,
      #25464f 32.29%,
      rgba(37, 70, 79, 0.85) 52.95%
    ),
    url("/img/about-page/about-team-bg.png"), #25464f;
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
