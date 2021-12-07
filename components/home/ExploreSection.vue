<template>
  <section
    class="px-4 bg-explore-section-bg rounded-25 lg:px-20 py-14"
    data-aos="fade-up"
    data-aos-duration="500"
  >
    <div class="flex flex-wrap">
      <div
        class="flex flex-wrap items-start justify-between w-full lg:flex-nowrap"
      >
        <div class="w-full -mt-2 lg:w-auto">
          <p
            class="text-2xl font-semibold leading-tight mr-4 mierb-font lg:text-banner-secondary-font"
          >
            Explore exciting and innovative investment solutions created by our clients and partners
          </p>
        </div>
        <div class="hidden mt-5 lg:block lg:mt-0">
          <nuxt-link to="/pulse">
            <button class="px-8 py-4 text-white explore-section-btn rounded-xl">
              Explore our work
            </button>
          </nuxt-link>
        </div>
      </div>
      <div
        class="flex items-center justify-center w-full mt-8 mb-5 lg:justify-start sm:justify-end lg:mb-20 md:mb-10"
      >
        <div class="hidden lg:block">
          <span class="mb-3 mr-5 mierb-font text-light-secondary-body lg:mb-0"
            >View</span
          >
          <button
            class="px-4 py-1 mb-3 mr-5 border rounded-full outline-none focus:outline-none lg:mb-0"
            :class="[
              isAllActive
                ? 'bg-dark-grey text-white'
                : 'border-dark-grey text-dark-grey'
            ]"
            @click="activeAll"
          >
            All
          </button>
        </div>
        <div class="block lg:hidden">
          <button
            class="px-3 py-1 mb-3 text-xs rounded-full outline-none md:px-4 md:mr-5 mierb-font text-m focus:outline-none lg:mb-0 lg:text-base"
            :class="[
              isAllActive
                ? 'bg-dark-grey text-white'
                : 'border-dark-grey text-dark-grey'
            ]"
            @click="activeAll"
          >
            View All
          </button>
        </div>
        <button
          class="px-3 py-1 mx-3 mb-3 text-xs border outline-none md:px-4 rounded-2xl md:mr-5 md:mx-0 mierb-font text-m focus:outline-none lg:mb-0 lg:text-base"
          :class="[
            isProductSpotlightActive
              ? 'bg-teal text-white'
              : 'border-teal text-teal '
          ]"
          @click="activeProductSpotlight"
        >
          Product Spotlights
        </button>
        <button
          class="px-3 py-1 mb-3 text-xs border outline-none md:px-4 rounded-2xl mierb-font text-m focus:outline-none lg:mb-0 lg:text-base"
          :class="[
            isUseCaseActive
              ? 'bg-medium-bronze text-white'
              : 'border-medium-bronze text-medium-bronze'
          ]"
          @click="activeUseCase"
        >
          Use Cases
        </button>
      </div>
      <div class="hidden w-full mx-auto lg:w-11/12 lg:block">
        <masonry :cols="2" :gutter="20">
          <template v-for="(card, index) in exploreCards">
            <div
              v-if="card.type === 'Product Spotlight'"
              :key="card.id"
              :data-aos="card.animation"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <nuxt-link :to="card.url">
                <ExploreSectionYCard
                  :cardImg="card.image.default"
                  :cardLogo="card.cardLogo"
                  :cardTitle="card.title"
                  :cardDate="card.publishedDate"
                  :cardSubtitle="card.subtitle"
                  :cardTags="card.categories"
                  :templateType="card.type"
                  class="mb-6"
                  :class="card.cardClass"
                />
              </nuxt-link>
            </div>
            <div
              v-if="card.type === 'Use Case'"
              :key="card.id"
              :data-aos="card.animation"
              data-aos-duration="500"
              data-aos-delay="600"
            >
              <nuxt-link :to="card.url">
                <ExploreSectionXCard
                  :cardSideImg="card.image.default"
                  :cardTitle="card.title"
                  :cardSubtitle="card.subtitle"
                  :cardTags="card.categories"
                  :templateType="card.type"
                  class="mb-6"
                  :class="card.cardClass"
                />
              </nuxt-link>
            </div>
          </template>
        </masonry>
      </div>
      <div
        class="hidden w-3/4 mx-auto my-10 lg:block"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <NewsLetter />
      </div>
      <div
        class="flex justify-center block w-full mt-10 lg:hidden"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <button class="px-8 py-4 text-white explore-section-btn rounded-xl">
          Explore our work
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import gsap, { Power3 } from "gsap";

@Component({})
export default class ExploreSection extends Vue {
  public isAllActive: boolean = true;
  public isProductSpotlightActive: boolean = false;
  public isUseCaseActive: boolean = false;

  public allCards: any[] = [];
  public exploreCards: any[] = [];
  public productSpotlightCards: any[] = [];
  public productSpotlights: any[] = [];
  public useCaseCards: any[] = [];
  public useCases: any[] = [];

