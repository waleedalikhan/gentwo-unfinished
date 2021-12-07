 <template>
  <section
    class="rounded-25 lg:p-16 p-6 investment-bg overflow-hidden"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-offset="-200"
  >
    <div class="flex items-center lg:w-11/12 w-full mx-auto">
      <div class="lg:block hidden mx-auto">
        <h1
          class="heading-no cambon-font-title text-192px"
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-delay="400"
          data-aos-offset="-200"
        >
          4
        </h1>
      </div>
      <div class="lg:w-4/5 w-full">
        <h2
          class="cambon-font-title lg:text-64px text-5xl heading-text mb-6"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-delay="400"
          data-aos-offset="-200"
        >
          The investment <br />
          universe
        </h2>
        <p
          class="lg:text-2xl text-lg mierb-font subheading-text"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="600"
          data-aos-offset="-200"
        >
          Any asset class is now accessible, manageable and bankable. You can
          turn virtually any investment idea into a bankable security, ready for
          easy and transparent investing.
        </p>
      </div>
    </div>

    <div class="flex xl:flex-nowrap flex-wrap mt-16 space-x-1">
      <template v-for="card in investmentCards">
        <div
          :key="card.id"
          class="xl:w-1/3 w-full xl:mb-0 mb-3"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-offset="-200"
          :data-aos-delay="card.animationDelay"
        >
          <InvestmentCard
            :cardClass="card.cardClass"
            :cardTitle="card.cardTitle"
            :cardTitleClass="card.cardTitleClass"
            :cardImgClass="card.cardImgClass"
            :cardSubtitle="card.cardSubtitle"
            :cardBtnText="card.cardBtnText"
            :cardBtnClass="card.cardBtnClass"
            @buttonClicked="emitClickEvent(card.cardBtnText)"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { IInvestmentCard } from "~/utils/interfaces";

@Component({})
export default class InvestmentUniverseSection extends Vue {
  public investmentCards: IInvestmentCard[] = [
    {
      id: 1,
      cardTitle: "Public <br> Markets",
      cardTitleClass: "text-medium-bronze",
      cardClass: "public-card-bg",
      cardSubtitle:
        "Equity · Bonds · Commodities · Foreign Exchange · Structured products",
      cardBtnText: "More about Public Markets",
      cardBtnClass: "public-card-btn",
      animationDelay: "300",
    },
    {
      id: 2,
      cardTitle: "Private <br> Markets",
      cardTitleClass: "text-pistachio",
      cardClass: "private-card-bg",
      cardSubtitle:
        "Private Equity · Private Debt · Real Estate · Infrastructure · Collectables",
      cardBtnText: "More about Private Markets",
      cardBtnClass: "private-card-btn",
      animationDelay: "600",
    },
    {
      id: 3,
      cardTitle: "Digital <br> Markets",
      cardTitleClass: "text-digital-markets",
      cardClass: "digital-card-bg",
      cardSubtitle:
        "Crypto-currencies · DeFi · Tokens · Portfolios · High-frequency trading · STO · pre ICO / STO · Crypto Mining",
      cardBtnText: "More about GenTwo Digital",
      cardBtnClass: "digital-card-btn",
      animationDelay: "900",
    },
  ];

  emitClickEvent(value: string) {
    this.$emit("cardClicked", value);
  }
}
</script>

<style scoped lang="scss">
.investment-bg {
  background: rgba(239, 232, 216, 1);
  .heading-no {
    background: linear-gradient(
      to left,
      rgba(142, 130, 103, 1),
      rgba(51, 54, 54, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 100%;
  }

  .heading-text {
    background: linear-gradient(
      to left,
      rgba(142, 130, 103, 1),
      rgba(51, 54, 54, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 100%;
  }
  .subheading-text {
    background: linear-gradient(
      to left,
      rgba(115, 106, 100, 1),
      rgba(19, 27, 30, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 120%;
  }
}
</style>
