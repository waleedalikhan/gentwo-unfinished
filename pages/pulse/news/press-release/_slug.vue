<template>
  <div>
    <NewsBanner
      :bannerTag="pressRelease.categories"
      :bannerTitle="pressRelease.template[0].hero.title"
      :bannerAuthor="pressRelease.template[0].hero.contributor"
      :bannerDate="formatDate(pressRelease.publishedDate)"
      :bannerImg="imageURL.default"
      bannerDirection="rtl"
      bannerBackLink="/pulse/news"
      :bannerBackText="backText"
    />
    <DownloadSection
      v-if="pressRelease.template[0].downloadDocuments"
      :documents="pressRelease.template[0].downloadDocuments.documents"
      :view="pressRelease.template[0].downloadDocuments.view"
      class="mb-6"
    />
    <DetailsSection class="mb-6">
      <div class="w-full">
        <h1
          class="
            cambon-font-title
            leading-normal
            md:text-banner-secondary-font
            text-2xl
            bronze-text-gradient
          "
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {{
            pressRelease.template[0].heading
              ? pressRelease.template[0].heading.subtitle
              : pressRelease.metadata.metaDescription
          }}
        </h1>
      </div>
    </DetailsSection>
    <DetailsSection v-for="description in elementDescriptions" :key="description.id" class="mb-6">
      <div class="w-full flex flex-wrap justify-between">
        <div class="lg:w-1/4 w-full lg:mb-0 mb-6">
          <h1
            class="
              mierb-font
              md:text-banner-secondary-font
              text-2xl
              bronze-text-gradient
            "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {{ description.title }}
          </h1>
        </div>
        <div class="lg:w-2/3 w-full lg:mb-0 mb-6">
          <p
            v-html="description.text"
            class="richtext-content cambon-font text-lg lg:text-22px text-left leading-normal text-dark-grey md:mb-10 md:mt-0 mt-6 mb-0"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          ></p>
          <ViewButton
            v-if="description.button"
            :buttonText="description.button.text"
            :url="description.button.url"
            :inline="true"
          />
        </div>
      </div>
    </DetailsSection>
    <LatestNewsSection class="md:block hidden" />
    <div class="w-3/4 mx-auto lg:block hidden mb-6 mt-12">
      <NewsLetter :hasLargeLogo="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";

@Component({})
export default class PressRelease extends Vue {
  public backText = "Back to Latest News, Insights & Press Releases";

  async asyncData(ctx: Context) {
    // code below get's data from the api
    const pulse = await ctx.$strapi.find("pulses", { slug: ctx.params.slug });
    const pressRelease = pulse[0];
    const baseUrl = ctx.$strapi.options.url;

    // give default image where no image is selected else joins base url
    var fallBackImage: string = "/img/pulse-page/podcast-section/podcast-one.png";
    var imageURL = {
      default: fallBackImage,
      small: fallBackImage,
      medium: fallBackImage,
      large: fallBackImage,
    };

    if (pressRelease.metadata.shareImage) {
      const shareImage = pressRelease.template[0].hero.cover;

      // if there is default image provided overide fallbackimage with default and then overide with each format
      if (pressRelease.metadata.shareImage?.url)
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
    // give default image where no image is selected else joins base url

    // filter elements where component is elements.title-description
    var elementDescriptions: Array<any> = [];
    pressRelease.template.forEach(function(item: any) {
      if (item.__component === "elements.title-description") {
        elementDescriptions.push(item);
      }
    });
    return { pressRelease, imageURL, elementDescriptions };
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

  public mounted() {
    if (window.innerWidth < 767) {
      this.backText = "Back to Latest News";
    } else {
      this.backText = "Back to Latest News, Insights & Press Releases";
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 767) {
        this.backText = "Back to Latest News";
      } else {
        this.backText = "Back to Latest News, Insights & Press Releases";
      }
    });
  }
  public destroyed() {
    window.removeEventListener("resize", () => {
      if (window.innerWidth < 767) {
        this.backText = "Back to Latest News";
      } else {
        this.backText = "Back to Latest News, Insights & Press Releases";
      }
    });
  }
}
</script>

<style lang="scss">
.banner-img {
  background: url("/img/pulse-page/explore-topic/img-four.svg") center / cover no-repeat;
}
.bronze-text-gradient {
  background: linear-gradient(to left, rgba(115, 106, 100, 1), rgba(19, 27, 30, 1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
</style>
