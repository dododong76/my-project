<template>
  <v-btn @click="clear_todo">모두지우기</v-btn>
</template>

<script>
export default {
  methods: {
    clear_todo() {
      this.$emit("clear111");
    },
  },
};
</script>

<style></style>
