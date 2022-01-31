<template>
  <section>
    <ul>
      <li v-for="(todo_item, index) in propsdata" :key="todo_item">
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ todo_item }}
        <span
          class="removeBtn"
          type="button"
          @click="remove_todo(todo_item, index)"
        >
          <i class="far fa-trash-alt" aria-hidden="true"></i>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ["propsdata"],

  methods: {
    remove_todo(todo_item, index) {
      this.$emit("remove111", todo_item, index);
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.checkBtn {
  line-height: 45px;
  color: blue;
  margin-right: 5px;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
