<template>
  <section class="md:p-8 p-4 rounded-25 bg-light-pink flex flex-wrap">
    <div
      class="
        py-10
        lg:px-10
        md:px-6
        px-2
        rounded-25
        border border-light-secondary-border
        flex
        w-full
        overflow-x-hidden
      "
    >
      <BaseSlider>
        <div class="md:mr-10">
          <div class="my-20">
            <h2
              class="
                text-dark-grey
                cambon-font-title
                text-banner-secondary-font
              "
            >
              Latest Use Cases
            </h2>
          </div>
          <div class="self-end w-full">
            <nuxt-link to="/pulse/use-cases">
              <button
                class="
                  bg-medium-meroon
                  outline-none
                  focus:outline-none
                  text-white text-lg
                  mierb-font
                  rounded-xl
                  px-6
                  py-4
                "
              >
                See all
              </button>
            </nuxt-link>
          </div>
        </div>
        <template v-for="card in useCaseCards">
          <div class="md:px-5 px-3 sm:w-569px w-1/4">
            <nuxt-link :to="card.url" :key="card.id">
              <ExploreSectionXCard
                :cardSideImg="card.image"
                :cardTitle="card.title"
                :cardSubtitle="card.subtitle"
                :cardDate="card.publishedDate"
                :templateType="card.type"
                :cardTags="card.tags"
                :hasCustomWidth="true"
                :isBgWhite="true"
                customWidth="sm:w-569px"
              />
            </nuxt-link>
          </div>
        </template>
      </BaseSlider>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { IExploreCards } from "~/utils/interfaces";

@Component({})
export default class UsecaseSection extends Vue {
  public useCaseCards: IExploreCards[] = [];

  async fetch() {
    const baseUrl = this.$strapi.options.url.slice(0, -1);

    const useCasesResponse = await this.$strapi.find("pulses", {
      type: "Use Case",
      _limit: 3,
      _sort: "publishedDate:desc",
      //publishedDate_null: false,
    });

    this.useCaseCards = useCasesResponse.map((useCase: any) => ({
      id: useCase.id,
      url: `/pulse/use-cases/${useCase.slug}`,
      //tags: [{ id: 1, bg: "bg-medium-meroon", text: "Use Case" }],
      // categories: useCase.categories.map((category: any) => ({
      //   id: category.id,
      //   text: category.name,
      //   bg: "bg-teal",
      // })),
      publishedDate: this.$dayjs(useCase.publishedDate).format("D MMMM YYYY"),
      title: useCase.template[0].hero.title,
      subtitle: useCase.template[0].heading?.subtitle,
      type: useCase.type,
      image: useCase.template[0].hero.cover
        ? baseUrl + useCase.template[0].hero.cover.url
        : "/img/pulse-page/podcast-section/podcast-one.png",
    }));

    // if (pulses.length) {
    //   pulses.forEach(function(pulse: any) {
    //     // setting default image where   there isn't
    //     var fallBackImage: string = "/img/pulse-page/podcast-section/podcast-one.png";
    //     var imageURL = {
    //       default: fallBackImage,
    //       small: fallBackImage,
    //       medium: fallBackImage,
    //       large: fallBackImage,
    //     };

    //     // create object with defined formats for each screensize
    //     if (pulse.metadata?.shareImage) {
    //       const shareImage = pulse.metadata.shareImage;

    //       // if there is default image provided overide fallbackimage with default and then overide with each format
    //       if (pulse.metadata.shareImage?.url) imageURL.default = baseUrl + shareImage.url.substr(1);
    //       imageURL.small = imageURL.default;
    //       imageURL.medium = imageURL.default;
    //       imageURL.large = imageURL.default;
    //       if (shareImage?.formats?.small) {
    //         imageURL.small = baseUrl + shareImage.formats.small.url.substr(1);
    //       }
    //       if (shareImage?.formats?.medium) {
    //         imageURL.medium = baseUrl + shareImage.formats.medium.url.substr(1);
    //       }
    //       if (shareImage?.formats?.large) {
    //         imageURL.large = baseUrl + shareImage.formats.large.url.substr(1);
    //       }
    //     }

    //     // setting appropriate path for either press-release, generic or insights

    //     newUseCases.push({
    //       id: pulse.id,
    //       isVertical: true,
    //       cardImg: imageURL,
    //       cardLogo: "",
    //       cardTitle: pulse.template[0].hero.title,
    //       cardDate: this.$dayjs(pulse.publishedDate).format("D MMMM YYYY"),
    //       cardSubtitle: pulse.template[0].heading?.subtitle,
    //       cardTags: [
    //         {
    //           id: 1,
    //           bg: "bg-medium-meroon",
    //           text: "Use Case",
    //         },
    //       ],
    //       hasProductSpotlight: true,
    //       hasCaseStudy: false,
    //       cardClass: "card-one",
    //       animation: "fade-right",
    //     });
    //   });
    // }
    // this.useCaseCards = newUseCases;
  }
}
</script>

<style lang="scss">
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
