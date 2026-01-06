<template>
  <v-app-bar
    color="primary"
    dark
    elevation="2"
    app
    height="70"
    class="d-flex align-center header-sticky"
    :class="{ 'header-hidden': isHidden }"
    :style="{
      transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.3s ease-in-out'
    }"
  >
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="d-md-none"
    ></v-app-bar-nav-icon>

    <v-toolbar-title class="text-h5 font-weight-bold">
      ☕ Кофейня
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Элементы навигации слева от spacer -->
    <div class="nav-items d-none d-md-flex">
      <router-link to="/" class="text-decoration-none nav-link">
        <v-btn text>
          Главная
        </v-btn>
      </router-link>
      <router-link to="/menu" class="text-decoration-none nav-link">
        <v-btn text>
          Меню
        </v-btn>
      </router-link>
      <router-link to="/gift-cards" class="text-decoration-none nav-link">
        <v-btn text>
          Подарочные карты
        </v-btn>
      </router-link>
      <router-link to="/about" class="text-decoration-none nav-link">
        <v-btn text>
          О нас
        </v-btn>
      </router-link>
    </div>
  </v-app-bar>

  <!-- Мобильное меню -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    app
  >
    <v-list>
      <v-list-item @click="drawer = false">
        <router-link to="/" class="text-decoration-none">
          <v-list-item-title>Главная</v-list-item-title>
        </router-link>
      </v-list-item>
      <v-list-item @click="drawer = false">
        <router-link to="/menu" class="text-decoration-none">
          <v-list-item-title>Меню</v-list-item-title>
        </router-link>
      </v-list-item>
      <v-list-item @click="drawer = false">
        <router-link to="/gift-cards" class="text-decoration-none">
          <v-list-item-title>Подарочные карты</v-list-item-title>
        </router-link>
      </v-list-item>
      <v-list-item @click="drawer = false">
        <router-link to="/about" class="text-decoration-none">
          <v-list-item-title>О нас</v-list-item-title>
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const drawer = ref(false)
const isHidden = ref(false)
let lastScrollY = 0
let ticking = false

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const currentScrollY = window.scrollY

      // Скрываем header при скролле вниз (больше 100px от верха)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        if (!isHidden.value) {
          console.log('Hiding header')
          isHidden.value = true
        }
      }
      // Показываем header при скролле вверх
      else if (currentScrollY < lastScrollY) {
        if (isHidden.value) {
          console.log('Showing header')
          isHidden.value = false
        }
      }

      lastScrollY = currentScrollY
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  console.log('Scroll listener added') // Для отладки
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.v-app-bar {
  align-items: center !important;
}

.header-sticky {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.v-toolbar-title {
  color: white !important;
  flex-shrink: 0;
}

.nav-items {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 16px;
}

.nav-link {
  display: flex;
  align-items: center;
}

.v-btn {
  color: white !important;
}

.v-btn:hover {
  color: rgba(255, 255, 255, 0.8) !important;
}

/* Мобильные стили */
@media (max-width: 959px) {
  .nav-items {
    display: none !important;
  }
}

/* Добавляем отступ для контента, чтобы он не скрывался под fixed header */
:global(body) {
  padding-top: 70px;
  background-color: var(--primary-color);
}
</style>
