<template>
  <div>
    <SpotlightAndCase
      bannerBg="bg-light-pink"
      :hasUseCase="true"
      :image="imageURL"
      :title="useCase.template[0].hero.title"
      :subtitle="useCase.template[0].heading.subtitle"
      :publishedDate="$dayjs(useCase.publishedDate || useCase.published_at).format('D MMMM YYYY')"
      :categories="useCase.categories"
      :templateType="useCase.type"
      :contributor="useCase.template[0].hero.contributor"
      :pdf="useCase.template[0].hero.pdf"
    />
    <section class="bg-dimgray lg:py-12 py-6 xl:px-0 px-4 rounded-25 mb-6">
      <div class="flex flex-wrap lg:w-3/4 w-full mx-auto items-start">
        <div class="lg:w-1/2 w-full lg:mb-0 mb-5">
          <h1
            class="
              gradient-heading
              md:text-banner-secondary-font
              text-2xl
              cambon-font-title
            "
          >
            {{ useCase.template[0].heading.subtitle }}
          </h1>
        </div>
        <div class="lg:w-1/2 w-full">
          <p class="mierb-font text-white font-semibold text-lg mb-4 px-4">
            {{ useCaseDescription.heading.tagsList.title }}
          </p>
          <div class="flex flex-col">
            <div
              v-if="useCaseDescription.heading.tagsList.items"
              v-for="item in useCaseDescription.heading.tagsList.items"
            >
              <div
                :key="item.id"
                class="
                  px-5
                  py-3
                  mx-2
                  border-use-case-border border
                  rounded-2xl
                  inline-flex
                  mb-3
                "
              >
                <p class="mierb-font text-white text-lg">
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <DetailsSection 
      v-if="useCase.list && useCase.list.length" 
      v-for="list in useCase.list"
      :key="list.id"
      :isCentered="false" 
      class="mb-6"
    >
      <div
        class="
          flex flex-wrap
          lg:w-3/4
          w-full
          mx-auto
          items-start
          justify-between
        "
      >
        <div class="lg:w-1/4 w-full lg:mb-0 mb-5">
          <h1
            class="
              mierb-font
              md:text-banner-secondary-font
              text-2xl text-light-meroon
            "
          >
            {{ list.title }}
          </h1>
        </div>
        <div class="lg:w-2/3 w-full lg:px-0 px-5">
          <ul class="list-disc">
            <li v-for="item in list" class="cambon-font text-dark-grey md:text-22px text-lg mb-3">
              {{ item.title || item.text }}
            </li>
          </ul>
        </div>
      </div>
    </DetailsSection>
    <DetailsSection v-if="useCaseDescription.tagsLists" :isCentered="false" class="mb-6">
      <div
        class="
          flex flex-wrap
          lg:w-3/4
          w-full
          mx-auto
          items-start
          justify-between
        "
      >
        <div class="lg:w-1/4 w-full lg:mb-0 mb-5">
          <h1
            class="
              mierb-font
              md:text-banner-secondary-font
              text-2xl text-light-meroon
            "
          >
            {{ useCaseDescription.tagsLists.title }}
          </h1>
        </div>
        <div class="lg:w-2/3 w-full flex lg:flex-nowrap lg:space-x-6 flex-wrap">
          <div
            v-for="tag in useCaseDescription.tagsLists.lists"
            :key="tag.id"
            class="lg:w-1/2 w-full lg:mb-0 mb-5"
          >
            <p class="mierb-font text-dark-grey font-semibold text-lg mb-4">
              {{ tag.title }}
            </p>
            <div
              v-for="item in tag.items"
              :key="item.key"
              class="
                px-5
                py-3
                border-light-meroon border
                rounded-2xl
                inline-flex
                mb-3
              "
            >
              <p class="mierb-font text-dark-grey text-lg">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </DetailsSection>
    <DetailsSection :isCentered="false" class="mb-6">
      <div
        class="
          flex flex-wrap
          lg:w-3/4
          w-full
          mx-auto
          items-start
          justify-between
        "
      >
        <div class="lg:w-1/4 w-full lg:mb-0 mb-5">
          <h1
            class="
              mierb-font
              md:text-banner-secondary-font
              text-2xl text-light-meroon
            "
          >
            {{ useCaseDescription.description.title }}
          </h1>
        </div>
        <div class="lg:w-2/3">
          <div v-html="useCaseDescription.description.text" class="richtext-content"></div>
        </div>
      </div>
    </DetailsSection>
    <UsecaseSection />
    <div class="w-3/4 mx-auto lg:block hidden mb-6 mt-12">
      <NewsLetter :hasLargeLogo="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";

@Component({})
export default class UseCase extends Vue {
  async asyncData(ctx: Context) {
    // code below get's data from the api
    const pulse = await ctx.$strapi.find("pulses", { slug: ctx.params.slug });
    const useCase = pulse[0];
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
    if (useCase?.metadata?.shareImage) {
      const shareImage = useCase?.template[0].hero.cover;

      // if there is default image provided overide fallbackimage with default and then overide with each format
      if (useCase?.metadata.shareImage?.url) {
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
    var useCaseDescription = null;
    useCase.template.forEach(function(item: any) {
      if (item.__component === "templates.use-case") {
        useCaseDescription = item;

        // add backend url to image link
        if (useCaseDescription?.description?.text) {
          useCaseDescription.description.text = useCaseDescription.description.text.replace(
            "/uploads/",
            `${baseUrl}uploads/`
          );
        }
      }
    });
    return { useCase, imageURL, useCaseDescription };
  }
}
</script>

<style scoped lang="scss">
.gradient-heading {
  background: linear-gradient(to left, #f2dcd7, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
.gradient-heading-two {
  background: linear-gradient(to left, #935d50, #553d37);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
</style>
