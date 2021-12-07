<template>
  <section class="my-6">
    <div class="flex-wrap justify-between hidden my-6 lg:flex">
      <div>
        <h1 class="text-banner-secondary-font text-concrete mierb-font">
          Company
        </h1>
      </div>
      <div class="flex items-center">
        <button
          class="
            px-4
            py-1
            mr-5
            text-white
            rounded-full
            outline-none
            focus:outline-none
            bg-concrete
            mierb-font
          "
        >
          About Us
        </button>
        <nuxt-link to="/company/about-team">
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
            Team
          </button>
        </nuxt-link>
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
        flex
        items-center
        h-full
        px-4
        py-10
        banner
        xl:min-h-602px
        lg:px-0
        md:px-10
        about-bg
        rounded-25
      "
    >
      <div class="flex flex-wrap w-full mx-auto lg:w-2/3">
        <div class="w-full mb-5 text-center banner-text-one">
          <p class="mierb-font text-teal text-banner-secondary-font">
            About Us
          </p>
        </div>
        <div class="w-full text-center banner-text-two">
          <h1 class="text-5xl cambon-font-title lg:text-banner-font about-text">
            We make all assets <br class="md:hidden" />
            accessible and help our clients become true innovators.
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import gsap from "gsap";

@Component({})
export default class AboutBanner extends Vue {
  mounted() {
    gsap.from(".banner", {
      height: "1000px",
      y: 100,
      duration: 1,
      ease: "ease.out",
    });

    gsap.from(".banner-text-one", {
      opacity: 0,
      y: -200,
      duration: 1,
      ease: "ease.out",
      delay: 0.2,
    });

    gsap.from(".banner-text-two", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "ease.out",
      delay: 0.6,
    });
  }
}
</script>

<style scoped lang="scss">
.about-bg {
  background: linear-gradient(
      76.93deg,
      rgba(236, 230, 217, 0.73) 12.27%,
      rgba(241, 242, 234, 0.93) 43.69%,
      rgba(204, 222, 213, 0.67) 71.73%,
      rgba(69, 130, 157, 0.57) 97.96%
    ),
    url("/img/about-page/about-banner.jpg") center / cover no-repeat;
}

.about-text {
  background: linear-gradient(to right, #747a7a, #195362);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 100%;
}
</style>
