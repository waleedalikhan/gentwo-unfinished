<template>
  <section class="bg-teal p-5 rounded-25">
    <div class="flex lg:flex-nowrap lg:space-x-8 flex-wrap">
      <div class="lg:w-65% w-full flex-wrap">
        <div class="w-full pl-4 mb-4">
          <h1 class="mierb-font text-white text-lg">The Client</h1>
        </div>
        <div class="w-full flex flex-wrap">
          <div class="w-full mb-5" data-aos="fade-up" data-aos-duration="800">
            <VideoDetailCard>
              <div class="flex flex-wrap">
                <div class="w-full flex items-center">
                  <img
                    :src="baseUrl + client.logo.url"
                    alt="client.name"
                    v-if="client.logo"
                    style="height: 2.5em"
                  />
                  <p
                    class="
                      cambon-font
                      text-white text-banner-secondary-font
                      pl-3
                    "
                  >
                    {{ client.name }}
                  </p>
                </div>
                <div class="w-full mt-5">
                  <p class="mierb-font text-lg text-light-warm-white">
                    {{ client.description }}
                  </p>
                </div>
              </div>
            </VideoDetailCard>
          </div>
          <div class="w-full flex xl:flex-nowrap flex-wrap xl:space-x-5">
            <div
              v-for="(field, index) in client.fields"
              :key="field.id"
              class="xl:w-1/3 lg:w-1/2 w-full xl:mb-0 mb-5 pr-0 lg:pr-5 xl:pr-0"
              data-aos="fade-up"
              data-aos-duration="800"
              :data-aos-delay="200 + 200 * index"
            >
              <VideoDetailCard>
                <div class="flex flex-col h-full">
                  <div class="w-full h-full flex flex-col justify-between">
                    <p class="mierb-font text-lg text-light-warm-white mb-3">
                      {{ stripHtml(field.title) }}
                    </p>
                    <h2
                      class="
                        text-white
                        cambon-font
                        text-banner-secondary-font
                        leading-tight
                      "
                    >
                      {{ stripHtml(field.text) }}
                    </h2>
                    <a
                      v-if="field.button"
                      :href="field.button.url"
                      :target="field.button.newTab ? '_blank' : '_self'"
                      class="
                        w-full
                        py-3
                        rounded-xl
                        bg-transparent
                        outline-none
                        focus:outline-none
                        border border-spotlight-bg
                        flex
                        items-center
                        justify-center
                        mierb-font
                        text-white
                      "
                    >
                      {{ field.button.text }}
                    </a>
                  </div>
                </div>
              </VideoDetailCard>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-35% w-full flex flex-col space-y-5">
        <div class="w-full pl-4">
          <h1 class="mierb-font text-white text-lg">{{ client.lists[0].title }}</h1>
        </div>
        <div
          v-for="(item, index) in client.lists[0].items"
          :key="item.id"
          class="w-full"
          data-aos="fade-up"
          data-aos-duration="800"
          :data-aos-delay="200 * index"
        >
          <VideoDetailCard :hasFixedHeight="false">
            <div class="flex flex-col h-full">
              <div class="w-full h-full flex flex-col justify-between">
                <p class="mierb-font text-lg text-light-warm-white mb-3">
                  {{ stripHtml(item.title) }}
                </p>
                <h2
                  class="
                    text-white
                    cambon-font
                    text-banner-secondary-font
                    leading-tight
                  "
                  v-html="item.text"
                >
                  {{ item.text }}
                </h2>
                <a
                  v-if="item.button"
                  :href="item.button.url"
                  :target="item.button.newTab ? '_blank' : '_self'"
                  class="
                    w-full
                    py-3
                    rounded-xl
                    bg-transparent
                    outline-none
                    focus:outline-none
                    border border-spotlight-bg
                    flex
                    items-center
                    justify-center
                    mierb-font
                    text-white
                  "
                >
                  {{ item.button.text }}
                </a>
              </div>
            </div>
          </VideoDetailCard>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center mb-6 mt-10" data-aos="fade-up" data-aos-duration="800">
      <client-only>
        <vimeo-player
          ref="player"
          :options="{ responsive: true }"
          :video-url="client.video.videoUrl"
          class="rounded-xl w-10/12 overflow-hidden"
        />
      </client-only>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class VideoSection extends Vue {
  @Prop() client!: any;

  public baseUrl = this.$strapi.options.url.slice(0, -1);

  stripHtml(html: string) {
    if (process.client) {
      let tmp = document.createElement("DIV");
      tmp.innerHTML = html;
      return tmp.textContent || tmp.innerText || "";
    } else {
      return "";
    }
  }
}
</script>

<style scoped lang="scss"></style>
