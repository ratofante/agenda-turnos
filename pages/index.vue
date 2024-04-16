<script setup></script>
<template>
  <v-container class="mt-16 bg-surface">
    <v-row>
      <v-col cols="12" md="6">
        <h1 class="text-h4 text-center mb-4">Agenda Turnos</h1>
        <p class="text-body-2 text-md-body-1 text-center mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          veritatis rerum molestiae quidem explicabo minus.
        </p>
        <nuxt-link to="/register" class="d-block mx-auto">
          <v-btn block color="primary"> Unirse </v-btn>
        </nuxt-link>
        <nuxt-link to="/login">
          <v-btn class="mt-4" block variant="outlined"> Ingresar </v-btn>
        </nuxt-link>
      </v-col>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>
