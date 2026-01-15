<template>
  <aside class="sidebar-nav">
    <div class="sidebar-content">
      <h3 class="sidebar-title">Funnel Steps</h3>
      <ul class="step-progress">
        <li v-for="step in steps" :key="step.number" :class="{ 'has-divider': step.divider }">
          <NuxtLink
            :to="step.link"
            class="step-item"
            :class="getStepClass(step.number)"
          >
            <div class="step-circle" :class="getCircleClass(step)">
              <Icon v-if="step.icon" :name="step.icon" class="w-4 h-4" />
              <Icon v-else-if="isCompleted(step.number)" name="lucide:check" class="w-4 h-4" />
              <span v-else>{{ step.number }}</span>
            </div>
            <div class="step-info">
              <div v-if="step.label" class="step-label" :class="getLabelClass(step.number)">
                {{ step.label }}
              </div>
              <div class="step-title-text" :class="getTitleClass(step.number)">
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
const props = defineProps<{
  currentStep?: number
}>()

const steps = [
  { number: 1, label: 'Step 1', title: 'VSL Page', link: '/step1-vsl' },
  { number: 2, label: 'Step 2', title: 'Upsell 1', subtitle: '(more quantity)', link: '/step3-upsell1' },
  { number: 3, label: 'Step 3', title: 'Downsell 1', subtitle: '(smaller qty)', link: '/step4-downsell1' },
  { number: 4, label: 'Step 4', title: 'Upsell 2', subtitle: '(different product)', link: '/step5-upsell2' },
  { number: 5, label: 'Step 5', title: 'Downsell 2', subtitle: '(trial size)', link: '/step6-downsell2' },
  { number: 6, label: 'Step 6', title: 'Thank You', link: '/step7-thankyou' },
  { number: 7, label: 'Step 7', title: 'Checkout', subtitle: '(DTC page)', link: '/step2-dtc' },
  { number: 8, label: 'Step 8', title: 'Footer & Legal', link: '/step8-footer' },
  { number: 9, label: '', title: 'VSL Example', link: '/example-vsl', icon: 'lucide:play-circle', divider: true, special: 'vsl' },
  { number: 10, label: '', title: 'TSL Example', link: '/example-tsl', icon: 'lucide:file-text', special: 'tsl' }
]

const isCompleted = (stepNumber: number) => stepNumber < (props.currentStep || 0)

const getStepClass = (stepNumber: number) => {
  if (stepNumber === props.currentStep) return 'current'
  if (stepNumber < (props.currentStep || 0)) return 'completed'
  return 'future'
}

const getCircleClass = (step: any) => {
  if (step.special === 'vsl') return 'special-vsl'
  if (step.special === 'tsl') return 'special-tsl'
  return ''
}

const getLabelClass = (stepNumber: number) => {
  if (stepNumber === props.currentStep) return 'text-accent'
  if (stepNumber < (props.currentStep || 0)) return 'text-success'
  return 'text-charcoal-500'
}

const getTitleClass = (stepNumber: number) => {
  if (stepNumber === props.currentStep) return 'text-accent'
  if (stepNumber < (props.currentStep || 0)) return 'text-success'
  return 'text-charcoal-600'
}
</script>

<style scoped>
.sidebar-nav {
  position: fixed;
  left: 0;
  top: 56px;
  width: 300px;
  height: calc(100vh - 56px);
  background: white;
  border-right: 1px solid #e2e8f0;
  overflow-y: auto;
  z-index: 100;
}

.sidebar-content {
  padding: 1.5rem 1.25rem;
}

.sidebar-title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 1.25rem;
  color: #64748b;
  letter-spacing: 0.5px;
}

.step-progress {
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
}

.step-progress::before {
  content: '';
  position: absolute;
  left: 19px;
  top: 40px;
  bottom: 40px;
  width: 1px;
  background: #e2e8f0;
}

.step-progress li {
  margin: 0;
  padding: 0;
}

.step-progress li.has-divider {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #e2e8f0;
}

.step-item {
  display: flex;
  align-items: center;
  padding: 0.625rem 0;
  text-decoration: none;
  position: relative;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
  margin: 0 -0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.step-item::before {
  content: '';
  position: absolute;
  left: -0.5rem;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, #4f46e5, #7c3aed);
  border-radius: 0 2px 2px 0;
  transform: scaleY(0);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-item:hover::before,
.step-item.current::before {
  transform: scaleY(1);
}

.step-item:hover {
  background-color: #f1f5f9;
  transform: translateX(4px);
}

.step-item:hover .step-circle {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
}

.step-item.current {
  background-color: #f0f4ff;
}

.step-item:active {
  transform: translateX(2px) scale(0.99);
}

.step-circle {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  flex-shrink: 0;
  margin-right: 0.875rem;
  background: white;
  color: #64748b;
  transition: all 0.2s ease;
}

.step-item.completed .step-circle {
  background: #059669;
  border-color: #059669;
  color: white;
}

.step-item.current .step-circle {
  background: #4f46e5;
  border-color: #4f46e5;
  color: white;
}

.step-circle.special-vsl {
  background: #059669;
  border-color: #059669;
  color: white;
}

.step-circle.special-tsl {
  background: #7c3aed;
  border-color: #7c3aed;
  color: white;
}

.step-info {
  flex-grow: 1;
  min-width: 0;
}

.step-label {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 0.5px;
}

.step-title-text {
  font-weight: 500;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.step-subtitle {
  font-size: 12px;
  opacity: 0.7;
  margin-left: 4px;
}

@media (max-width: 768px) {
  .sidebar-nav {
    display: none;
  }
}
</style>
