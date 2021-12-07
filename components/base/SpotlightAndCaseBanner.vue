<template>
  <div
    class="
        flex flex-wrap
        rounded-2xl
        border border-light-secondary-border
        p-3
        lg:h-auto
        h-full
        banner
        overflow-hidden
      "
  >
    <div
      class="lg:w-35% w-full lg:h-auto h-80 rounded-2xl relative"
      :class="[hasUseCase ? 'order-last' : 'order-first']"
      :style="`background: url(${image}) center / cover no-repeat`"
    >
      <div
        v-if="!hasAuthorAndDate"
        class="
            w-full
            lg:hidden
            flex
            items-center
            absolute
            top-5
            right-0
            justify-end
            pr-5
          "
      >
        <span
          class="
              text-white
              px-3
              py-1
              text-sm
              mierb-font
              mr-4
              rounded-full
              banner-tag-one
            "
          :class="[hasUseCase ? 'bg-light-meroon' : 'bg-teal']"
        >
          {{ templateType }}
        </span>
        <span
          v-for="category in categories"
          :key="category.id"
          class="
              text-white
              px-3
              py-1
              text-sm
              mierb-font
              rounded-full
              banner-tag-two
              hidden
              lg:block
            "
          :class="[hasUseCase ? 'bg-digital-tag-bg' : 'bg-light-teal-lighter']"
        >
          {{ category.label }}
        </span>
      </div>
    </div>
    <div class="lg:w-65% w-full lg:pl-6 pl-0 flex flex-wrap py-6">
      <div class="w-full lg:flex hidden flex-wrap">
        <div class="w-full flex items-center">
          <span
            class="
                text-white
                px-3
                py-1
                text-sm
                mierb-font
                mr-1
                rounded-full
                banner-tag-one
              "
            :class="[hasUseCase ? 'bg-light-meroon' : 'bg-teal']"
          >
            {{ templateType }}
          </span>
          <span
            v-for="category in categories"
            :key="category.id"
            class="
                text-white
                px-3
                py-1
                mr-1
                text-sm
                mierb-font
                rounded-full
                banner-tag-two
              "
            :class="[hasUseCase ? 'bg-digital-tag-bg' : 'bg-light-teal-lighter']"
          >
            {{ category.name }}
          </span>
        </div>
        <div v-if="!hasAuthorAndDate" class="w-full mt-4">
          <p class="mierb-font text-teal text-sm banner-date">{{ publishedDate }}</p>
        </div>
      </div>
      <div class="w-full lg:my-12 mb-4">
        <span
          v-for="category in categories"
          :key="category.id"
          class="
              mb-2
              lg:hidden
              inline-flex
              bg-dark-grey
              rounded-2xl
              px-3
              py-1
              mr-1
              text-white
              mierb-font
              text-xss
            "
          >{{ category.name }}</span
        >
        <h1
          class="
              font-semibold
              lg:text-56px
              md:text-4xl
              text-2xl
              lg:leading-tight
              md:leading-tight
              leading-tight
              banner-heading
            "
          :class="[hasUseCase ? 'cambon-font-title text-dark-grey' : 'mierb-font text-teal']"
        >
          {{ title }}
        </h1>
      </div>
      <div v-if="!hasAuthorAndDate" class="w-11/12">
        <p class="mierb-font text-light-secondary-body banner-text line-clamp-3">
          {{ subtitle }}
          <span class="cursor-pointer text-medium-bronze">→ Read more</span>
        </p>
      </div>
      <div
        v-if="hasAuthorAndDate"
        class="flex items-center justify-between w-full mt-4"
        :class="[hasUseCase ? 'pr-5' : '']"
      >
        <div class="lg:w-auto w-full">
          <p class="mierb-font text-teal font-semibold" v-if="contributor">{{ contributor.name }}</p>
          <p class="mierb-font text-teal text-sm">{{ publishedDate }}</p>
        </div>
        <div class="lg:block hidden" v-if="pdf">
          <DownloadButton buttonText="Download PDF" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import gsap from "gsap";

@Component({})
export default class SpotlightAndCaseBanner extends Vue {
  @Prop({ default: false }) hasAuthorAndDate!: boolean;
  @Prop({ default: false }) hasUseCase!: boolean;
  @Prop() image!: string;
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() contributor!: any;
  @Prop() publishedDate!: string;
  @Prop() templateType!: string;
  @Prop() categories!: any[];
  @Prop() pdf!: any;

  // mounted() {
    // gsap.from(".banner", {
    //   y: 200,
    //   height: "1200px",
    //   opacity: 0,
    //   duration: 1,
    //   ease: "ease.out",
    // });
    // gsap.from(".banner-tag-one", {
    //   y: -200,
    //   opacity: 0,
    //   duration: 1,
    //   delay: 0.2,
    //   ease: "ease.out",
    // });
    // gsap.from(".banner-tag-two", {
    //   y: -200,
    //   opacity: 0,
    //   duration: 1,
    //   delay: 0.4,
    //   ease: "ease.out",
    // });
    // gsap.from(".banner-heading", {
    //   y: 200,
    //   opacity: 0,
    //   duration: 1,
    //   delay: 0.6,
    //   ease: "ease.out",
    // });
    // gsap.from(".banner-text", {
    //   y: 200,
    //   opacity: 0,
    //   duration: 1,
    //   delay: 0.8,
    //   ease: "ease.out",
    // });
  // }

}
</script>
<style scoped lang="scss"></style>
