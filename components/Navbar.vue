<template>
  <nav class="navbar">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">
        <Icon name="lucide:layout-grid" class="brand-icon" />
        BuyGoods Vendor Guide
      </NuxtLink>
      <nav v-if="breadcrumbs && breadcrumbs.length" aria-label="breadcrumb" class="breadcrumb-nav">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <NuxtLink to="/">Overview</NuxtLink>
          </li>
          <li
            v-for="(crumb, index) in breadcrumbs"
            :key="index"
            class="breadcrumb-item"
            :class="{ active: index === breadcrumbs.length - 1 }"
            :aria-current="index === breadcrumbs.length - 1 ? 'page' : undefined"
          >
            {{ crumb }}
          </li>
        </ol>
      </nav>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  breadcrumbs?: string[]
}>()
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  height: 56px;
  background: white;
  border-bottom: 1px solid #e2e8f0;
  z-index: 1000;
}

.container-fluid {
  max-width: 100%;
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #0f172a;
  text-decoration: none;
  font-size: 1rem;
}

.navbar-brand:hover {
  color: #4f46e5;
}

.brand-icon {
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
  color: #4f46e5;
}

.breadcrumb-nav {
  display: none;
}

@media (min-width: 768px) {
  .breadcrumb-nav {
    display: block;
  }
}

.breadcrumb {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  background: none;
}

.breadcrumb-item {
  font-size: 0.875rem;
  color: #64748b;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: '/';
  padding: 0 0.5rem;
  color: #cbd5e1;
}

.breadcrumb-item a {
  color: #4f46e5;
  text-decoration: none;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

.breadcrumb-item.active {
  color: #64748b;
}
</style>
