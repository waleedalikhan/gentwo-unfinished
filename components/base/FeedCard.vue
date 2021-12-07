<template>
  <nuxt-link :to="cardPath">
    <div class="g2-card flex flex-col overflow-hidden rounded-xl cursor-pointer h-full">
      <div class="w-full h-215px relative">
        <!-- <picture>
            <source
                media="(min-width: 1024px)"
                :srcset="cardImg.large">
            <source
                media="(min-width: 650px)"
                :srcset="cardImg.medium">
            <source
                media="(min-width: 465px)"
                :srcset="cardImg.small">
            <img :src="cardImg.default"
            alt="a cute kitten">
          </picture> -->
        <img
          :src="cardImg.default"
          alt=""
          class="w-full rounded-t-xl h-full absolute inset-0 object-cover"
        />
      </div>
      <div class="w-full bg-white rounded-b-xl p-6 flex flex-col justify-between flex-1 min-h-279px">
        <div class="w-full">
          <template v-for="category in cardCategories" v-if="">
            <p
              :key="category.id"
              v-if="category.name"
              class="
                bg-dark-grey
                text-white text-sm
                mierb-font
                rounded-full
                px-3
                py-1
                inline-flex
                mb-3
                mr-1
              "
            >
              {{ category.name }}
            </p>
          </template>
          <p
            v-if="cardTag"
            class="
              text-white text-sm
              mierb-font
              rounded-full
              px-3
              py-1
              inline-flex
              mb-3
            "
            :class="[cardTag === 'News' ? 'bg-dark-grey' : 'bg-brown']"
          >
            {{ cardTag }}
          </p>
          <p class="text-dark-grey text-sm mierb-font">{{ cardDate }}</p>
        </div>
        <div class="w-full">
          <h1 class="text-2xl mierb-font font-semibold">
            {{ cardTitle }}
          </h1>
        </div>
        <div class="w-full">
          <p class="mierb-font text-light-secondary-body line-clamp-4">
            {{ cardText }}
          </p>
          <!-- <span class="mierb-font text-medium-bronze cursor-pointer"> → Read more</span> -->
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { IImage, ICategory } from "~/utils/interfaces";

@Component({})
export default class FeedCard extends Vue {
  @Prop() cardImg!: IImage;
  @Prop() cardTag!: string;
  @Prop() cardCategories!: ICategory[];
  @Prop() cardDate!: string;
  @Prop() cardTitle!: string;
  @Prop() cardText!: string;
  @Prop() cardPath!: string;
  @Prop() cardData!: object;

}
</script>

<style scoped lang="scss">
</style>
