<script setup>
const cols = [
  {
    title: "Corte simple",
    subtitle: "10:00hs",
    text: "Pedro Navarro",
  },
  {
    title: "Corte y barba",
    subtitle: "10:30hs",
    text: "Federico Gabriel Acuña",
  },
  {
    title: "Corte y barba",
    subtitle: "11:30hs",
    text: "José Miguel Viña",
  },
  {
    title: "Corte simple",
    subtitle: "12:00hs",
    text: "Juan Perez",
  },
];
</script>

<template>
  <v-container>
    <h2 class="text-overline">Turnos del día</h2>
    <div class="d-flex overflow-x-auto">
      <nuxt-link to="/" v-for="(col, i) in cols" :key="i">
        <v-card
          :title="col.title"
          :subtitle="col.subtitle"
          :text="col.text"
          variant="tonal"
          rounded="sm"
          prepend-icon="mdi-account"
          class="ma-2"
          width="240"
        >
        </v-card>
      </nuxt-link>
    </div>
  </v-container>
</template>
