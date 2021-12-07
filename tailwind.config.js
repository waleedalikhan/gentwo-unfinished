module.exports = {
  mode: "jit",
  purge: ["**/*.html", "**/*.{vue,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: "#25464F",
        bronze: "rgba(132, 118, 88, 1)",
        "dark-teal": "rgba(49, 93, 105, 1)",
        offWhite: "rgba(248, 248, 243, 0.65)",
        "dark-grey": "#1D2021",
        brown: "rgba(67, 65, 80, 1)",
        concrete: "#6B7376",
        "dark-element-bg": "rgba(243, 247, 248, 0.07)",
        pistachio: "#7C9891",
        "digital-markets": "#8AA9B5",
        "investment-ideas-color": "#F1E9D8",
        "investment-ideas-bg": "#31434A",
        "ecosystem-heading": "rgba(161, 194, 203, 1)",
        "eco-orange": "#DBAD8A",
        "product-spotlights-bg": "rgba(148, 159, 142, 0.12)",
        "spotlight-bg": "rgba(223, 227, 223, 1)",
        "warm-white": "rgba(248, 248, 243, 1)",
        medium: {
          bronze: "#847658",
          teal: "#349892",
          meroon: "#5B3B33"
        },
        light: {
          "element-bg": "rgba(29, 32, 33, 0.05)",
          "secondary-body": "rgba(21, 28, 31, 0.65)",
          "secondary-border": "rgba(21, 28, 31, 0.14)",
          teal: "#6F929F",
          "teal-lighter": "#A6B6A2",
          "teal-lightest": "rgba(37, 70, 79, 0.1)",
          "grey-light": "rgba(29, 32, 33, 0.45)",
          BG: "rgba(245, 247, 247, 1)",
          bronze: "rgba(132, 118, 88, 0.1)",
          "bronze-lighter": "rgba(132, 118, 88, 0.18)",
          bronze2: "rgba(132, 118, 88, 0.05)",
          "warm-white": "rgba(248, 248, 243, 0.65)",
          green: "#7F9F99",
          pink: "#EFE8E6",
          meroon: "#846058",
          white: "rgba(255, 255, 255, 0.8)",
          "white-lightest": "rgba(255, 255, 255, 0.06)",
          pistachio: "#B7C7C3"
        },
        "explore-section-bg": "rgba(96, 78, 42, 0.08)",
        "explore-card-y-bg": "rgba(255, 255, 255, 0.65)",
        "explore-card-x-bg": "#F7F2E5",
        "newsletter-border": "rgba(37, 70, 79, 0.1)",
        "client-section-bg": "rgba(245, 247, 247, 1)",
        "innovator-section-bg": "rgba(228, 232, 233, 1)",
        "client-thoughts-section-bg": "rgba(232, 235, 236, 0.65)",
        "latest-news-section-bg": "rgba(239, 232, 216, 1)",
        "news-section-border ": "rgba(21, 28, 31, 0.14)",
        "news-card-bg": "rgba(255, 255, 255, 0.65)",
        "our-vision-bg": "#D6E4E8",
        "numbers-card-bg": "rgba(27, 59, 68, 0.65)",
        "pulse-main": "#EFEBE1",
        "filter-border": "#434150",
        "news-topic-bg": "#EFE8D8",
        "digital-tag-bg": "#4A7182",
        dimgray: "rgba(60, 49, 47, 0.8)",
        "use-case-border": "#F3DCD7",
        "our-eco-partner-bg": "rgba(214, 228, 232, 0.18)",
        "contact-office-bg": "#E4E8E9",
        "office-card-bg": "rgba(132, 118, 88, 0.05)",
        "smoke-900": "rgba(0, 0, 0, 0.9)",
        "smoke-800": "rgba(0, 0, 0, 0.75)",
        "smoke-600": "rgba(0, 0, 0, 0.6)",
        smoke: "rgba(0, 0, 0, 0.5)",
        "smoke-400": "rgba(0, 0, 0, 0.4)",
        "smoke-200": "rgba(0, 0, 0, 0.25)",
        "smoke-100": "rgba(0, 0, 0, 0.1)",
        "smoke-50": "rgba(0, 0, 0, 0.05)",
        "bronze-secondary": "rgba(192, 178, 149, 1)",
        digital: "#419580",
        "digital-secondary": "#97C5B9"
      },
      borderRadius: {
        "32": "32px",
        "25": "25px",
        random: "28px"
      },
      minHeight: {
        "602px": "602px",
        "453px": "453px",
        "500px": "500px",
        "news-card-title": "153px",
        "news-card-title-two": "60px",
        "682px": "682px",
        "279px": "279px"
      },
      width: {
        "35%": "40%",
        "65%": "60%",
        "15%": "15%",
        "30%": "35%",
        "350px": "350px",
        "news-card-width": "458px",
        "news-card-width-small": "343px",
        "news-card-img": "260px",
        "new-card-img-small": "125px",
        "news-card-content": "290px",
        "news-card-content-small": "218px",
        "211px": "211px",
        "569px": "569px",
        "400px": "400px"
      },
      height: {
        "403px": "403px",
        "explore-card-y-height": "444.9px",
        "explore-card-x-height": "350px",
        "explore-y-img-height": "203px",
        "500px": "500px",
        "news-card-height": "550px",
        "news-card-height-small": "350px",
        "194px": "194px",
        "442px": "441.61px",
        "300px": "300px",
        "215px": "215px",
        "188px": "188px",
        "383px": "383px",
        "480px": "480px",
        "343px": "343px"
      },
      fontSize: {
        "banner-font": "80px",
        "banner-secondary-font": "32px",
        xss: "10px",
        "56px": "56px",
        "40px": "40px",
        "192px": "192px",
        "64px": "64px",
        "22px": "22px"
      },
      boxShadow: {
        "explore-card-shadow": "0px 6px 24px rgba(0, 0, 0, 0.06)",
        "explore-card-shadow-hover": "0px 8px 36px rgba(0, 0, 0, 0.12)",
        "explore-card-shadow-press": "0px 2px 12px rgba(0, 0, 0, 0.1)"
      },
      girdTemplateRows: {
        masonry: "masonry"
      }
    }
  },

  variants: {
    extend: {
      opacity: ["disabled"]
    }
  },

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp")
  ]
};
