<script setup>
import { useDisplay } from "vuetify";

const userSections = [
  {
    to: "/",
    icon: "mdi-book",
    title: "Mi agenda",
    value: "agenda",
  },
  {
    to: "/",
    icon: "mdi-calendar-multiple",
    title: "Calendario",
    value: "calendario",
  },
  {
    to: "/",
    icon: "mdi-account-group-outline",
    title: "Clientes",
    value: "clientes",
  },
];
const siteSections = [
  {
    name: "Inicio",
    to: "/",
    icon: "mdi-home",
  },
  {
    name: "Acerca",
    to: "/",
    icon: "mdi-card-bulleted-settings-outline",
  },
  {
    name: "Servicios",
    to: "/",
    icon: "mdi-briefcase-arrow-left-right-outline",
  },
  {
    name: "FAQ",
    to: "/",
    icon: "mdi-book-open-variant",
  },
];

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

const getUsers = async () => {
  useAxios
    .get("/user/list")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
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
        <v-btn icon="mdi-bell-outline" @click="getUsers"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" :rail="rail" @click="rail = false">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="Rodrigo González Wilkens"
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

      <v-list :lines="true" density="compact" nav>
        <v-list-item
          v-for="(section, i) in userSections"
          :key="i"
          :to="section.to"
          :prepend-icon="section.icon"
          :title="section.title"
          :value="section.value"
          variant="plain"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-subheader>Secciones</v-list-subheader>
        <v-list-item
          v-for="(section, i) in siteSections"
          :to="section.to"
          :prepend-icon="section.icon"
          variant="plain"
        >
          {{ section.name }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
