<template>
  <div class="p-notes-example">
    <Hero
      title="🧦 GreenSock Animation Examples"
      subtitle="Some common snippets for adding animation to your project"
      backgroundClass="is-primary"
    />
    <div class="container">
      <div class="app-el1" ref="el1">
        <div class="app-el2" ref="el2" v-on:click="toggleSwitch"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { TimelineLite } from 'gsap';
import { TweenLite } from 'gsap';
import Hero from '@/components/Hero.vue';

export default {
  name: 'about',
  components: {
    Hero
  },
  data() {
    return {
      buttonState: 'on'
    };
  },
  methods: {
    // method for toggle switch
    toggleSwitch() {
      console.log(this.buttonState);
      const { el1, el2 } = this.$refs;
      if (this.buttonState === 'on') {
        console.log(TimelineLite);
        console.log('test');
        this.buttonState = 'off';
        TweenLite.to(el1, 0.2, {
          backgroundColor: '#00C853'
        });
        TweenLite.to(el2, 0.2, {
          x: '24px',
          backgroundColor: '#00E676'
        });
      } else if (this.buttonState === 'off') {
        this.buttonState = 'on';
        TweenLite.to(el1, 0.2, {
          backgroundColor: '#E0E0E0'
        });
        TweenLite.to(el2, 0.2, {
          x: '0',
          backgroundColor: '#FAFAFA'
        });
      }
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
/* ==================
      SWITCH
====================*/
.app-el1 {
  background-color: #e0e0e0;
  width: 48px;
  border-radius: 20px;
}

.app-el2 {
  height: 24px;
  width: 24px;
  background-color: #fafafa;
  border-radius: 100%;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
