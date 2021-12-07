<template>
  <div>
    <SolutionsBanner class="my-6" />
    <PlatformSection @buttonClicked="toggleWorkPopup" />
    <SolutionForSection class="my-6" />
    <HelpingSection />
    <InvestmentUniverseSection class="my-6" @cardClicked="togglePopup" />
    <InvestmentIdeasSection class="mb-6" />
    <FeatureSection class="mb-6" />
    <ComingSoonSection class="my-6" />
    <InnovatorSection />
    <Vodal
      :show="showHowItWorksPopup"
      animation="slideUp"
      @hide="showHowItWorksPopup = false"
      :duration="800"
      measure="%"
      :height="100"
      :width="90"
    >
      <img
        src="/img/solutions-page/how-it-works.png"
        alt=""
        class="w-full h-full md:object-contain object-fill"
      />
    </Vodal>
    <PublicPopup
      :showPopup="showPublicMarkets"
      @onClose="showPublicMarkets = false"
    />
    <PrivatePopup
      :showPopup="showPrivateMarkets"
      @onClose="showPrivateMarkets = false"
    />
    <DigitalPopup :showPopup="showGenTwoDigital" @onClose="showGenTwoDigital = false"/>
    </VueTailwindModal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// @ts-ignore
import Vodal from "vodal";

@Component({
  components: {
    Vodal,
  },
})
export default class Solutions extends Vue {
  public showHowItWorksPopup: boolean = false;
  public showPublicMarkets: boolean = false;
  public showPrivateMarkets: boolean = false;
  public showGenTwoDigital: boolean = false;

  public togglePopup(value: string) {
    switch (value.toLocaleLowerCase()) {
      case "more about public markets":
        this.showPublicMarkets = true;
        break;
      case "more about private markets":
        this.showPrivateMarkets = true;
        break;
      case "more about gentwo digital":
        this.showGenTwoDigital = true;
        break;
      default:
        null;
        break;
    }
  }

  public toggleWorkPopup() {
    this.showHowItWorksPopup = true;
  }
}
</script>

<style lang="scss">
.cross-white {
  color: #fff !important;
  font-size: 32px !important;
  padding-top: 0 !important;
}
.popup {
  &__howItWorks {
    border-radius: 25px !important;
  }
  &__public {
    background: linear-gradient(301deg, #1e2021 0.02%, #313434 100%);
    border-radius: 25px !important;
    width: 100% !important;
    max-width: 90% !important;
    &_gradient {
      background: linear-gradient(to left, #978868, #bfb294);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 125%;
    }
  }
  &__private {
    background: linear-gradient(300.69deg, #1d2021 0.02%, #38403f 100%);
    border-radius: 25px !important;
    width: 100% !important;
    max-width: 90% !important;
    &_gradient {
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.9),
        rgba(124, 152, 145, 1)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 125%;
    }
  }
  &__digital {
    background: linear-gradient(126.89deg, #24433c 0%, #04181f 100%);
    border-radius: 25px !important;
    width: 100% !important;
    max-width: 90% !important;
    &_gradient {
      background: linear-gradient(to right, rgba(255, 255, 255, 0.6), #419580);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 125%;
    }
  }
}
</style>
