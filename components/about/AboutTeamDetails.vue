<template>
  <section class="my-6">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-dark-grey cambon-font text-banner-secondary-font">
          Meet the Team
        </h1>
      </div>
      <div class="lg:flex items-center hidden">
        <template v-for="(filter, index) in teamFilters">
          <button
            v-if="index === 0"
            :key="index"
            class="
              bg-dark-grey
              text-white
              outline-none
              focus:outline-none
              text-sm
              rounded-full
              px-3
              py-1
            "
          >
            {{ filter }}
          </button>
          <button
            v-else
            :key="index"
            class="
              bg-transparent
              text-dark-grey
              outline-none
              focus:outline-none
              text-sm
              rounded-full
              px-3
              py-1
              border border-dark-grey
              ml-4
            "
          >
            {{ filter }}
          </button>
        </template>
        <button
          class="
            outline-none
            focus:outline-none
            text-sm text-dark-grey
            px-4
            py-2
            rounded-full
            bg-light-element-bg
            mierb-font
            ml-4
            flex
            items-center
          "
        >
          <span class="mr-3">More</span>
          <img src="/img/icons/arrow-down-icon.svg" alt="" />
        </button>
      </div>
    </div>
    <div class="py-6 rounded-25 bg-light-bronze-lighter">
      <div class="flex flex-wrap">
        <template v-for="member in teamMembers">
          <div
            :key="member.id"
            class="xl:w-1/3 md:px-6 px-4 lg:w-1/2 w-full mb-8"
          >
            <TeamCard
              :cardImg="member.cardImg"
              :cardTitle="member.cardTitle"
              :cardSubtitle="member.cardSubtitle"
              :cardLink="member.cardLink"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { ITeamCard } from "~/utils/interfaces";
import { teamMembersData } from "~/utils/mock";
import arrayShuffle from "~/utils/hooks/arrayShuffle";

@Component({})
export default class AboutTeamDetails extends Vue {
  public teamFilters: string[] = [
    "All",
    "Products Team",
    "Legal",
    "Operations",
    "Development",
    "Marketing",
  ];
  public teamMembers: ITeamCard[] = teamMembersData;

  mounted() {
    arrayShuffle(this.teamMembers);
  }
}
</script>

<style scoped lang="scss">
</style>
