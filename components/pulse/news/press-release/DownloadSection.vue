<template>
  <section
    class="
      bg-news-topic-bg
      border border-light-secondary-border
      rounded-2xl
      md:py-20
      py-4
      md:px-0
      px-4
    "
  >
    <div class="flex flex-wrap xl:w-2/3 md:w-3/4 w-full mx-auto justify-between">
      <div class="lg:w-1/4 w-full lg:mb-0 mb-4">
        <p class="mierb-font text-dark-grey mb-4">{{ documents.title }}</p>
        <DownloadButton
          v-for="(document, index) in documents.documents"
          :key="document.id"
          :buttonText="document.label"
          :title="document.file.name"
          :url="baseUrl + document.file.url"
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="200 * index"
        />
      </div>
      <div class="lg:w-2/3 w-full flex flex-wrap items-start h-full">
        <div class="w-full md:mb-0 md:cursor-auto cursor-pointer">
          <p class="mierb-font text-dark-grey md:mb-4 mb-0 md:block hidden">
            View on
          </p>
          <button
            class="
              bg-transparent
              outline-none
              focus:outline-none
              justify-between
              w-full
              md:hidden
              flex
            "
            @click="showViewOn = !showViewOn"
          >
            <p class="mierb-font text-dark-grey md:mb-4 mb-0">{{ view.title }}</p>
            <img
              v-if="isViewOnToggle"
              src="/img/icons/arrow-down-icon.svg"
              alt=""
              class="transform cool-transition"
              :class="[showViewOn ? 'rotate-180' : 'rotate-0']"
            />
          </button>
        </div>
        <div v-if="showViewOn" class="w-full flex flex-col md:mt-0 mt-5">
          <div
            v-for="(viewItem, index) in view.items"
            :key="index"
            class="lg:w-1/2 w-full lg:pr-4"
            data-aos="fade-up"
            data-aos-duration="800"
            :data-aos-delay="200 * index"
          >
            <ViewButton :buttonText="viewItem.text" :url="viewItem.url" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class DownloadSection extends Vue {
  @Prop() documents!: Array<any>;
  @Prop() view!: Array<any>;

  public isViewOnToggle: boolean = false;
  public showViewOn: boolean = false;
  public baseUrl = this.$strapi.options.url.slice(0, -1);

  mounted() {
    if (window.innerWidth < 767) {
      this.isViewOnToggle = true;
      this.showViewOn = false;
    } else {
      this.isViewOnToggle = false;
      this.showViewOn = true;
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth < 767) {
        this.isViewOnToggle = true;
        this.showViewOn = false;
      } else {
        this.isViewOnToggle = false;
        this.showViewOn = true;
      }
    });
  }

  destroyed() {
    window.removeEventListener("resize", () => {
      if (window.innerWidth < 767) {
        this.isViewOnToggle = true;
        this.showViewOn = false;
      } else {
        this.isViewOnToggle = false;
        this.showViewOn = true;
      }
    });
  }
}
</script>

<style scoped lang="scss"></style>
