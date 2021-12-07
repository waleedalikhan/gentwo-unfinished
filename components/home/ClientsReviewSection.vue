<template>
  <section
    class="
      md:pt-16
      pt-10
      pb-10
      lg:px-20
      md:pl-10
      px-4
      bg-client-thoughts-section-bg
      rounded-25
      mb-6
      h-full
      overflow-hidden
    "
  >
    <BaseSlider>
      <div class="md:mr-20 mr-6 sm:block hidden">
        <div>
          <div class="lg:mt-10 mt-6">
            <QuoteLg />
          </div>
          <div class="lg:my-20 my-10">
            <h2 class="text-teal text-banner-secondary-font cambon-font-title">
              What our <br />
              clients say
            </h2>
          </div>
          <div>
            <button
              class="
                bg-teal
                w-52
                h-14
                flex
                items-center
                justify-center
                text-white
                mierb-font
                text-lg
                rounded-xl
              "
            >
              See Product spotlights
            </button>
          </div>
        </div>
      </div>
      <template v-for="review in ourClientReviews">
        <div :key="review.id" class="md:mr-20 mr-6">
          <ClientReviewCard
            :clientMsg="review.clientMsg"
            :clientImg="review.clientImg"
            :clientName="review.clientName"
            :clientRole="review.clientRole"
          />
        </div>
      </template>
    </BaseSlider>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { clientReviews } from "~/utils/mock";
import { IClientReview } from "~/utils/interfaces";

@Component({})
export default class ClientsReviewSection extends Vue {
  public ourClientReviews: IClientReview[] = clientReviews;
}
</script>

<style scoped lang="scss">
</style>
