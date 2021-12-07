<template>
  <div>
    <SpotlightsAndCases :spotlightCards="spotlights" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";

@Component({})
export default class ProductSpotlights extends Vue {
  async asyncData(ctx: Context) {
    const spotLightsResponse = await ctx.$strapi.find("pulses", {
      type: "Product Spotlight",
      publishedDate_null: false,
      _sort: "publishedDate:desc",
    });

    const baseUrl = ctx.$strapi.options.url;
    const spotlights: any[] = spotLightsResponse.map((spotlight: any) => {
      // setting default image where there isn't
      var fallBackImage: string = "/img/pulse-page/podcast-section/podcast-one.png";
      var imageURL = {
        default: fallBackImage,
        small: fallBackImage,
        medium: fallBackImage,
        large: fallBackImage,
      };

      // create object with defined formats for each screensize
      if (spotlight.metadata?.shareImage) {
        const shareImage = spotlight.template[0].hero.cover;

        // if there is default image provided overide fallbackimage with default and then overide with each format
        if (spotlight.metadata.shareImage?.url)
          imageURL.default = baseUrl + shareImage.url.substr(1);
        imageURL.small = imageURL.default;
        imageURL.medium = imageURL.default;
        imageURL.large = imageURL.default;
        if (shareImage?.formats?.small) {
          imageURL.small = baseUrl + shareImage.formats.small.url.substr(1);
        }
        if (shareImage?.formats?.medium) {
          imageURL.medium = baseUrl + shareImage.formats.medium.url.substr(1);
        }
        if (shareImage?.formats?.large) {
          imageURL.large = baseUrl + shareImage.formats.large.url.substr(1);
        }
      }

      return {
        id: spotlight.id,
        url: `/pulse/product-spotlights/${spotlight.slug}`,
        image: imageURL,
        // cardLogo: cardLogo,
        categories: spotlight.categories,
        publishedDate: ctx.$dayjs(spotlight.publishedDate).format("D MMMM YYYY"),
        title: spotlight.template[0].hero.title,
        subtitle: spotlight.template[0].client?.description,
        slug: spotlight.slug,
        type: spotlight.type,
        isVertical: true,
        hasProductSpotlight: true,
        hasCaseStudy: false,
        cardClass: "card-one",
        animation: "fade-right",
      };
    });

    return { spotlights };
  }
}
</script>

<style scoped lang="scss"></style>
