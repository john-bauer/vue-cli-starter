<template>
  <div class="p-contact-example">
    <Hero
      title="Contact"
      subtitle="a sample contact form with basic validation"
      backgroundClass="is-dark"
    />
    <ContactForm />
    <PlaceholderCopy />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import ContactForm from '@/components/ContactForm';

export default {
  name: 'ContactExample',
  components: {
    Hero,
    ContactForm
  }
};
</script>
