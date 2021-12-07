<template>
  <section
    class="team-bg rounded-25 mb-6 lg:px-0 md:px-10 lg:py-20 md:py-10 py-8 px-4"
    data-aos="fade-up"
    data-aos-duration="500"
  >
    <div class="flex flex-wrap lg:w-2/3 w-full mx-auto">
      <div
        class="w-full md:mb-16 mb-6"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <h1 class="text-teal heading-text cambon-font-title text-5xl flex flex-wrap items-start">
          Team diversity
          <span
            class="
              bg-light-element-bg
              px-3
              py-1
              rounded-lg
              text-base
              mierb-font
              md:ml-5
              md:mt-0
              mb-4
              tracking-normal
            "
            >As of Q2 2021</span>
          </h1>
      </div>
      <div class="w-full md:flex hidden flex-wrap">
        <template v-for="diversity in teamDiversity">
          <div
            :key="diversity.id"
            class="mr-2 mb-2"
            data-aos="fade-up"
            data-aos-duration="500"
            :data-aos-delay="diversity.animationDelay"
          >
            <TeamDiversityCard
              :icon="diversity.icon"
              :title="diversity.title"
              :subtitle="diversity.subtitle"
            />
          </div>
        </template>
      </div>
      <div class="w-full md:hidden flex flex-wrap items-strech">
        <template v-for="diversity in teamDiversityMob">
          <div
            :key="diversity.id"
            :class="diversity.className"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <TeamDiversityCard
              :icon="diversity.icon"
              :title="diversity.title"
              :subtitle="diversity.subtitle"
            />
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { ITeamDiversityCard } from "~/utils/interfaces";

@Component({})
export default class TeamSection extends Vue {
  public teamDiversity: ITeamDiversityCard[] = [
    {
      id: 1,
      icon: "/img/about-page/team-diversity/employee-icon.svg",
      title: "53",
      subtitle: "Employees",
      animationDelay: "200",
    },
    {
      id: 2,
      icon: "/img/about-page/team-diversity/gender-icon.svg",
      title: "34:55",
      subtitle: "M/F Gender Ratio",
      animationDelay: "400",
    },
    {
      id: 3,
      icon: "/img/about-page/team-diversity/nationality-icon.svg",
      title: "21",
      subtitle: "Nationalities",
      animationDelay: "600",
    },
    {
      id: 4,
      icon: "/img/about-page/team-diversity/language-icon.svg",
      title: "22",
      subtitle: "Languages",
      animationDelay: "1000",
    },
    {
      id: 5,
      icon: "/img/about-page/team-diversity/location-icon.svg",
      title: "3",
      subtitle: "Locations",
      animationDelay: "800",
    },
  ];
  public teamDiversityMob: ITeamDiversityCard[] = [
    {
      id: 1,
      icon: "/img/about-page/team-diversity/employee-icon.svg",
      title: "35",
      subtitle: "Employees",
      className: "w-1/2 pr-2",
    },
    {
      id: 3,
      icon: "/img/about-page/team-diversity/nationality-icon.svg",
      title: "18",
      subtitle: "Nationalities",
      className: "w-1/2",
    },
    {
      id: 2,
      icon: "/img/about-page/team-diversity/gender-icon.svg",
      title: "55:45",
      subtitle: "M/F Gender Ratio",
      className: "w-full my-2",
    },
    {
      id: 4,
      icon: "/img/about-page/team-diversity/language-icon.svg",
      title: "19",
      subtitle: "Languages",
      className: "w-1/2 pr-2",
    },
    {
      id: 5,
      icon: "/img/about-page/team-diversity/location-icon.svg",
      title: "3",
      subtitle: "Locations",
      className: "w-1/2",
    },
  ];
}
</script>

<style scoped lang="scss">
.team-bg {
  background: linear-gradient(
      103.54deg,
      rgba(0, 0, 0, 0.04) 2.82%,
      rgba(0, 0, 0, 0) 90.52%
    ),
    #f1e9d8;
}
</style>
