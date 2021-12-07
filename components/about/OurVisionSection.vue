<template>
  <section
    class="
      bg-our-vision-bg
      lg:pt-20
      lg:pb-10
      py-10
      lg:px-0
      px-6
      rounded-25
      mb-6
      vision-section
    "
  >
    <div class="flex flex-wrap lg:w-3/4 w-full mx-auto">
      <template v-for="text in ourVisionText">
        <div
          :key="text.id"
          class="flex flex-wrap w-full items-center mb-10 mb-5"
        >
          <div class="mr-4 mb-0 flex flex-row lg:w-2/6 w-full ">
            <p class="w-20 text-banner-font row-text cambon-font-title opacity-60">
              {{ text.id }}
            </p>
            <div class="lg:mb-0 mb-4 vision-title flex flex-col">
              <h3 class="mierb-font text-teal text-4xl">
                {{ text.titleSmall }}
              </h3>
              <h1 class="text-banner-secondary-font text-5xl cambon-font-title text-teal">
                {{ text.titleLarge }}
              </h1>
            </div>
          </div>

          <div class="lg:w-1/2 vision-text m-0">
            <h1
              :class="[
                text.isTextLarge
                  ? 'text-4xl row-text cambon-font-title'
                  : 'text-lg mierb-font text-teal',
              ]"
            >
              {{ text.description }}
            </h1>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { IOurVision } from "~/utils/interfaces";
import gsap, { Power3 } from "gsap";

@Component({})
export default class OurVisionSection extends Vue {
  public ourVisionText: IOurVision[] = [
    {
      id: 1,
      isTextLarge: true,
      titleSmall: "Our",
      titleLarge: "Vision",
      description:
        "To democratize securitization – To make investments accessible to everyone.",
    },
    {
      id: 2,
      isTextLarge: false,
      titleSmall: "Our",
      titleLarge: "Mission",
      description:
        "We securitize all bankable and non-bankable assets across an unrestricted public, private, and digital market investment universe. We service our clients by building issuance platforms connecting capital with innovative investments, thereby creating tomorrow’s marketplace. ",
    },
    {
      id: 3,
      isTextLarge: false,
      titleSmall: "Our",
      titleLarge: "Values",
      description:
        "Our core values of Diligence, Clarity & Synergy run through our product, our processes and every interaction with our clients.",
    },
    {
      id: 4,
      isTextLarge: false,
      titleSmall: "Our",
      titleLarge: "Story",
      description:
        "GenTwo was founded in February 2018 by Patrick Loepfe (Chairman) and Philippe A. Naegeli (CVO) and is a disruptive company in the securitization market. The Company provides securitization as a service to its B2B clients using a customized issuance platforms that allows them to securitize quickly all bankable and non-bankable assets with no bank issuer risk and with Swiss ISINs into Swiss securities.",
    },
  ];

  mounted() {
    gsap.from(".vision-section", {
      opacity: 0,
      ease: Power3.easeInOut,
      y: 100,
      duration: .8,
    });

    gsap.from(".vision-title", {
      y: 100,
      opacity: 0,
      ease: Power3.easeInOut,
      duration: .8,
      delay: 0.2,
    });
    gsap.from(".vision-text", {
      y: 100,
      opacity: 0,
      ease: Power3.easeInOut,
      duration: 0.8,
      delay: 0.4,
    });
  }
}
</script>

<style scoped lang="scss">
.vision-section {
  background: linear-gradient(
      53deg,
      rgba(236, 230, 217, 1) 0%,
      rgba(241, 242, 234, 1) 40%,
      rgba(204, 222, 213, .4) 70%,
      rgba(69, 130, 157, .3) 100%
    )
}
.row-text {
  background: linear-gradient(to right, #747a7a, #195362);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 100%;
}
.large-number {
    font-size: 80px;
    opacity: .6;
  }
</style>
