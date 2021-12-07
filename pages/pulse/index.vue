<template>
  <div>
    <PulseBanner />
    <NewsSection />
    <div class="w-4/5 mx-auto lg:block hidden">
      <NewsLetter :hasLargeLogo="true" />
    </div>
    <SpotlightSection class="my-6" />
    <UsecaseSection />
    <ExploreTopicSection class="my-6" />
    <PodcastSection class="mb-6"/>
    <InnovatorSection />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Pulse extends Vue {

}
</script>

<style scoped lang="scss">
</style>
