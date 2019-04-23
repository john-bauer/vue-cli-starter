<template>
  <div class="c-hero">
    <section class="container has-text-centered">
      <span class="icon has-text-warning">
        <i class="app-warning-icon fas fa-exclamation-triangle"></i>
      </span>
      <h3 class="is-size-4">Page Not Found</h3>
      <p class="is-size-6">You may have typed the wrong address or the page has been removed</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.icon {
  margin-top: 128px;
}

.app-warning-icon {
  height: 128px;
  width: 128px;
}

</style>
