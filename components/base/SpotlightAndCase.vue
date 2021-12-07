<template>
  <section class="my-6">
    <BackButton
      :text="hasUseCase ? 'Back to Use Cases' : 'Back to Product Spotlight'"
      :link="hasUseCase ? '/pulse/use-cases' : '/pulse/product-spotlights'"
    />
    <div class="rounded-25 px-4 py-8 mt-8" :class="bannerBg">
      <SpotlightAndCaseBanner
        :hasAuthorAndDate="true"
        :hasUseCase="hasUseCase"
        :image="image.default"
        :title="title"
        :subtitle="subtitle"
        :publishedDate="publishedDate"
        :categories="categories"
        :templateType="templateType"
        :contributor="contributor"
        :pdf="pdf"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import gsap from "gsap";

@Component({})
export default class SpotlightAndCase extends Vue {
  @Prop({ default: "bg-product-spotlights-bg" }) bannerBg!: string;
  @Prop() bannerText!: string;
  @Prop({ default: false }) hasUseCase!: boolean;
  @Prop() image!: string;
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() contributor!: any;
  @Prop() publishedDate!: string;
  @Prop() templateType!: string;
  @Prop() categories!: any[];
  @Prop() pdf!: any;

  mounted() {
    const bgColor = this.hasUseCase? '#EFE8E6': '#DFE3DF';
    gsap.to("body", {
      backgroundColor: bgColor,
      ease: "ease.out",
      duration: 1,
    });
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
