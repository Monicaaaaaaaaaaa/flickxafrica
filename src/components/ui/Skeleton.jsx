import React from 'react'
import { motion } from 'framer-motion'

export const Skeleton = ({ 
  className = '', 
  variant = 'default',
  animation = 'pulse',
  ...props 
}) => {
  const variants = {
    default: 'h-4 w-full',
    text: 'h-4 w-full',
    heading: 'h-8 w-3/4',
    avatar: 'h-12 w-12 rounded-full',
    button: 'h-10 w-24 rounded-lg',
    card: 'h-32 w-full rounded-lg',
    image: 'h-48 w-full rounded-lg'
  }

  const animations = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: ''
  }

  return (
    <div
      className={`
        ${variants[variant] || variants.default}
        ${animations[animation]}
        bg-gray-200 rounded
        ${className}
      `}
      {...props}
    />
  )
}

export const CardSkeleton = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className={`bg-white rounded-xl shadow-sm p-6 ${className}`}
  >
    <Skeleton variant="avatar" className="mb-4 mx-auto" />
    <Skeleton variant="heading" className="mb-2" />
    <Skeleton className="mb-2" />
    <Skeleton className="w-3/4 mb-4" />
    <Skeleton variant="button" className="mx-auto" />
  </motion.div>
)

export const CourseCardSkeleton = ({ className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-white rounded-xl shadow-sm p-6 flex flex-col w-full ${className}`}
  >
    <div className="flex justify-center mb-3">
      <Skeleton variant="avatar" className="w-[170px] h-[170px]" />
    </div>
    <Skeleton variant="heading" className="mb-1" />
    <Skeleton className="text-sm mb-2 w-1/2" />
    <div className="space-y-2 mt-auto">
      <Skeleton className="text-sm w-1/3" />
      <div className="flex justify-between items-center">
        <Skeleton className="text-sm w-1/4" />
        <Skeleton variant="button" className="w-[110px] h-[36.67px]" />
      </div>
    </div>
  </motion.div>
)

export const ListSkeleton = ({ items = 3, className = '' }) => (
  <div className={`space-y-4 ${className}`}>
    {Array.from({ length: items }).map((_, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-center space-x-4 p-4 bg-white rounded-lg"
      >
        <Skeleton variant="avatar" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="heading" className="w-1/3" />
          <Skeleton className="w-2/3" />
        </div>
      </motion.div>
    ))}
  </div>
)

export const TableSkeleton = ({ rows = 5, columns = 4, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
    <div className="border-b">
      <div className="grid p-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, index) => (
          <Skeleton key={index} variant="heading" />
        ))}
      </div>
    </div>
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <motion.div
        key={rowIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: rowIndex * 0.1 }}
        className="border-b last:border-b-0"
      >
        <div className="grid p-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} />
          ))}
        </div>
      </motion.div>
    ))}
  </div>
)

export const LoadingSpinner = ({ 
  size = 'md', 
  className = '',
  text = 'Loading...' 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="text-center">
        <div className={`${sizes[size]} border-2 border-gray-200 border-t-deep-blue rounded-full animate-spin mx-auto mb-2`}></div>
        {text && <p className="text-sm text-gray-600">{text}</p>}
      </div>
    </div>
  )
}

export const PageSkeleton = ({ className = '' }) => (
  <div className={`min-h-screen bg-soft-white ${className}`}>
    <div className="pt-20">
      <div className="h-16 bg-white border-b mb-8">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <Skeleton variant="heading" className="w-32" />
          <div className="flex space-x-4">
            <Skeleton variant="button" />
            <Skeleton variant="button" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <Skeleton variant="heading" className="h-16 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-5/6" />
            <div className="flex space-x-4 pt-4">
              <Skeleton variant="button" className="w-32" />
              <Skeleton variant="button" className="w-32" />
            </div>
          </div>
          <Skeleton variant="image" className="h-96" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default Skeleton
