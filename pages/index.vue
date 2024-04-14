<script setup>
const cols = [
  {
    title: "Card title",
    subtitle: "subtitle",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eius velit unde!",
  },
  {
    title: "Card title",
    subtitle: "subtitle",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eius velit unde!",
  },
  {
    title: "Card title",
    subtitle: "subtitle",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eius velit unde!",
  },
  {
    title: "Card title",
    subtitle: "subtitle",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eius velit unde!",
  },
];
</script>
<template>
  <v-container>
    <div class="d-flex overflow-x-auto">
      <v-card
        v-for="(col, i) in cols"
        :key="i"
        :title="col.title"
        :subtitle="col.subtitle"
        :text="col.text"
        variant="tonal"
        class="card__turn ma-2"
      >
        <v-card-actions>
          <v-btn>Click me</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-container>
  <v-container>
    <v-sheet class="mx-auto">
      <v-slide-group show-arrows>
        <v-slide-group-item
          v-for="n in 25"
          :key="n"
          v-slot="{ isSelected, toggle }"
        >
          <v-btn
            :color="isSelected ? 'primary' : undefined"
            class="ma-2"
            rounded
            @click="toggle"
          >
            Options {{ n }}
          </v-btn>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>

  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card
          v-for="(col, i) in cols"
          :key="i"
          :title="col.title"
          :subtitle="col.subtitle"
          :text="col.text"
          variant="tonal"
        >
          <v-card-actions>
            <v-btn>Click me</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-card
      title="Card title"
      subtitle="Subtitle"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eius velit unde!"
      variant="tonal"
    >
      <v-card-actions>
        <v-btn>Click me</v-btn>
      </v-card-actions>
    </v-card>

    <v-card
      title="Card title"
      subtitle="Subtitle"
      text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eius velit unde!"
      variant="tonal"
    >
      <v-card-actions>
        <v-btn>Click me</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<style>
.card__turn {
  min-width: 320px;
}
</style>
