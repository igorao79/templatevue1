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
        <v-container class="fill-height d-flex flex-column align-center justify-center text-center">
          <Motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0 }"
            :transition="{ duration: 800, ease: 'easeOut' }"
          >
            <h1 class="hero-title text-h1 text-h1-md font-weight-bold main-title text-white border-black">
              <span class="d-none d-md-inline">Отличный день для кофе</span>
              <span class="d-md-none">Отличный день<br>для кофе</span>
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
              class="px-8 other-text mt-4"
              @click="scrollToSection('featured')"
            >
              Сделать заказ
            </v-btn>
          </Motion>
        </v-container>
    </v-row>
  </v-container>

  <!-- Featured drinks секция -->
  <div
    id="featured"
    class="featured-section py-16"
  >
    <!-- Первая строка: 2 карточки -->
    <v-row class="featured-row mb-4" align="stretch" dense>
      <!-- Caramel Protein -->
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="6"
        class="d-flex"
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
              src="/images/menu/caramelproteinlatte.webp"
              height="300"
              cover
              position="center 30%"
            ></v-img>
            <v-card-title class="text-h4 font-weight-bold section-title">
              Карамельный протеин здесь
            </v-card-title>
            <v-card-text class="text-body-1 other-text card-content">
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
        sm="6"
        md="6"
        lg="6"
        class="d-flex"
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
              src="/images/menu/fistashkkortado.webp"
              height="300"
              cover
              position="center 30%"
            ></v-img>
            <v-card-title class="text-h4 font-weight-bold section-title">
              Привет, фисташка
            </v-card-title>
            <v-card-text class="text-body-1 other-text card-content">
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

    <!-- Вторая строка: 3 карточки -->
    <v-row class="promo-row" align="stretch" dense>
      <!-- Free Coffee -->
      <v-col
        cols="12"
        sm="4"
        md="4"
        lg="4"
        class="d-flex"
      >
        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0 }"
          :transition="{ duration: 500, delay: 300, ease: 'easeOut' }"
        >
          <v-card
            class="promo-card h-100 text-center free-coffee-card text-white"
            elevation="3"
            :style="{ backgroundColor: 'var(--primary-color) !important' }"
          >
            <v-card-title class="text-h6 font-weight-bold section-title">
              Но сначала бесплатный кофе
            </v-card-title>
            <v-card-text class="other-text card-content">
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
        sm="4"
        md="4"
        lg="4"
        class="d-flex"
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
              src="/images/menu/coffepacket.webp"
              height="200"
              cover
            ></v-img>
            <v-card-title class="text-h6 font-weight-bold mt-4 section-title">
              Занимай место. Получай бесплатные доливки.
            </v-card-title>
            <v-card-text class="text-body-2 other-text card-content">
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
        sm="4"
        md="4"
        lg="4"
        class="d-flex"
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
              src="/images/menu/bezlaktoz.webp"
              height="200"
              cover
            ></v-img>
            <v-card-title class="text-h6 font-weight-bold mt-4 section-title">
              Безлактозные варианты. Без доплаты.
            </v-card-title>
            <v-card-text class="text-body-2 other-text card-content">
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
  </div>
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
  width: 100% !important;
}

.card-content {
  flex-grow: 1 !important;
}

/* Адаптивный текст заголовка */

  .hero-title {
    font-size: 5.5rem !important;
    text-align: center;
  }

  /* Ограничение ширины карточек на мобильных */
  .featured-card,
  .promo-card {
    max-width: 100% !important;
    margin: 0 auto !important;
  }

  /* Адаптивный padding для колонок */
  .mobile-padding {
    padding: 16px;
  }



  /* На планшетах: вторая строка - 2 карточки в ряд */
  @media (max-width: 1200px) {
    .second-row .card-inline {
      width: calc(50% - 1rem) !important;
      min-width: 300px !important;
    }
  }

  /* На мобильных: все карточки в одну колонку */
  @media (max-width: 768px) {
    .first-row .card-inline,
    .second-row .card-inline {
      float: none !important;
      display: block !important;
      width: 100% !important;
      margin: 0 0 1.5rem 0 !important;
      min-width: unset !important;
    }
  }

  /* Для средних экранов: все карточки в одну колонку */
  @media (max-width: 960px) {
    .cards-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  .grid-card {
    width: 100%;
    box-sizing: border-box;
  }

  /* Исправление Vuetify grid на мобильных */
  @media (max-width: 959px) {
    .featured-row,
    .promo-row {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .featured-row .v-col,
    .promo-row .v-col {
      padding-left: 8px !important;
      padding-right: 8px !important;
    }
  }

  /* === СТИЛИЗАЦИЯ КАРТОЧЕК === */

  /* Общие стили карточек */
  .featured-card,
  .promo-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    background-color: var(--surface-color) !important;
    border-radius: 8px;
  }

  .featured-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15) !important;
  }

  .promo-card:hover {
    transform: translateY(-4px);
  }

  /* === МОБИЛЬНЫЕ СТИЛИ КАРТОЧЕК === */
  @media (max-width: 768px) {
    /* Мобильные стили карточек */
    .featured-card,
    .promo-card {
      margin: 8px auto !important;
      background: rgba(255, 255, 255, 0.95) !important;
      border-radius: 12px !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
    }

    /* Настройки для мобильных */
    .hero-title {
      font-size: 2.5rem !important;
    }

    .featured-section {
      background-color: var(--accent-color) !important;
      min-height: 100vh;
      padding: 2rem 1rem !important;
      max-width: 1400px;
      margin: 0 auto;
    }

    .mobile-padding {
      padding: 8px !important;
    }
  }
</style>
