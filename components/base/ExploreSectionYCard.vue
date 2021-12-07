<template>
  <div
    class="
      g2-card
      min-h-453px
      h-full
      flex flex-wrap
      bg-explore-card-y-bg
      rounded-2xl
      shadow-explore-card-shadow
      pb-8
      relative
    "
    :class="[hasCustomWidth ? customWidth : 'w-full']"
  >
    <div class="w-full">
      <img
        :src="cardImg"
        alt=""
        class="h-explore-y-img-height w-full rounded-t-xl object-cover g2-card-img"
      />
    </div>
    <div class="flex flex-wrap lg:px-8 px-4 relative">
      <div class="w-full absolute -top-6">
        <img :src="cardLogo" alt="" />
      </div>
      <div class="w-full mt-10">
        <h1 class="mierb-font text-2xl font-semibold text-teal">
          {{ cardTitle }}
        </h1>
        <p class="text-sm text-teal mierb-font my-4">{{ cardDate }}</p>
        <p class="text-light-secondary-body mierb-font line-clamp-4">
          {{ cardSubtitle }}
          <span class="cursor-pointer text-medium-bronze"> → Read more</span>
        </p>
      </div>
    </div>
    <div class="absolute top-5 right-5 flex flex-wrap justify-end xl:ml-8 ml-4">
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
          bg-teal
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
export default class ExploreSectionYCard extends Vue {
  @Prop() cardImg!: string;
  @Prop() cardLogo!: string;
  @Prop() cardTitle!: string;
  @Prop() cardDate!: string;
  @Prop() cardSubtitle!: string;
  @Prop() cardTags!: ICardTags[];
  @Prop() templateType!: string;
  @Prop() hasCustomWidth!: boolean;
  @Prop() customWidth!: string;

}
</script>

<style scoped lang="scss">
.blur-bg {
  backdrop-filter: blur(12px);
}
</style>
