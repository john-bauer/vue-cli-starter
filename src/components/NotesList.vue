<template>
  <div class="c-notes-list">
    <section class="section">
      <div class="container">
        <nav class="panel">
          <!-- levels are being v weird here, fix later -->
          <p class="panel-heading">
            <span>Notes</span>
            <a
              class="button is-outlined is-pulled-right"
              v-on:click="deleteNote"
            >
              <span class="icon is-small">
                <i class="fas fa-trash is-centered"></i>
              </span>
            </a>
          </p>
          <div v-for="note in notes" :key="note.text">
            <label class="panel-block">
              <input type="checkbox" v-model="note.isChecked" />
              {{ note.text }}
            </label>
          </div>
          <div class="panel-block">
            <input
              class="input"
              v-model="noteText"
              v-on:keyup.enter="addNote"
              type="text"
              placeholder="search"
            />
            <button class="button is-success" v-on:click="addNote">Add</button>
            <!-- <button class="button is-success is-fullwidth">Create New</button> -->
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NotesList',
  props: {
    title: String,
    subtitle: String
  },
  data() {
    return {
      notes: [
        {
          text: 'my first note',
          isChecked: false
        },
        {
          text: 'my second note',
          isChecked: false
        },
        {
          text: 'my third note',
          isChecked: false
        }
      ],
      noteText: ''
    };
  },
  methods: {
    // add note
    addNote() {
      console.log(this.noteText);
      this.notes.push({
        text: this.noteText
      });
      this.noteText = '';
    },
    // delete note
    deleteNote() {
      let i = this.notes.length;
      while (i--) {
        console.log('doing the first thing');
        console.log(`i is ${i}`);
        if (this.notes[i].isChecked === true) {
          this.notes.splice(i, 1);
        }
      }
    },
    editNote() {
      console.log('editing');
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
