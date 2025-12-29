<template>
  <div :class="wrapperClass">
    <table class="w-full border-collapse">
      <thead v-if="showHeader">
        <tr :class="headerRowClass">
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="text-left p-4 font-semibold text-gray-900"
            :class="headerCellClass"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <slot>
          <tr
            v-for="(row, rowIndex) in rows"
            :key="rowIndex"
            :class="rowClass"
          >
            <td
              v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              class="p-4"
              :class="[
                cellIndex === 0 ? labelCellClass : valueCellClass,
                rowIndex !== rows.length - 1 ? borderClass : ''
              ]"
            >
              {{ cell }}
            </td>
          </tr>
        </slot>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
/**
 * SpecsTable - Reusable table component for specifications and data
 *
 * @prop {string[]} headers - Array of header labels
 * @prop {string[][]} rows - 2D array of table data
 * @prop {boolean} showHeader - Whether to show the header row (default: true)
 * @prop {string} wrapperClass - Classes for the wrapper div
 * @prop {string} headerRowClass - Classes for header row
 * @prop {string} headerCellClass - Classes for header cells
 * @prop {string} rowClass - Classes for body rows
 * @prop {string} labelCellClass - Classes for first column (label) cells
 * @prop {string} valueCellClass - Classes for value cells
 * @prop {string} borderClass - Border class for cells
 *
 * @example
 * <SpecsTable
 *   :headers="['Element', 'Specification']"
 *   :rows="[
 *     ['Video Length', '15-20 minutes optimal'],
 *     ['Video Format', 'MP4, hosted on CDN'],
 *     ['Button Timing', 'Set to 85-90% completion']
 *   ]"
 * />
 *
 * @example with slot for custom cells
 * <SpecsTable :headers="['Package', 'Price']">
 *   <tr>
 *     <td class="p-4 font-semibold">Basic</td>
 *     <td class="p-4">$69</td>
 *   </tr>
 *   <tr>
 *     <td class="p-4 font-semibold">Premium</td>
 *     <td class="p-4">$147</td>
 *   </tr>
 * </SpecsTable>
 */
const props = withDefaults(
  defineProps<{
    headers?: string[]
    rows?: string[][]
    showHeader?: boolean
    wrapperClass?: string
    headerRowClass?: string
    headerCellClass?: string
    rowClass?: string
    labelCellClass?: string
    valueCellClass?: string
    borderClass?: string
  }>(),
  {
    headers: () => [],
    rows: () => [],
    showHeader: true,
    wrapperClass: 'overflow-x-auto',
    headerRowClass: 'bg-gray-50',
    headerCellClass: 'border-b border-gray-200',
    rowClass: '',
    labelCellClass: 'font-semibold text-gray-900',
    valueCellClass: 'text-gray-700',
    borderClass: 'border-b border-gray-200'
  }
)
</script>
