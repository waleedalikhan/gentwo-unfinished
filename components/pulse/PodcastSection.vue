<template>
  <section class="md:p-8 p-4">
    <div class="border border-light-bronze rounded-25 md:p-8 p-4 lg:flex">
      <BaseSlider :hasBronzeIcons="true">
        <div class="md:mr-10">
          <div class="my-20">
            <h1
              class="text-banner-secondary-font text-medium-bronze cambon-font-title"
            >
              Securitization <br />
              Talks Podcast
            </h1>
          </div>
          <div>
            <button
              class="
                bg-transparent
                outline-none
                focus:outline-none
                text-lg text-medium-bronze
                mierb-font
                px-6
                py-3
                rounded-xl
                border border-medium-bronze
              "
            >
              Subscribe on Spotify
            </button>
          </div>
        </div>
        <template v-for="card in videos">
          <div :key="card.id" class="md:mr-10 md:px-0 px-4">
            <VideoCard
              :cardThumbnail="card.cardThumbnail"
              :cardTitle="card.cardTitle"
              :cardDate="card.cardDate"
            />
          </div>
        </template>
      </BaseSlider>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { podcastCards } from "~/utils/mock";
import { IVideoCard } from "~/utils/interfaces";

@Component({})
export default class PodcastSection extends Vue {
  public videos: IVideoCard[] = podcastCards;
}
</script>

<style scoped lang="scss">
</style>
