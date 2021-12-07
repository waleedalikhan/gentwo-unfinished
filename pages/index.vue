<template>
  <div>
    <MainBanner @playVideo="showVideo" />
    <WhatWeDoSection />
    <ExploreSection />
    <OurClientsSection />
    <ClientsReviewSection />
    <LatestNewsSection />
    <InnovatorSection />
    <Vodal
      :show="showPopup"
      animation="slideUp"
      @hide="showPopup = false"
      className="bg-smoke-800"
      :duration="800"
      measure="%"
      :height="98"
      :width="90"
    >
      <video
        src="/videos/banner-video.mp4"
        width="90%"
        controls
        class="mx-auto 2xl:containar"
        :muted="isVideoMuted"
      ></video>
    </Vodal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
// @ts-ignore
import Vodal from "vodal";
// @ts-ignore
import vueVimeoPlayer from "vue-vimeo-player";
import gsap from "gsap";
import "vodal/common.css";
import "vodal/slide-up.css";

@Component({
  components: {
    Vodal,
    vueVimeoPlayer,
  },
})
export default class HomePage extends Vue {
  public showPopup: boolean = false;
  public isVideoMuted: boolean = false;

  // public popupCSS: object = {
  //   background: "bg-smoke-800 py-6 video",
  //   modal:
  //     "w-full h-full md:max-h-screen max-h-full video-bg items-center justify-center",
  //   close:
  //     "video-cross-white text-4xl w-10 h-10 flex items-center justify-center bg-dark-element-bg rounded-full p-0 outline-none focus:outline-none ring-0 ring-offset-transparent focus:ring-0 focus:ring-offset-transparent",
  // };

  showVideo() {
    this.showPopup = true;
    this.isVideoMuted = false;
    gsap.from(".video", {
      height: "2000px",
      opacity: 0,
      y: 200,
      ease: "ease.out",
      duration: 1,
    });
  }

  hideVideo() {
    this.showPopup = false;
    this.isVideoMuted = true;
    gsap.to(".video", {
      height: 0,
      opacity: 0,
      y: -200,
      ease: "ease.out",
      duration: 1,
    });
  }
}
</script>

<style lang="scss" scoped>
::v-deep .vodal-dialog {
  background: linear-gradient(301deg, #1e2021 0.02%, #0d0e0f 100%) !important;
  border-radius: 25px !important;
  padding: 30px !important;
  display: flex !important;
  align-items: center !important;
  max-width: 1536px;
}
</style>
