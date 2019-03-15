<template>
  <div class="p-sandbox">
    <Hero
      title="Sandbox"
      subtitle="a place to mess around with the app adsfasdf"
      backgroundClass="is-dark"
    />
    <PlaceholderCopy/>
    <section class="section">
      <div class="container">
        <button class="button" ref="appButton">This is some button</button>
      </div>
    </section>
  </div>
</template>

<script>
import { TimelineLite } from 'gsap';
import Hero from '@/components/Hero.vue';
import PlaceholderCopy from '@/components/PlaceholderCopy.vue';

export default {
  name: 'sandbox',
  components: {
    Hero,
    PlaceholderCopy
  },
  methods: {
    testEnv() {
      console.log(process.env.VUE_APP_TITLE);
    }
  },
  mounted() {
    const { appButton } = this.$refs;
    const timeline = new TimelineLite();
    console.log(timeline);
    // (Element to animate, seconds to animate for, description of animation)
    timeline.to(appButton, 1, { x: 200, rotation: 90 });
  }
};
</script>

<style lang="scss"></style>
