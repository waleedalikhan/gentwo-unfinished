<template>
  <div
    class="mr-5 md:mr-0 g2-card"
    :class="[
      isFullWidth ? 'w-full' : 'lg:w-news-card-width sm:w-news-card-width-small',
      isHeight300 ? 'h-news-card-height-small' : 'lg:h-news-card-height h-news-card-height-small',
    ]"
  >
    <div class="flex h-full">
      <div
        class="lg:w-news-card-img w-new-card-img-small rounded-l-xl"
        :style="`background: url(${cardImg}) center / cover no-repeat`"
      ></div>
      <div
        class="flex flex-col justify-between p-6 overflow-y-auto rounded-r-xl bg-news-card-bg card-scroll"
        :class="[
          isTextWidthFull ? 'flex-1' : 'lg:w-news-card-content w-news-card-content-small',
          isTextHeightRelative ? 'h-full' : 'lg:h-news-card-height',
        ]"
      >
        <div class="flex flex-wrap">
          <div class="w-full mb-4">
            <div>
              <span
                class="text-white mierb-font rounded-25 px-4 py-1.5 text-sm"
                :class="[cardTag === 'News' ? 'bg-dark-grey' : 'bg-brown']"
              >
                {{ cardTag }}
              </span>
            </div>
          </div>
        </div>
        <div class="w-full mt-8 mb-4">
          <p class="text-sm mierb-font">{{ cardDate }}</p>
        </div>
        <div
          class="flex items-center w-full mb-6"
          :class="[isTextHeightRelative ? 'min-h-news-card-title-two' : 'min-h-news-card-title']"
        >
          <h1 class="text-xl font-semibold sm:text-2xl mierb-font">
            {{ cardTitle }}
          </h1>
        </div>
        <p class="mierb-font line-clamp-2">
          {{ cardSubtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class NewsCard extends Vue {
  @Prop() cardTag!: string;
  @Prop() cardDate!: string;
  @Prop() cardTitle!: string;
  @Prop() cardSubtitle!: string;
  @Prop() cardImg!: string;
  @Prop({ default: false }) isFullWidth!: boolean;
  @Prop({ default: false }) isHeight300!: boolean;
  @Prop({ default: false }) isTextWidthFull!: boolean;
  @Prop({ default: false }) isTextHeightRelative!: boolean;
}
</script>

<style scoped lang="scss">
.news-img-one {
  background: url("/img/latest-news/news-1.jpg") left / cover no-repeat;
}

.news-img-two {
  background: url("/img/latest-news/news-2.jpg") left / cover no-repeat;
}

.card-scroll {
  &::-webkit-scrollbar {
    width: 0px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 0px;
  }
}
</style>
