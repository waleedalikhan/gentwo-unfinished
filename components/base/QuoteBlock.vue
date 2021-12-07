<template>
  <div
    class="
      rounded-2xl
      border border-light-grey-light
      w-full
      px-8
      py-5
      flex
      lg:mb-0
      mb-6
    "
  >
    <div>
      <svg
        width="25"
        height="25"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.888 0.199999C3.232 0.919998 0.0160002 4.04 0.0160002 8.12C0.0160002 11.384 2.032 13.832 4.72 13.832C6.64 13.832 7.984 12.584 7.984 10.808C7.984 9.464 7.408 8.648 6.256 8.312H3.616C3.088 8.024 2.848 7.4 2.848 6.488C2.848 4.136 4.816 1.928 7.936 0.439999L7.888 0.199999ZM17.536 0.199999C12.88 0.919998 9.664 4.04 9.664 8.12C9.664 11.384 11.68 13.832 14.368 13.832C16.288 13.832 17.632 12.584 17.632 10.808C17.632 9.464 17.056 8.648 15.904 8.312H13.264C12.736 8.024 12.496 7.4 12.496 6.488C12.496 4.136 14.464 1.928 17.584 0.439999L17.536 0.199999Z"
          fill="#1D2021"
          fill-opacity="0.45"
        />
      </svg>
    </div>
    <p class="cambon-font text-dark-grey text-lg ml-2">
      {{ quoteText }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component({})
export default class QuoteBlock extends Vue {
  @Prop() quoteText!: string;
}
</script>

<style scoped lang="scss">
</style>
