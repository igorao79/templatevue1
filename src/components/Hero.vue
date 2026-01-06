<template>
  <!-- Hero секция -->
  <v-container
    id="hero"
    fluid
    class="hero-section pa-0"
  >
    <!-- Фон с эффектами -->
    <div class="hero-background"></div>

    <v-row
      align="center"
      justify="center"
      class="hero-main"
      style="min-height: 100vh;"
    >
      <v-col
        cols="12"
        class="text-center px-4"
      >
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 800, ease: 'easeOut' }"
        >
          <h1 class="text-h2 text-h1-md font-weight-bold white--text mb-4 main-title">
            Отличный день для кофе
          </h1>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 600, delay: 200, ease: 'easeOut' }"
        >
          <v-btn
            size="large"
            color="info"
            class="px-8 mb-8 other-text"
            @click="scrollToSection('featured')"
          >
            Сделать заказ
          </v-btn>
        </Motion>
      </v-col>
    </v-row>
  </v-container>

  <!-- Featured drinks секция -->
  <v-container
    id="featured"
    fluid
    class="featured-section py-16"
  >
    <v-row class="featured-row">
      <!-- Caramel Protein -->
      <v-col
        cols="12"
        md="6"
        class="pa-4 d-flex"
      >
        <Motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0 }"
          :transition="{ duration: 600, delay: 100, ease: 'easeOut' }"
        >
          <v-card
            class="featured-card h-100"
            elevation="4"
            hover
          >
            <v-img
              src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600"
              height="300"
              cover
            ></v-img>
            <v-card-title class="text-h4 font-weight-bold section-title">
              Карамельный протеин здесь
            </v-card-title>
            <v-card-text class="text-body-1 other-text">
              Зарядись энергией с новым Карамельным Протеиновым Латте и Карамельным Протеиновым Матча.
              Ручная работа с молоком, обогащенным протеином - до 31 грамма протеина на гранде.
              Наслаждайся горячим или холодным с вариантами без сахара.
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="info"
                class="other-text"
                @click="scrollToSection('menu')"
              >
                Узнать о карамельном протеине
              </v-btn>
            </v-card-actions>
          </v-card>
        </Motion>
      </v-col>

      <!-- Pistachio -->
      <v-col
        cols="12"
        md="6"
        class="pa-4 d-flex"
      >
        <Motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0 }"
          :transition="{ duration: 600, delay: 200, ease: 'easeOut' }"
        >
          <v-card
            class="featured-card h-100"
            elevation="4"
            hover
          >
            <v-img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600"
              height="300"
              cover
            ></v-img>
            <v-card-title class="text-h4 font-weight-bold section-title">
              Привет, фисташка
            </v-card-title>
            <v-card-text class="text-body-1 other-text">
              Любимый вкус вернулся с восхитительным новым Фисташковым Кортado,
              Фисташковым Кремовым Колд Брю и любимым Фисташковым Латте.
              Солоновато-сладкий комфорт в любое время дня.
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="info"
                class="other-text"
                @click="scrollToSection('menu')"
              >
                Узнать о фисташке
              </v-btn>
            </v-card-actions>
          </v-card>
        </Motion>
      </v-col>
    </v-row>

        <v-row class="mt-8 promo-row">
          <!-- Free Coffee -->
          <v-col
            cols="12"
            md="4"
            class="pa-4 d-flex"
          >
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 500, delay: 300, ease: 'easeOut' }"
        >
          <v-card
            class="promo-card h-100 text-center"
            elevation="3"
            color="primary"
            dark
          >
            <v-card-title class="text-h5 font-weight-bold section-title">
              Но сначала бесплатный кофе
            </v-card-title>
            <v-card-text class="other-text">
              Бесплатный ручной напиток при покупке - твой в течение первой недели.
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                variant="outlined"
                color="white"
                class="other-text"
              >
                Присоединиться сейчас
              </v-btn>
            </v-card-actions>
          </v-card>
        </Motion>
      </v-col>

          <!-- Free Refills -->
          <v-col
            cols="12"
            md="4"
            class="pa-4 d-flex"
          >
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 500, delay: 400, ease: 'easeOut' }"
        >
          <v-card
            class="promo-card h-100 text-center"
            elevation="3"
          >
            <v-img
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400"
              height="150"
              cover
            ></v-img>
            <v-card-title class="text-h6 font-weight-bold mt-4 section-title">
              Занимай место. Получай бесплатные доливки.
            </v-card-title>
            <v-card-text class="text-body-2 other-text">
              Когда ты остаешься насладиться любимым напитком в кафе,
              доливки горячего или холодного кофе или чая за наш счет.
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                color="info"
                class="other-text"
              >
                Заказать сейчас
              </v-btn>
            </v-card-actions>
          </v-card>
        </Motion>
      </v-col>

          <!-- Nondairy Choices -->
          <v-col
            cols="12"
            md="4"
            class="pa-4 d-flex"
          >
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 500, delay: 500, ease: 'easeOut' }"
        >
          <v-card
            class="promo-card h-100 text-center"
            elevation="3"
          >
            <v-img
              src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400"
              height="150"
              cover
            ></v-img>
            <v-card-title class="text-h6 font-weight-bold mt-4 section-title">
              Безлактозные варианты. Без доплаты.
            </v-card-title>
            <v-card-text class="text-body-2 other-text">
              Попробуй свой любимый горячий или холодный напиток с безлактозным молоком.
              Выбирай овсяное, миндальное, кокосовое или соевое — без дополнительной платы.
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                color="info"
                class="other-text"
              >
                Заказать сейчас
              </v-btn>
            </v-card-actions>
          </v-card>
        </Motion>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToSection = (sectionId: string) => {
  if (sectionId === 'featured') {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else if (sectionId === 'menu') {
    router.push('/menu')
  }
}
</script>

<style scoped>
.hero-section {
  min-height: 500px;
}

.hero-background {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  background-image: url('/images/back.gif') !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  filter: blur(3px) !important;
  z-index: 0 !important;
}

.hero-main {
  position: relative !important;
  z-index: 1 !important;
}

/* Ряды с flex колонками */

.featured-card,
.promo-card {
  display: flex !important;
  flex-direction: column !important;
  flex: 1 !important; /* Растягивается на всю высоту колонки */
}
</style>
