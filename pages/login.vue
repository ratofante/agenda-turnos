<script setup>
import { emailRules, passwordRules } from "@/utils/formRules.js";

const loading = ref(false);
const valid = ref(false);
const form = reactive({
  email: "",
  password: "",
});

const handleSubmit = () => {
  useAxios
    .post("/user/login", {
      email: form.email,
      password: form.password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<template>
  <v-container class="mt-8 d-flex flex-column justify-center">
    <h2 class="text-h5 text-center">Ingresar</h2>
    <v-form v-model="valid" @submit.prevent="handleSubmit">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="form.email"
              :rules="emailRules"
              type="email"
              label="Correo electrónico"
              placeholder="example@mail.com"
              prepend-inner-icon="mdi-email-outline"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="form.password"
              hint="8 caracteres letras, números y algún caracter especial."
              :rules="passwordRules"
              type="password"
              label="Contraseña"
              prepend-inner-icon="mdi-key"
              required
            >
            </v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn
              color="primary"
              variant="tonal"
              height="50"
              block
              :loading="loading"
              type="submit"
            >
              Enviar
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
