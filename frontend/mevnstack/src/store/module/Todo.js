import axios from "axios";
const todo = {
  namespaced: true,
  state: {
    todos: [],
    todo: {},
  },
  mutations: {
    save_todos(state, todos) {
      state.todos = todos;
    },
    save_todo(state, todo) {
      state.todo = todo;
    },
  },
  actions: {
    async add({ commit }, todo) {
      // const a = commit;
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // commit('CREATE_LOADING', true); // make isloading to start the loading in ui
      await axios
        .post("http://localhost:500", JSON.stringify({ todo }), options)
        .then((res) => {
          commit("save_todo", res.data);
        })
        .catch((error) => {
          console.log(error);
          // commit('SAVE_MESSAGE', error);
        });
    },
    async delete(id) {
      await axios
        .delete(`http://localhost:500/${id}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async dataAbc({ commit }) {
      await axios
        .get("http://localhost:500")
        .then((res) => {
          commit("save_todos", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async getTodo({ commit }, id) {
      await axios
        .get(`http://localhost:500/${id}`)
        .then((res) => {
          commit("save_todo", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {},
};

export default todo;
