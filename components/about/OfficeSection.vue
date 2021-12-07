<template>
  <section class="bg-contact-office-bg rounded-25 lg:py-20 py-10 lg:px-0 px-4">
    <div
      class="
        flex
        lg:flex-nowrap
        flex-wrap
        xl:w-2/3
        lg:w-2/3
        w-full
        mx-auto
        justify-between
        lg:space-x-12
      "
    >
      <div class="w-full lg:w-2/5 lg:mb-0 mb-10">
        <h1 class="mierb-font text-teal text-banner-secondary-font mb-5">
          Zurich Office
        </h1>
        <div class="flex items-start bg-office-card-bg rounded-xl p-4">
          <div class="text-teal">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <p class="mierb-font text-lg ml-3 -mt-1">
            Brandschenkestrasse 45 <br> 8002 Zürich
          </p>
        </div>
        <div class="flex items-center bg-office-card-bg rounded-xl p-4 my-6">
          <div class="text-teal">
            <i class="fas fa-phone"></i>
          </div>
          <p class="mierb-font text-lg ml-3">+41 44 512 75 00</p>
        </div>
        <div class="flex items-center bg-office-card-bg rounded-xl p-4">
          <div class="text-teal">
            <i class="far fa-envelope"></i>
          </div>
          <p class="mierb-font text-lg ml-3 text-medium-bronze">
            contact@gentwo.com
          </p>
        </div>
        <div class="flex mt-8">
          <div
            class="
              flex
              items-center
              justify-center
              w-8
              h-8
              mr-3
              rounded-full bg-light-white
            "
          >
            <a href="#" class="cursor-pointer text-teal">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              w-8
              h-8
              mr-3
              rounded-full
              bg-light-white
            "
          >
            <a href="#" class="cursor-pointer text-teal">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              w-8
              h-8
              mr-3
              rounded-full
              bg-light-white
            "
          >
            <a href="#" class="cursor-pointer text-teal">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
          <div
            class="
              flex
              items-center
              justify-center
              w-8
              h-8
              mr-3
              rounded-full
              bg-light-white
            "
          >
            <a href="#" class="cursor-pointer text-teal">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="flex w-full lg:w-3/5 justify-center">
        <div class="uk-margin-top uk-margin-bottom w-full">
          <iframe
            style="
              border-radius: 11px;
              background-color: white;
              border: 6px solid white;
              min-height: 400px;
            "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337.7760656845815!2d8.531830487077526!3d47.368848456348815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a071e8f24ff%3A0x6867c75b3f405ac6!2sGENTWO%20AG!5e0!3m2!1sen!2suk!4v1618311593589!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OfficeSection extends Vue {}
</script>

<style scoped lang="scss">
</style>
