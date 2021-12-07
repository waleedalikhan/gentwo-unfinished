<template>
  <div>
    <NewsHeader />
    <ExploreNewsTopicSection
      :newsTopicCards="newsTopicCards"
      :itemsCount="itemsCount"
      :filters="allTypes"
      @go-to-page="fetchData"
    />
    <div class="w-4/5 mx-auto lg:block hidden mb-6 mt-12">
      <NewsLetter :hasLargeLogo="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class News extends Vue {
  public itemsCount: any = 0;
  public newsTopicCards: any[] = [];
  public allTypes: Array<any> = [];

  created() {
    this.fetchData({ page: 1, filter: "all" });
  }
  
  async getItemsCount(filter: string = "all") {
    // return number of total items based on filter without pagination
    if (filter === "all") {
      this.itemsCount = await this.$strapi.count("pulses", [
        ["type", "Insights"],
        ["type", "Press Release"],
        ["type", "Generic"],
        ["publishedDate_null", "false"],
        ["_sort", "publishedDate:desc"],
      ]);
    } else {
      this.itemsCount = await this.$strapi.count("pulses", [
        ["type", filter],
        ["publishedDate_null", "false"],
        ["_sort", "publishedDate:desc"],
      ]);
    }
  }

  async fetchData(options: any) {
    options.page -= 1;
    options.page *= 12;
    var newsTopicCards: any[] = [];
    if (options.filter === "all") {
      var pulses = await this.$strapi.find("pulses", [
        ["type", "Insights"],
        ["type", "Press Release"],
        ["type", "Generic"],
        ["publishedDate_null", "false"],
        ["_sort", "publishedDate:desc"],
        ["_limit", "12"],
        ["_start", options.page],
      ]);
      this.allTypes = [...new Set(pulses.map((item: any) => item.type))];
    } else {
      var pulses = await this.$strapi.find("pulses", [
        ["type", options.filter],
        ["publishedDate_null", "false"],
        ["_sort", "publishedDate:desc"],
        ["_limit", "12"],
        ["_start", options.page],
      ]);
    }
    this.getItemsCount(options.filter);
    const baseUrl = this.$strapi.options.url;
    if (pulses.length) {
      pulses.forEach(function(pulse: any) {
        // setting default image where there isn't
        var fallBackImage: string = "/img/pulse-page/podcast-section/podcast-one.png";
        var imageURL = {
          default: fallBackImage,
          small: fallBackImage,
          medium: fallBackImage,
          large: fallBackImage,
        };

        // create object with defined formats for each screensize
        if (pulse.metadata?.shareImage) {
          const shareImage = pulse.metadata.shareImage;
          // if there is default image provided overide fallbackimage with default and then overide with each format
          if (pulse.metadata.shareImage?.url) imageURL.default = baseUrl + shareImage.url.substr(1);
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

        // setting appropriate path for either press-release, generic or insights
        var computedPath = "";
        if (pulse.type === "Press Release") {
          computedPath = `/pulse/news/press-release/${pulse.slug}`;
        } else if (pulse.type === "Insights") {
          computedPath = `/pulse/news/insights/${pulse.slug}`;
        } else {
          computedPath = `/pulse/news/generic/${pulse.slug}`;
        }

        newsTopicCards.push({
          id: pulse.id,
          type: pulse.type,
          cardImg: imageURL,
          cardCategories: pulse.categories,
          cardDate: pulse.publishedDate,
          cardTitle: pulse.template[0].hero.title,
          cardText: pulse.template[0].heading?.subtitle || pulse.metadata.metaDescription,
          animationDelay: "200",
          cardPath: computedPath,
        });
      });
    }
    // this.allTypes = [...new Set(newsTopicCards.map(item => item.type))];

    this.newsTopicCards = newsTopicCards;
  }
}
</script>

<style scoped lang="scss"></style>
