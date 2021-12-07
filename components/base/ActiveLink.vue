<template>
  <div>
    <button
      class="bg-transparent outline-none focus:outline-none h-11 rounded-full"
      @click="changeLink(linkPath)"
    >
      <span
        class="mierb-font font-semibold px-4 p-2 rounded-full pb-3"
        :class="[
          activeClass ? 'bg-bronze text-white' : 'bg-transparent text-bronze',
        ]"
      >
        {{ linkTitle }}
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class ActiveLink extends Vue {
  public activeClass: boolean = false;

  @Prop() linkPath!: string;
  @Prop() linkTitle!: string;

  mounted() {
    if (this.$nuxt.$route.name?.includes(this.linkTitle.toLowerCase())) {
      this.activeClass = true;
    } else {
      this.activeClass = false;
    }
  }

  public changeLink(path: string) {
    this.$nuxt.$router.push(path);
  }
}
</script>

<style scoped lang="scss">
</style>
