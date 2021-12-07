<template>
  <nav class="relative flex items-center justify-between">
    <div class="relative z-10 hidden lg:block rounded-full g2-button">
      <nuxt-link to="/">
        <img src="/img/logo.svg" alt="" />
      </nuxt-link>
    </div>
    <div class="block lg:hidden">
      <button
        class="bg-transparent outline-focus focus:outline-none"
        @click="isSidebarOpen = true"
      >
        <span class="h-0.5 bg-medium-bronze w-6 block"></span>
        <span class="h-0.5 bg-medium-bronze w-6 block my-1"></span>
        <span class="h-0.5 bg-medium-bronze w-6 block"></span>
      </button>
    </div>
    <div
      class="
        absolute
        inset-0
        items-center
        justify-center
        flex-1
        hidden
        w-full
        lg:flex
      "
    >
      <template v-for="link in navLinks">
        <div :key="link.id" class="mr-16">
          <ActiveLink :linkPath="link.path" :linkTitle="link.title" />
        </div>
      </template>
    </div>
    <div class="relative z-10 flex items-center">
      <NavButton
        buttonText="Login"
        :onClick="login"
        class="hidden mr-5 lg:block"
      />
    </div>

    <!-- Sidebar -->
    <div
      class="
        fixed
        top-0
        bottom-0
        bg-white
        h-screen
        w-full
        flex flex-col
        items-start
        cool-transition
      "
      :class="[isSidebarOpen ? 'left-0' : '-left-full']"
      style="z-index: 99999999999999;"
    >
      <div class="w-full p-5">
        <button
          class="outline-none focus:outline-none bg-transparent"
          @click="isSidebarOpen = false"
        >
          <img src="/img/icons/cross-icon.svg" alt="" />
        </button>
      </div>
      <div class="w-full flex justify-center mb-20">
        <nuxt-link to="/">
          <img src="/img/logo.svg" alt="" />
        </nuxt-link>
      </div>
      <div class="flex flex-wrap absolute top-1/2 transform -translate-y-1/2 w-full">
        <template v-for="link in navLinks">
          <div :key="link.id" class="w-full flex justify-center mb-10">
            <ActiveLink :linkPath="link.path" :linkTitle="link.title" />
          </div>
        </template>
      </div>
      <div class="flex flex-wrap w-full absolute bottom-3">
        <div class="w-full flex justify-center">
          <NavButton buttonText="Login" :onClick="login" />
        </div>
        <div class="w-full flex justify-center mt-6">
          <nuxt-link to="/contact">
            <button
              class="
                bg-transparent
                outline-none
                focus:outline-none
                h-11
                rounded-full
              "
            >
              <span
                class="
                  mierb-font
                  font-semibold
                  px-4
                  p-2
                  rounded-full
                  pb-3
                  bg-transparent
                  text-bronze
                "
              >
                Contact
              </span>
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { INavLinks } from "@/utils/interfaces";

@Component({})
export default class Navbar extends Vue {
  isSidebarOpen: boolean = false;
  navLinks: INavLinks[] = [
    {
      id: 1,
      path: "/solutions",
      title: "Solutions",
    },
    {
      id: 2,
      path: "/pulse",
      title: "Pulse",
    },
    {
      id: 3,
      path: "/ecosystem",
      title: "Ecosystem",
    },
    {
      id: 4,
      path: "/company",
      title: "Company",
    },
  ];

  login() {
    console.log("Login clicked!");
  }
  getStarted() {
    console.log("Get Started clicked!");
  }
}
</script>

<style scoped lang="scss"></style>
