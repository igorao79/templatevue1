<template>
  <div>
    <!-- Breadcrumbs -->
    <v-container class="py-4">
      <v-breadcrumbs :items="breadcrumbs">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </v-container>

    <v-container
      class="gift-cards-section py-16"
      fluid
    >
      <v-row justify="center">
        <v-col
          cols="12"
          md="10"
          lg="8"
        >
          <v-card
            class="pa-8 text-center"
            elevation="4"
          >
            <v-card-title class="text-h3 font-weight-bold mb-8 section-title">
              Подарочные карты
            </v-card-title>

            <v-card-text class="text-h6 mb-8 other-text">
              Подарите незабываемые моменты! Наши подарочные карты идеально подойдут
              для любого праздника или просто чтобы порадовать близких.
            </v-card-text>

            <v-row>
              <v-col
                v-for="card in giftCards"
                :key="card.id"
                cols="12"
                sm="6"
                md="4"
              >
                <Motion
                  :initial="{ opacity: 0, x: -30 }"
                  :enter="{ opacity: 1, x: 0 }"
                  :transition="{
                    duration: 600,
                    delay: card.id * 150,
                    ease: 'easeOut'
                  }"
                >
                  <v-card
                    class="gift-card"
                    elevation="3"
                    hover
                  >
                    <v-img
                      :src="card.image"
                      height="200"
                      cover
                    ></v-img>
                    <v-card-title class="text-h6 font-weight-bold section-title">
                      {{ card.name }}
                    </v-card-title>
                    <v-card-text>
                      <p class="text-body-2 mb-4 other-text">{{ card.description }}</p>
                      <div class="d-flex justify-space-between align-center">
                        <span class="text-h5 font-weight-bold primary--text">
                          {{ card.price }} ₽
                        </span>
                        <v-btn
                          color="info"
                          size="small"
                          class="other-text"
                          @click="openCertificateModal(card)"
                        >
                          Выбрать
                        </v-btn>
                      </div>
                    </v-card-text>
                  </v-card>
                </Motion>
              </v-col>
            </v-row>

            <v-card-actions class="justify-center mt-8">
              <v-btn
                size="large"
                color="info"
                variant="outlined"
                class="px-8 other-text"
              >
                Узнать больше о подарочных картах
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Модалка с сертификатом -->
    <v-dialog
      v-model="showCertificateModal"
      max-width="500px"
    >
      <v-card class="text-center pa-6">
        <v-card-title class="text-h4 section-title mb-4">
          Спасибо за покупку!
        </v-card-title>

        <v-card-text class="text-h6 mb-6 other-text certificate-main-text">
          Вот ваш сертификат на {{ selectedCard?.price }} ₽
        </v-card-text>

        <div class="d-flex justify-center mb-6">
          <canvas
            ref="qrCanvas"
            class="qr-code"
          ></canvas>
        </div>

        <v-card-text class="text-body-2 mb-4 other-text certificate-instruction-text">
          Отсканируйте QR-код для применения подарочной карты
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            @click="closeCertificateModal"
            class="certificate-close-btn"
          >
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import QRCode from 'qrcode'

interface GiftCard {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const breadcrumbs = [
  {
    title: 'Главная',
    to: '/',
  },
  {
    title: 'Подарочные карты',
  },
]

const giftCards = ref<GiftCard[]>([
  {
    id: 1,
    name: 'Карта на 500 ₽',
    description: 'Идеальный вариант для небольшой приятности',
    price: 500,
    image: '/images/cards/500.webp'
  },
  {
    id: 2,
    name: 'Карта на 1000 ₽',
    description: 'Отличный выбор для любителей кофе',
    price: 1000,
    image: '/images/cards/1000.webp'
  },
  {
    id: 3,
    name: 'Карта на 5000 ₽',
    description: 'Премиум вариант для особых случаев',
    price: 5000,
    image: '/images/cards/5000.webp'
  }
])

// Модалка для сертификата
const showCertificateModal = ref(false)
const selectedCard = ref<GiftCard | null>(null)
const qrCanvas = ref<HTMLCanvasElement | null>(null)

// Генерация QR кода
const generateQR = async () => {
  if (!qrCanvas.value) return

  const qrData = 'Подарочная карта применена!'

  try {
    await QRCode.toCanvas(qrCanvas.value, qrData, {
      width: 200,
      margin: 2,
      color: {
        dark: '#00887A',
        light: '#FFFFFF'
      }
    })
  } catch (error) {
    console.error('Ошибка генерации QR кода:', error)
  }
}

// Открытие модалки с сертификатом
const openCertificateModal = (card: GiftCard) => {
  selectedCard.value = card
  showCertificateModal.value = true

  // Генерируем QR код через небольшую задержку
  setTimeout(() => {
    generateQR()
  }, 100)
}

// Закрытие модалки
const closeCertificateModal = () => {
  showCertificateModal.value = false
  selectedCard.value = null
}
</script>

<style scoped>
.gift-cards-section {
  background-color: var(--accent-color);
}

.gift-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.gift-card:hover {
  transform: translateY(-5px);
}

.qr-code {
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  background: white;
  padding: 10px;
}

.certificate-main-text {
  font-size: 2rem !important;
  font-weight: 600 !important;
}

.certificate-instruction-text {
  font-size: 1.4rem !important;
}

.certificate-close-btn {
  font-size: 1.4rem !important;
  font-weight: 500 !important;
}
</style>
