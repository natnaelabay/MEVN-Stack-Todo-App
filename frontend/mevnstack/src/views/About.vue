<template>
  <div>
    <div class="col-10">
      <input
        v-model="todo.todo"
        class="form-control"
        type="text"
        placeholder="Todo's here"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    todo() {
      return this.$store.state.todo.todo;
    },
  },
  created() {
    // console.log();
    this.$store.dispatch("todo/getTodo", this.$route.params.id);
  },
  methods: {
    show() {
      // console.log(this.$route.params.id);
    },
  },
};
</script>
<style scoped></style>
