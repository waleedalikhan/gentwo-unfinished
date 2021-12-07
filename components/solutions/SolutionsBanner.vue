<template>
  <section
    class="relative w-full h-full overflow-hidden  rounded-25 rounded-bl-random xl:min-h-682px banner"
  >
    <div
      class="relative z-30 flex flex-wrap items-center justify-center w-full h-full py-8  xl:min-h-682px rounded-b-25 hero-bg xl:py-0"
    >
      <div class="relative z-20 flex flex-wrap py-10">
        <div class="w-full mx-auto text-center lg:w-2/3">
          <h3
            class="text-2xl  lg:text-banner-secondary-font text-offWhite mierb-font banner-text-one"
          >
            GenTwo Solutions
          </h3>
        </div>
        <div class="w-full mx-auto mt-4 text-center lg:w-2/3 md:w-3/4 sm:mb-5">
          <h1
            class="pb-4 text-5xl  cambon-font-title xl:text-banner-font text-gradient banner-text-two"
          >
            We disrupt the securitization business
          </h1>
        </div>
        <div class="w-full mx-auto mb-6 text-center lg:w-2/3">
          <h3
            class="text-lg  lg:text-banner-secondary-font text-offWhite mierb-font banner-text-three lg:leading-normal"
          >
            You focus on the performance, 
            <br class="hidden lg:block" />
            we take care of everything else.
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import gsap from "gsap";

@Component({})
export default class SolutionsBanner extends Vue {
  mounted() {
    gsap.from(".banner", {
      height: "1000px",
      y: 100,
      duration: 1,
      ease: "ease.out"
    });

    gsap.from(".banner-text-one", {
      opacity: 0,
      y: -200,
      duration: 1,
      ease: "ease.out",
      delay: 0.2
    });

    gsap.from(".banner-text-two", {
      opacity: 0,
      scale: 0.7,
      duration: 1,
      ease: "ease.out",
      delay: 0.4
    });

    gsap.from(".banner-text-three", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "ease.out",
      delay: 0.6
    });
  }
}
</script>

<style lang="scss" scoped>

.hero-bg {
  background: url("/img/solutions-page/g2-iso2.svg") center / cover no-repeat, 
    linear-gradient(
        284.87deg,
        rgba(69, 75, 72, 1) 0%,
        rgba(29, 32, 33,1) 100%
      );
}

.text-gradient {
  background: linear-gradient(
    to left,
    rgba(151, 136, 104, 1),
    rgba(215, 205, 183, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 100%;
}
</style>
