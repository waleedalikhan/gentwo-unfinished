<template>
  <section
    class="numbers-bg rounded-25 lg:py-16 py-10 lg:px-0 md:px-10 px-4 mb-6"
    data-aos="fade-up"
    data-aos-duration="500"
  >
    <div class="flex flex-wrap lg:w-3/4 w-full mx-auto">
      <div class="w-full" data-aos="fade-up" data-aos-duration="500">
        <h1
          class="heading-text cambon-font-title text-5xl flex flex-wrap items-start text-white"
        >
          GenTwo in numbers
          <span
            class="
              text-white
              bg-dark-element-bg
              px-3
              py-1
              rounded-lg
              text-base
              mierb-font
              md:ml-5
              md:mt-0
              mt-4
              tracking-normal
            "
            >As of Q2 2021</span>
        </h1>
      </div>
      <div class="w-full flex flex-wrap mt-16 sm:space-x-2 mb-2">
        <div class="md:pr-0 pr-2 sm:w-auto w-1/2">
          <div
            class="
              lg:h-194px
              lg:mb-2
              mb-2
              lg:px-5
              px-2
              lg:py-0
              py-6
              rounded-2xl
              flex flex-wrap
              md:items-center
              bg-numbers-card-bg
            "
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div>
              <div class="lg:mb-2 mb-4">
                <h1
                  class="
                    lg:text-banner-font
                    text-56px
                    cambon-font
                    text-light-BG
                    -mb-5
                  "
                >
                  2018
                </h1>
              </div>
              <div class="self-start">
                <p class="lg:text-2xl mierb-font text-light-BG text-left">
                  Founded
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            lg:h-194px
            lg:mb-2
            mb-2
            sm:w-auto
            w-1/2
            lg:px-5
            px-2
            lg:py-0
            py-6
            rounded-2xl
            flex flex-wrap
            md:items-center
            bg-numbers-card-bg
          "
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="400"
        >
          <div>
            <div class="lg:mb-2 mb-4">
              <h1
                class="
                  lg:text-banner-font
                  text-56px
                  cambon-font
                  text-light-BG
                  -mb-5
                "
              >
                145+
              </h1>
            </div>
            <div class="self-start">
              <p class="lg:text-2xl mierb-font text-light-BG text-left">
                Platforms
              </p>
            </div>
          </div>
        </div>
        <div class="sm:w-auto w-1/2 md:pr-0 pr-2">
          <div
            class="
              lg:h-194px
              lg:mb-2
              mb-2
              lg:px-5
              px-2
              lg:py-0
              py-6
              rounded-2xl
              flex flex-wrap
              md:items-center
              bg-numbers-card-bg
            "
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            <div>
              <div class="lg:mb-2 mb-4">
                <h1
                  class="
                    lg:text-banner-font
                    text-56px
                    cambon-font
                    text-light-BG
                    -mb-5
                  "
                >
                  100+
                </h1>
              </div>
              <div class="self-start">
                <p class="lg:text-2xl mierb-font text-light-BG text-left">
                  Clients
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            lg:h-194px
            lg:mb-2
            mb-2
            sm:w-auto
            w-1/2
            lg:px-5
            px-2
            lg:py-0
            py-2
            rounded-2xl
            flex flex-wrap
            md:items-center
            md:justify-start
            justify-center
            bg-numbers-card-bg
          "
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="800"
        >
          <div class="truncate">
            <div class="lg:mb-2 mb-4">
              <h1
                class="
                  lg:text-banner-font
                  text-56px
                  cambon-font
                  text-light-BG
                  -mb-5
                  flex
                  items-center
                "
              >
                <span
                  class="
                    lg:text-40px
                    text-2xl
                    uppercase
                    opacity-50
                    md:mr-4
                    mr-1
                  "
                  >chf</span
                >
                1.2B+
              </h1>
            </div>
            <div class="self-start truncate">
              <p class="lg:text-2xl mierb-font text-light-BG text-left">
                Assets under service
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          flex flex-wrap
          rounded-2xl
          items-center
          lg:h-194px
          bg-numbers-card-bg
          px-10
          lg:py-0
          md:py-10
          py-6
        "
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <div
          class="
            lg:w-auto
            w-full
            md:block
            flex flex-col
            justify-center
            items-center
          "
        >
          <div>
            <h1
              class="
                lg:text-banner-font
                text-56px
                cambon-font
                text-light-BG
                -mb-3
              "
            >
              460+
            </h1>
            <p class="lg:text-2xl mierb-font text-light-BG text-left">
              Products
            </p>
          </div>
        </div>
        <div class="lg:mx-10 md:mr-5 lg:my-0 mx-0 my-10 md:w-auto w-full">
          <img src="/img/about-page/gentwo-in-numbers/graph-1.svg" alt="" />
        </div>
        <div class="md:w-auto w-full">
          <img src="/img/about-page/gentwo-in-numbers/graph-2.svg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class NumbersSection extends Vue {}
</script>

<style scoped lang="scss">
.numbers-bg {
  background: linear-gradient(
      275.53deg,
      rgba(255, 255, 255, 0.15) 28.03%,
      rgba(255, 255, 255, 0) 80.38%
    ),
    #25464f;
  .heading-text {
    color: #e8ebec;
  }
}
</style>
