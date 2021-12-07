<template>
  <section
    class="
      relative
      w-full
      h-full
      overflow-hidden
      rounded-25 rounded-bl-random
      xl:min-h-602px
      banner
    "
  >
    <div
      class="
        relative
        z-30
        flex flex-wrap
        items-center
        justify-center
        w-full
        h-full
        px-4
        py-8
        xl:min-h-602px
        rounded-b-25
        hero-bg
        xl:px-0
        xl:py-0
      "
    >
      <div class="relative z-20 flex flex-wrap py-10">
        <div class="w-full mx-auto text-center lg:w-2/3">
          <h3
            class="
              text-lg
              lg:text-banner-secondary-font
              text-offWhite
              mierb-font
              banner-text-one
            "
          >
            Generation Two Securitization
          </h3>
        </div>
        <div class="w-full mx-auto mt-4 text-center lg:w-2/3 md:w-3/4 sm:mb-5">
          <h1
            class="
              pb-4
              text-5xl
              cambon-font-title
              lg:text-banner-font
              text-gradient
              banner-text-two
            "
          >
            All assets accessible, manageable & bankable
          </h1>
        </div>
        <div class="w-full mx-auto mb-6 text-center lg:w-2/3">
          <h3
            class="
              text-lg
              lg:text-banner-secondary-font
              text-offWhite
              mierb-font
              banner-text-three
            "
          >
            Your off-balance issuance platform with no bank issuer risk
          </h3>
        </div>
        <div class="flex justify-center w-full mx-auto mt-6 lg:w-2/3">
          <button
            class="
              flex flex-col
              items-center
              bg-transparent
              outline-none
              focus:outline-none
            "
            @click="emitClick"
          >
            <span
              class="
                flex
                items-center
                justify-center
                w-16
                h-16
                mb-2
                rounded-full
                bg-offWhite
              "
            >
              <PlayButton />
            </span>
            <span class="text-lg text-offWhite mierb-font"
              >Watch our video</span
            >
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import gsap from "gsap";
export default {
  name: "MainBanner",
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
      scale: 0.7,
      duration: 1,
      ease: "ease.out",
      delay: 0.4,
    });

    gsap.from(".banner-text-three", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "ease.out",
      delay: 0.6,
    });
  },
  methods: {
    emitClick() {
      // @ts-ignore
      this.$emit("playVideo")
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-bg {
  background: url("/img/home/g2-iso1.svg") center / cover no-repeat,
    linear-gradient(284.87deg, rgba(69, 75, 72, 1) 0%, rgba(29, 32, 33, 1) 100%);
}

.text-gradient {
  background: linear-gradient(
    to right,
    rgba(158, 141, 105, 1),
    rgba(205, 191, 161, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 100%;
}

// @media only screen and (max-width: 1280px) {
//   .hero-bg {
//     background:
//       url("/img/home/hero-home.png") center / cover no-repeat,
//       linear-gradient(
//         284.87deg,
//         rgba(69, 75, 72, 1) 0%,
//         rgba(29, 32, 33,1) 100%
//       );
//   }
// }
</style>
