<script setup>
import {
  nameRules,
  emailRules,
  phoneRules,
  passwordRules,
} from "@/utils/formRules.js";

const loading = ref(false);
const valid = ref(false);
const form = reactive({
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  password: "",
});

const handleSubmit = async () => {
  console.log("Form submit! - Valid: " + valid.value);

  useAxios
    .post("/user/register", {
      user_type_s: 0,
      user_name_nv: form.firstname,
      user_surname_nv: form.lastname,
      user_email_nv: form.email,
      user_phone_nv: form.phone,
      user_password_nv: form.password,
    })
    .then((response) => {
      console.log(response.data);
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
    <h2 class="text-h5 text-center">Crear Cuenta</h2>
    <v-form v-model="valid" @submit.prevent="handleSubmit">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="form.firstname"
              :counter="10"
              :rules="nameRules"
              label="Nombre"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="form.lastname"
              :counter="10"
              :rules="nameRules"
              label="Apellido"
              required
            ></v-text-field>
          </v-col>

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
              v-model="form.phone"
              :rules="phoneRules"
              label="Teléfono"
              placeholder="+54 9 11 1234 5412"
              prepend-inner-icon="mdi-cellphone"
              required
            >
            </v-text-field>
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
