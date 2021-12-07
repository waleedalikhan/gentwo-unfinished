<template>
  <div>
    <div class="flex justify-between">
      <div>
        <h1 class="text-dark-grey cambon-font text-banner-secondary-font">
          Our partners
        </h1>
      </div>
      <div class="md:block hidden">
        <template v-for="(button, index) in selectionButtons">
          <button
            v-if="index === 0"
            :key="index"
            class="
              bg-dark-grey
              outline-none
              focus:outline-none
              text-white text-sm
              mierb-font
              px-3
              py-1
              rounded-full
            "
          >
            {{ button }}
          </button>
          <button
            v-else
            :key="index + 1"
            class="
              bg-transparent
              outline-none
              focus:outline-none
              border border-dark-grey
              text-dark-grey text-sm
              mierb-font
              px-3
              py-1
              ml-4
              rounded-full
            "
          >
            {{ button }}
          </button>
        </template>
      </div>
    </div>
    <div class="rounded-25 bg-our-eco-partner-bg md:p-6 my-6">
      <div class="flex flex-wrap">
        <template v-for="partner in partners">
          <div :key="partner.id" class="xl:w-1/3 lg:w-1/2 w-full lg:px-4 mb-6">
            <EcoPartnerCard
              :cardImg="partner.cardImg"
              :cardButtonText="partner.cardButtonText"
              :cardTitle="partner.cardTitle"
              :cardText="partner.cardText"
              :cardLink="partner.cardLink"
            />
          </div>
        </template>
        <div class="w-full flex justify-center items-center mt-6">
          <button
            class="
              outline-none
              focus:outline-none
              bg-light-element-bg
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              mr-4
            "
          >
            <img src="/img/icons/arrow-left-icon.svg" alt="" />
          </button>
          <button
            class="
              rounded-lg
              outline-none
              focus:outline-none
              border border-light-element-bg
              w-12
              h-12
              flex
              justify-center
              items-center
              text-light-secondary-body
              mierb-font
              mr-4
            "
          >
            1
          </button>
          <button
            class="
              rounded-lg
              outline-none
              focus:outline-none
              bg-light-element-bg
              w-12
              h-12
              flex
              justify-center
              items-center
              text-medium-bronze
              mierb-font
              mr-4
            "
          >
            2
          </button>
          <button
            class="
              rounded-lg
              outline-none
              focus:outline-none
              bg-light-element-bg
              w-12
              h-12
              flex
              justify-center
              items-center
              text-medium-bronze
              mierb-font
              mr-4
            "
          >
            3
          </button>
          <button
            class="
              rounded-lg
              outline-none
              focus:outline-none
              bg-light-element-bg
              w-12
              h-12
              flex
              justify-center
              items-center
              text-medium-bronze
              mierb-font
              mr-4
            "
          >
            4
          </button>
          <button
            class="
              outline-none
              focus:outline-none
              bg-light-element-bg
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
            "
          >
            <img src="/img/icons/arrow-right-icon.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { IEcoPartnerCard } from "~/utils/interfaces";
import { ecoPartners } from "@/utils/mock";
import arrayShuffle from "~/utils/hooks/arrayShuffle";

@Component({})
export default class EcoOurPartnersSection extends Vue {
  public selectionButtons: string[] = [
    "All",
    "GenTwo Clients",
    "GenTwo Digital Clients",
    "Network Partners",
  ];
  public partners: IEcoPartnerCard[] = ecoPartners;

  mounted() {
    arrayShuffle(this.partners);
  }
}
</script>

<style scoped lang="scss">
</style>
