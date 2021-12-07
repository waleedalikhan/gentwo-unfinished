<template>
  <section
    class="lg:px-24 md:px-10 px-4 lg:py-20 py-10 rounded-25 bg-white my-6"
    data-aos="fade-up"
    data-aos-duration="500"
  >
    <div class="flex flex-wrap items-center">
      <div class="lg:w-1/2 md:w-2/3 flex flex-wrap lg:mb-0 mb-10">
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
          <template v-for="img in randomClients">
            <div
              :key="img.id"
              class="lg:w-1/4 w-1/3 mb-5 lg:block flex justify-center"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="300"
            >
              <img :src="img.src" alt="" class="logo-img lg:w-1/4 w-1/3" />
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
      <div
        class="lg:w-1/2 md:w-1/3 flex justify-end"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <img
          src="/img/our-clients-section/partner-breakdown-chart.svg"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import arrayShuffle from "@/utils/hooks/arrayShuffle";

interface IClientImage {
  id: string | number;
  src: string;
}

@Component({})
export default class OurClientSection extends Vue {
  public clientImages: IClientImage[] = [
    {
      id: 1,
      src: "/img/our-clients-section/1.png",
    },
    {
      id: 2,
      src: "/img/our-clients-section/2.png",
    },
    {
      id: 3,
      src: "/img/our-clients-section/3.png",
    },
    {
      id: 4,
      src: "/img/our-clients-section/4.png",
    },
    {
      id: 5,
      src: "/img/our-clients-section/5.png",
    },
    {
      id: 6,
      src: "/img/our-clients-section/6.png",
    },
    {
      id: 7,
      src: "/img/our-clients-section/7.png",
    },
    {
      id: 8,
      src: "/img/our-clients-section/8.png",
    },
    {
      id: 9,
      src: "/img/our-clients-section/9.png",
    },
    {
      id: 10,
      src: "/img/our-clients-section/10.png",
    },
    {
      id: 11,
      src: "/img/our-clients-section/11.png",
    },
    {
      id: 12,
      src: "/img/our-clients-section/12.png",
    },
    {
      id: 13,
      src: "/img/our-clients-section/13.png",
    },
    {
      id: 14,
      src: "/img/our-clients-section/14.png",
    },
    {
      id: 15,
      src: "/img/our-clients-section/15.png",
    },
    {
      id: 16,
      src: "/img/our-clients-section/16.png",
    },
  ];

  public randomClients: IClientImage[] = [];

  mounted() {
    arrayShuffle(this.clientImages);

    this.randomClients = this.clientImages;
  }
}
</script>

<style scoped lang="scss">
.logo-img {
  width: 87px;
  height: 32px;
  object-fit: contain;
}
</style>
