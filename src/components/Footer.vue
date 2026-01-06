<template>
  <v-footer
    color="primary"
    dark
  >
    <v-container>
      <v-row class="footer-row mx-n4">
        <v-col
          cols="12"
          md="4"
          class="footer-col px-4"
        >
          <h3 class="text-h5 font-weight-bold mb-4 section-title logo-title-container">
            <img src="/images/logo.webp" alt="cofifi" class="footer-logo">
            <span class="brand-text">cofifi</span>
          </h3>
          <p class="text-body-1 mb-4 other-text footer-description">
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
          class="footer-col px-4"
        >
          <h4 class="text-h6 font-weight-bold mb-4 section-title">
            Контакты
          </h4>
          <div class="d-flex align-center mb-2 other-text">
            <v-icon class="mr-3">mdi-map-marker</v-icon>
            <span>ул. Центральная, 123, Москва</span>
          </div>
          <div class="d-flex align-center mb-2 other-text">
            <v-icon class="mr-3">mdi-phone</v-icon>
            <span>+7 (495) 123-45-67</span>
          </div>
          <div class="d-flex align-center mb-2 other-text">
            <v-icon class="mr-3">mdi-email</v-icon>
            <span>info@coffee-shop.ru</span>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="4"
          class="footer-col px-4"
        >
          <h4 class="text-h6 font-weight-bold mb-4 section-title">
            Часы работы
          </h4>
          <div class="mb-1 other-text">Пн-Пт: 8:00 - 22:00</div>
          <div class="mb-1 other-text">Сб-Вс: 9:00 - 23:00</div>
          <div class="mb-4 other-text">Без выходных</div>

          <v-btn
            color="info"
            variant="outlined"
            class="mt-4 other-text"
          >
            Забронировать столик
          </v-btn>
        </v-col>
      </v-row>

      <v-divider class="my-6"></v-divider>

      <v-row>
        <v-col class="text-center">
          <p class="text-body-2 other-text">
            © 2025 cofifi. Все права защищены.
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
.v-footer .v-container {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-description {
  font-size: 1.8rem !important;
  line-height: 1.2;
}

.logo-title-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-logo {
  height: 48px;
  width: auto;
  flex-shrink: 0;
}

.brand-text {
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}

/* Используем Vuetify spacing классы вместо gap */
</style>
