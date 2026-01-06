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

    <!-- Меню в форме кофейной чашки -->
    <div class="menu-cup-container">
      <div class="cup-background">
        <img src="/images/cup.svg?v=3" alt="Coffee Cup" class="cup-svg">

        <!-- Отдельные элементы пара поверх SVG -->
        <div class="steam-overlay">
          <div class="steam steam-left"></div>
          <div class="steam steam-right"></div>
        </div>
      </div>

      <div class="cup-content">
        <div class="menu-header">
          <h2 class="cup-title section-title">Наше меню</h2>
        </div>

        <!-- Фильтры -->
        <div class="menu-filters">
          <v-chip-group
            v-model="selectedCategory"
            mandatory
            variant="outlined"
            class="justify-center"
          >
            <v-chip
              v-for="category in categories"
              :key="category.value"
              :value="category.value"
              size="large"
              class="mx-1 filter-chip"
            >
              {{ category.label }}
            </v-chip>
          </v-chip-group>
        </div>

        <!-- Меню элементов -->
        <div class="menu-items">
          <div class="menu-grid">
            <!-- Отображаем карточки -->
            <div
              v-for="(item, index) in filteredMenuItems"
              :key="item.id"
              class="menu-item-wrapper"
            >
              <Motion
                :initial="{ opacity: 0, scale: 0.8 }"
                :enter="{ opacity: 1, scale: 1 }"
                :transition="{
                  duration: 500,
                  delay: index * 100,
                  ease: 'easeOut'
                }"
              >
                <v-card
                  class="menu-item-card"
                  elevation="3"
                  hover
                >
                  <v-img
                    :src="item.image"
                    height="180"
                    cover
                    class="menu-item-image"
                  ></v-img>
                  <v-card-title class="text-h6 font-weight-bold menu-item-title">
                    {{ item.name }}
                  </v-card-title>
                  <v-card-text class="menu-item-content">
                    <p class="text-body-2 mb-2 menu-item-description">{{ item.description }}</p>
                    <div class="d-flex justify-space-between align-center">
                      <span class="text-h6 font-weight-bold primary--text menu-item-price">
                        {{ item.price }} ₽
                      </span>
                      <v-chip
                        size="small"
                        :color="getCategoryColor(item.category)"
                        variant="flat"
                        class="menu-item-category"
                      >
                        {{ getCategoryLabel(item.category) }}
                      </v-chip>
                    </div>
                  </v-card-text>
                </v-card>
              </Motion>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
}

const selectedCategory = ref('all')

const breadcrumbs = [
  {
    title: 'Главная',
    to: '/',
  },
  {
    title: 'Меню',
  },
]

const categories = [
  { label: 'Все', value: 'all' },
  { label: 'Кофе', value: 'coffee' },
  { label: 'Чай', value: 'tea' },
  { label: 'Десерты', value: 'desserts' },
  { label: 'Напитки', value: 'drinks' },
]

const menuItems = ref<MenuItem[]>([
  {
    id: 1,
    name: 'Эспрессо',
    description: 'Крепкий итальянский кофе, приготовленный под высоким давлением',
    price: 150,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400'
  },
  {
    id: 2,
    name: 'Капучино',
    description: 'Классический кофе с молоком и молочной пенкой',
    price: 220,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c8e3?w=400'
  },
  {
    id: 3,
    name: 'Латте',
    description: 'Нежный кофе с большим количеством молока',
    price: 250,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400'
  },
  {
    id: 4,
    name: 'Американо',
    description: 'Эспрессо, разбавленный горячей водой',
    price: 180,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400'
  },
  {
    id: 5,
    name: 'Зеленый чай',
    description: 'Ароматный зеленый чай из лучших сортов',
    price: 120,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400'
  },
  {
    id: 6,
    name: 'Черный чай',
    description: 'Классический черный чай с лимоном',
    price: 100,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1576092762793-ca6b4a3d9e47?w=400'
  },
  {
    id: 7,
    name: 'Тирамису',
    description: 'Итальянский десерт с кофе и маскарпоне',
    price: 320,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400'
  },
  {
    id: 8,
    name: 'Чизкейк',
    description: 'Нежный творожный десерт с ягодным топпингом',
    price: 280,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400'
  },
  {
    id: 9,
    name: 'Фреш апельсиновый',
    description: 'Свежевыжатый апельсиновый сок',
    price: 200,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1554177255-61502b352de3?w=400'
  },
  {
    id: 10,
    name: 'Мохито',
    description: 'Освежающий коктейль с мятой и лаймом',
    price: 250,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400'
  }
])

const filteredMenuItems = computed(() => {
  if (selectedCategory.value === 'all') {
    return menuItems.value
  }
  return menuItems.value.filter(item => item.category === selectedCategory.value)
})

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    coffee: 'primary',
    tea: 'info',
    desserts: 'secondary',
    drinks: 'accent'
  }
  return colors[category] || 'grey'
}

