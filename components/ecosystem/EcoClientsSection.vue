<template>
  <section class="mb-6">
    <div class="flex flex-wrap xl:flex-nowrap xl:space-x-6">
      <div class="w-full mb-6 xl:w-1/2 xl:mb-0">
        <AssetRushCard />
      </div>
      <div class="w-full xl:w-1/2">
        <EcoClientsCard />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class EcoClientsSection extends Vue {}
</script>

<style scoped lang="scss">

</style>
