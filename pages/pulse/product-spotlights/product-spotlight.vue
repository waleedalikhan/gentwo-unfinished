<template>
  <div>
    <SpotlightAndCase bannerBg="bg-spotlight-bg" bannerText="How Barry Films has developed an investable film strategy"/>
    <CLientSection class="mb-6" />
    <DetailsSection :isCentered="false" class="mb-6">
      <div class="flex flex-wrap lg:w-3/4 mx-auto justify-between">
        <div class="lg:w-1/4 w-full lg:mb-0 mb-5">
          <h1
            class="
              mierb-font
              text-teal
              md:text-banner-secondary-font
              md:leading-normal
              text-2xl
            "
          >
            The challenge
          </h1>
        </div>
        <div class="lg:w-2/3 w-full">
          <h1
            class="
              cambon-font-title
              text-gradient
              md:text-banner-secondary-font
              text-2xl
            "
          >
            Create an investable asset to seize the opportunity in content
            creation
          </h1>
          <p class="mierb-font text-dark-grey text-lg my-5">
            Thanks to the streamers (Netflix, HBO, Disney+), there is a huge
            demand for video content.
          </p>
          <p class="mierb-font text-dark-grey text-lg mb-10">
            Barry Films wanted to capitalize on this opportunity. They decided
            to devise an investment vehicle that would allow them to gain
            liquidity, and give investors the chance to invest in an area that
            wasn't investable before
          </p>
          <QuoteBlock
            quoteText="In a classic film fund or just a single film investment, you invest in a film, and you are dependent on the success of the film to make back your money. If the film is a flop, you lose."
          />
        </div>
      </div>
    </DetailsSection>
    <DetailsSection :isCentered="false" class="mb-6">
      <div class="flex flex-wrap lg:w-3/4 mx-auto justify-between">
        <div class="lg:w-1/4 w-full lg:mb-0 mb-5">
          <h1
            class="
              mierb-font
              text-teal
              md:text-banner-secondary-font
              md:leading-normal
              text-2xl
            "
          >
            The opportunity
          </h1>
        </div>
        <div class="lg:w-2/3 w-full">
          <h1
            class="
              cambon-font-title
              text-gradient
              md:text-banner-secondary-font
              text-2xl
            "
          >
            Devise a vehicle with which you can invest in development only
          </h1>
          <p class="mierb-font text-dark-grey text-lg my-5">
            Barry Films decided to securitize a specific portion of their
            business, and that is development
          </p>
          <p class="mierb-font text-dark-grey text-lg mb-10">
            This means taking ideas and concepts to the stage at which you can
            take them to markets and finance a film or TV series
          </p>
          <QuoteBlock
            quoteText="The main difference in our strategy is the focus on development as opposed to production. This allows investors to take part in the value generated without taking on the risk of financing production and the risk of success."
          />
        </div>
      </div>
    </DetailsSection>
    <DetailsSection :isCentered="false" class="mb-6">
      <div class="flex flex-wrap lg:w-3/4 mx-auto justify-between">
        <div class="lg:w-1/4 w-full lg:mb-0 mb-5">
          <h1
            class="
              mierb-font
              text-gradient
              md:text-banner-secondary-font
              text-2xl
            "
          >
            The result
          </h1>
        </div>
        <div class="lg:w-2/3 w-full">
          <h1
            class="
              cambon-font-title
              text-teal
              md:text-banner-secondary-font
              md:leading-normal
              text-2xl
            "
          >
            Allo investors to take part in the value generated without taking on
            all the risks
          </h1>
          <p class="mierb-font text-dark-grey text-lg my-5">
            GenTwo's Actively Managed Certificate (AMC) helped Barry Films
            connect the film world to the finance world.
          </p>
          <p class="mierb-font text-dark-grey text-lg mb-5">
            It gave them the liquidity necessary to take advantage of the huge
            opportunity in content creation.
          </p>
          <p class="mierb-font text-dark-grey text-lg mb-10">
            It allowed them to create a fully transparent alternative asset,
            listed in Switzerland, that gave qualified investors access to a
            market that wasn't investable before.
          </p>
          <QuoteBlock
            quoteText="We think our approach is radically new. And that's why we call it Film Investment 2.0"
          />
        </div>
      </div>
    </DetailsSection>
    <SpotlightSection />
    <div class="w-3/4 mx-auto lg:block hidden mb-6 mt-12">
      <NewsLetter :hasLargeLogo="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class ProductSpotlight extends Vue {}
</script>

<style scoped lang="scss">
.text-gradient {
  background: linear-gradient(
    to left,
    rgba(101, 130, 123, 1),
    rgba(25, 83, 98, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
</style>
