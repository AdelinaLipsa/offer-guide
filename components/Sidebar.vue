<template>
  <aside class="sidebar-nav">
    <div class="sidebar-content">
      <h3 class="sidebar-title">Funnel Steps</h3>
      <ul class="step-progress">
        <li v-for="(step, idx) in steps" :key="step.number" :class="{ 'has-divider': step.divider }">
          <NuxtLink
            :to="step.link"
            class="step-item"
            :class="getStepClass(step.number)"
          >
            <div class="step-circle" :style="step.circleStyle">
              <template v-if="step.icon">
                <span v-html="step.icon"></span>
              </template>
              <template v-else>
                {{ step.number }}
              </template>
            </div>
            <div class="step-info">
              <div v-if="step.label" class="step-label" :class="getStepLabelClass(step.number)">
                {{ step.label }}
              </div>
              <div class="step-title-text" :class="getStepTitleClass(step.number)" :style="step.titleStyle">
                {{ step.title }}
                <span v-if="step.subtitle" class="step-subtitle">{{ step.subtitle }}</span>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  currentStep?: number
}>()

const steps = [
  {
    number: 1,
    label: 'Step 1',
    title: 'VSL Page',
    link: '/step1-vsl'
  },
  {
    number: 2,
    label: 'Step 2',
    title: 'Upsell 1',
    subtitle: '(same product)',
    link: '/step3-upsell1'
  },
  {
    number: 3,
    label: 'Step 3',
    title: 'Downsell 1',
    subtitle: '(smaller qty)',
    link: '/step4-downsell1'
  },
  {
    number: 4,
    label: 'Step 4',
    title: 'Upsell 2',
    subtitle: '(different product)',
    link: '/step5-upsell2'
  },
  {
    number: 5,
    label: 'Step 5',
    title: 'Downsell 2',
    subtitle: '(different offer)',
    link: '/step6-downsell2'
  },
  {
    number: 6,
    label: 'Step 6',
    title: 'Thank You',
    link: '/step7-thankyou'
  },
  {
    number: 7,
    label: 'Step 7',
    title: 'Checkout (Reference)',
    link: '/step2-dtc'
  },
  {
    number: 8,
    label: 'Step 8',
    title: 'Footer',
    link: '/step8-footer'
  },
  {
    number: 9,
    label: '',
    title: 'VSL Example',
    link: '/example-vsl',
    icon: '<i class="bi bi-play-circle-fill"></i>',
    circleStyle: 'background: linear-gradient(135deg, #10b981, #059669) !important; border-color: #10b981 !important; color: white !important;',
    titleStyle: 'color: #10b981;',
    divider: true
  },
  {
    number: 10,
    label: '',
    title: 'TSL Example',
    link: '/example-tsl',
    icon: '<i class="bi bi-file-text-fill"></i>',
    circleStyle: 'background: linear-gradient(135deg, #7c3aed, #6d28d9) !important; border-color: #7c3aed !important; color: white !important;',
    titleStyle: 'color: #7c3aed;'
  }
]

const getStepClass = (stepNumber: number) => {
  if (stepNumber === props.currentStep) return 'current'
  if (stepNumber < (props.currentStep || 0)) return 'completed'
  return 'future'
}

const getStepLabelClass = (stepNumber: number) => {
  if (stepNumber === props.currentStep) return 'text-primary'
  if (stepNumber < (props.currentStep || 0)) return 'text-completed'
  return 'text-secondary'
}

const getStepTitleClass = (stepNumber: number) => {
  if (stepNumber === props.currentStep) return 'text-primary'
  if (stepNumber < (props.currentStep || 0)) return 'text-completed'
  return 'text-secondary'
}
</script>

<style scoped>
.sidebar-nav {
  position: fixed;
  left: 0;
  top: 56px;
  width: 280px;
  height: calc(100vh - 56px);
  background: white;
  border-right: 1px solid #e5e7eb;
  overflow-y: auto;
  z-index: 100;
}

.sidebar-content {
  padding: 1.5rem 1rem;
}

.sidebar-title {
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  color: #1f2937;
  letter-spacing: 0.5px;
}

.step-progress {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}

/* Progress line connector */
.step-progress::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 45px;
  bottom: 45px;
  width: 2px;
  background: #e5e7eb;
}

.step-progress li {
  margin: 0;
  padding: 0;
}

.step-progress li.has-divider {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #e5e7eb;
}

.step-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  text-decoration: none;
  position: relative;
  transition: transform 0.3s ease;
}

.step-item:hover {
  transform: translateX(4px);
}

/* Step circle styling */
.step-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
  margin-right: 0.75rem;
  position: relative;
  transition: all 0.3s ease;
  background: white;
  color: #6b7280;
}

.step-item.current .step-circle,
.step-item.completed .step-circle {
  color: white !important;
}

/* Completed step styling */
.step-item.completed .step-circle {
  background: linear-gradient(135deg, #10b981, #059669) !important;
  border-color: #10b981 !important;
  color: transparent !important;
}

.step-item.completed .step-circle::after {
  content: '✓';
  position: absolute;
  font-size: 18px;
  color: white;
}

/* Current step styling */
.step-item.current .step-circle {
  background: linear-gradient(135deg, #2563eb, #7c3aed) !important;
  border-color: #2563eb !important;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
  transform: scale(1.1);
  color: white !important;
}

.step-info {
  flex-grow: 1;
}

.step-label {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.5px;
}

.step-label.text-primary {
  color: #2563eb;
}

.step-label.text-secondary {
  color: #6b7280;
}

.step-label.text-completed {
  color: #10b981;
}

.step-title-text {
  font-weight: 600;
  font-size: 14px;
}

.step-title-text.text-primary {
  color: #2563eb;
}

.step-title-text.text-secondary {
  color: #6b7280;
}

.step-title-text.text-completed {
  color: #10b981;
}

.step-subtitle {
  font-size: 10px;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .sidebar-nav {
    display: none;
  }
}
</style>
