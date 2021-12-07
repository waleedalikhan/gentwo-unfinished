<template>
  <section class="my-6">
    <div class="flex-wrap justify-between hidden my-6 lg:flex">
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
          Contact
        </button>
      </div>
    </div>
    <div
      class="
        about-contact-bg
        lg:h-500px
        h-full
        flex
        items-center
        xl:px-16
        lg:px-6
        px-4
        py-6
        rounded-25
      "
    >
      <div class="flex flex-wrap items-center">
        <div class="lg:w-1/2 w-full lg:mb-0 mb-6">
          <p
            class="
              mierb-font
              text-offWhite
              md:text-banner-secondary-font
              text-xl
              contact-caption
            "
          >
            Contact us
          </p>
          <h1
            class="
              cambon-font-title
              md:text-64px
              text-5xl text-gradient
              contact-title
            "
          >
            Ready to get <br />
            started?
          </h1>
        </div>
        <div class="lg:w-1/2 w-full">
          <p class="mierb-font text-warm-white md:text-2xl contact-text">
            Have you visited our
            <a href="#" class="underline">resource center?</a> Learn more about
            our offering by browsing the
            <a href="#" class="underline">Use cases</a>, or finding inspiration
            in <a href="#" class="underline">Product Spotlights.</a>
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
export default class AboutContactBanner extends Vue {
  mounted() {
    gsap.from(".about-contact-bg", {
      height: "1200px",
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "ease.out",
    });
    gsap.from(".contact-caption", {
      y: 200,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "ease.out",
    });
    gsap.from(".contact-title", {
      y: 200,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: "ease.out",
    });
    gsap.from(".contact-text", {
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
.about-contact-bg {
  background: linear-gradient(
      82.4deg,
      #25464f 13%,
      rgba(37, 70, 79, 0.41) 45.5%,
      rgba(37, 70, 79, 0.15) 67.45%,
      rgba(37, 70, 79, 0.13) 90.73%,
      rgba(37, 70, 79, 0.18) 99.27%
    ),
    rgba(37, 70, 79, 0.65);
}

.text-gradient {
  background: linear-gradient(
    to right,
    rgba(194, 218, 222, 1),
    rgba(255, 255, 255, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
</style>
