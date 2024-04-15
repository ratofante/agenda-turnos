<script setup>
const messagesButtons = [
  {
    name: "ver mensajes",
    href: "/",
    icon: "mdi-email-outline",
  },
  {
    name: "nuevo",
    href: "/",
    icon: "mdi-marker",
  },
  {
    name: "avisos",
    href: "/",
    icon: "mdi-send",
  },
  {
    name: "configurar",
    href: "/",
    icon: "mdi-wrench",
  },
];
</script>
<template>
  <v-container>
    <h4 class="text-overline">Mensajes</h4>
    <v-slide-group :show-arrows="false">
      <v-slide-group-item
        v-for="(btn, i) in messagesButtons"
        :key="i"
        v-slot="{ isSelected, toggle }"
      >
        <v-btn
          :href="btn.href"
          rounded="sm"
          class="ma-2"
          :prepend-icon="btn.icon"
        >
          {{ btn.name }}
        </v-btn>
      </v-slide-group-item>
    </v-slide-group>
  </v-container>
</template>
