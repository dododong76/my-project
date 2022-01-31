<template>
  <v-container>
    <v-card>
      <div class="text-center">
        <!-- 학년 메뉴바 -->
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

        <!-- 반 메뉴바 -->
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

      <div class="text-center">
        <div>
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
            v-for="(i, j) in 테스트"
            :key="j"
          >
            {{ i }} ---- {{ j + 1 }} <v-icon>mdi-house <br /></v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>
    <todo_header> </todo_header>

    <todo_input></todo_input>
    <todo_list></todo_list>
    <todo_footer></todo_footer>
  </v-container>
</template>

<script>
import todo_footer from "../components/todo_footer.vue";
import todo_header from "../components/todo_header.vue";
import todo_input from "../components/todo_input.vue";
import todo_list from "../components/todo_list.vue";

export default {
  components: {
    todo_header: todo_header,
    todo_footer: todo_footer,
    todo_input: todo_input,
    todo_list: todo_list,
  },

  data() {
    return {
      반: [
        { title: "1반" },
        { title: "2반" },
        { title: "3반" },
        { title: "4반" },
        { title: "5반" },
        { title: "6반" },
        { title: "7반" },
        { title: "8반" },
      ],
      학년: [{ title: "1학년" }, { title: "2학년" }, { title: "3학년" }],
      테스트: ["1, 4, 2, 3", "lee", "park"],
    };
  },
  method: {},
};
</script>

<style>
body {
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
