<template>
  <section
    class="lg:px-20 px-4 md:py-20 py-10 rounded-25 bg-innovator-section-bg"
  >
    <div class="flex flex-wrap">
      <div class="lg:w-2/3 w-full mx-auto flex flex-wrap justify-center">
        <div class="w-full text-center">
          <h1
            class="
              text-teal
              cambon-font-title
              lg:text-5xl
              text-banner-secondary-font
              leading-snug
            "
          >
            It is time to become an innovator and get the full benefit
            <br class="lg:block hidden" />
            of GenTwo
          </h1>
        </div>
        <div class="w-full my-10 text-center">
          <p class="text-lg mierb-font text-light-secondary-body">
            Launch your own white-label issuance platform today
          </p>
        </div>
        <div class="w-full flex items-center md:flex-nowrap flex-wrap justify-center">
          <div
            class="md:w-auto w-full lg:block flex justify-center md:mb-0 mb-5"
          >
          <nuxt-link to="/company/about-contact">
            <button
              class="
                text-lg text-light-grey-light
                border border-light-grey-light
                rounded-xl
                mierb-font
                px-5
                py-3
                md:mr-4
              "
            >
              Contact Us
            </button>
          </nuxt-link>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class InnovatorSection extends Vue {}
</script>

<style scoped lang="scss">
</style>
