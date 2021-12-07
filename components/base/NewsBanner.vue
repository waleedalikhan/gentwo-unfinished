<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full">
        <BackButton :link="bannerBackLink" :text="bannerBackText" />
      </div>
      <div
        class="
          w-full
          lg:h-auto
          min-h-453px
          h-full
          py-4
          px-4
          border border-light-secondary-border
          rounded-2xl
          flex flex-wrap
          mt-6
          bg-news-topic-bg
          mb-6
          banner
        "
      >
        <div
          class="lg:w-65% w-full flex flex-col justify-between lg:pl-10 pl-4"
          :class="[
            bannerDirection === 'rtl'
              ? 'md:order-first order-last lg:mb-0 mb-10'
              : 'order-last',
          ]"
        >
          <div class="w-full pt-6">
            <p
              v-for="banner in bannerTag"
              :key="banner.id"
              class="
                mierb-font
                bg-dark-grey
                text-white text-sm
                px-3
                py-1
                rounded-full
                inline-flex
                banner-tag
                mr-1
              "
            >
              {{ banner.name }}
            </p>
          </div>
          <div class="w-full">
            <h1
              class="
                cambon-font-title
                xl:text-56px
                lg:text-3xl
                text-3xl text-dark-grey
                lg:leading-tight
                lg:my-16
                my-8
                banner-title
              "
            >
              {{ bannerTitle }}
            </h1>
          </div>
          <div class="w-full">
            <p class="mierb-font text-dark-grey font-semibold banner-author" v-if="bannerAuthor">
              {{ bannerAuthor.name }}
            </p>
            <p class="mierb-font text-dark-grey text-sm banner-date">
              {{ bannerDate }}
            </p>
          </div>
        </div>
        <div
          class="lg:w-35% w-full lg:h-full h-80 rounded-2xl"
          :style="`background: transparent url(${bannerImg}) no-repeat center center / cover`"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import gsap from "gsap";

@Component({})
export default class extends Vue {
  @Prop() bannerTag!: Array<any>;
  @Prop() bannerTitle!: string;
  @Prop() bannerAuthor!: any;
  @Prop() bannerDate!: string;
  @Prop() bannerImg!: string;
  @Prop({ default: "rtl" }) bannerDirection!: string;
  @Prop() bannerBackLink!: string;
  @Prop() bannerBackText!: string;

  
  mounted() {
    gsap.to("body", {
      backgroundColor: "rgb(239, 232, 216)",
      ease: "ease.out",
      duration: 1,
    });
    // gsap.from(".banner", {
    //   y: 200,
    //   height: "1500px",
    //   opacity: 0,
    //   ease: "ease.out",
    //   duration: 1,
    // });
    // gsap.from(".banner-tag", {
    //   y: 200,
    //   opacity: 0,
    //   ease: "ease.out",
    //   duration: 1,
    //   delay: 0.2,
    // });
    // gsap.from(".banner-title", {
    //   y: 200,
    //   opacity: 0,
    //   ease: "ease.out",
    //   duration: 1,
    //   delay: 0.4,
    // });
    // gsap.from(".banner-author", {
    //   y: 200,
    //   opacity: 0,
    //   ease: "ease.out",
    //   duration: 1,
    //   delay: 0.6,
    // });
    // gsap.from(".banner-date", {
    //   y: 200,
    //   opacity: 0,
    //   ease: "ease.out",
    //   duration: 1,
    //   delay: 0.8,
    // });
  }

  beforeDestroy() {
    gsap.to("body", {
      backgroundColor: "rgb(245, 247, 247)",
      ease: "ease.out",
      duration: 1,
    });
  }
}
</script>

<style scoped lang="scss">
</style>
