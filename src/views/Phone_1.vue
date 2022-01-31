<template>
  <v-container>
    <!--    <v-card>
        <div class="text-center">
         
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                학년
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in 학년" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

         
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                반
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="(item, index) in 반" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

      </v-card>
-->

    <todo_header> </todo_header>

    <todo_input @add_todo="add_todo"></todo_input>
    <todo_list
      v-bind:propsdata="todo_items"
      @remove111="remove_todo"
    ></todo_list>
    <todo_footer @clear111="clear_todo"></todo_footer>
  </v-container>
</template>

<script>
import todo_footer from "../components/todo_footer.vue";
import todo_header from "../components/todo_header.vue";
import todo_input from "../components/todo_input.vue";
import todo_list from "../components/todo_list.vue";

export default {
  components: {
    todo_header,
    todo_footer,
    todo_input,
    todo_list,
  },

  data() {
    return {
      todo_items: [],
      // 반: [
      //   { title: "1반" },
      //   { title: "2반" },
      //   { title: "3반" },
      //   { title: "4반" },
      //   { title: "5반" },
      //   { title: "6반" },
      //   { title: "7반" },
      //   { title: "8반" },
      // ],
      // 학년: [{ title: "1학년" }, { title: "2학년" }, { title: "3학년" }],
      // 테스트: ["1, 4, 2, 3", "lee", "park"],
    };
  },

  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todo_items.push(localStorage.key(i));
      }
    }
  },
  methods: {
    add_todo(todo_item) {
      localStorage.setItem(todo_item, todo_item);
      this.todo_items.push(todo_item);
    },
    clear_todo() {
      localStorage.clear();
      this.todo_items = [];
    },
    remove_todo(todo_item, index) {
      localStorage.removeItem(todo_item);
      this.todo_items.splice(index, 1);
    },
  },
};
</script>

<style>
html body {
  text-align: center;
  background-color: aquamarine;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
