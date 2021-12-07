<template>
  <div
    class="px-4 mx-auto 2xl:container lg:px-20 2xl:px-24 overflow-x-hidden"
  >
    <Header :key="$route.name" />
    <Nuxt :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style scoped lang="scss">
</style>

