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

    <v-toolbar-title class="text-h5 font-weight-bold section-title">
      <div class="logo-title-container">
        <img src="/images/logo.webp" alt="cofifi" class="header-logo">
        <span class="brand-text">cofifi</span>
      </div>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Элементы навигации слева от spacer -->
    <div class="nav-items d-none d-md-flex">
      <router-link to="/" class="text-decoration-none nav-link">
        <v-btn text class="nav-btn" :class="{ active: $route.path === '/' }">
          Главная
        </v-btn>
      </router-link>
      <router-link to="/menu" class="text-decoration-none nav-link">
        <v-btn text class="nav-btn" :class="{ active: $route.path === '/menu' }">
          Меню
        </v-btn>
      </router-link>
      <router-link to="/gift-cards" class="text-decoration-none nav-link">
        <v-btn text class="nav-btn" :class="{ active: $route.path === '/gift-cards' }">
          Подарочные карты
        </v-btn>
      </router-link>
      <router-link to="/about" class="text-decoration-none nav-link last-nav-link">
        <v-btn text class="nav-btn" :class="{ active: $route.path === '/about' }">
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

.last-nav-link {
  margin-right: 2rem;
}

.logo-title-container {
  display: inline-flex !important;
  align-items: center !important;
  gap: 12px !important;
  vertical-align: middle;
}

.header-logo {
  height: 48px;
  width: auto;
  flex-shrink: 0;
}

.brand-text {
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}

.v-btn {
  color: white !important;
  font-size: 1.5rem !important;
  position: relative;
  transition: color 0.3s ease;
}

.v-btn::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: var(--info-color);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.v-btn:hover {
  color: var(--info-color) !important;
}

.v-btn:hover::before,
.v-btn.active::before {
  width: 100%;
}

.v-btn.active {
  color: var(--info-color) !important;
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
}
</style>
