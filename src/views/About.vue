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
      class="about-section py-16"
      fluid
    >
      <v-row justify="center">
        <v-col
          cols="12"
          md="10"
          lg="8"
        >
          <v-card
            class="pa-8"
            elevation="4"
          >
            <v-card-title class="text-h3 font-weight-bold text-center mb-8 section-title">
              О нашей кофейне
            </v-card-title>

            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-img
                  src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=600"
                  height="400"
                  cover
                  class="rounded-lg"
                ></v-img>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <v-card-text class="text-h6 mb-6 other-text">
                  Наша кофейня была основана в 2020 году с простой миссией:
                  делиться любовью к прекрасному кофе и создавать уютное пространство
                  для наших гостей.
                </v-card-text>

                <v-card-text class="text-body-1 mb-6 other-text">
                  Мы используем только высококачественные зерна арабики и робусты,
                  обжариваемые по специальным рецептам. Наша команда бариста -
                  профессионалы своего дела, которые знают, как приготовить
                  идеальную чашку кофе именно для вас.
                </v-card-text>

                <v-card-text class="text-body-1 mb-6 other-text">
                  Кроме вкусного кофе, мы предлагаем уютную атмосферу для работы,
                  встреч с друзьями или просто приятного времяпрепровождения.
                  У нас вы найдете не только напитки, но и вкусные десерты,
                  свежую выпечку и многое другое.
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    color="info"
                    size="large"
                    class="px-8 other-text"
                  >
                    Связаться с нами
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>

            <!-- Статистика -->
            <v-row class="mt-12">
              <v-col
                v-for="(stat, index) in stats"
                :key="stat.id"
                cols="12"
                sm="6"
                md="3"
              >
                <Motion
                  :initial="{ opacity: 0, scale: 0.8 }"
                  :enter="{ opacity: 1, scale: 1 }"
                  :transition="{
                    duration: 500,
                    delay: index * 200,
                    ease: 'easeOut'
                  }"
                >
                  <v-card
                    class="stat-card text-center pa-6"
                    elevation="2"
                  >
                    <v-icon
                      :icon="stat.icon"
                      size="48"
                      color="info"
                      class="mb-4"
                    ></v-icon>
                    <div class="text-h4 font-weight-bold section-title" :style="{ color: 'var(--primary-color)' }" mb-2>
                      {{ stat.value }}
                    </div>
                    <div class="text-body-1 other-text">
                      {{ stat.label }}
                    </div>
                  </v-card>
                </Motion>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Stat {
  id: number
  icon: string
  value: string
  label: string
}

const breadcrumbs = [
  {
    title: 'Главная',
    to: '/',
  },
  {
    title: 'О нас',
  },
]

const stats = ref<Stat[]>([
  {
    id: 1,
    icon: 'mdi-coffee',
    value: '10,000+',
    label: 'Чашек кофе'
  },
  {
    id: 2,
    icon: 'mdi-account-group',
    value: '5,000+',
    label: 'Довольных клиентов'
  },
  {
    id: 3,
    icon: 'mdi-star',
    value: '4.9',
    label: 'Средний рейтинг'
  },
  {
    id: 4,
    icon: 'mdi-calendar',
    value: '4 года',
    label: 'Опыта работы'
  }
])
</script>

<style scoped>
.about-section {
  background-color: var(--accent-color);
}

.stat-card {
  height: 100%;
}
</style>
