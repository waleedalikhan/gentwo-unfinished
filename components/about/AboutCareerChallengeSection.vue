<template>
  <section class="my-6">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-dark-grey cambon-font text-banner-secondary-font">
          Find your next challenge
        </h1>
      </div>
      <div class="lg:flex hidden items-center">
        <template v-for="(filter, index) in careerFilters">
          <button
            v-if="index === 0"
            :key="index"
            class="
              bg-dark-grey
              text-white
              mierb-font
              outline-none
              focus:outline-none
              px-3
              py-1
              rounded-full
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
              border border-dark-grey
              mierb-font
              outline-none
              focus:outline-none
              px-3
              py-1
              ml-4
              rounded-full
            "
          >
            {{ filter }}
          </button>
        </template>
      </div>
    </div>
    <div class="rounded-25 bg-light-teal-lightest py-6">
      <div class="flex flex-wrap">
        <template v-for="career in careers">
          <div :key="career.id" class="lg:w-1/2 w-full md:px-6 px-4 mb-6">
            <button
              class="outline-none focus:outline-none w-full text-left"
              @click="emitCardEvent"
            >
              <CareerCard
                :cardImg="career.cardImg"
                :cardTitle="career.cardTitle"
                :cardLocation="career.cardLocation"
                :cardRatio="career.cardRatio"
              />
            </button>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { careersData } from "~/utils/mock";

export default {
  name: "AboutCareerChallengeSection",
  data() {
    return {
      careerFilters: [
        "All",
        "Key Account",
        "Legal",
        "Operations",
        "Development",
      ],
      careers: careersData,
    };
  },
  methods: {
    emitCardEvent() {
      // @ts-ignore
      this.$emit("cardClicked");
    },
  },
};
</script>

<style scoped lang="scss">
</style>
