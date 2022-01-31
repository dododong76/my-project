<template>
  <div class="inputbox shadow">
    <input type="text" v-model="todo_new" @keyup.enter="add_todo" />

    <span class="addcontainer" type="button" @click="add_todo">
      <v-icon>mdi-home</v-icon>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo_new: "",
    };
  },
  methods: {
    add_todo() {
      if (this.todo_new !== "") {
        var value = this.todo_new && this.todo_new.trim();
        this.$emit("add_todo", value);
        this.todo_new = "";
      }
    },
  },
};
</script>

<style>
input:focus {
  outline: solid 2px red;
}

.inputbox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

input {
  border-style: none;
  font-size: 0.9rem;
}

.addcontainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 ppx 5px 0;
}
</style>
