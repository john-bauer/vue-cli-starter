<template>
  <div class="c-todos-list">
    <section class="section">
      <div class="container">
        <nav class="panel">
          <p class="panel-heading">To-Do's</p>
          <div v-for="todo in todos" :key="todo.text">
            <label class="panel-block">
              <input type="checkbox" />
              {{ todo.text }}
            </label>
          </div>
          <div class="panel-block">
            <input
              class="input"
              v-model="todoText"
              v-on:keyup.enter="addTodo"
              type="text"
              placeholder="search"
            />
            <button class="button is-success" v-on:click="addTodo">Add</button>
            <!-- <button class="button is-success is-fullwidth">Create New</button> -->
          </div>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TodosList',
  props: {
    title: String,
    subtitle: String
  },
  data() {
    return {
      todos: [
        {
          text: 'my first todo'
        },
        {
          text: 'my second todo'
        },
        {
          text: 'my third todo'
        }
      ],
      todoText: ''
    };
  },
  methods: {
    addTodo() {
      console.log(this.todoText);
      this.todos.push({
        text: this.todoText
      });
      this.todoText = '';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
