<template>
  <section class="lg:py-16 py-10 lg:px-0 px-4 bg-light-bronze rounded-25">
    <div
      class="
        flex
        lg:flex-nowrap
        lg:space-x-8
        flex-wrap
        xl:w-2/3
        lg:w-3/4
        w-full
        mx-auto
      "
    >
      <div class="lg:w-1/3 w-full lg:mb-0 mb-6">
        <h1 class="text-teal text-banner-secondary-font mierb-font mb-6">
          How can we help?
        </h1>
        <p class="mierb-font text-dark-grey text-lg">
          Fill out the form and a member of our team will contact you as soon as
          possible.
        </p>
      </div>
      <div class="lg:w-2/3 w-full">
        <div
          class="
            flex flex-wrap
            space-y-6
            py-6
            md:px-6
            px-4
            rounded-2xl
            border border-medium-bronze
          "
        >
          <div
            class="
              w-full
              flex
              md:flex-nowrap
              md:space-x-4
              flex-wrap
              md:space-y-0
              space-y-6
            "
          >
            <div class="md:w-1/4 w-full">
              <InputField placeHolder="Title" :onInputChange="changeTitle" />
            </div>
            <div class="md:w-3/4 w-full">
              <InputField placeHolder="Name" :onInputChange="changeName" />
            </div>
          </div>
          <div class="w-full">
            <InputField placeHolder="Company" :onInputChange="changeCompany" />
          </div>
          <div class="w-full">
            <InputField
              placeHolder="Email address"
              :onInputChange="changeEmail"
            />
          </div>
          <div class="w-full">
            <InputField placeHolder="Enquiry" :onInputChange="changeEnquiry" />
          </div>
          <div class="w-full">
            <InputField
              placeHolder="Your message"
              inputType="textarea"
              :onInputChange="changeMessage"
            />
          </div>
          <div class="w-full flex justify-end">
            <button
              class="
                outline-none
                focus:outline-none
                bg-medium-bronze
                rounded-full
                px-4
                py-2
                mierb-font
                text-white
              "
              @click="getAllFields"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

interface IFormInterface {
  title: string;
  name: string;
  company: string;
  emailAddress: string;
  enquiry: string;
  message: string;
}

@Component({})
export default class AboutContactForm extends Vue {
  form: IFormInterface = {
    title: "",
    name: "",
    company: "",
    emailAddress: "",
    enquiry: "",
    message: "",
  };
  changeTitle(e: any) {
    this.form.title = e.target.value;
  }
  changeName(e: any) {
    this.form.name = e.target.value;
  }
  changeCompany(e: any) {
    this.form.company = e.target.value;
  }
  changeEmail(e: any) {
    this.form.emailAddress = e.target.value;
  }
  changeEnquiry(e: any) {
    this.form.enquiry = e.target.value;
  }
  changeMessage(e: any) {
    this.form.message = e.target.value;
  }
  getAllFields() {
    console.log(this.form);
  }
}
</script>

<style scoped lang="scss">
</style>
