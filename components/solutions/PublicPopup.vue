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
      <div
        class="2xl:container mx-auto flex flex-wrap max-h-screen overflow-auto popup-scroll"
      >
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
                text-2xl text-bronze
              "
            >
              Public Markets
            </h2>
          </div>
          <div class="w-full">
            <h1
              class="
                popup__public_gradient
                cambon-font
                lg:text-64px
                md:text-5xl
                text-3xl
                font-semibold
              "
            >
              Your white-labeled issuance platform for all investment strategies
            </h1>
          </div>
          <div class="w-full">
            <p class="mierb-font md:text-2xl text-lg text-bronze-secondary">
              GenTwo establishes issuance platforms for institutional clients.
              Banks, Exchanges, Brokers, Asset Managers, Family Offices and all
              kinds of financial intermediaries rely on our extensive experience
              and B2B services, to create branded infrastructure to securitize a
              full range of strucuted products with Swiss ISINs and without bank
              issuer risk.
            </p>
          </div>
          <div class="w-full">
            <p
              class="
                popup__public_gradient
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
          <template v-for="strategy in publicStrategies">
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
                      text-bronze-secondary
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

  public publicStrategies: IGenTwoStrategies[] = [
    {
      id: 1,
      text: "Equity",
      img: "/img/solutions-page/strategies/public/strategy-1.svg",
    },
    {
      id: 2,
      text: "Bonds",
      img: "/img/solutions-page/strategies/public/strategy-2.svg",
    },
    {
      id: 3,
      text: "Commodities",
      img: "/img/solutions-page/strategies/public/strategy-3.svg",
    },
    {
      id: 4,
      text: "Foreign Exchange",
      img: "/img/solutions-page/strategies/public/strategy-4.svg",
    },
    {
      id: 5,
      text: "Structured Products ",
      img: "/img/solutions-page/strategies/public/strategy-5.svg",
    },
  ];

  closePopup() {
    this.$emit("onClose");
  }
}
</script>

<style scoped lang="scss">
::v-deep .vodal-dialog {
  background: linear-gradient(301deg, #1e2021 0.02%, #313434 100%);
  border-radius: 25px !important;
  display: flex !important;
  align-items: center !important;
  max-width: 1536px;
  overflow: hidden !important;
  margin: 0 auto !important;
}
</style>
