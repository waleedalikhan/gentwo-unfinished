<template>
  <section
    class="
      platform-bg
      xl:py-0
      py-10
      rounded-25
      xl:px-0
      px-5
      platform
      overflow-hidden
    "
  >
    <div class="flex flex-wrap xl:w-5/6 lg:w-11/12 w-full ml-auto">
      <div class="lg:w-1/2 w-full flex items-start xl:mb-0 mb-6 xl:pb-20">
        <div class="lg:block hidden">
          <h1 class="cambon-font-title text-192px heading platform-heading">
            1
          </h1>
        </div>
        <div class="lg:mt-24 lg:ml-10">
          <h2
            class="
              lg:text-64px
              text-5xl text-gradient
              cambon-font-title
              lg:mb-12
              mb-5
              platform-heading-2
            "
          >
            What
          </h2>
          <p
            class="
              mierb-font
              text-gradient text-2xl
              lg:leading-tight
              mb-10
              platform-text
            "
          >
            A dedicated, segregated, white-label issuance platform for
            securitization of all assets.
          </p>
          <p
            class="
              mierb-font
              text-gradient text-2xl
              lg:leading-tight
              mb-10
              platform-text
            "
          >
            Off-balance sheet issuance platform with no bank issuer risk.
          </p>
          <button
            class="
              bg-transparent
              outline-none
              focus:outline-none
              px-6
              py-4
              flex
              items-center
              border border-medium-bronze
              rounded-full
              md:mx-0
              mx-auto
              platform-btn
            "
            @click="emitClickEvent"
          >
            <span>
              <span
                class="h-0.5 bg-medium-bronze block transform rotate-90 w-4"
              ></span>
              <span class="h-0.5 bg-medium-bronze block w-4 -mt-0.5"></span>
            </span>
            <span class="text-medium-bronze mierb-font text-lg ml-4"
              >See how it works</span
            >
          </button>
        </div>
      </div>
      <div class="lg:w-1/2 w-full platform-image md:block hidden">
        <div class="platform-img lg:h-full md:h-96 h-64"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import gsap, { Power3 } from "gsap";

@Component({})
export default class PlatformSection extends Vue {
  public emitClickEvent() {
    // @ts-ignore
    this.$emit("buttonClicked");
  }
  mounted() {
    //   gsap.from(".platform", {
    //     height: "1500px",
    //     y: 200,
    //     ease: Power3.easeOut,
    //     opacity: 0,
    //     duration: 1,
    //     delay: 1,
    //   });
    //   gsap.from(".platform-heading", {
    //     x: -200,
    //     opacity: 0,
    //     ease: Power3.easeOut,
    //     duration: 1.2,
    //     delay: 1.2,
    //   });
    //   gsap.from(".platform-heading-2", {
    //     y: -200,
    //     opacity: 0,
    //     ease: Power3.easeOut,
    //     duration: 1.4,
    //     delay: 1.4,
    //   });
    //   gsap.from(".platform-text", {
    //     y: 200,
    //     opacity: 0,
    //     ease: Power3.easeOut,
    //     duration: 1.6,
    //     delay: 1.6,
    //   });
    //   gsap.from(".platform-btn", {
    //     x: -300,
    //     opacity: 0,
    //     ease: Power3.easeOut,
    //     duration: 1.8,
    //     delay: 1.8,
    //   });
    //   gsap.from(".platform-image", {
    //     x: 300,
    //     opacity: 0,
    //     ease: Power3.easeOut,
    //     duration: 2,
    //     delay: 2,
    //   });
  }
}
</script>

<style scoped lang="scss">
.platform-bg {
  background: linear-gradient(
      275.53deg,
      rgba(255, 255, 255, 0.15) 28.03%,
      rgba(255, 255, 255, 0) 80.38%
    ),
    #ede3ce;

  .text-gradient {
    background: linear-gradient(
      to left,
      rgba(142, 130, 103, 1),
      rgba(51, 54, 54, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .heading {
    font-feature-settings: "case" on;
    background: linear-gradient(
      to left,
      rgba(142, 130, 103, 1),
      rgba(51, 54, 54, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .platform-img {
    background: url("/img/solutions-page/platform-section/platform-img.svg")
      center / contain no-repeat;
    background-blend-mode: multiply;
  }
}
</style>
