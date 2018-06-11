<template>
  <v-ons-page>
    <div class="formNewTodo">
  <v-ons-input
    type="text"
    placeholder="新しいタスクを追加"
    v-model="newTodo"
  >
  </v-ons-input>
  <v-ons-button type="submit" @click="addNewTodo()">追加</v-ons-button>
</div>
    <div class="listTodos">
      <v-ons-list-item v-for="(todo, $index) in todos" :class="{ isFinished: todo.finished }">
        <label class="left">
          <v-ons-checkbox
            :input-id="'checkbox-' + $index"
            :value="todo.text"
            v-model="todo.finished"
          >
          </v-ons-checkbox>
        </label>
        <label class="center" :for="'checkbox-' + $index">
          {{ todo.text }}
        </label>
      </v-ons-list-item>
    </div>
  </v-ons-page>
</template>
<script>
var STORAGE_KEY = "vue-todo";
export default {
  data() {
    return {
      title: "Todo Sample",
      todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"),
      newTodo: ""
    };
  },
  watch: {
    todos: {
      handler: function(todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      },
      deep: true
    }
  },
  methods: {
    addNewTodo() {
      // 入力されてない時は何もしない
      if (this.newTodo === "") return;

      var todo = {
        text: this.newTodo,
        finished: false
      };
      this.todos.push(todo);
      this.newTodo = "";
    }
  }
};
</script>
<style scoped>
.formNewTodo {
  padding: 14px;
  display: flex;
  justify-content: space-between;
}
ons-input {
  flex: 1;
  border-bottom: 1px solid #ddd;
  margin-right: 14px;
}
.list-item {
  padding-right: 14px;
}
.list-item.isFinished {
  color: #ccc;
  text-decoration: line-through;
}
</style>
