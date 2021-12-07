<template>
  <div class="border border-newsletter-border p-6 rounded-xl">
    <div class="flex items-center">
      <div v-if="hasLargeLogo" class="mr-8">
        <img src="/img/icons/newsletter-icon.svg" alt="" />
      </div>
      <div class="w-35% flex flex-wrap">
        <div class="w-full flex items-center mb-2">
          <div v-if="!hasLargeLogo" class="mr-4">
            <img src="/img/explore-section/gentwo-pulse.svg" alt="" />
          </div>
          <p class="text-2xl mierb-font text-dark-grey">GenTwo Pulse</p>
        </div>
        <div class="w-full">
          <p class="text-lg text-light-secondary-body mierb-font">
            Latest news, work and industry insights. Sign up and don’t miss a beat
          </p>
        </div>
      </div>
      <form class="relative w-65% flex flex-col pl-10" @submit.prevent="subscribe" novalidate>
        <fieldset class="flex">
          <input
            type="email"
            placeholder="Your email address"
            v-model="$v.email.$model"
            class="
              outline-none
              focus:outline-none
              bg-light-element-bg
              rounded-lg
              py-4
              px-3
              border-none
              flex-1
              mierb-font
              text-light-grey-light
            "
            :class="{ 'border-solid border-1 border-red-500': $v.email.$error }"
            required
            :disabled="loading"
          />
          <button
            type="submit"
            class="
              outline-none
              focus:outline-none
              bg-medium-bronze
              py-4
              px-6
              mierb-font
              text-white
              rounded-xl
              ml-2
            "
            :disabled="loading"
          >
            Register
            <Spinner v-if="loading" />
          </button>
        </fieldset>
        <div class="absolute top-full flex-1 text-sm mt-2 ml-3 text-red-500" v-if="$v.email.$error">
          <div v-if="!$v.email.required">Email is required</div>
          <div v-if="!$v.email.email">Email is not a properly formatted email address</div>
        </div>
        <div class="absolute top-full flex-1 text-sm mt-2 ml-3" v-if="subscribed">
          Subscribed
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { required, email } from "vuelidate/lib/validators";

@Component({
  validations: {
    email: {
      required,
      email,
    },
  },
})
export default class NewsLetter extends Vue {
  @Prop({ default: false }) hasLargeLogo!: boolean;

  loading: boolean = false;
  subscribed: boolean = false;
  email: any = null;

  async subscribe(e: any) {
    this.$v.$touch();
    this.subscribed = false;

    if (!this.$v.$invalid) {
      this.loading = true;

      try {
        await this.$strapi.create("newsletter-subscriptions", { email: this.email });

        this.email = null;
        this.$v.$reset();
        this.subscribed = true;

        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
