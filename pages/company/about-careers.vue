<template>
  <div>
    <AboutCareersBanner />
    <AboutCareerChallengeSection @cardClicked="togglePopup" />
    <InnovatorSection />
    <Vodal
      :show="showPopup"
      animation="slideUp"
      @hide="showPopup = false"
      :duration="800"
      measure="%"
      :height="popupHeight"
      :width="popupWidth"
    >
      <div class="flex flex-wrap max-h-screen overflow-auto">
        <div class="w-full">
          <h1
            class="
              career-popup-title
              md:text-5xl
              text-2xl
              cambon-font
              font-semibold
            "
          >
            Paralegal / Legal Assistant
          </h1>
          <p
            class="
              mierb-font
              text-dark-grey
              md:text-2xl
              text-lg
              font-semibold
              my-3
            "
          >
            Zurich ·
            <span class="text-light-secondary-body font-normal">80-100%</span>
          </p>
          <p class="mierb-font text-dark-grey text-lg">
            As our new paralegal you will support our product legal team in
            managing a growing number of complex transactions. This role will
            provide you with valuable experience in the fast-moving field of
            structured products, as well as in a growing, multi-cultural company
            with the goal of transforming the issuance of financial products.
          </p>
        </div>
        <div class="w-full my-5">
          <h1 class="text-dark-grey mierb-font text-2xl font-semibold">
            Responsibilities and Tasks
          </h1>
          <template v-for="(task, index) in tasks">
            <p :key="index" class="text-dark-grey mierb-font text-lg my-2">
              {{ task }}
            </p>
          </template>
        </div>
        <div class="w-full">
          <h1 class="text-dark-grey mierb-font text-2xl font-semibold">
            We are looking for candidates with
          </h1>
          <template v-for="(candidate, index) in candidates">
            <p :key="index" class="text-dark-grey mierb-font text-lg my-2">
              {{ candidate }}
            </p>
          </template>
        </div>
        <div class="w-full my-6 mb-4">
          <h1 class="text-2xl mierb-font text-dark-grey font-semibold mb-3">
            Please send us your application to
          </h1>
          <button
            class="
              career-btn
              text-white
              outline-none
              focus:outline-none
              mierb-font
              px-6
              py-3
              rounded-xl
              text-lg
            "
          >
            recruiting@gentwo.com
          </button>
        </div>
      </div>
    </Vodal>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import Vodal from "vodal";

export default {
  components: {
    Vodal,
  },
  data() {
    return {
      showPopup: false,
      tasks: [
        "- assisting the product legal team to ensure structured products are issued in an efficient and timely matter,",
        "- preparing contracts and other legal documents under the supervision of the product legal team,",
        "- handling account-opening of issuance vehicles at custodian banks and brokers, cryptocurrency exchanges, and similar counterparties,",
        "- compiling and providing AML and KYC documents in connection with transactions and regular KYC updates,",
        "- coordinating and resolving internal and external requests,",
        "- reviewing and providing input to processes and procedures with a focus on efficiency and optimization.",
      ],
      candidates: [
        "- Swiss KV degree or equivalent,",
        "- 1 to 2 years' experience in a similar role preferred,",
        "- experience with financial products, investment vehicles, or securization preferred,",
        "- is flexible, able to work under pressure and multi-task, efficient and well-organized working skills, accuracy and attention to details,",
        "- willing to learn, grow professionally and take on tasks that might typically be outside the traditional legal sphere, but are related to the service offering,",
        ,
        "- able to work well autonomously and also in a team, and a good team player who can integrate and work in a multicultural team/environment,",
        "- professional, proactive and practical approach to problem-solving",
        "- experience with MS Office tools,",
        "- effective oral and written communication skills in English, German language skills preferred.",
      ],
      popupWidth: 60,
      popupHeight: 90,
    };
  },
  mounted() {
    if (window.innerWidth > 1024) {
      // @ts-ignore
      this.popupWidth = 60;
      // @ts-ignore
      this.popupHeight = 90;
    } else if (window.innerWidth > 768) {
      // @ts-ignore
      this.popupWidth = 80;
      // @ts-ignore
      this.popupHeight = 90;
    } else {
      // @ts-ignore
      this.popupWidth = 100;
      // @ts-ignore
      this.popupHeight = 100;
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        // @ts-ignore
        this.popupWidth = 60;
        // @ts-ignore
        this.popupHeight = 90;
      } else if (window.innerWidth > 768) {
        // @ts-ignore
        this.popupWidth = 80;
        // @ts-ignore
        this.popupHeight = 90;
      } else {
        // @ts-ignore
        this.popupWidth = 100;
        // @ts-ignore
        this.popupHeight = 100;
      }
    });
  },
  destroyed() {
    window.removeEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        // @ts-ignore
        this.popupWidth = 60;
        // @ts-ignore
        this.popupHeight = 90;
      } else if (window.innerWidth > 768) {
        // @ts-ignore
        this.popupWidth = 80;
        // @ts-ignore
        this.popupHeight = 90;
      } else {
        // @ts-ignore
        this.popupWidth = 100;
        // @ts-ignore
        this.popupHeight = 100;
      }
    });
  },
  methods: {
    togglePopup() {
      // @ts-ignore
      this.showPopup = true;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .vodal-dialog {
  background: #f8f8f3;
  border-radius: 25px !important;
  padding: 30px !important;
  overflow: hidden !important;
}

.career {
  &-popup {
    background: rgba(239, 235, 225, var(--tw-bg-opacity));
    border-radius: 25px !important;
    padding: 30px !important;
  }
  &-btn {
    background: linear-gradient(
        273.53deg,
        rgba(255, 255, 255, 0.18) 27.77%,
        rgba(255, 255, 255, 0) 94.7%
      ),
      #9f906f;
  }
}

.career-popup-title {
  background: linear-gradient(to right, #333636, #8e8267);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 130%;
}

@media only screen and (min-width: 640px) {
  .career {
    &-popup {
      background: rgba(239, 235, 225, var(--tw-bg-opacity));
      border-radius: 25px !important;
      padding: 60px !important;
    }
  }
}
</style>
