<template>
  <div class="md:w-350px lg:min-h-500px flex flex-col justify-end">
    <div class="flex flex-wrap">
      <div class="w-full flex items-start mb-10">
        <Quote />
        <p class="lg:text-2xl text-lg g-text cambon-font ml-3 -mt-1">
          {{ clientMsg }}
        </p>
      </div>
    </div>
    <div class="w-full flex items-start">
      <div>
        <div class="rounded-full w-10 h-10 mr-4 mt-2">
          <img :src="clientImg" alt="" class="w-full h-full rounded-full" />
        </div>
      </div>
      <div>
        <p class="text-lg text-medium-bronze mierb-font">{{ clientName }}</p>
        <p class="mierb-font text-light-secondary-body text-lg">
          {{ clientRole }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class ClientReviewCard extends Vue {
  @Prop() clientMsg!: string;
  @Prop() clientImg!: string;
  @Prop() clientName!: string;
  @Prop() clientRole!: string;
}
</script>

<style scoped lang="scss">
.g-text {
  background: linear-gradient(
    75deg,
    rgba(71, 97, 108, 1),
    rgba(118, 99, 59, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 130%;
}
</style>
