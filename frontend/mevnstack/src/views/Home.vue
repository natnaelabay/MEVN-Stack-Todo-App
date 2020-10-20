<template>
  <div>
    <div class="row">
      <div class="col-10">
        <input v-model="todo" class="form-control" type="text" placeholder="Todo's here" />
      </div>
      <div class="col-2">
        <button @click="add" class="btn btn-primary">Add Todo</button>
      </div>
    </div>
    <Todo :todos = "todos" />
  </div>
</template>

<script>
import Todo from "../components/todoList";
export default {
  data() {
    return {
      todo: ''
    }
  },
  created() {
    this.$store.dispatch("todo/dataAbc");
  },
  computed: {
    todos() {
      return this.$store.state.todo.todos;
    },
  },
  methods: {
    add() {
      this.$store.dispatch('todo/add',this.todo)
      this.$store.dispatch('todo/dataAbc')
    }
  },
  name: "Home",
  components: { Todo },
};
</script>
