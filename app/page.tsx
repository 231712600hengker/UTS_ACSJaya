"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminStore } from '@/lib/store'
import HeroSection from '@/components/home/hero-section'
import BrandsSection from '@/components/home/brands-section'
import ProductSection from '@/components/home/product-section'
import FeaturesSection from '@/components/home/features-section'
import TestimonialsSection from '@/components/home/testimonials-section'
import NewsletterSection from '@/components/home/newsletter-section'

export default function Home() {
  const router = useRouter()
  const { isAuthenticated, userRole, products } = useAdminStore()
  const newArrivals = products.filter(p => p.isNewArrival).slice(0, 4)
  const topSelling = products.filter(p => p.isTopSelling).slice(0, 4)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/admin/login')
    } else if (userRole === 'admin') {
      router.push('/admin/dashboard')
    }
  }, [isAuthenticated, userRole, router])

  if (!isAuthenticated || userRole === 'admin') {
    return null
  }

  return (
    <div className="min-h-screen bg-custom-base">
      <HeroSection />
      <BrandsSection />
      <ProductSection title="NEW ARRIVALS" products={newArrivals} />
      <FeaturesSection />
      <ProductSection title="TOP SELLING" products={topSelling} />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  )
}