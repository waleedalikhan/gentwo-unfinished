<template>
  <div>
    <NewsBanner
      :bannerTag="generic.categories"
      :bannerTitle="generic.template[0].hero.title"
      :bannerAuthor="generic.template[0].hero.contributor"
      :bannerDate="formatDate(generic.publishedDate)"
      :bannerImg="imageURL.default"
      bannerDirection="ltr"
      bannerBackLink="/pulse/news"
      bannerBackText="Back to Latest News, generics & Press Releases"
    />
    <DetailsSection class="mb-6">
      <div
        class="w-full lg:mb-0 mb-5"
        :class="{ 'lg:w-1/2': generic.template[0].heading && generic.template[0].heading.content }"
      >
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
            generic.template[0].heading
              ? generic.template[0].heading.subtitle
              : generic.metadata.metaDescription
          }}
        </h1>
      </div>
      <div
        class="lg:w-1/2 w-full"
        v-if="generic.template[0].heading && generic.template[0].heading.content"
      >
        <p
          class="richtext-content cambon-font font-semibold text-lg mb-4 px-4"
          v-html="generic.template[0].heading.content.content"
        >
          {{ generic.template[0].heading.content.content }}
        </p>
      </div>
    </DetailsSection>
    <DetailsSection class="mb-6" v-if="generic.template[0].overview">
      <div class="w-full flex flex-wrap items-start justify-between">
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
            {{ generic.template[0].overview.title }}
          </h1>
        </div>
        <div class="lg:w-2/3 w-full">
          <template v-for="(item, index) in generic.template[0].overview.items">
            <ViewButton
              :key="index"
              data-aos="fade-up"
              data-aos-duration="800"
              :data-aos-delay="200 + index * 200"
              :buttonText="item.text"
              :url="item.url"
              v-if="item.button"
            />
            <div
              :key="index"
              class="p-4 rounded-2xl border border-medium-bronze mb-5"
              data-aos="fade-up"
              data-aos-duration="800"
              :data-aos-delay="200 + index * 200"
              v-else
            >
              <p class="mierb-font text-dark-grey text-lg">
                {{ item.text || item.title }}
              </p>
            </div>
          </template>
        </div>
      </div>
    </DetailsSection>
    <DetailsSection class="mb-6" :isCentered="false" v-if="generic.template[0].content">
      <div class="richtext-content px-2 mx-auto sm:w-3/4 cambon-font text-lg lg:text-22px text-left leading-normal">
        <div v-html="generic.template[0].content.content" class="content-center" />
      </div>
    </DetailsSection>
    <DetailsSection v-for="extraBlock in generic.template.slice(1)" :key="extraBlock.id" class="mb-6">
      <div class="w-full flex flex-wrap justify-between" v-if="extraBlock.__component === 'elements.title-description'">
        <div class="lg:w-3/4 w-full lg:mb-0 mb-6">
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
            {{ extraBlock.title }}
          </h1>
          <div
            v-html="extraBlock.text"
            class="richtext-content cambon-font text-lg lg:text-22px text-left leading-normal text-dark-grey md:mb-10 md:mt-0 mt-6 mb-0"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          ></div>
        </div>
        <div class="lg:w-1/4 w-full lg:mb-0 mb-6 lg:pl-6" v-if="extraBlock.button">
          <ViewButton
            :buttonText="extraBlock.button.text"
            :url="
              extraBlock.button.file
                ? baseUrl.slice(0, -1) + extraBlock.button.file.url
                : extraBlock.button.url
            "
          />
        </div>
      </div>
    </DetailsSection>
    <AuthorSection
      v-if="generic.template[0].hero.contributor"
      v-bind="generic.template[0].hero.contributor"
    />
    <LatestNewsSection class="my-6" />
    <div class="w-3/4 mx-auto lg:block hidden mb-6 mt-12">
      <NewsLetter :hasLargeLogo="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";

@Component({})
export default class Generic extends Vue {
  async asyncData(ctx: Context) {
    // code below get's data from the api
    const pulse = await ctx.$strapi.find("pulses", { slug: ctx.params.slug });
    const generic = pulse[0];

    const baseUrl = ctx.$strapi.options.url;

    // give default image where no image is selected else joins base url
    var fallBackImage: string = "/img/pulse-page/podcast-section/podcast-one.png";
    var imageURL = {
      default: fallBackImage,
      small: fallBackImage,
      medium: fallBackImage,
      large: fallBackImage,
    };

    if (generic.metadata.shareImage) {
      const shareImage = generic.template[0].hero.cover;

      // if there is default image provided overide fallbackimage with default and then overide with each format
      if (generic.metadata.shareImage?.url) imageURL.default = baseUrl + shareImage.url.substr(1);
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

    return { generic, imageURL, baseUrl };
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
.bronze-text-gradient {
  background: linear-gradient(to left, rgba(115, 106, 100, 1), rgba(19, 27, 30, 1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
</style>
