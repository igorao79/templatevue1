<template>
  <v-footer
    color="primary"
    dark
    class="mt-16"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <h3 class="text-h5 font-weight-bold mb-4">
            ☕ Кофейня
          </h3>
          <p class="text-body-1 mb-4">
            Лучший кофе в городе с 2020 года.
            Мы создаем уют и делимся любовью к прекрасному кофе.
          </p>
          <div class="d-flex">
            <v-btn
              icon="mdi-facebook"
              variant="text"
              class="mr-2"
            ></v-btn>
            <v-btn
              icon="mdi-instagram"
              variant="text"
              class="mr-2"
            ></v-btn>
            <v-btn
              icon="mdi-twitter"
              variant="text"
            ></v-btn>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <h4 class="text-h6 font-weight-bold mb-4">
            Контакты
          </h4>
          <div class="d-flex align-center mb-2">
            <v-icon class="mr-3">mdi-map-marker</v-icon>
            <span>ул. Центральная, 123, Москва</span>
          </div>
          <div class="d-flex align-center mb-2">
            <v-icon class="mr-3">mdi-phone</v-icon>
            <span>+7 (495) 123-45-67</span>
          </div>
          <div class="d-flex align-center mb-2">
            <v-icon class="mr-3">mdi-email</v-icon>
            <span>info@coffee-shop.ru</span>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <h4 class="text-h6 font-weight-bold mb-4">
            Часы работы
          </h4>
          <div class="mb-1">Пн-Пт: 8:00 - 22:00</div>
          <div class="mb-1">Сб-Вс: 9:00 - 23:00</div>
          <div class="mb-4">Без выходных</div>

          <v-btn
            color="info"
            variant="outlined"
            class="mt-4"
          >
            Забронировать столик
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-6"></v-divider>

      <v-row>
        <v-col class="text-center">
          <p class="text-body-2">
            © 2025 Кофейня. Все права защищены.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
// Компонент не требует логики
</script>

<style scoped>
</style>
