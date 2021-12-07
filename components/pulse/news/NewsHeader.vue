<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <BackButton link="/pulse" text="Back To Pulse" />
    </div>
    <div class="w-full my-10">
      <div class="lg:flex hidden items-center justify-between w-full mb-10">
        <div class="flex items-center">
          <h1 class="cambon-font-title text-banner-secondary-font text-dark-grey">
            Latest News, Insights &amp; <br />
            Press Releases
          </h1>
        </div>
        <div class="flex items-center space-x-4">
          <p class="text-light-secondary-body text-lg mierb-font">
            View content by
          </p>
          <SelectionButton buttonText="Market" additionalText="1" />
          <SelectionButton buttonText="Function" additionalText="1" />
          <SelectionButton buttonText="Product type" />
          <div>
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
              <img src="/img/icons/search-icon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class NewsHeader extends Vue {}
</script>

<style scoped lang="scss">
</style>
