<template>
  <div class="p-sandbox">
    <Hero
      title="Sandbox"
      subtitle="a place to mess around with the app adsfasdf"
      backgroundClass="is-dark"
    />
    <SectionTitle
      title="Sample To-Do App"
      description="A simple app to start with"
    />
    <TodosList />
    <FirebaseDemo />
    <ChartJsDemo />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import TodosList from '@/components/TodosList.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import FirebaseDemo from '@/components/FirebaseDemo.vue';
import ChartJsDemo from '@/components/ChartJsDemo.vue';

export default {
  name: 'sandbox',
  components: {
    Hero,
    TodosList,
    SectionTitle,
    FirebaseDemo,
    ChartJsDemo
  }
};
</script>
