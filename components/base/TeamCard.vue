<template>
  <div
    class="g2-card rounded-xl bg-light-white shadow-explore-card-shadow flex flex-wrap"
  >
    <div class="w-full h-383px">
      <img
        :src="cardImg"
        alt=""
        class="h-full w-full object-cover rounded-t-xl border-0"
      />
    </div>
    <div class="w-full flex justify-between items-center p-8">
      <div>
        <h1 class="text-dark-grey text-2xl cambon-font mb-3">
          {{ cardTitle }}
        </h1>
        <p class="text-dark-grey mierb-font text-lg">{{ cardSubtitle }}</p>
      </div>
      <div>
        <a :href="cardLink" target="_blank" class="cursor-pointer">
          <i class="fab fa-linkedin-in text-2xl text-teal"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class TeamCard extends Vue {
  @Prop() cardImg!: string;
  @Prop() cardTitle!: string;
  @Prop() cardSubtitle!: string;
  @Prop() cardLink!: string;
}
</script>

<style scoped lang="scss">
</style>
