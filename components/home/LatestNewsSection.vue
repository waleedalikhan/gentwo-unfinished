<template>
  <section
    class="
      rounded-25
      bg-latest-news-section-bg
      mb-6
      lg:p-20
      md:p-12
      p-5
      overflow-x-hidden
    "
  >
    <div class="py-10 md:px-10 px-6 lg:px-16 rounded-25 news-border lg:flex">
      <BaseSlider>
        <div class="md:mr-16 mr-5">
          <div class="lg:mt-40 mt-16 lg:mb-40 mb-10">
            <h1
              class="
                text-dark-grey text-banner-secondary-font
                cambon-font-title
                leading-tight
              "
            >
              Latest news, <br />
              insights & press <br />
              releases
            </h1>
          </div>
          <div>
            <button
              class="
                h-14
                w-40
                bg-dark-grey
                rounded-xl
                flex
                items-center
                justify-center
                outline-none
                focus:outline-none
                text-white
                mierb-font
              "
            >
              Read our Blog
            </button>
          </div>
        </div>
        <template v-for="card in newsCards">
          <div :key="card.id" class="md:mr-8 mr-5">
            <nuxt-link :to="card.url">
              <NewsCard
                :isFullWidth="true"
                :cardTag="card.categories[0].name"
                :cardDate="card.publishedDate"
                :cardTitle="card.title"
                :cardSubtitle="card.subtitle"
                :cardImg="card.image"
                :hasCustomWidth="true"
                customWidth="md:w-569px w-full"
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
import { INewsCard } from "~/utils/interfaces";

@Component({})
export default class LatestNewsSection extends Vue {
  public newsCards: INewsCard[] = [];

  async fetch() {
    const baseUrl = this.$strapi.options.url.slice(0, -1);

    const newsResponse = await this.$strapi.find("pulses", [
      ["type", "Insights"],
      ["type", "Press Release"],
      ["type", "Generic"],
      ["publishedDate_null", "false"],
      ["_sort", "publishedDate:desc"],
      ["_limit", "5"],
    ]);

    this.newsCards = newsResponse.map((newsItem: any) => ({
      url: `pulse/news/${newsItem.template[0].__component.replace("templates.", "")}/${
        newsItem.slug
      }`,
      categories: newsItem.categories,
      publishedDate: this.$dayjs(newsItem.publishedDate).format("D MMMM YYYY"),
      title: newsItem.template[0].hero.title,
      subtitle: newsItem.template[0].heading?.subtitle,
      image: baseUrl + newsItem.template[0].hero.cover?.url,
    }));
  }
}
</script>

<style scoped lang="scss">
.news-border {
  border: 1px solid rgba(21, 28, 31, 0.14);
}
</style>
