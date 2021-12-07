<template>
  <div>
    <NewsBanner
      bannerTag="Insights"
      bannerTitle="“We want to establish ourselves as a global player and step out of our current niche.” "
      bannerAuthor="GenTwo"
      bannerDate="16 June 2021"
      bannerImg="banner-img-three"
      bannerDirection="ltr"
      bannerBackLink="/pulse/news"
      bannerBackText="Back to Latest News, Insights & Press Releases"
    />
    <DetailsSection class="mb-6">
      <div class="w-full">
        <h1
          class="
            cambon-font-title
            md:text-banner-secondary-font
            text-2xl
            bronze-text-gradient
          "
          data-aos="fade-up"
          data-aos-duration="800"
        >
          GenTwo Digital is proud to be included in the first Swiss Digital
          Asset and Wealth Management Report, published by CV VC and Swiss
          Blockchain Federation. It is based on more than 80 interviews with
          investors, wealth managers, fund managers, bankers, and service
          providers in Switzerland.
        </h1>
      </div>
    </DetailsSection>
    <DetailsSection class="my-6">
      <div class="w-full flex flex-wrap justify-between mb-10">
        <div class="lg:w-2/3 w-full lg:mb-0 mb-6">
          <p
            class="cambon-font text-lg text-dark-grey"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            In the increasingly complex financial world, a single provider alone
            is no longer able to offer the comprehensive range of quality
            services along an extended value chain. As soon as a value chain is
            broken, new businesses have the power to disrupt parts of the
            conventional business processes. Investment banks with their rigid
            structures will hardly be able to keep up in the future and this is
            where GenTwo comes in. The Fintech startup offers off-balance sheet
            securitization platforms which are used to issue conventional
            investment products.
            <br /><br /><br />
            Looking ahead, GenTwo wants to establish itself as a global player.
            In this interview, Jörg Bode shares insights on how this will be
            achieved, explains the new offering of an intra-platform shielding
            of products, and to what degree developments in technology will
            influence the success of GenTwo.
          </p>
        </div>
        <div
          class="lg:w-1/4 w-full lg:mt-0 mt-6"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <ViewButton buttonText="Interview on moneycab" />
        </div>
      </div>
    </DetailsSection>
    <LatestNewsSection />
    <div class="w-3/4 mx-auto lg:block hidden mb-6 mt-12">
      <NewsLetter :hasLargeLogo="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class InsightsPressRelease extends Vue {}
</script>

<style lang="scss">
.banner-img-three {
  background: url("/img/pulse-page/explore-topic/img-six.png") center / cover
    no-repeat;
}
.bronze-text-gradient {
  background: linear-gradient(
    to left,
    rgba(115, 106, 100, 1),
    rgba(19, 27, 30, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
</style>
