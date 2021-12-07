<template>
  <div>
    <SpotlightAndCase
      bannerBg="bg-spotlight-bg"
      :image="imageURL"
      :title="spotlight.template[0].hero.title"
      :subtitle="spotlight.template[0].client.description"
      :publishedDate="$dayjs(spotlight.publishedDate).format('D MMMM YYYY')"
      :categories="spotlight.categories"
      :templateType="spotlight.type"
      :contributor="spotlight.template[0].hero.contributor"
      :pdf="spotlight.template[0].hero.pdf"
    />
    <ClientSection class="mb-6" :client="spotlight.template[0].client" />
    
    <DetailsSection
      v-if="spotlightDescription.content.length"
      v-for="item in spotlightDescription.content"
      :key="item.id"
      :isCentered="false"
      class="mb-6"
    >
      <div class="flex flex-wrap lg:w-3/4 mx-auto justify-between">
        <div class="lg:w-1/4 w-full lg:mb-0 mb-5">
          <h1
            class="
                mierb-font
                text-teal
                md:text-banner-secondary-font
                md:leading-tight
                text-2xl
              "
          >
            {{ item.title }}
          </h1>
        </div>
        <div v-html="item.text" class="richtext-content lg:w-2/3 w-full cambon-font text-lg"></div>
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
import { Context } from "@nuxt/types";

@Component({})
export default class ProductSpotlight extends Vue {
  async asyncData(ctx: Context) {
    // code below get's data from the api
    const pulse = await ctx.$strapi.find("pulses", { slug: ctx.params.slug });
    const spotlight = pulse[0];
    const baseUrl = ctx.$strapi.options.url;

    // give default image where no image is selected else joins base url
    var fallBackImage: string = "/img/pulse-page/podcast-section/podcast-one.png";
    var imageURL = {
      default: fallBackImage,
      small: fallBackImage,
      medium: fallBackImage,
      large: fallBackImage,
    };

    // create object with defined formats for each screensize
    if (spotlight?.metadata?.shareImage) {
      const shareImage = spotlight.template[0].hero.cover;

      // if there is default image provided overide fallbackimage with default and then overide with each format
      if (spotlight?.metadata.shareImage?.url) {
        imageURL.default = baseUrl + shareImage.url.substr(1);
      }

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

    // filter elements where component is elements.title-description
    var spotlightDescription = null;
    spotlight.template.forEach(function(item: any) {
      if (item.__component === "templates.product-spotlight") {
        spotlightDescription = item;
      }
    });
    return { spotlight, imageURL, spotlightDescription };
  }
}
</script>

<style scoped lang="scss">
.text-gradient {
  background: linear-gradient(to left, rgba(101, 130, 123, 1), rgba(25, 83, 98, 1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
</style>
