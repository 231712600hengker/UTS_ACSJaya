"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAdminStore } from '@/lib/store'
import { MapPin, Mail, Phone, Clock, Users, Building, Globe, Store, CreditCard } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const stats = [
  {
    label: "Products",
    value: "50+",
    description: "Premium electronic products"
  },
  {
    label: "Revenue",
    value: "3M+",
    description: "Annual revenue in electronics sales"
  },
  {
    label: "Customers",
    value: "100+",
    description: "Satisfied global customers"
  }
]

const team = [
  {
    name: "Fanidyasani Atantya",
    role: "CEO & Founder",
    image: "/images/Cinta About.jpg",
    description: "15+ years of experience in consumer electronics and retail technology."
  },
  {
    name: "Sion Felix Saragih",
    role: "CTO",
    image: "/images/Sion About.jpg",
    description: "Expert in VR/AR technology and emerging tech trends."
  },
  {
    name: "Moch Alif Budi Setyawan",
    role: "Head of Sales",
    image: "/images/Alip About.jpg",
    description: "Specializes in enterprise solutions and customer relations."
  }
]

const steps = [
  {
    icon: Store,
    title: "Visit Our Store",
    description: "Come to our physical store to see and try our products directly. Our team is ready to help you choose the right product."
  },
  {
    icon: Clock,
    title: "Operating Hours",
    description: "We are open Monday-Saturday, 09:00-21:00. Sundays and holidays 10:00-20:00."
  },
  {
    icon: CreditCard,
    title: "Payment Methods",
    description: "We accept cash, debit/credit cards, and bank transfers. Payments can be made directly at the store."
  }
]

export default function About() {
  const router = useRouter()
  const { isAuthenticated, userRole } = useAdminStore()

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
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-custom-base to-custom-sub-base">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-custom-title mb-6">
            ABOUT NEXGEN ELECTRONICS
          </h1>
          <p className="text-xl text-custom-subtitle max-w-3xl mx-auto">
            Your trusted partner in cutting-edge technology. We specialize in bringing the latest 
            innovations in VR, AR, AI, and smart devices to tech enthusiasts and businesses alike.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-custom-base">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-custom-sub-base/50 rounded-2xl backdrop-blur-sm border border-custom-title/20 transform hover:scale-105 transition-all duration-300">
                <p className="text-4xl font-bold text-custom-title">{stat.value}</p>
                <p className="text-lg font-semibold text-custom-subtitle mt-2">{stat.label}</p>
                <p className="text-custom-subtitle/80 mt-1">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* How to Buy Section */}
       <section className="py-16 bg-custom-sub-base">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-custom-title">HOW TO BUY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="bg-custom-base/50 backdrop-blur-lg border-custom-title/20">
                <CardHeader>
                  <step.icon className="w-12 h-12 text-custom-title mb-4" />
                  <CardTitle className="text-custom-title">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-custom-subtitle">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-custom-base">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-custom-title">OUR TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-custom-sub-base/50 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 border border-custom-title/20">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-custom-title">{member.name}</h3>
                  <p className="text-custom-subtitle font-medium mb-3">{member.role}</p>
                  <p className="text-custom-subtitle/80">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}