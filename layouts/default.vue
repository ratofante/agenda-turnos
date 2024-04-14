<script setup>
import { useDisplay } from "vuetify";

const { lgAndUp } = useDisplay();
const drawer = ref(false);
const rail = ref(false);

const burgerButtonHandler = () => {
  if (!lgAndUp.value && !drawer.value) {
    drawer.value = true;
    rail.value = false;
  } else {
    drawer.value = false;
    rail.value = true;
  }
};
</script>
<template>
  <v-app>
    <v-app-bar density="compact" :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          v-if="!lgAndUp"
          @click="burgerButtonHandler"
        ></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Agenda Turnos</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-bell-outline"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :rail="rail" @click="rail = false">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
      >
        <template v-slot:append>
          <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-home-city"
          title="Home"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="My Account"
          value="account"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          title="Users"
          value="users"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
