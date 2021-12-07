<template>
  <button
    class="flex items-center justify-center px-5 h-11 rounded-32 mierb-font"
    :class="[buttonBg, buttonTextColor]"
    @click="onClick"
  >
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class Button extends Vue {
  @Prop() buttonText!: string;
  @Prop({ default: "bg-light-element-bg" }) buttonBg!: string;
  @Prop({ default: "text-medium-bronze" }) buttonTextColor!: string;
  @Prop() onClick!: () => void;
}
</script>

<style scoped lang="scss"></style>
