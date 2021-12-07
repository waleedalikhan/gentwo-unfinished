// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const globalAOS = AOS.init({
  startEvent: "load",
  offset: 50,
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

// @ts-ignore
window.onNuxtReady(() => {
  AOS.refresh();
});

// @ts-ignore
export default ({ app }) => {
  app.AOS = globalAOS;
};
