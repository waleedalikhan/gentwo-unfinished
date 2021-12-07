<template>
  <section
    class="rounded-25 bg-investment-ideas-bg lg:py-20 py-10 lg:px-0 px-6 overflow-hidden"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="-400"
  >
    <div class="flex flex-wrap xl:w-3/4 lg:w-5/6 w-full mx-auto">
      <div class="w-full mb-16">
        <p
          class="
            md:text-5xl
            text-banner-secondary-font
            cambon-font-title 
            text-investment-ideas-color
          "
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="300"
          data-aos-offset="-400"
        >
          Your investment ideas &amp; strategies can be securitized as innovative structured products
        </p>
      </div>
      <div class="w-full flex lg:flex-nowrap flex-wrap space-x-2">
        <template v-for="card in IdeaCards">
          <div
            :key="card.id"
            class="lg:w-1/3 w-full text-center rounded-2xl py-4 lg:mb-0 mb-5"
            :class="card.cardBg"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-offset="-400"
            :data-aos-delay="card.animationDelay"
          >
            <p class="mierb-font md:text-2xl text-lg text-investment-ideas-bg">
              {{ card.cardTitle }}
            </p>
            <p
              class="
                cambon-font-title
                md:text-5xl
                text-banner-secondary-font
                font-bold
                text-investment-ideas-bg
                uppercase
                md:my-4
              "
            >
              {{ card.cardHeading }}
            </p>
            <p
              class="mierb-font text-investment-ideas-bg"
              v-if="card.cardSubtitle"
            >
              {{ card.cardSubtitle }}
            </p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { IInvestmentIdeaCard } from "~/utils/interfaces";

@Component({})
export default class InvestmentIdeasSection extends Vue {
  public IdeaCards: IInvestmentIdeaCard[] = [
    {
      id: 1,
      cardTitle: "Discretionary Portfolios",
      cardHeading: "amc",
      cardSubtitle: "Discretionary Portfolios",
      cardBg: "amc-card",
      animationDelay: "300",
    },
    {
      id: 2,
      cardTitle: "Structured Loans",
      cardHeading: "cln",
      cardSubtitle: "Credit Linked Notes",
      cardBg: "cln-card",
      animationDelay: "600",
    },
    {
      id: 3,
      cardTitle: "Static Investments",
      cardHeading: "trackers",
      cardBg: "trackers-card",
      animationDelay: "900",
    },
  ];
}
</script>

<style scoped lang="scss">
.amc-card {
  background: linear-gradient(
      92.93deg,
      rgba(255, 255, 255, 0) 8.98%,
      rgba(255, 255, 255, 0.12) 88.26%
    ),
    linear-gradient(
      120.69deg,
      #cecb7e 31.38%,
      rgba(206, 203, 126, 0.55) 101.98%
    );
}
.cln-card {
  background: linear-gradient(
      92.93deg,
      rgba(255, 255, 255, 0) 8.98%,
      rgba(255, 255, 255, 0.12) 88.26%
    ),
    linear-gradient(121.82deg, #7dcec7 30.85%, rgba(125, 206, 199, 0.55) 99.29%);
}
.trackers-card {
  background: linear-gradient(
      92.93deg,
      rgba(255, 255, 255, 0) 8.98%,
      rgba(255, 255, 255, 0.12) 88.26%
    ),
    linear-gradient(
      121.56deg,
      #cea77e 30.97%,
      rgba(206, 167, 126, 0.55) 100.57%
    );
}
</style>
