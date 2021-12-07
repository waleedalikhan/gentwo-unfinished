<template>
  <section
    class="rounded-25 lg:p-16 p-6 offer-bg"
    data-aos="fade-up"
    data-aos-duration="600"
  >
    <div class="flex flex-wrap xl:w-3/4 lg:w-5/6 w-full mx-auto mb-20">
      <div class="w-full">
        <p
          class="text-dark-teal mierb-font md:text-banner-secondary-font mb-5"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="300"
        >
          What we offer
        </p>
        <p
          class="
            text-gradient
            cambon-font-title
            md:text-5xl
            text-banner-secondary-font
          "
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
        >
          A simple, modular and compliant solution. With you in control.
        </p>
      </div>
    </div>
    <div class="flex flex-wrap">
      <template v-for="card in offerCards">
        <div
          :key="card.id"
          class="lg:w-1/3 w-full lg:pr-4 mb-6"
          data-aos="fade-up"
          data-aos-duration="600"
          :data-aos-delay="card.animationDelay"
        >
          <div class="bg-white rounded-2xl px-4 py-6 flex flex-wrap h-full">
            <div class="w-full -mb-2">
              <img :src="card.cardIcon" alt="" />
            </div>
            <div class="w-full">
              <p class="text-teal text-banner-secondary-font mierb-font">
                {{ card.cardTitle }}
              </p>
              <p class="text-lg text-light-secondary-body mierb-font">
                {{ card.cardSubtitle }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
    <button
      class="
        text-teal text-lg
        border border-teal
        rounded-full
        px-6
        py-3
        mierb-font
        flex
        items-center
        mx-auto
        mt-5
      "
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.00023 1.90479V0.904785H11.0002V1.90479L11.0002 9.39007L18.4855 9.39007H19.4855V11.3901H18.4855L10.9999 11.3901V18.8757V19.8757H8.99993V18.8757V11.3904H1.51465H0.514648V9.39038H1.51465H9.00023L9.00023 1.90479Z"
          fill="#25464F"
        />
      </svg>
      <span class="ml-4">See how it works</span>
    </button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { IOfferCard } from "~/utils/interfaces";

@Component({})
export default class OfferSection extends Vue {
  public offerCards: IOfferCard[] = [
    {
      id: 1,
      cardIcon: "/img/solutions-page/offer-section/platform-icon.svg",
      cardTitle: "Platform",
      cardSubtitle: "Dedicated, segregated off-balance sheet issuance Solution",
      animationDelay: "200",
    },
    {
      id: 2,
      cardIcon: "/img/solutions-page/offer-section/structure-icon.svg",
      cardTitle: "Infrastructure",
      cardSubtitle:
        "Issuance platform, paying agent, custodian and accounts setup",
      animationDelay: "400",
    },
    {
      id: 3,
      cardIcon: "/img/solutions-page/offer-section/products-icon.svg",
      cardTitle: "Products",
      cardSubtitle:
        "Bankable securities with Swiss ISIN code from public, private and digital markets",
      animationDelay: "600",
    },
    {
      id: 4,
      cardIcon: "/img/solutions-page/offer-section/lifecycle-icon.svg",
      cardTitle: "Lifecycle",
      cardSubtitle:
        "We manage for you the entire product lifecycle, incl.daily NAV calculation",
      animationDelay: "800",
    },
    {
      id: 5,
      cardIcon: "/img/solutions-page/offer-section/portal-icon.svg",
      cardTitle: "Online Portal",
      cardSubtitle:
        "Monitor and manage all from our new state of the art online portal",
      animationDelay: "1000",
    },
    {
      id: 6,
      cardIcon: "/img/solutions-page/offer-section/service-icon.svg",
      cardTitle: "Service",
      cardSubtitle:
        "Our team offers first-class service and support every step of the",
      animationDelay: "1200",
    },
  ];
}
</script>

<style scoped lang="scss">
.offer-bg {
  background: #e8edec;
  .text-gradient {
    background: linear-gradient(
      to right,
      rgba(54, 80, 75, 1),
      rgba(45, 120, 141, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 120%;
  }
}
</style>
