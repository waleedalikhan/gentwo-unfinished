<template>
  <div>
    <input
      v-if="inputType === 'input'"
      type="text"
      class="
        outline-none
        focus:outline-none
        rounded-2xl
        px-6
        py-4
        mierb-font
        text-lg
        placeholder-light-grey-light
        border-0
        focus:ring-0 focus:ring-offset-transparent
      "
      :class="[inputBg, isFullWidth ? 'w-full' : 'w-auto']"
      :placeholder="placeHolder"
      @input="onInputChange"
    />
    <textarea
      v-if="inputType === 'textarea'"
      class="
        outline-none
        focus:outline-none
        rounded-2xl
        px-6
        py-4
        mierb-font
        text-lg
        placeholder-light-grey-light
        border-0
        focus:ring-0 focus:ring-offset-transparent
      "
      :class="[inputBg, isFullWidth ? 'w-full' : 'w-auto']"
      :placeholder="placeHolder"
      @input="onInputChange"
      :rows="3"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class InputField extends Vue {
  @Prop({ default: "bg-light-bronze2" }) inputBg!: string;
  @Prop({ default: true }) isFullWidth!: string;
  @Prop() placeHolder!: string;
  @Prop() onInputChange!: ((payload: Event) => void) | undefined;
  @Prop({ default: "input" }) inputType!: string;
}
</script>

<style scoped lang="scss">
</style>