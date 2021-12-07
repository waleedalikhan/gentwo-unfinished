<template>
  <div>
    <NewsBanner
      bannerTag="Insights"
      bannerTitle="The Swiss Longevity Valley: How Switzerland Will Become a Global Longevity Financial MegaHub by 2025"
      bannerAuthor="By Stefan Hascoet, Partner at Longevity.Capital"
      bannerDate="16 June 2021"
      bannerImg="banner-img-four"
      bannerDirection="ltr"
      bannerBackLink="/pulse/news"
      bannerBackText="Back to Latest News, Insights & Press Releases"
    />
    <DetailsSection class="mb-6">
      <div class="w-full">
        <h1
          class="
            cambon-font
            md:text-banner-secondary-font
            text-2xl
            bronze-text-gradient
          "
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Its specific strengths in international finance and FinTech in
          particular make it poised to become the world-leading Longevity
          Financial Industry Hub.
        </h1>
      </div>
    </DetailsSection>
    <DetailsSection class="mb-6">
      <div class="w-full flex flex-wrap items-start justify-between">
        <div class="lg:w-1/4 w-full lg:mb-0 mb-6">
          <h1
            class="
              mierb-font
              md:text-banner-secondary-font
              text-2xl
              bronze-text-gradient
            "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            At a glance
          </h1>
        </div>
        <div class="lg:w-2/3 w-full">
          <template v-for="(glance, index) in glances">
            <div
              :key="index"
              class="p-4 rounded-2xl border border-medium-bronze mb-5"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <p class="mierb-font text-dark-grey text-lg">
                {{ glance }}
              </p>
            </div>
          </template>
        </div>
      </div>
    </DetailsSection>
    <DetailsSection class="mb-6" :isCentered="false">
      <div class="w-full">
        <div class="xl:w-1/2 lg:w-2/3 w-full mx-auto">
          <p class="cambon-font text-dark-grey lg:text-22px text-lg">
            As a Switzerland-based Financial Industry Professional,, the
            nation's unique strengths in the financial sector, and the
            international policy sector, have been clear to me for a long time.
            But it was not until I met Dmitry Kaminskiy, General Partner of Deep
            Knowledge Group, that Switzerland's equally-unqiue strengths and
            porspects in the Longevity Industry - and its potentials to reap
            extremely promising synergies between these two domains - became
            apparent to me. I an excited to promote this agenda and to help
            steer the direction of ongoing Swiss-based Longevity activities
            towards a future that can enable the nation to become a world-class
            Longevity MegaHub.
          </p>
        </div>
        <div class="w-full lg:px-14 md:px-8 my-12">
          <img
            src="/img/pulse-page/blog-longform/blog-1.png"
            alt=""
            class="w-full h-full mb-5"
          />
          <div class="xl:w-1/2 lg:w-2/3 w-full mx-auto">
            <p class="mierb-font text-light-secondary-body text-lg">
              Fig.1 Lorem ipsum dolor
            </p>
          </div>
        </div>
        <div class="xl:w-1/2 lg:w-2/3 w-full mx-auto flex flex-wrap">
          <div class="w-full mb-8">
            <p class="cambon-font text-dark-grey lg:text-22px text-lg">
              The present article, which is an excerpt from my guest chapter in
              the upcoming book, “Longevity Industry 1.0: Defining the Biggest
              and Most Complex Industry in Human History”, co-authored by Deep
              Knowledge Group Co-Founders Dmitry Kaminskiy and Margaretta
              Colangelo, distills just some of that knowledge and understanding,
              and outlines some of Deep Knowledge Group’s current and upcoming
              activities which aim to transform Switzerland’s potentials to
              become a leading Longevity Hub into reality.
            </p>
          </div>
          <div class="w-full">
            <h1
              class="mierb-font text-dark-grey text-banner-secondary-font mb-6"
            >
              Longevity Industry in Switzerland
            </h1>
            <template v-for="(longevity, index) in longevityInSwitzerland">
              <p
                :key="index"
                class="cambon-font text-dark-grey lg:text-22px text-lg mb-6"
              >
                {{ longevity }}
              </p>
            </template>
          </div>
        </div>
        <div class="w-full flex items-center flex-col mb-10">
          <img src="/img/pulse-page/blog-longform/blog-2.png" alt="" />
          <div class="xl:w-1/2 lg:w-2/3 w-full mx-auto">
            <p class="mierb-font text-light-secondary-body text-lg">
              Fig.1 Lorem ipsum dolor
            </p>
          </div>
        </div>
        <div class="xl:w-1/2 lg:w-2/3 w-full mx-auto flex flex-wrap mb-10">
          <div class="w-full">
            <h1
              class="mierb-font text-dark-grey text-banner-secondary-font mb-6"
            >
              What Makes Switzerland a Longevity-Progressive Country?
            </h1>
            <template v-for="(progress, index) in longevityProgress">
              <p
                :key="index"
                class="cambon-font text-dark-grey lg:text-22px text-lg mb-6"
              >
                {{ progress }}
              </p>
            </template>
          </div>
        </div>
        <div class="w-full flex items-center flex-col mb-10">
          <img src="/img/pulse-page/blog-longform/blog-3.png" alt="" />
          <div class="xl:w-1/2 lg:w-2/3 w-full mx-auto">
            <p class="mierb-font text-light-secondary-body text-lg">
              Fig.2 Lorem ipsum dolor
            </p>
          </div>
        </div>
        <div class="xl:w-1/2 lg:w-2/3 w-full mx-auto flex flex-wrap mb-10">
          <div class="w-full">
            <p class="cambon-font text-dark-grey lg:text-22px text-lg">
              Some specific programmes that Switzerland has the power to develop
              in the next several years include the development a Longevity
              progressive pension system and insurance company ecosystem that
              accounts for both population aging (which threatens to destabilize
              the current business models of insurance companies and pension
              funds) and the potential for widespread healthspan extension, and
              the development of a national strategy for intensively developing
              its geroscience and FinTech to a state so advanced that it propels
              Switzerland into a central role in the internationally competitive
              Longevity business ecosystem, where it can rise to become a global
              leader in the specific field of Longevity finance. <br /><br />
              Switzerland sits at a crossroads of European geroscience, and has
              a strong and productive geroscience community, The Swiss Institute
              for Bioinformatics for example has recently identified large
              numbers of genetic markers directly linked to human life
              expectancy. The top universities in Switzerland for clinical
              medicine, based on their reputation and research in the field are
              Zurich, Bern, Basel, Geneva, Lausanne, and the Swiss Federal
              Institute of Technology. Switzerland is also home to the
              prestigious Vontobel Prize for Aging Research.
              <br /><br />
              While the word “Longevity” is often associated with the likes of
              ‘Silicon Valley’ and the life extension community of supporters,
              according to the Aging Analytics Agency this may soon change. The
              Longevity Swiss Foundation, a Geneva-based non-profit and
              think-tank is aiming to turn the nation into a world-leading
              Longevity hub, calling it a new ‘Longevity Valley’. While tech had
              Silicon Valley as its incubator, Longevity will require something
              more powerful. It is not just about vast amounts of money for
              investment, nor the innovation that draws talent. It covers
              complex phenomena that include political drive, synergy between
              finance and new biotechs, and demographics that allow the new
              therapies to have a huge impact on the economy and people’s
              wellbeing.
              <br /><br />
              Dmitry was correct when he said, in a press release on the
              publication of Aging Analytics Agency’s Longevity Industry in
              Switzerland report last year year, that
              <span class="italic"
                >“Switzerland has a long-standing reputation as a hub for both
                international policy and the financial industry. The nation has
                extremely strong potentials to leverage these existing assets in
                order to become the leading European hotspot for the rising
                Longevity financial industry”</span
              >.
            </p>
          </div>
          <div class="w-full flex flex-wrap mt-10">
            <div class="w-full mb-4">
              <p class="mierb-font text-dark-grey text-lg">
                More in the Longevity series
              </p>
            </div>
            <div class="w-full">
              <div
                class="
                  inline-flex
                  md:flex-nowrap
                  flex-wrap
                  items-center
                  rounded-xl
                  border border-dark-grey
                  cursor-pointer
                  p-3
                "
              >
                <div class="lg:pr-4 md:w-auto w-full md:order-first order-last">
                  <p class="mierb-font text-dark-grey">
                    Defining the Longevity Industry
                  </p>
                  <p class="mierb-font text-dark-grey">
                    The Biggest and Most Complex Industry In Human History
                  </p>
                </div>
                <div class="md:w-auto w-full md:block flex justify-end">
                  <img
                    src="/img/icons/go-to-icon.svg"
                    alt=""
                    class="md:w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center flex-col my-10">
          <img src="/img/pulse-page/blog-longform/blog-4.png" alt="" />
          <div class="xl:w-1/2 lg:w-2/3 w-full mx-auto mt-6">
            <p class="mierb-font text-light-secondary-body text-lg">
              Fig.3 Lorem ipsum dolor
            </p>
          </div>
        </div>
      </div>
    </DetailsSection>
    <AuthorSection />
    <LatestNewsSection class="my-6"/>
    <div class="w-3/4 mx-auto lg:block hidden mb-6 mt-12">
      <NewsLetter :hasLargeLogo="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class BlogLongform extends Vue {
  public glances: string[] = [
    "Switzerland possesses completely unique strengths and synergies in the spheres of BioTech, Preventive Precision Medicine, International Policy, the Financial Industry and Advanced Al-Empowered InvestTech Solutions",
    "This unique intersection of frontier technologies and domains can be leveraged to transform the nation into a world-leading Longevity Valley in the coming years",
    "Its specific strengths in international finance and FinTech in particular make it poised to become the world-leading Longevity Financial Industry Hub, if its unique advantages and potentials are leveraged in the right way",
    "Deep Knowledge Group has been increasing their activities in the Swiss Longevity ecosystem for some time, with the recent launch of Deep Knowledge Swiss and the Longevity Swiss Foundation, and planned launch of AI Centres for Longevity and Financial Wellness in Switzerland, as components of the global Longevity AI Consortium, recently launched and inaugurated at King's College London",
  ];
  public longevityInSwitzerland: string[] = [
    "Switzerland is thought to be second only to Japan in terms of the number of people who have reached 100 (Switzerland has the highest life expectancy in Europe at 83.7 years, according Eurostat). According to a study conducted by the Institute for Social and Preventive Medicine, about 40 out of every 10,000 people born in 1900 in Switzerland made it to their 100th birthday. Life expectancy has increased by 98 per cent for men and 96 per cent for women in the past century and a half. A slight dip was due to and influenza epidemic in 1918.",
    "Switzerland is an international center of finance where investment banks are acutely aware of the demographic challenge and the incentives to do something about it. Switzerland's financial sector is of significant importance to the national economy, employing about 5% of the total workforce and accounting for 9% of economic output. The financial sector ensures that the Swiss economy is never short of the necessary capital or financial services. Switzerland has been leading transformative developments emerging from the digitalization of its banking and financial sector. Even the Swiss Board of Advisors name now digitization as the most important topic. Switzerland is also one of the most efficiently regulated and supervised financial centers in the world today.",
    "Switzerland has made large strides towards accommodating innovation - both domestic and foreign - in the fields of fintech, blockchain, and cryptocurruncies in the last few years. For example, there were 220 fintech companies in Switzerland by the end of 2017, with 32 new companies being incorporated throughout the year. It is leading the digitization of financial markets and establishing itself as a catalyst for financial innovation on a global level. 10% of all global European FinTech enterprises are located in Switzerland, with 46% of them located in Zurich. Switzerland sits at one end of the BioValley, one of the leading life science clusters in Europe. The cluster is unique in that it spans across three countries Switzerland, Germany and France. This includes the global life science hub of Basel, Switzerland. BioValley brings together important ingredients for a successful biotech cluster, a concentration of companies, rich availability of skills and experience within Life Sciences and research base that is world-class.",
    "Switzerland spends the highest percentage of GDP on healthcare (around 11.4 percent) compared to all EU countries. Basic health insurances is compulsory in Switzerland, although you are free to choose your own Swiss health insurance company. In the EU's latest statistics, Switzerland was the only country compared to the EU to total more than EUR 4,500 per inhabitant on healthcare expenditure. Healthcare is largely organised by Switzerland's individual communes. the health ministers from all cantons from the Swiss Conference of the Cantonal Ministers of Public Health (GDK), which aims to promote cooperation and implement common policies between cantons.",
    "Moreover, Switzerland is known to be one of the most longevity-progressive countries, which defines it not simply as a country with hight investment in biotechnology, but those one most capable of intergarting AI into its economic, financial, and healthcare systems.",
  ];
  public longevityProgress: string[] = [
    "Longevity-progressive countries normally have large aging populations.",

    "The Swiss population is one of the oldest on the planet. This is a consequence of low fertility, increased life expectancy (in 2018 Swiss life expectancy ranked 5th in the world, with an annual life expectancy of 83.489 years) and a societal appreciation for preventative health and healthy aging.",

    "An aging population has two Longevity-progressive benefits:",

    "Voting power: It galvanises government action. The challenges of an aging society make themselves felt at all levels, and this forces governments to confront the global 'silver tsunami' head on.",

    "Spending power: Wealth is concentrated in the hands of the elderly, and more likely to be directed toward solutions which improve the lives of the elderly.",

    "This voting power factor is especially strong in Switzerland because of its tradition of direct democracy and popular initiatives. As a consequence, the Swiss political establishment is acutely aware of the democratic consequences of its demographics, and has therefore taken extensive initiatives to address Switzerland’s demographic challenge.",

    "The digitization of finance, and novel financial systems which treat Longevity as a dividend will play an integral role in the future Longevity industry and economy. Switzerland an international centre of finance where investment banks are acutely aware of the demographic challenge and the incentives to do something about it. Switzerland’s financial sector is of significant importance to the national economy, employing about 5% of the total workforce and accounting for 9% of economic output. The financial sector ensures that the Swiss economy is never short of the necessary capital or financial services. Switzerland is also one of the most efficiently regulated and supervised financial centres in the world today.",

    "Switzerland therefore has all the elements necessary to become a leading Longevity financial hub, due to such factors as a lean political system that facilitates rapid implementation of integrated government programs, a strong research environment for geroscience, a strong research and business environment for digital health, and most importantly, international financial prowess",
  ];
}
</script>

<style lang="scss">
.banner-img-four {
  background: url("/img/pulse-page/explore-topic/img-seven.png") center / cover
    no-repeat;
}
.bronze-text-gradient {
  background: linear-gradient(
    to left,
    rgba(115, 106, 100, 1),
    rgba(19, 27, 30, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 120%;
}
</style>
