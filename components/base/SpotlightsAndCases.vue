<template>
  <section class="my-6">
    <BackButton text="Back to Pulse" link="/pulse" />
    <div class="flex lg:flex-nowrap flex-wrap items-center justify-between my-8">
      <div class="lg:w-auto w-full lg:mb-0 mb-4">
        <h1 class="cambon-font-title text-dark-grey text-banner-secondary-font">
          <span v-if="bannerType === 'Spotlight'">Product Spotlights</span>
          <span v-else>Use Cases</span>
        </h1>
      </div>
      <div class="md:flex hidden items-center space-x-6 lg:w-auto w-full">
        <p class="mierb-font text-lg text-light-secondary-body">
          View content by
        </p>
        <SelectionButton buttonText="Market" additionalText="1" />
        <SelectionButton buttonText="Function" additionalText="1" />
        <SelectionButton buttonText="Product Type" additionalText="1" />
        <div
          class="
            bg-light-element-bg
            w-11
            h-11
            rounded-full
            flex
            items-center
            justify-center
          "
        >
          <button class="outline-none focus:outline-none">
            <img src="/img/icons/search-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
    <div
      class="rounded-25 px-4 py-8"
      :class="[bannerType === 'Spotlight' ? 'bg-product-spotlights-bg' : 'bg-light-pink']"
    >
      <nuxt-link :to="highlightCard.url">
        <SpotlightAndCaseBanner
          :hasUseCase="hasUseCase"
          :image="highlightCard.image.default"
          :title="highlightCard.title"
          :subtitle="highlightCard.subtitle"
          :publishedDate="highlightCard.publishedDate"
          :categories="highlightCard.categories"
          :templateType="highlightCard.type"
        />
      </nuxt-link>
      <div class="flex flex-wrap my-6">
        <template v-if="hasUseCase === false" v-for="card in spotlightCards">
          <div
            :key="card.id"
            v-if="card.isVertical"
            class="xl:w-1/3 lg:w-1/2 w-full lg:pr-5 mb-5 cursor-pointer"
            :data-aos="card.animation"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <nuxt-link :to="card.url">
              <ExploreSectionYCard
                :cardImg="card.image.default"
                :cardLogo="card.cardLogo"
                :cardTitle="card.title"
                :cardDate="card.publishedDate"
                :cardSubtitle="card.subtitle"
                :cardTags="card.categories"
                :templateType="card.type"
                :hasCustomWidth="true"
              />
            </nuxt-link>
          </div>
        </template>
        <template v-if="hasUseCase === true" v-for="card in useCasesCards">
          <div
            :key="card.id"
            class="xl:w-1/3 lg:w-1/2 w-full lg:pr-5 mb-5 cursor-pointer"
            :data-aos="card.animation"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <nuxt-link :to="card.url">
              <ExploreSectionXCard
                :cardSideImg="card.image.default"
                :cardTitle="card.title"
                :cardSubtitle="card.subtitle"
                :cardTags="card.categories"
                :templateType="card.type"
                :isBgWhite="true"
              />
            </nuxt-link>
          </div>
        </template>
      </div>
      <!--div class="w-full flex justify-center items-center">
        <button
          class="
            outline-none
            focus:outline-none
            bg-light-element-bg
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-full
            mr-4
          "
        >
          <img src="/img/icons/arrow-left-icon.svg" alt="" />
        </button>
        <button
          class="
            rounded-lg
            outline-none
            focus:outline-none
            border border-light-element-bg
            w-12
            h-12
            flex
            justify-center
            items-center
            text-light-secondary-body
            mierb-font
            mr-4
          "
        >
          1
        </button>
        <button
          class="
            rounded-lg
            outline-none
            focus:outline-none
            bg-light-element-bg
            w-12
            h-12
            flex
            justify-center
            items-center
            text-medium-bronze
            mierb-font
            mr-4
          "
        >
          2
        </button>
        <button
          class="
            rounded-lg
            outline-none
            focus:outline-none
            bg-light-element-bg
            w-12
            h-12
            flex
            justify-center
            items-center
            text-medium-bronze
            mierb-font
            mr-4
          "
        >
          3
        </button>
        <button
          class="
            rounded-lg
            outline-none
            focus:outline-none
            bg-light-element-bg
            w-12
            h-12
            flex
            justify-center
            items-center
            text-medium-bronze
            mierb-font
            mr-4
          "
        >
          4
        </button>
        <button
          class="
            outline-none
            focus:outline-none
            bg-light-element-bg
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-full
          "
        >
          <img src="/img/icons/arrow-right-icon.svg" alt="" />
        </button>
      </div-->
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class SpotlightsAndCases extends Vue {
  @Prop({ default: "Spotlight" }) bannerType!: string;
  @Prop({ default: false }) hasUseCase!: boolean;
  @Prop() spotlightCards!: any[];
  @Prop() useCasesCards!: any[];

  public highlightCard: any = this.hasUseCase
    ? this.useCasesCards.shift()
    : this.spotlightCards.shift();
}
</script>

<style lang="scss"></style>
