<template>
  <div class="col-10">
    <ul v-for="(todo, index) in todos" :key="index" class="list-group mt-3">
      <li class="list-group-item">
        {{ todo.todo }}
        <span
          @click="edit(todo._id)"
          class="badge badge-pill badge-info text-right"
          >edit</span
        ><span
          @click="del(todo._id)"
          class="badge badge-pill badge-danger text-right"
          >delete</span
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["todos"],
  methods: {
    del(id) {
      this.$store.dispatch("todo/delete", id);
      this.$store.dispatch("todo/dataAbc");
    },
    edit(id) {
      this.$router.push({
        name: "About",
        params: {
          id: id,
        },
      });
    },
  },
};
</script>
<style scoped></style>
