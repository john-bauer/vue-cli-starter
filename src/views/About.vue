<template>
  <div class="p-about">
    <Hero
      title="About"
      subtitle="description about this page asdfasdfasdffasdfsdf"
      backgroundClass="is-dark"
    />
    <PlaceholderCopy />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import PlaceholderCopy from '@/components/PlaceholderCopy.vue';

export default {
  name: 'about',
  components: {
    Hero,
    PlaceholderCopy
  }
};
</script>
