<template>
  <div>
    <SpotlightAndCase
      bannerBg="bg-light-pink"
      :hasUseCase="true"
      bannerText="Venture Capital Tool"
    />
    <section class="bg-dimgray lg:py-12 py-6 xl:px-0 px-4 rounded-25 mb-6">
      <div class="flex flex-wrap lg:w-3/4 w-full mx-auto items-start">
        <div class="lg:w-1/2 w-full lg:mb-0 mb-5">
          <h1
            class="
              gradient-heading
              md:text-banner-secondary-font
              text-2xl
              cambon-font-title
            "
          >
            Effectively connecting projects and funds to reach more investors
          </h1>
        </div>
        <div class="lg:w-1/2 w-full">
          <p class="mierb-font text-white font-semibold text-lg mb-4">
            Highlights
          </p>
          <div
            class="
              px-5
              py-3
              border-use-case-border border
              rounded-2xl
              inline-flex
              mb-3
            "
          >
            <p class="mierb-font text-white text-lg">
              Carry be structured as capital gains
            </p>
          </div>
          <div
            class="
              px-5
              py-3
              border-use-case-border border
              rounded-2xl
              inline-flex
              mb-3
            "
          >
            <p class="mierb-font text-white text-lg">
              Multiplication of structure - one structure can be used for
              segregated product and investments
            </p>
          </div>
          <div
            class="
              px-5
              py-3
              border-use-case-border border
              rounded-2xl
              inline-flex
            "
          >
            <p class="mierb-font text-white text-lg">
              Time and cost-efficient setup
            </p>
          </div>
        </div>
      </div>
    </section>
    <DetailsSection :isCentered="false" class="mb-6">
      <div class="flex flex-wrap lg:w-3/4 w-full mx-auto items-start">
        <div class="lg:w-1/2 w-full lg:mb-0 mb-5">
          <h1
            class="
              gradient-heading-two
              md:text-banner-secondary-font
              text-2xl
              cambon-font-title
            "
          >
            Effectively connecting projects and funds to reach more investors
          </h1>
        </div>
        <div class="lg:w-1/2 w-full">
          <p class="mierb-font text-dark-grey font-semibold text-lg mb-4">
            Highlights
          </p>
          <div
            class="
              px-5
              py-3
              border-light-meroon border
              rounded-2xl
              inline-flex
              mb-3
            "
          >
            <p class="mierb-font text-dark-grey text-lg">
              Carry be structured as capital gains
            </p>
          </div>
          <div
            class="
              px-5
              py-3
              border-light-meroon border
              rounded-2xl
              inline-flex
              mb-3
            "
          >
            <p class="mierb-font text-dark-grey text-lg">
              Multiplication of structure - one structure can be used for
              segregated product and investments
            </p>
          </div>
          <div
            class="px-5 py-3 border-light-meroon border rounded-2xl inline-flex"
          >
            <p class="mierb-font text-dark-grey text-lg">
              Time and cost-efficient setup
            </p>
          </div>
        </div>
      </div>
    </DetailsSection>
    <DetailsSection :isCentered="false" class="mb-6">
      <div
        class="
          flex flex-wrap
          lg:w-3/4
          w-full
          mx-auto
          items-start
          justify-between
        "
      >
        <div class="lg:w-1/4 w-full lg:mb-0 mb-5">
          <h1
            class="
              mierb-font
              md:text-banner-secondary-font
              text-2xl text-light-meroon
            "
          >
            The Problem
          </h1>
        </div>
        <div class="lg:w-2/3 w-full lg:px-0 px-5">
          <ul class="list-disc">
            <li class="cambon-font text-dark-grey md:text-22px text-lg mb-3">
              Direct investment or investment in fund
            </li>
            <li class="cambon-font text-dark-grey md:text-22px text-lg">
              Needs substantial resources to setup, maintain & adapt, which
              results in high TERs
            </li>
          </ul>
        </div>
      </div>
    </DetailsSection>
    <DetailsSection :isCentered="false" class="mb-6">
      <div
        class="
          flex flex-wrap
          lg:w-3/4
          w-full
          mx-auto
          items-start
          justify-between
        "
      >
        <div class="lg:w-1/4 w-full lg:mb-0 mb-5">
          <h1
            class="
              mierb-font
              md:text-banner-secondary-font
              text-2xl text-light-meroon
            "
          >
            The Solution
          </h1>
        </div>
        <div class="lg:w-2/3 w-full lg:px-0 px-5">
          <ul class="list-disc">
            <li class="cambon-font text-dark-grey md:text-22px text-lg mb-3">
              AMC on Private Equity or Private Debt as well as on a mix of both
            </li>
            <li class="cambon-font text-dark-grey md:text-22px text-lg mb-3">
              High degree of standardization reduces structures, which makes it
              low cost
            </li>
            <li class="cambon-font text-dark-grey md:text-22px text-lg">
              Off-balance sheet eliminates exposure to the issuer credit risk
            </li>
          </ul>
        </div>
      </div>
    </DetailsSection>
    <DetailsSection :isCentered="false" class="mb-6">
      <div
        class="
          flex flex-wrap
          lg:w-3/4
          w-full
          mx-auto
          items-start
          justify-between
        "
      >
        <div class="lg:w-1/4 w-full lg:mb-0 mb-5">
          <h1
            class="
              mierb-font
              md:text-banner-secondary-font
              text-2xl text-light-meroon
            "
          >
            Advantages
          </h1>
        </div>
        <div class="lg:w-2/3 w-full flex lg:flex-nowrap lg:space-x-6 flex-wrap">
          <div class="lg:w-1/2 w-full lg:mb-0 mb-5">
            <p class="mierb-font text-dark-grey font-semibold text-lg mb-4">
              VC
            </p>
            <div
              class="
                px-5
                py-3
                border-light-meroon border
                rounded-2xl
                inline-flex
                mb-3
              "
            >
              <p class="mierb-font text-dark-grey text-lg">
                Fully transparent solution (market prices before the end of the
                term)
              </p>
            </div>
            <div
              class="
                px-5
                py-3
                border-light-meroon border
                rounded-2xl
                inline-flex
                mb-3
              "
            >
              <p class="mierb-font text-dark-grey text-lg">
                Multiplication of structure – one structure can be used for
                segregated product and investments
              </p>
            </div>
            <div
              class="
                px-5
                py-3
                border-light-meroon border
                rounded-2xl
                inline-flex
                mb-3
              "
            >
              <p class="mierb-font text-dark-grey text-lg">
                Time and cost-efficient setup
              </p>
            </div>
            <div
              class="
                px-5
                py-3
                border-light-meroon border
                rounded-2xl
                inline-flex
              "
            >
              <p class="mierb-font text-dark-grey text-lg">
                No public distribution
              </p>
            </div>
          </div>
          <div class="lg:w-1/2 w-full">
            <p class="mierb-font text-dark-grey font-semibold text-lg mb-4">
              Investor
            </p>
            <div
              class="
                px-5
                py-3
                border-light-meroon border
                rounded-2xl
                inline-flex
                mb-3
              "
            >
              <p class="mierb-font text-dark-grey text-lg">
                Carry as capital gain
              </p>
            </div>
            <div
              class="
                px-5
                py-3
                border-light-meroon border
                rounded-2xl
                inline-flex
                mb-3
              "
            >
              <p class="mierb-font text-dark-grey text-lg">
                Easy to invest (Swiss ISIN)
              </p>
            </div>
            <div
              class="
                px-5
                py-3
                border-light-meroon border
                rounded-2xl
                inline-flex
                mb-3
              "
            >
              <p class="mierb-font text-dark-grey text-lg">
                Market prices during the term as a performance indicator
              </p>
            </div>
            <div
              class="
                px-5
                py-3
                border-light-meroon border
                rounded-2xl
                inline-flex
              "
            >
              <p class="mierb-font text-dark-grey text-lg">
                No bank issuer risk
              </p>
            </div>
          </div>
        </div>
      </div>
    </DetailsSection>
    <DetailsSection :isCentered="false" class="mb-6">
      <div
        class="
          flex flex-wrap
          lg:w-3/4
          w-full
          mx-auto
          items-start
          justify-between
        "
      >
        <div class="lg:w-1/4 w-full lg:mb-0 mb-5">
          <h1
            class="
              mierb-font
              md:text-banner-secondary-font
              text-2xl text-light-meroon
            "
          >
            Setup
          </h1>
        </div>
        <div class="lg:w-2/3">
          <img
            src="/img/pulse-page/use-cases/use-case.png"
            alt=""
            class="w-full h-full"
          />
        </div>
      </div>
    </DetailsSection>
    <UsecaseSection />
    <div class="w-3/4 mx-auto lg:block hidden mb-6 mt-12">
      <NewsLetter :hasLargeLogo="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class UseCase extends Vue {}
</script>

<style scoped lang="scss">
.gradient-heading {
  background: linear-gradient(to left, #f2dcd7, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
.gradient-heading-two {
  background: linear-gradient(to left, #935d50, #553d37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
</style>