const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    coffee: 'Кофе',
    tea: 'Чай',
    desserts: 'Десерты',
    drinks: 'Напитки'
  }
  return labels[category] || category
}

</script>

<style scoped>
/* Дизайн меню в форме кофейной чашки */
.menu-cup-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 2rem 4rem 2rem;
  overflow: visible !important;
  background: linear-gradient(135deg, var(--accent-color) 0%, rgba(255, 255, 255, 0.1) 100%);
}

.cup-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  opacity: 0.15;
  pointer-events: none;
  overflow: visible;
}

.cup-svg {
  width: 1200px;
  height: 1200px;
  max-width: 95vw;
  max-height: 95vh;
  filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.1));
  overflow: visible;
}

/* Анимация пара */
@keyframes steam-rise {
  0% {
    transform: translateY(0px);
    opacity: 0.8;
  }
  25% {
    transform: translateY(-25px);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-50px);
    opacity: 0.3;
  }
  75% {
    transform: translateY(-25px);
    opacity: 0.6;
  }
  100% {
    transform: translateY(0px);
    opacity: 0.8;
  }
}

@keyframes steam-rise-delayed {
  0% {
    transform: translateY(0px);
    opacity: 0.7;
  }
  20% {
    transform: translateY(-30px);
    opacity: 0.5;
  }
  40% {
    transform: translateY(-60px);
    opacity: 0.2;
  }
  60% {
    transform: translateY(-30px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0px);
    opacity: 0.7;
  }
}

.cup-svg {
  width: 1200px;
  height: 1200px;
  max-width: 95vw;
  filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.1));
}

/* Отдельные элементы пара поверх SVG */
.steam-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
}

.steam {
  position: absolute;
  width: 4px;
  height: 60px;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4), transparent);
  border-radius: 2px;
  bottom: 35%;
  opacity: 0.8;
  filter: blur(0.5px);
}

.steam-left {
  left: 38%;
  animation: steam-free 4s ease-in-out infinite;
}

.steam-right {
  left: 58%;
  animation: steam-free-delayed 5s ease-in-out infinite 1s;
}

@keyframes steam-free {
  0% {
    transform: translateY(0px) scaleY(1);
    opacity: 0.8;
  }
  25% {
    transform: translateY(-80px) scaleY(0.8);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-160px) scaleY(0.6);
    opacity: 0.3;
  }
  75% {
    transform: translateY(-80px) scaleY(0.8);
    opacity: 0.6;
  }
  100% {
    transform: translateY(0px) scaleY(1);
    opacity: 0.8;
  }
}

@keyframes steam-free-delayed {
  0% {
    transform: translateY(0px) scaleY(1);
    opacity: 0.7;
  }
  20% {
    transform: translateY(-100px) scaleY(0.7);
    opacity: 0.5;
  }
  40% {
    transform: translateY(-200px) scaleY(0.5);
    opacity: 0.2;
  }
  60% {
    transform: translateY(-100px) scaleY(0.7);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0px) scaleY(1);
    opacity: 0.7;
  }
}

.cup-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  text-align: center;
}

.menu-header {
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.cup-title {
  font-size: 3rem !important;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-filters {
  margin-bottom: 3rem;
  position: relative;
}

.filter-chip {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.8) !important;
  border: 1px solid var(--primary-color) !important;
}

.menu-items {
  position: relative;
  width: 100%;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-items: center;
  align-items: start;
  width: 100%;
  min-height: 1400px; /* Фиксированная высота для стабильности при всех фильтрах */
}

.menu-item-wrapper {
  width: 100%;
  max-width: 280px;
}

.menu-item-card {
  height: 100%;
  min-height: 350px; /* Фиксированная минимальная высота */
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.95) !important;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.menu-item-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.menu-item-image {
  transition: transform 0.3s ease;
}

.menu-item-card:hover .menu-item-image {
  transform: scale(1.1);
}

.menu-item-title {
  padding: 1rem;
  margin: 0;
  background: linear-gradient(135deg, var(--primary-color), var(--info-color));
  color: white !important;
}

.menu-item-content {
  padding: 1.5rem;
}

.menu-item-description {
  color: #555 !important;
  line-height: 1.6;
}

.menu-item-price {
  font-weight: 700 !important;
}

.menu-item-category {
  font-weight: 500;
}

/* Адаптивность */
@media (max-width: 1200px) {
  .menu-grid {
    grid-template-columns: repeat(3, 1fr);
    min-height: 1600px;
  }
}

@media (max-width: 768px) {
  .cup-svg {
    width: 300px;
    height: 300px;
  }

  .cup-title {
    font-size: 2rem !important;
  }

  .menu-cup-container {
    padding: 2rem 1rem;
  }

  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    min-height: 2000px;
  }

  .menu-item-wrapper {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .cup-svg {
    width: 250px;
    height: 250px;
  }

  .cup-title {
    font-size: 1.5rem !important;
  }

  .menu-grid {
    grid-template-columns: repeat(1, 1fr);
    min-height: 4000px;
  }
}
</style>
