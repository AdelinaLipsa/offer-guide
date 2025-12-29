/**
 * Component Types for Offer Guide Reusable Components
 *
 * This file contains TypeScript type definitions for all reusable components
 * in the Offer Guide application.
 */

/**
 * Alert box variant types
 */
export type AlertVariant = 'success' | 'warning' | 'error' | 'info'

/**
 * Size variants for headers and other components
 */
export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl'

/**
 * Layout orientation options
 */
export type LayoutOrientation = 'horizontal' | 'vertical'

/**
 * Column layout options
 */
export type ColumnLayout = 'single' | 'double'

/**
 * Checklist item icon variants
 */
export type ChecklistVariant = 'check' | 'cross'

/**
 * Metric data structure
 */
export interface Metric {
  label: string
  value: string
}

/**
 * Props for ContentCard component
 */
export interface ContentCardProps {
  borderClass?: string
  noBorder?: boolean
}

/**
 * Props for SectionHeader component
 */
export interface SectionHeaderProps {
  number?: number
  title?: string
  showNumber?: boolean
  size?: SizeVariant
  gradientClass?: string
  customClass?: string
}

/**
 * Props for AlertBox component
 */
export interface AlertBoxProps {
  variant: AlertVariant
  title?: string
  message?: string
  customClass?: string
}

/**
 * Props for ChecklistItem component
 */
export interface ChecklistItemProps {
  label?: string
  text?: string
  variant?: ChecklistVariant
  icon?: string
  containerClass?: string
  iconClass?: string
  iconPositionClass?: string
  contentClass?: string
  customClass?: string
}

/**
 * Props for Checklist component
 */
export interface ChecklistProps {
  columns?: ColumnLayout
  gap?: string
  customClass?: string
}

/**
 * Props for MetricsBox component
 */
export interface MetricsBoxProps {
  title: string
  metrics?: Metric[]
  containerClass?: string
  titleClass?: string
  titleSize?: SizeVariant
  customClass?: string
}

/**
 * Props for PricingCard component
 */
export interface PricingCardProps {
  title: string
  price: string
  priceUnit?: string
  description?: string
  savings?: string
  features?: string[]
  featured?: boolean
  badge?: string
  buttonText?: string
  showImage?: boolean
  imagePlaceholder?: string
  imageHeight?: string
  containerClass?: string
  badgeClass?: string
  buttonClass?: string
  titleSize?: string
  priceSize?: string
  customClass?: string
}

/**
 * Props for NavigationButtons component
 */
export interface NavigationButtonsProps {
  prevTo?: string
  prevText?: string
  nextTo?: string
  nextText?: string
  showArrows?: boolean
  layout?: LayoutOrientation
  gap?: string
  prevButtonClass?: string
  nextButtonClass?: string
  customClass?: string
}

/**
 * Props for SpecsTable component
 */
export interface SpecsTableProps {
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
}
