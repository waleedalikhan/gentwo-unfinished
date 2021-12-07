<template>
  <div
    class="
      md:px-5
      px-4
      pb-4
      py-6
      rounded-2xl
      card-bg
      flex flex-wrap
      items-start
      card-height
      g2-card
      text-center
    "
    :class="cardClass"
  >
    <div class="flex w-full justify-center">
      <h1
        class="md:text-4xl text-3xl cambon-font"
        :class="cardTitleClass"
        v-html="cardTitle"
      ></h1>
    </div>
    <div class="w-full my-10">
      <p class="text-white mierb-font opacity-60 text-lg">
        {{ cardSubtitle }}
      </p>
    </div>
    <div class="w-full flex justify-center">
      <button
        class="
          outline-none
          focus:outline-none
          rounded-full
          md:px-6
          px-3
          h-11
          flex
          items-center
          mierb-font
        "
        :class="cardBtnClass"
        @click="clickCardButton"
      >
        {{ cardBtnText }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class InvestmentCard extends Vue {
  @Prop({}) cardTitle!: string;
  @Prop({}) cardClass!: string;
  @Prop({}) cardTitleClass!: string;
  @Prop({}) cardImgClass!: string;
  @Prop({}) cardSubtitle!: string;
  @Prop({}) cardBtnText!: string;
  @Prop({}) cardBtnClass!: string;

  public clickCardButton() {
    this.$emit("buttonClicked");
  }
}
</script>

<style scoped lang="scss">
.card-height {
  min-height: 100%;
}

@media only screen and (min-width: 580px) {
  .card-height {
    min-height: 340px;
  }
}

.public-card-bg {
  background: radial-gradient(
      100% 185.31% at 100% 100%,
      #353939 0%,
      rgba(45, 42, 33, 0.1) 100%
    ),
    #1d2021;
  .public-card-btn {
    background: linear-gradient(
        92.93deg,
        rgba(255, 255, 255, 0.2) 8.98%,
        rgba(255, 255, 255, 0) 88.26%
      ),
      #9f906f;
    color: #1f2121;
  }
}
.private-card-bg {
  background: radial-gradient(
      100% 185.31% at 100% 100%,
      #394140 0%,
      rgba(57, 65, 64, 0.1) 100%
    ),
    #1d2021;
  .private-card-btn {
    background: linear-gradient(
        92.93deg,
        rgba(255, 255, 255, 0.2) 8.98%,
        rgba(255, 255, 255, 0) 88.26%
      ),
      #7c9891;
    color: #202424;
  }
}
.digital-card-bg {
  background: linear-gradient(141.5deg, #051920 1.02%, #23423b 98.89%);
  .digital-card-btn {
    background: linear-gradient(
        91.07deg,
        rgba(255, 255, 255, 0.25) 3.17%,
        rgba(255, 255, 255, 0) 93.17%
      ),
      #419580;
    color: #041820;
  }
}
</style>