   async fetch() {
    const baseUrl = this.$strapi.options.url.slice(0, -1);

    const useCasesResponse = await this.$strapi.find("pulses", [
      ["type", "Use Case"],
      ["_sort", "publishedDate:desc"],
      ["_limit", "3"],
    ])
    const productSpotlightsResponse = await this.$strapi.find("pulses", [
      ["type", "Product Spotlight"],
      ["publishedDate_null", "false"],
      ["_sort", "publishedDate:desc"],
      ["_limit", "3"],
    ])

    this.productSpotlights = productSpotlightsResponse
      .map((spotlight: any) => ({
        id: spotlight.id,
        url: `/pulse/product-spotlights/${spotlight.slug}`,
        isVertical: false,
        image: {default:  baseUrl + spotlight.template[0].hero.cover?.url},
        categories: spotlight.categories, //[{id:spotlight.id, bg:'bg-teal', text:spotlight.type}]
        publishedDate: this.$dayjs(spotlight.publishedDate).format("D MMMM YYYY"),
        title: spotlight.template[0].hero.title,
        subtitle: spotlight.template[0].client?.description,
        slug: spotlight.slug,
        type: spotlight.type,
      }));

    this.useCases = useCasesResponse
      .map((useCase: any) => ({
        id: useCase.id,
        url: `/pulse/use-cases/${useCase.slug}`,
        image: {default:  baseUrl + useCase.template[0].hero.cover?.url},
        categories: useCase.categories, //[{id:useCase.id, bg:'bg-teal', text:useCase.type}]
        publishedDate: this.$dayjs(useCase.publishedDate || useCase.published_at).format("D MMMM YYYY"),
        title: useCase.template[0].hero.title,
        subtitle: useCase.template[0].heading?.subtitle,
        slug: useCase.slug,
        type: useCase.type,
        isVertical: true,
      }));

    this.allCards = this.exploreCards = [
      ...this.productSpotlights,
      ...this.useCases,
    ].sort((a:any, b:any) => a.publishedDate - b.publishedDate);

    //console.log(this.exploreCards);
  }

  mounted() {
    this.exploreCards.forEach((card: any) =>
      gsap.from("." + card.cardClass, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        ease: Power3.easeOut
      })
    );

    // if (window.innerWidth > 1025) {
    //   this.exploreCard = exploreCards;
    // }

    // if (window.innerWidth < 1024 && window.innerWidth > 768) {
    //   this.exploreCard = exploreCardsTabs;
    // }

    // if (window.innerWidth < 767) {
    //   this.exploreCard = exploreCardsPhone;
    // }

    // window.addEventListener("resize", () => {
    //   if (window.innerWidth > 1025) {
    //     this.exploreCard = exploreCards;
    //   }
    //   if (window.innerWidth < 1024 && window.innerWidth > 768) {
    //     this.exploreCard = exploreCardsTabs;
    //   }
    //   if (window.innerWidth < 767) {
    //     this.exploreCard = exploreCardsPhone;
    //   }
    // });
  }

  activeAll() {
    this.isAllActive = true;
    this.isProductSpotlightActive = false;
    this.isUseCaseActive = false;

    this.exploreCards = this.allCards;
    this.exploreCards.forEach((card: any) =>
      gsap.from("." + card.cardClass, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        ease: Power3.easeOut
      })
    );
  }

  activeProductSpotlight() {
    this.isProductSpotlightActive = true;
    this.isAllActive = false;
    this.isUseCaseActive = false;

    // if (this.isProductSpotlightActive) {
    //   this.productSpotlightCards = exploreCards.filter(
    //     (card: any) => card.hasProductSpotlight === true
    //   );
    // }

    this.exploreCards = this.productSpotlights;
    this.exploreCards.forEach((card: any) =>
      gsap.from("." + card.cardClass, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        ease: Power3.easeOut
      })
    );
  }

  activeUseCase() {
    this.isUseCaseActive = true;
    this.isAllActive = false;
    this.isProductSpotlightActive = false;

    // if (this.useCaseCards) {
    //   this.useCaseCards = exploreCards.filter(
    //     (card: any) => card.hasCaseStudy === true
    //   );
    // }

    this.exploreCards = this.useCases;
    this.exploreCards.forEach((card: any) =>
      gsap.from("." + card.cardClass, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        ease: Power3.easeOut
      })
    );
  }
}
</script>

<style lang="scss">
.explore-section-btn {
  background: rgba(37, 70, 79, 0.92);
  backdrop-filter: blur(12px);
}

button {
  white-space: nowrap;
}

.side-img-one {
  background: linear-gradient(
      90.66deg,
      #03217e 0.78%,
      rgba(9, 44, 155, 0) 77.66%
    ),
    url("/img/explore-section/explore-2.jpg") center / cover no-repeat;
}

.side-img-two {
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.68) 4.16%,
      rgba(0, 0, 0, 0) 97.11%
    ),
    url("/img/explore-section/explore-3.jpg") center / cover no-repeat;
}

.side-img-three {
  background: url("/img/explore-section/explore-6.jpg") center / cover no-repeat;
}
</style>
