<template>
  <div class="p-notes-example">
    <Hero
      title="✅ Notes Example"
      subtitle="Ability to create and delete notes from a list"
      backgroundClass="is-success"
    />
    <NotesList />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import NotesList from '@/components/NotesList.vue';

export default {
  name: 'about',
  components: {
    Hero,
    NotesList
  }
};
</script>
