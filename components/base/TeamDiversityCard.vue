<template>
  <div
    class="
      rounded-2xl
      px-6
      py-6
      bg-light-element-bg
      flex
      md:flex-nowrap
      flex-wrap
      items-center
    "
  >
    <div class="mr-5">
      <img :src="icon" alt="" class="md:w-auto w-16"/>
    </div>
    <div>
      <h1 class="cambon-font lg:text-banner-font text-56px text-teal">
        {{ title }}
      </h1>
      <p class="text-teal md:text-2xl mierb-font">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class TeamDiversityCard extends Vue {
  @Prop() icon!: string;
  @Prop() title!: string;
  @Prop() subtitle!: string;
}
</script>

<style ${2|scoped,|} lang="scss">
</style>
