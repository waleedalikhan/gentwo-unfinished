<template>
  <div
    class="
      g2-card
      min-h-453px
      h-full
      flex flex-wrap
      rounded-2xl
      shadow-explore-card-shadow
      lg:pl-2 lg:py-2 lg:pr-2 p-4
      relative
    "
    :class="[hasCustomWidth ? customWidth : 'w-full', isBgWhite ? 'bg-white' : 'bg-explore-card-x-bg']"
  >
    <div class="flex flex-wrap h-full min-h-453px">
    <div class="lg:w-1/2 w-full lg:max-h-full max-h-80">
      <img
        :src="cardSideImg"
        alt=""
        class="h-full w-full rounded-xl object-cover g2-card-img"
      />
    </div>
      <div class="lg:w-1/2 w-2/3 lg:mb-0 mb-6 flex flex-wrap items-center pr-2 pb-4 pl-4">
        <h1 class="cambon-font-title tracking-tight text-dark-grey text-2xl w-full mt-12 mb-4">
          {{ cardTitle }}
        </h1>

        <p class="text-light-secondary-body mierb-font w-full self-end line-clamp-4">
          {{ cardSubtitle }}
          <span class="cursor-pointer text-medium-bronze"> → Read more</span>
        </p>
      </div>
      <!-- <div
      class="lg:w-1/2 w-1/3 rounded-lg lg:h-explore-card-x-height"
      :style="{'backgroundImage': `url(${cardSideImg})`}">
       </div> -->
        <!-- <img
          :src="cardSideImg"
          alt=""
          class="w-full rounded-t-xl h-full object-cover"
        /> -->
    </div>
    <div class="absolute top-5 left-5 flex flex-wrap items-center">
      <span
        class="
          text-white
          px-3
          py-1
          text-sm
          mierb-font
          mr-1
          mb-2
          rounded-full
          banner-tag-one
          bg-light-meroon
        "
      >
        {{ templateType }}
      </span>
      <template v-for="tag in cardTags">
        <span
        :key="tag.id"
        class="
          text-white
          px-3
          py-1
          mr-1
          mb-2
          text-sm
          mierb-font
          rounded-full
          lg:text-sm text-xs
        "
        :class="[(tag.text || tag.name) === 'Use Case' ? 'bg-light-meroon' : 'bg-teal']"
        >
        {{ tag.text || tag.name }}
        </span>
        </span>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

interface ICardTags {
  id: string | number;
  bg: string;
  text: string;
}

@Component({})
export default class ExploreSectionXCard extends Vue {
  @Prop() cardTitle!: string;
  @Prop() cardSubtitle!: string;
  @Prop() cardSideImg!: string;
  @Prop() cardTags!: ICardTags[];
  @Prop() templateType!: string;
  @Prop() hasCustomWidth!: boolean;
  @Prop() customWidth!: string;
  @Prop() isBgWhite!: boolean;
}
</script>

<style scoped lang="scss">
.blur-bg {
  backdrop-filter: blur(12px);
}
</style>
