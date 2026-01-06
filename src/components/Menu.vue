<template>
  <v-container
    id="menu"
    class="menu-section py-16"
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
          <v-card-title class="text-h3 font-weight-bold text-center mb-8">
            Наше меню
          </v-card-title>

          <!-- Фильтры -->
          <v-card-text class="pb-8">
            <v-row>
              <v-col cols="12" class="text-center">
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
                    class="mx-1"
                  >
                    {{ category.label }}
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
          </v-card-text>

          <!-- Меню элементов -->
          <v-card-text>
            <v-row>
              <v-col
                v-for="(item, index) in filteredMenuItems"
                :key="item.id"
                cols="12"
                sm="6"
                md="4"
                lg="3"
              >
                <Motion
                  :initial="{ opacity: 0, y: 30 }"
                  :enter="{ opacity: 1, y: 0 }"
                  :transition="{
                    duration: 500,
                    delay: index * 100,
                    ease: 'easeOut'
                  }"
                >
                  <v-card
                    class="menu-item-card"
                    elevation="2"
                    hover
                  >
                    <v-img
                      :src="item.image"
                      height="200"
                      cover
                    ></v-img>
                    <v-card-title class="text-h6 font-weight-bold">
                      {{ item.name }}
                    </v-card-title>
                    <v-card-text>
                      <p class="text-body-2 mb-2">{{ item.description }}</p>
                      <div class="d-flex justify-space-between align-center">
                        <span class="text-h6 font-weight-bold primary--text">
                          {{ item.price }} ₽
                        </span>
                        <v-chip
                          size="small"
                          :color="getCategoryColor(item.category)"
                          variant="flat"
                        >
                          {{ getCategoryLabel(item.category) }}
                        </v-chip>
                      </div>
                    </v-card-text>
                  </v-card>
                </Motion>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
    coffee: 'brown',
    tea: 'green',
    desserts: 'orange',
    drinks: 'blue'
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
.menu-section {
  background-color: #f8f9fa;
}

.menu-item-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.menu-item-card:hover {
  transform: translateY(-5px);
}
</style>
