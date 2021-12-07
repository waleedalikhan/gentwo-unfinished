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
                text-2xl text-pistachio
              "
            >
              Private Markets
            </h2>
          </div>
          <div class="w-full">
            <h1
              class="
                popup__private_gradient
                cambon-font
                lg:text-64px
                md:text-5xl
                text-3xl
                font-semibold
              "
            >
              Turn any alternative asset into a conventional security
            </h1>
          </div>
          <div class="w-full">
            <p class="mierb-font md:text-2xl text-lg text-light-pistachio">
              GenTwo’s issuance platforms make it possible to access a
              theoretically unlimited world of imaginable assets. As all asset
              types can be securitized in GenTwo’s issuance platforms, we enable
              you to achieve a high-degree of portfolio diversification, in
              addition to risk diversification within an investment portfolio.
              Investment products in specific niche themes that were previously
              inaccessible due to investment volume restrictions are now
              economically interesting and accessible, even with lower
              investment volumes.
            </p>
          </div>
          <div class="w-full">
            <p
              class="
                popup__private_gradient
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
          <template v-for="strategy in privateStrategies">
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
export default class PrivatePopup extends Vue {
  @Prop({ default: false }) showPopup!: boolean;

  public privateStrategies: IGenTwoStrategies[] = [
    {
      id: 1,
      text: "Private Equity",
      img: "/img/solutions-page/strategies/private/strategy-1.svg",
    },
    {
      id: 2,
      text: "Private Debt",
      img: "/img/solutions-page/strategies/private/strategy-2.svg",
    },
    {
      id: 3,
      text: "Infrastructure",
      img: "/img/solutions-page/strategies/private/strategy-3.svg",
    },
    {
      id: 4,
      text: "Real Estate",
      img: "/img/solutions-page/strategies/private/strategy-4.svg",
    },
    {
      id: 5,
      text: "Collectables",
      img: "/img/solutions-page/strategies/private/strategy-5.svg",
    },
    {
      id: 6,
      text: "Commodities",
      img: "/img/solutions-page/strategies/private/strategy-6.svg",
    },
    {
      id: 7,
      text: "Trade Finance",
      img: "/img/solutions-page/strategies/private/strategy-7.svg",
    },
  ];

  closePopup() {
    this.$emit("onClose");
  }
}
</script>

<style scoped lang="scss">
::v-deep .vodal-dialog {
  background: linear-gradient(300.69deg, #1d2021 0.02%, #38403f 100%);
  border-radius: 25px !important;
  padding: 30px !important;
  display: flex !important;
  align-items: center !important;
  max-width: 1536px;
  overflow: hidden !important;
}
</style>
