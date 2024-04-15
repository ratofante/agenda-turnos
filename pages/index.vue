<script setup></script>
<template>
  <appointment-card />
  <v-divider class="border-opacity-25"></v-divider>
  <messages-toolbar />
  <v-divider class="border-opacity-25"></v-divider>
  <v-container>
    <v-card class="mb-4">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div class="d-flex flex-column">
          <v-card-title class="text-h5"> Nuevo turno </v-card-title>

          <v-card-subtitle> Añade un turno a tu calendario </v-card-subtitle>

          <v-card-actions>
            <v-btn
              class="ms-2"
              size="small"
              prepend-icon="mdi-plus"
              text="agregar"
              variant="outlined"
            ></v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
    <v-card class="mb-4">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div class="d-flex flex-column">
          <v-card-title class="text-h5"> Ver turnos</v-card-title>

          <v-card-subtitle>22 Jueves. Abril, 2024.</v-card-subtitle>

          <v-card-actions>
            <v-btn
              prepend-icon="mdi-calendar"
              class="ms-2"
              size="small"
              text="Ver calendario"
              variant="outlined"
            ></v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
    <v-card class="mb-4">
      <div class="d-flex flex-no-wrap justify-space-between">
        <div>
          <v-card-title class="text-h5"> Clientes</v-card-title>

          <v-card-subtitle>132 registrados</v-card-subtitle>

          <v-card-actions>
            <v-btn
              prepend-icon="mdi-account-multiple-plus"
              class="ms-2"
              size="small"
              text="Ver clientes"
              variant="outlined"
            ></v-btn>
          </v-card-actions>
        </div>
        <div class="full-height d-flex align-center">
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m17 21.25l-4.5-2.625V13.4l4.5-2.625l4.5 2.625v5.2zM2 20v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T10 13h.35q.15 0 .3.05q-.725 1.8-.6 3.575T11.25 20zm8-8q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m4.65 1.85L17 15.225l2.35-1.375L17 12.5zm3.1 5.2l2.25-1.3V15l-2.25 1.325zM14 17.75l2.25 1.325V16.35L14 15.025z"
            />
          </svg>
        </div>
      </div>
    </v-card>
  </v-container>
</template>
