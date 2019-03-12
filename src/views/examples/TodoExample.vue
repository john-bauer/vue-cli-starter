<template>
  <div class="p-todo-example">
    <Hero
      title="✅ Todo Example"
      subtitle="Ability to create, edit, and delete from a list of to-do's"
      backgroundClass="is-success"
    />
    <TodosList />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import TodosList from '@/components/TodosList.vue';

export default {
  name: 'about',
  components: {
    Hero,
    TodosList
  }
};
</script>
