<template>
  <footer class="py-10 md:px-4">
    <div class="flex flex-wrap">
      <div class="flex flex-wrap justify-between w-full mx-auto lg:w-4/5">
        <div class="w-full mb-10 md:w-auto md:mb-0">
          <div>
            <p class="text-sm text-teal mierb-font">&copy;2021 GenTwo AG</p>
            <p class="text-sm text-light-secondary-body mierb-font">
              All rights reserved
            </p>
          </div>
          <div class="my-8">
            <p class="font-semibold text-teal mierb-font">
              Privacy Policy & Disclaimers
            </p>
          </div>
          <div>
            <nuxt-link to="/company/about-contact">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Contact Us
            </p>
          </nuxt-link>
            <p class="text-sm text-light-secondary-body mierb-font">
              Brandschenkestrasse 45, 8002 Zürich <br />
              +41 44 512 75 00
            </p>
          </div>
          <div class="flex mt-8">
            <div
              class="flex items-center justify-center w-8 h-8 mr-3 rounded-full "
            >
              <a href="#" class="cursor-pointer text-teal">
                <i class="far fa-envelope"></i>
              </a>
            </div>
            <div
              class="flex items-center justify-center w-8 h-8 mr-3 rounded-full "
            >
              <a href="#" class="cursor-pointer text-teal">
                <i class="fas fa-map-marker-alt"></i>
              </a>
            </div>
            <div
              class="flex items-center justify-center w-8 h-8 mr-3 rounded-full "
            >
              <a href="#" class="cursor-pointer text-teal">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div
              class="flex items-center justify-center w-8 h-8 mr-3 rounded-full "
            >
              <a href="#" class="cursor-pointer text-teal">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div
              class="flex items-center justify-center w-8 h-8 mr-3 rounded-full "
            >
              <a href="#" class="cursor-pointer text-teal">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
            <div
              class="flex items-center justify-center w-8 h-8 mr-3 rounded-full "
            >
              <a href="#" class="cursor-pointer text-teal">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="md:w-auto w-1/2 mb-10 md:mb-0">
          <nuxt-link to="/solutions">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Solutions
            </p>
          </nuxt-link>
        </div>

        <div class="md:w-auto w-1/2 mb-10 md:mb-0">
          <nuxt-link to="/pulse">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Pulse
            </p>
          </nuxt-link>

          <nuxt-link to="/pulse/news">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Insights, News &amp; Press Releases
            </p>
          </nuxt-link>
          <nuxt-link to="/pulse/use-cases">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Use Cases
            </p>
          </nuxt-link>
          <nuxt-link to="/pulse/product-spotlights">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Product Spotlights
            </p>
          </nuxt-link>
         
        </div>
        <div class="md:w-auto w-1/2 mb-10 md:mb-0">
          <nuxt-link to="/ecosystem">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Ecosystem
            </p>
          </nuxt-link>
          
          <nuxt-link to="#">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Asset Rush
            </p>
          </nuxt-link>
          <nuxt-link to="/partners">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Partner Network
            </p>
          </nuxt-link>
        </div>
        <div class="md:w-auto w-1/2" >
          <nuxt-link to="/company">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Company
            </p>
          </nuxt-link>
          <nuxt-link to="/company/about-team">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Team
            </p>
          </nuxt-link>
          <nuxt-link to="/company/about-careers">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Careers
            </p>
          </nuxt-link>

          <nuxt-link to="/company/about-contact">
            <p class="mb-2 text-sm font-semibold mierb-font cursor-pointer text-teal">
              Contact
            </p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Footer extends Vue {}
</script>

<style ${2|scoped,|} lang="scss"></style>
