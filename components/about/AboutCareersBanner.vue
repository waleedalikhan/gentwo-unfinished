<template>
  <section>
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
        <button
          class="
            px-4
            py-1
            mr-5
            rounded-full
            outline-none
            focus:outline-none
            text-white
            bg-concrete
            mierb-font
          "
        >
          Careers
        </button>
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
        lg:h-500px
        h-full
        rounded-25
        lg:px-16
        md:px-6
        px-4
        flex
        career-banner
        items-center
        lg:py-0 py-6
      "
    >
      <div class="flex flex-wrap items-center">
        <div class="lg:w-1/2 w-full lg:mb-0 mb-5">
          <p
            class="
              mierb-font
              md:text-banner-secondary-font
              text-2xl
              text-offWhite
              banner-caption
              mb-5
            "
          >
            Work with us
          </p>
          <h1 class="text-gradient md:text-64px text-2xl cambon-font-title banner-heading md:pr-10">
            Join us and shape the future of financial markets
          </h1>
        </div>
        <div class="lg:w-1/2 w-full">
          <p class="mierb-font md:text-2xl text-lg text-warm-white banner-text">
            Do you have an exceptional level of motivation and entrepreneurial
            spirit? We would like to meet you. We are looking for our next team
            members to join our fast growing team in Zurich. <br />
            <br />
            Please send us your application to
            <a href="#" class="cursor-pointer underline">recruiting@g2fp.com</a>
            or contact us on
            <a href="#" class="cursor-pointer underline">LinkedIn</a>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import gsap from 'gsap';

@Component({})
export default class AboutCareersBanner extends Vue {
  mounted() {
    gsap.from(".career-banner", {
      height: '1200px',
      y: 200,
      opacity: 0,
      duration: 1,
      ease: 'ease.out'
    });
    gsap.from(".banner-caption", {
      y: 200,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: 'ease.out'
    });
    gsap.from(".banner-heading", {
      y: 200,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: 'ease.out'
    });
    gsap.from(".banner-text", {
      y: 200,
      opacity: 0,
      duration: 1,
      delay: 0.6,
      ease: 'ease.out'
    });
  }
}
</script>

<style scoped lang="scss">
.career-banner {
  background: linear-gradient(
      82.4deg,
      #4f4225 13%,
      rgba(79, 66, 37, 0) 45.5%,
      rgba(79, 66, 37, 0.00640628) 67.45%,
      rgba(79, 66, 37, 0.15) 90.73%,
      rgba(79, 66, 37, 0.49) 99.27%
    ),
    #847658;
}
.text-gradient {
  background: linear-gradient(
    to right,
    rgba(222, 213, 194, 1),
    rgba(255, 255, 255, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%; 
}
</style>
