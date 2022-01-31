<template>
  <v-card>
    <v-container>
      <v-row>
        <!-- 1학년으로 가기  -->
        <v-col class="menu" xs="12" sm="12" md="6" lg="4" x="4">
          <router-link to="/Phone_1">
            <v-card>
              <v-card-title> <v-spacer></v-spacer>1학년</v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>
        <!-- 2학년으로 가기  -->
        <v-col class="menu" xs="12" sm="12" md="6" lg="4" x="4">
          <router-link to="/Phone_2">
            <v-card>
              <v-card-title> <v-spacer></v-spacer>2학년</v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>

        <!-- 3학년으로 가기  -->
        <v-col class="menu" xs="12" sm="12" md="6" lg="4" x="4">
          <router-link to="/Phone_3">
            <v-card>
              <v-card-title> <v-spacer></v-spacer>3학년</v-card-title>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>

        <!-- SMStoStudent으로 가기  -->
        <v-col class="menu" xs="12" sm="12" md="6" lg="4" x="4">
          <router-link to="/SMStoStudent">
            <v-card>
              <v-card-title>
                <v-spacer></v-spacer>학생전체문자메세지</v-card-title
              >

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>

        <!-- SMStoMother으로 가기  -->
        <v-col class="menu" xs="12" sm="12" md="6" lg="4" x="4">
          <router-link to="/SMStoStudent">
            <v-card>
              <v-card-title>
                <v-spacer></v-spacer>학부모전체문자메세지</v-card-title
              >

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </router-link>
        </v-col>

        <!-- 마지막 부분 -->
      </v-row>
    </v-container>
  </v-card>
</template>

<style>
a {
  text-decoration: none;
}
.menu:hover {
  transform: scale(1.01);
  overflow: hidden;
}
</style>
