<template>
  <div>
    <Vodal
      :show="showPopup"
      animation="slideUp"
      @hide="closePopup"
      className="bg-smoke-800"
      :duration="800"
      measure="%"
      :height="100"
      :width="90"
    >
      <div class="2xl:container mx-auto flex flex-wrap max-h-screen overflow-auto popup-scroll">
        <div
          class="
            xl:w-2/3
            lg:w-4/5
            w-full
            mx-auto
            text-center
            flex flex-wrap
            md:space-y-10
            space-y-6
          "
        >
          <div class="w-full mt-6">
            <h2
              class="
                mierb-font
                md:text-banner-secondary-font
                text-2xl text-digital
              "
            >
              GenTwo Digital
            </h2>
          </div>
          <div class="w-full">
            <h1
              class="
                popup__digital_gradient
                cambon-font
                lg:text-64px
                md:text-5xl
                text-3xl
                font-semibold
                mb-5
              "
            >
              Securitization of all digital assets
            </h1>
            <h2 class="popup__digital_gradient cambon-font md:text-3xl text-xl">
              Make all crypto and digital assets investable, manageable and
              bankable in a Swiss Security (Swiss ISIN)
            </h2>
          </div>
          <div class="w-full">
            <p class="mierb-font md:text-2xl text-lg text-digital-secondary">
              Access digital markets. <br />
              The crypto asset industry set out to challenge the traditional
              finance sector. Talent, ideas, and capital flocked to digital
              assets but for many investors, access remains a challenge. Seed
              capital has been earmarked for these new opportunities but the
              majority of funds remains trapped in the old system. Banks,
              institutional investors, and wealthy individuals are missing out.
              GenTwo Digital is the bridge between these two worlds.
            </p>
          </div>
          <div class="w-full">
            <p
              class="
                popup__digital_gradient
                cambon-font
                md:text-banner-secondary-font
                text-xl
                font-semibold
              "
            >
              Use GenTwo's solution for unrestricted strategies on
            </p>
          </div>
        </div>
        <div
          class="lg:w-11/12 w-full mx-auto flex flex-wrap justify-center mt-10"
        >
          <template v-for="strategy in digitalStrategies">
            <div
              :key="strategy.id"
              class="lg:w-1/3 md:w-1/2 w-full mb-6 px-2 flex"
            >
              <div
                class="
                  bg-light-white-lightest
                  backdrop-blur-md backdrop-filter
                  flex
                  justify-between
                  rounded-2xl
                  p-5
                  items-center
                  w-full
                "
              >
                <div>
                  <p
                    class="
                      md:text-banner-secondary-font
                      text-xl
                      cambon-font
                      text-light-pistachio
                      md:leading-tight
                    "
                  >
                    {{ strategy.text }}
                  </p>
                </div>
                <div>
                  <img :src="strategy.img" alt="" />
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </Vodal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
// @ts-ignore
import Vodal from "vodal";
import "vodal/common.css";
import "vodal/slide-up.css";
import { IGenTwoStrategies } from "~/utils/interfaces";

@Component({
  components: {
    Vodal,
  },
})
export default class PublicPopup extends Vue {
  @Prop({ default: false }) showPopup!: boolean;

  public digitalStrategies: IGenTwoStrategies[] = [
    {
      id: 1,
      text: "Cryptocurrencies",
      img: "/img/solutions-page/strategies/digital/strategy-1.svg",
    },
    {
      id: 2,
      text: "Tokens",
      img: "/img/solutions-page/strategies/digital/strategy-2.svg",
    },
    {
      id: 3,
      text: "Decentralized Finance (DeFi)",
      img: "/img/solutions-page/strategies/digital/strategy-3.svg",
    },
    {
      id: 4,
      text: "High-frequency trading",
      img: "/img/solutions-page/strategies/digital/strategy-4.svg",
    },
    {
      id: 5,
      text: "High-frequency trading",
      img: "/img/solutions-page/strategies/digital/strategy-5.svg",
    },
    {
      id: 6,
      text: "Crypto Mining",
      img: "/img/solutions-page/strategies/digital/strategy-6.svg",
    },
  ];

  closePopup() {
    this.$emit("onClose");
  }
}
</script>

<style scoped lang="scss">
::v-deep .vodal-dialog {
  background: linear-gradient(126.89deg, #24433c 0%, #04181f 100%);
  border-radius: 25px !important;
  padding: 30px !important;
  display: flex !important;
  align-items: center !important;
  max-width: 1536px;
  overflow: hidden !important;
}
</style>
