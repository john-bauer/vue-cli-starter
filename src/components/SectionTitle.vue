<template>
  <div class="c-placeholder-copy">
    <section class="section">
      <div class="container">
        <h1 class="is-size-5">{{ title }}</h1>
        <p description="is-size-7">{{ description }}</p>
        <hr />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: String,
    description: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
