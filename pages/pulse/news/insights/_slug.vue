<template>
  <div>
    <NewsBanner
      :bannerTag="insight.categories"
      :bannerTitle="insight.template[0].hero.title"
      :bannerAuthor="insight.template[0].hero.contributor"
      :bannerDate="formatDate(insight.publishedDate)"
      :bannerImg="imageURL.default"
      bannerDirection="ltr"
      bannerBackLink="/pulse/news"
      bannerBackText="Back to Latest News, Insights & Press Releases"
    />
    <DetailsSection class="my-6">
      <div class="w-full">
        <h1
          class="
            cambon-font-title
            md:text-banner-secondary-font
            text-2xl
            bronze-text-gradient
          "
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {{
            insight.template[0].heading
              ? insight.template[0].heading.subtitle
              : insight.metadata.metaDescription
          }}
        </h1>
      </div>
    </DetailsSection>
    <DetailsSection v-for="item in insightDescription" :key="item.id" class="my-6">
      <div class="w-full flex flex-wrap justify-between mb-10">
        <div class="lg:w-2/3 w-full lg:mb-0 mb-6">
          <p
            v-html="item.description.content.text"
            class="richtext-content cambon-font text-lg lg:text-22px text-left leading-normal text-dark-grey"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          ></p>
        </div>
        <div
          v-if="item.description.content.button"
          class="lg:w-1/4 w-full lg:mt-0 mt-6"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <ViewButton
            :buttonText="item.description.content.button.text"
            :url="
              item.description.content.button.file
                ? baseUrl.slice(0, -1) + item.description.content.button.file.url
                : item.description.content.button.url
            "
          />
        </div>
      </div>
      <div v-if="item.description.quote" class="w-full flex flex-wrap justify-between items-center">
        <div
          class="
            rounded-2xl
            border border-light-grey-light
            lg:w-2/3
            w-full
            px-8
            py-5
            flex
            lg:mb-0 mb-6
          "
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.888 0.199999C3.232 0.919998 0.0160002 4.04 0.0160002 8.12C0.0160002 11.384 2.032 13.832 4.72 13.832C6.64 13.832 7.984 12.584 7.984 10.808C7.984 9.464 7.408 8.648 6.256 8.312H3.616C3.088 8.024 2.848 7.4 2.848 6.488C2.848 4.136 4.816 1.928 7.936 0.439999L7.888 0.199999ZM17.536 0.199999C12.88 0.919998 9.664 4.04 9.664 8.12C9.664 11.384 11.68 13.832 14.368 13.832C16.288 13.832 17.632 12.584 17.632 10.808C17.632 9.464 17.056 8.648 15.904 8.312H13.264C12.736 8.024 12.496 7.4 12.496 6.488C12.496 4.136 14.464 1.928 17.584 0.439999L17.536 0.199999Z"
              fill="#1D2021"
              fill-opacity="0.45"
            />
          </svg>
          <p class="cambon-font text-dark-grey text-lg ml-2">
            {{ item.description.quote.text }}
          </p>
        </div>
        <div
          class="lg:w-1/3 w-full lg:pl-5"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <p class="mierb-font text-dark-grey text-lg font-semibold">
            {{ item.description.quote.author.name }}
          </p>
          <p class="mierb-font text-light-secondary-body">
            ({{ item.description.quote.author.position }})<br />
            {{ item.description.quote.author.company }}
          </p>
        </div>
      </div>
    </DetailsSection>
    <LatestNewsSection />
    <div class="w-3/4 mx-auto lg:block hidden mb-6 mt-12">
      <NewsLetter :hasLargeLogo="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";

@Component({})
export default class Insights extends Vue {
  async asyncData(ctx: Context) {
    // code below get's data from the api
    const pulse = await ctx.$strapi.find("pulses", { slug: ctx.params.slug });
    const insight = pulse[0];
    const baseUrl = ctx.$strapi.options.url;

    // give default image where no image is selected else joins base url
    var fallBackImage: string = "/img/pulse-page/podcast-section/podcast-one.png";
    var imageURL = {
      default: fallBackImage,
      small: fallBackImage,
      medium: fallBackImage,
      large: fallBackImage,
    };

    if (insight.metadata.shareImage) {
      const shareImage = insight.template[0].hero.cover;

      // if there is default image provided overide fallbackimage with default and then overide with each format
      if (insight.metadata.shareImage?.url) imageURL.default = baseUrl + shareImage.url.substr(1);
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
    var insightDescription: Array<any> = [];
    insight.template.forEach(function(item: any) {
      if (item.__component === "templates.insights") {
        insightDescription.push(item);
      }
    });

    return { insight, imageURL, insightDescription, baseUrl };
  }

  formatDate(date: string): string {
    const rawDate = new Date(date);
    return rawDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}
</script>

<style lang="scss">
.banner-img-two {
  background: url("/img/pulse-page/explore-topic/img-five.png") center / cover no-repeat;
}
.bronze-text-gradient {
  background: linear-gradient(to left, rgba(115, 106, 100, 1), rgba(19, 27, 30, 1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
</style>
