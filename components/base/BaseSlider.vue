<template>
  <div>
    <div class="mb-10 overflow-x-hidden">
      <VueSlickCarousel v-bind="slickOptions" ref="sliderRef" :arrows="false">
        <slot></slot>
      </VueSlickCarousel>
    </div>
    <div>
      <button class="mr-3 outline-none focus:outline-none" @click="showPrev">
        <img v-if="hasBronzeIcons" src="/img/icons/prev-bronze.svg" alt="" />
        <img v-else src="/img/icons/prev.svg" alt="" />
      </button>
      <button @click="showNext" class="outline focus:outline-none">
        <img v-if="hasBronzeIcons" src="/img/icons/next-bronze.svg" alt="" />
        <img v-else src="/img/icons/next.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
// @ts-ignore
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

@Component({
  components: {
    VueSlickCarousel,
  },
})
export default class BaseSlider extends Vue {
  @Prop() hasBronzeIcons!: boolean;

  public slickOptions: Object = {
    slidesToShow: 1,
    infinite: true,
    speed: 400,
    variableWidth: true,
    adaptiveHeight: true,
  };

  mounted() {
    if (window.innerWidth > 500) {
      // @ts-ignore
      this.slickOptions.adaptiveHeight = false;
      // @ts-ignore
      this.slickOptions.variableWidth = true;
    } else {
      // @ts-ignore
      this.slickOptions.adaptiveHeight = true;
      // @ts-ignore
      this.slickOptions.variableWidth = false;
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 500) {
        // @ts-ignore
        this.slickOptions.adaptiveHeight = false;
        // @ts-ignore
        this.slickOptions.variableWidth = true;
      } else {
        // @ts-ignore
        this.slickOptions.adaptiveHeight = true;
        // @ts-ignore
        this.slickOptions.variableWidth = false;
      }
    });
  }

  destroyed() {
    window.removeEventListener("resize", () => {
      if (window.innerWidth > 500) {
        // @ts-ignore
        this.slickOptions.adaptiveHeight = false;
        // @ts-ignore
        this.slickOptions.variableWidth = true;
      } else {
        // @ts-ignore
        this.slickOptions.adaptiveHeight = true;
        // @ts-ignore
        this.slickOptions.variableWidth = false;
      }
    });
  }

  public showPrev() {
    if (this.$refs.sliderRef !== undefined) {
      // @ts-ignore
      this.$refs.sliderRef.prev();
    }
  }

  public showNext() {
    if (this.$refs.sliderRef !== undefined) {
      // @ts-ignore
      this.$refs.sliderRef.next();
    }
  }
}
</script>

<style scoped lang="scss">
</style>
