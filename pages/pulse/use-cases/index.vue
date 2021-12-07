<template>
  <div>
    <SpotlightsAndCases 
      bannerType="use cases" 
      :hasUseCase="true" 
      :useCasesCards="useCases" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Context } from "@nuxt/types";

@Component({})
export default class UseCases extends Vue {
  async asyncData(ctx: Context) {
    var useCasesResponse = await ctx.$strapi.find("pulses", {
      type: "Use Case",
      _sort: "publishedDate:desc",
    });

    const baseUrl = ctx.$strapi.options.url;
    var useCases: any[] = useCasesResponse.map((useCase: any) => {
      // setting default image where there isn't
      var fallBackImage: string = "/img/pulse-page/podcast-section/podcast-one.png";
      var imageURL = {
        default: fallBackImage,
        small: fallBackImage,
        medium: fallBackImage,
        large: fallBackImage,
      };

      // create object with defined formats for each screensize
      if (useCase.metadata?.shareImage) {
        const shareImage = useCase.template[0].hero.cover;

        // if there is default image provided overide fallbackimage with default and then overide with each format
        if (useCase.metadata.shareImage?.url) imageURL.default = baseUrl + shareImage.url.substr(1);
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
      // const use_caseTemplate = use_case.template.find( ( item:any ) => item.__component==="templates.product-use_case");
      // const cardLogo = baseUrl+use_caseTemplate.client.logo.formats.thumbnail.url

      return {
        id: useCase.id,
        url: `/pulse/use-cases/${useCase.slug}`,
        image: imageURL,
        // cardLogo: cardLogo,
        categories: useCase.categories,
        publishedDate: ctx.$dayjs(useCase.publishedDate || useCase.published_at).format("D MMMM YYYY"),
        title: useCase.template[0].hero.title,
        subtitle: useCase.template[0].heading?.subtitle,
        slug: useCase.slug,
        type: useCase.type,
        isVertical: true,
        hasProductSpotlight: false,
        hasCaseStudy: true,
        cardClass: "card-one",
        animation: "fade-right",
      };
    });

    return { useCases };
  }
}
</script>

<style scoped lang="scss"></style>
