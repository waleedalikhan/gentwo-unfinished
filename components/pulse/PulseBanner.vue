<template>
  <section class="my-6">
    <div class="lg:flex hidden items-center justify-between w-full mb-10">
      <div class="flex items-center">
        <p class="text-teal mierb-font text-banner-secondary-font mr-6">
          Pulse
        </p>
        <SelectionButton buttonText="Jump to" />
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
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class PulseBanner extends Vue {
}
</script>

<style  scoped lang="scss">
</style>
