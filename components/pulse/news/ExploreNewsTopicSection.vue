<template>
  <section class="bg-pulse-main rounded-25 md:p-10 p-5">
    <div class="flex flex-wrap">
      <div class="w-full flex flex-col lg:flex-row justify-between">

          <h1 class="mierb-font text-dark-grey text-banner-secondary-font flex flex-initial mb-4">
            Explore by topic
          </h1>
        
        <div class="w-full lg:w-auto flex flex-initial items-center">
          <template>
            <span
              class="
                px-2
                py-1
                rounded-2xl
                border border-filter-border
                text-sm
                mierb-font
                mr-3
                cursor-pointer
              "
              :class="{ 'bg-dark-grey text-white': filterBy==='all', 'text-dark-grey':filterBy!=='all'}"

              @click="filterBy='all'; currentPage=1; getData()"
              >All</span
            >
          </template>

          <template v-if="filters.length" v-for="(filter, index) in filters">
            <span
              :key="index"
              class="
                px-2
                py-1
                rounded-2xl
                border border-filter-border
                text-sm
                mierb-font
                mr-3
                cursor-pointer
              "
              :class="{ 'bg-dark-grey text-white': filterBy===filter, 'text-dark-grey':filterBy!==filter}"
              @click="filterBy=filter; currentPage=1; getData()"
              >{{ filter }}</span
            >
          </template>
          <div class="flex flex-stretch flex-grow items-end justify-end">
          <button
            class="
              outline-none
              focus:outline-none
              bg-light-element-bg
              text-sm
              mierb-font
              text-dark-grey
              flex
              items-center
              justify-center
              w-9
              h-9
              rounded-full
              text-dark-grey
              mr-3
            "
          >
            <img src="/img/icons/arrow-down-icon.svg" alt="" />
          </button>
          </div>
        </div>
      </div>
      <div class="w-full md:my-10 my-6">
        <div class="flex flex-wrap">
          <template v-for="card in newsTopicCards">
            <div
              :key="card.id"
              class="xl:w-1/3 lg:w-1/2 w-full lg:pr-6 mb-6"
              data-aos="fade-up"
              data-aos-duartion="800"
              :data-aos-delay="card.animationDelay"
            >
              <FeedCard
                :cardImg="card.cardImg"
                :cardCategories="card.cardCategories"
                :cardDate="formatDate(card.cardDate)"
                :cardTitle="card.cardTitle"
                :cardText="card.cardText"
                :cardPath="card.cardPath"
              />
            </div>
          </template>
        </div>
      </div>
      <div class="w-full flex justify-center items-center">
        <button
          class="
            outline-none
            focus:outline-none
            bg-light-element-bg
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-full
            mr-4
          "
        >
          <img src="/img/icons/arrow-left-icon.svg" alt="" />
        </button>
        <button
          v-for="page in pages"
          :key="page"
          class="
            rounded-lg
            outline-none
            focus:outline-none
            border border-light-element-bg
            w-12
            h-12
            flex
            justify-center
            items-center
            text-light-secondary-body
            mierb-font
            mr-4
          "
          :class="{ 'bg-light-element-bg': currentPage===page, '':filterBy!==page}"
          @click="getData(page)"
        >
          {{page}}
        </button>

        <button
          class="
            outline-none
            focus:outline-none
            bg-light-element-bg
            w-10
            h-10
            flex
            items-center
            justify-center
            rounded-full
          "
        >
          <img src="/img/icons/arrow-right-icon.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { IFeedCard } from "~/utils/interfaces";

@Component({})
export default class ExploreNewsTopicSection extends Vue {
  @Prop({ required: true }) newsTopicCards !: any[]
  @Prop({required: true}) itemsCount!: number
  @Prop({required: true}) filters!: Array<any>

  public filterBy:string = 'all'
  public currentPage:number = 1

  formatDate(date:string):string {
    const  rawDate = new Date(date)
    return rawDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }
  // request data based on the filter starting from selected page
  getData(page=1){
    this.currentPage = page
    this.$emit('go-to-page', {'page':page, 'filter':this.filterBy})
  }

  get pages():any{
    var itemsPerPage = 12
    return Math.ceil(this.itemsCount/itemsPerPage)
  }

}
</script>

<style scoped lang="scss">
</style>
