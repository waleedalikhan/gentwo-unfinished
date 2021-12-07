<template>
  <DetailsSection :isCentered="false">
    <div class="flex flex-wrap xl:w-1/2 lg:w-2/3 w-full mx-auto">
      <div class="rounded-full w-32 h-32 sm:mr-10 mr-0 md:mb-0 mb-6" v-if="picture">
        <div>
          <img :src="baseUrl + picture.url" :alt="name" />
        </div>
      </div>
      <div class="sm:flex-1 w-full">
        <p class="mierb-font text-dark-grey">About the author</p>
        <p
          class="
            mierb-font
            text-dark-grey text-banner-secondary-font
            font-semibold
          "
        >
          {{ name }}
        </p>
        <p class="text-3xl mierb-font text-dark-grey font-light mb-4">
          {{ position }} at
          <span class="text-banner-secondary-font text-medium-bronze">{{ company }}</span>
        </p>
        <p class="text-sm text-dark-grey mierb-font" v-if="bio">
          {{ bio }}
        </p>
      </div>
    </div>
  </DetailsSection>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class AuthorSection extends Vue {
  @Prop() name!: string;
  @Prop() bio!: string;
  @Prop() company!: string;
  @Prop() position!: string;
  @Prop() picture!: any;

  public baseUrl = this.$strapi.options.url.slice(0, -1);
}
</script>

<style scoped lang="scss"></style>
