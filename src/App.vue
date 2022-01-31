<template>
  <v-app>
    <!-- 헤더부분 -->
    <v-app-bar app color="success" dark>
      <v-toolbar-title>대신고등학교 학생 학부모 전화번호부</v-toolbar-title>

      <router-link to="/Home">
        <v-btn absolute fab dark right color="#226E3E">
          <v-icon>mdi-home</v-icon></v-btn
        ></router-link
      >
    </v-app-bar>

    <!-- 바디부분 -->
    <v-content
      ><v-container> <router-view></router-view></v-container
    ></v-content>

    <!-- 풋터부분 -->
    <v-footer color="success lighten-1" padless>
      <v-row justify="center" no-gutters>
        <router-link to="/Home">
          <v-btn color="white" text rounded class="my-2">
            Home
          </v-btn></router-link
        >
        <router-link to="/Brochure">
          <v-btn color="white" text rounded class="my-2">
            E-book
          </v-btn></router-link
        >

        <router-link to="/Gallary">
          <v-btn color="white" text rounded class="my-2">
            Gallary
          </v-btn></router-link
        >
        <router-link to="/Home">
          <v-btn color="white" text rounded class="my-2">
            입학설명회
          </v-btn></router-link
        >
        <router-link to="/Facility">
          <v-btn color="white" text rounded class="my-2">
            학교시설
          </v-btn></router-link
        >
        <router-link to="/Video1">
          <v-btn color="white" text rounded class="my-2">
            홍보영상1
          </v-btn></router-link
        >
        <router-link to="/Video2">
          <v-btn color="white" text rounded class="my-2">
            홍보영상2
          </v-btn></router-link
        >
        <router-link to="/Clothes">
          <v-btn color="white" text rounded class="my-2">
            교복
          </v-btn></router-link
        >
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "Brochure", "Gallary", "Video"],
  }),
};
</script>
