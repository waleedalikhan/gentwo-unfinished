<template>
  <section
    class="
        bg-pulse-main
        px-5
        py-8
        rounded-25
        flex flex-wrap
        mb-10
        pulse-banner
      "
  >
    <div class="w-full">
      <h1
        class="
            text-dark-grey text-banner-secondary-font
            cambon-font-title
            banner-title
          "
      >
        Latest headlines, insights &amp; press releases
      </h1>
    </div>
    <nuxt-link
      :to="highlightCard.url"
      class="
          w-full
          border border-light-secondary-border
          rounded-25
          flex flex-wrap
          items-start
          my-6
        "
    >
      <div
        class="
            lg:w-1/2
            w-full
            lg:order-first
            order-last
            lg:mt-0
            mt-5
            banner-card
          "
        style="align-self: stretch"
      >
        <div
          class="
              asset-card
              md:px-12
              px-4
              md:pt-16
              pt-6
              md:pb-10
              pb-6
              flex flex-wrap
              rounded-25
              h-343px 
              lg:h-full 
            "
          :style="`background: url(${highlightCard.image}) center / cover no-repeat`"
        />
      </div>
      <div class="lg:w-1/2 w-full lg:h-full flex flex-wrap md:p-8 p-4">
        <div class="w-full">
          <p
            v-for="category in highlightCard.categories"
            class="
                bg-dark-grey
                text-white
                rounded-2xl
                text-sm
                mierb-font
                px-4
                py-1
                inline-flex
                mb-3
                mr-1
                banner-tag
              "
          >
            {{ category.name }}
          </p>
          <p class="text-sm mierb-font banner-date">{{ highlightCard.publishedDate }}</p>
        </div>
        <div class="w-full self-center xl:my-0 lg:my-5 md:my-0 my-5">
          <h2
            class="
                text-dark-grey
                cambon-font-title
                xl:text-56px
                xl:leading-tight 
                lg:text-4xl
                md:text-56px
                text-banner-secondary-font
                banner-heading 
                mb-8
              "
          >
            {{ highlightCard.title }}
          </h2>
        </div>
        <div class="w-full self-end">
          <p class="mierb-font text-dark-grey md:text-lg banner-text line-clamp-4">
            {{ highlightCard.subtitle }}
          </p>
        </div>
      </div>
    </nuxt-link>
    <div class="w-full flex lg:flex-nowrap lg:space-x-8 flex-wrap">
      <template v-for="card in newsCards">
        <nuxt-link
          :to="card.url"
          :key="card.id"
          class="lg:w-1/2 w-full lg:mb-0 mb-6 banner-news-card"
        >
          <NewsCard
            :cardTag="card.categories[0].name"
            :cardDate="card.publishedDate"
            :cardTitle="card.title"
            :cardSubtitle="card.subtitle"
            :cardImg="card.image"
            :isFullWidth="true"
            :isHeight300="true"
            :isTextWidthFull="true"
            :isTextHeightRelative="true"
          />
        </nuxt-link>
      </template>
    </div>
    <div class="w-full flex md:justify-end justify-center mt-6">
      <nuxt-link to="/pulse/news">
        <button
          class="
              md:text-lg
              mierb-font
              text-white
              outline-none
              focus:outline-none
              bg-black
              opacity-75
              rounded-xl
              md:px-6
              px-4
              py-3
              truncate
              banner-button
            "
        >
          See all news, insights & press releases
        </button>
      </nuxt-link>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import gsap from "gsap";

@Component({})
export default class NewsSection extends Vue {
  public highlightCard: any = {
    url: "",
  };
  public newsCards: any[] = [];

  async fetch() {
    const baseUrl = this.$strapi.options.url.slice(0, -1);

    const newsResponse = await this.$strapi.find("pulses", [
      ["type", "Insights"],
      ["type", "Press Release"],
      ["type", "Generic"],
      ["publishedDate_null", "false"],
      ["_sort", "publishedDate:desc"],
      ["_limit", "3"],
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

    this.highlightCard = this.newsCards.shift();
  }

  // updated() {
  //   if (this.newsCards.length > 0) {
  //     gsap.from(".pulse-banner", {
  //       y: 200,
  //       opacity: 0,
  //       height: "1200px",
  //       duration: 0.8,
  //       ease: "ease.out",
  //     });
  //     gsap.to(".pulse-banner", {
  //       y: 0,
  //       opacity: 1,
  //       height: "100%",
  //       duration: 0.8,
  //       ease: "ease.out",
  //     });
  //     gsap.from(".banner-title", {
  //       y: 200,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "ease.out",
  //       delay: 0.1,
  //     });
  //     gsap.from(".banner-card", {
  //       y: 200,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "ease.out",
  //       delay: 0.3,
  //     });
  //     gsap.from(".banner-tag", {
  //       y: 200,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "ease.out",
  //       delay: 0.5,
  //     });
  //     gsap.from(".banner-date", {
  //       y: 200,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "ease.out",
  //       delay: .6,
  //     });
  //     gsap.from(".banner-heading", {
  //       y: 200,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "ease.out",
  //       delay: 0.7,
  //     });
  //     gsap.from(".banner-text", {
  //       y: 200,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "ease.out",
  //       delay: 0.9,
  //     });
  //     gsap.from(".banner-news-card", {
  //       y: 200,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "ease.out",
  //       delay: 1.1,
  //     });
  //     gsap.from(".banner-button", {
  //       y: 200,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "ease.out",
  //       delay: 1.1,
  //     });
  //   }
  // }
}
</script>

<style scoped lang="scss"></style>
