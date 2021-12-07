<template>
  <section class="md:p-8 p-4 rounded-25 bg-light-teal-lightest flex flex-wrap">
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
          <!--div class="md:flex hidden items-center">
            <span
              class="
                rounded-full
                px-4
                py-1
                text-white text-sm
                mierb-font
                bg-light-green
                mr-4
              "
              >Private Markets</span
            >
            <span
              class="
                rounded-full
                px-4
                py-1
                text-white text-sm
                mierb-font
                bg-teal
              "
              >Assets Manager</span
            >
          </div-->
          <div class="my-20">
            <h2 class="text-dark-grey cambon-font-title text-banner-secondary-font">
              Latest Product <br />
              Spotlights
            </h2>
          </div>
          <div class="flex w-full">
            <nuxt-link to="/pulse/product-spotlights">
              <button
                class="
                  bg-teal
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
        <template v-for="card in spotlightCards">
          <nuxt-link
            :to="card.url"
            :key="card.id"
            v-if="card.isVertical"
            class="md:px-5 px-3 w-1/4"
          >
            <ExploreSectionYCard
              :cardImg="card.image"
              :cardTitle="card.title"
              :cardDate="card.publishedDate"
              :cardSubtitle="card.subtitle"
              :templateType="card.type"
              :cardTags="card.tags"
              :hasCustomWidth="true"
              customWidth="md:w-569px w-full"
            />
          </nuxt-link>
        </template>
      </BaseSlider>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { IExploreCards } from "~/utils/interfaces";

@Component({})
export default class SpotlightSection extends Vue {
  public spotlightCards: IExploreCards[] = [];

  async fetch() {
    const baseUrl = this.$strapi.options.url.slice(0, -1);

    const spotLightsResponse = await this.$strapi.find("pulses", {
      type: "Product Spotlight",
      _limit: 3,
      _sort: "publishedDate:desc",
      publishedDate_null: false,
    });

    this.spotlightCards = spotLightsResponse.map((spotlight: any) => ({
      id: spotlight.id,
      url: `/pulse/product-spotlights/${spotlight.slug}`,
      // tags: [
      //   {
      //     id: 1,
      //     text: "Product Spotlight",
      //     bg: "bg-teal",
      //   },
      // ],
      // categories: spotlight.categories.map((category: any) => ({
      //   id: category.id,
      //   text: category.name,
      //   bg: "bg-teal",
      // })),
      publishedDate: this.$dayjs(spotlight.publishedDate).format("D MMMM YYYY"),
      title: spotlight.template[0].hero.title,
      subtitle: spotlight.template[0].heading?.subtitle,
      type: spotlight.type,
      image: baseUrl + spotlight.template[0].hero.cover?.url,
      isVertical: true,
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

    //     newsTopicCards.push({
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
    //           text: "Product Spotlight",
    //           bg: "bg-teal",
    //         },
    //       ],
    //       // cardTags: pulse.categories.map((category: any) => ({
    //       //   id: category.id,
    //       //   text: category.name,
    //       //   bg: "bg-teal",
    //       // })),
    //       hasProductSpotlight: true,
    //       hasCaseStudy: false,
    //       cardClass: "card-one",
    //       animation: "fade-right",
    //     });
    //   });
    // }
    // this.spotlightCards = newsTopicCards;
  }
}
</script>

<style scoped lang="scss"></style>
