<template>
  <div class="md:bg-white bg-light-BG md:p-12 p-4 rounded-25 g2-card">
    <div class="flex flex-wrap">
      <div class="w-full flex flex-wrap lg:mb-0 mb-10">
        <div
          class="w-full mb-2"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <h1
            class="
              mierb-font
              font-semibold
              text-banner-secondary-font text-teal
            "
          >
            Our clients and partners
          </h1>
        </div>
        <div
          class="w-full"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <p class="text-teal mierb-font">
            Today more than 100 clients and partners are enjoying the benefits
            <br class="lg:block hidden" />
            offered by GenTwo.
          </p>
        </div>
        <div class="w-full flex flex-wrap mt-10 mb-6">
          <template v-for="(img, index) in clientImages">
            <div
              :key="index"
              class="md:w-1/4 w-1/3 md:mb-5 mb-10 md:block flex justify-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <img :src="img" alt="" />
            </div>
          </template>
        </div>
        <div
          class="w-full md:block flex justify-center"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <button
            class="
              border-teal border
              bg-transparent
              outline-none
              focus:outline-none
              mierb-font
              text-teal
              px-5
              py-3
              rounded-xl
            "
          >
            See our network
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class EcoClientsCard extends Vue {
  public clientImages: string[] = [
    "/img/our-clients-section/client-1.png",
    "/img/our-clients-section/client-2.png",
    "/img/our-clients-section/client-3.png",
    "/img/our-clients-section/client-4.png",
    "/img/our-clients-section/client-5.png",
    "/img/our-clients-section/client-6.png",
    "/img/our-clients-section/client-7.png",
    "/img/our-clients-section/client-8.png",
    "/img/our-clients-section/client-9.png",
    "/img/our-clients-section/client-10.png",
    "/img/our-clients-section/client-11.png",
    "/img/our-clients-section/client-12.png",
    "/img/our-clients-section/client-13.png",
    "/img/our-clients-section/client-14.png",
    "/img/our-clients-section/client-15.png",
    "/img/our-clients-section/client-16.png",
  ];
}
</script>

<style ${2|scoped,|} lang="scss">
</style>
