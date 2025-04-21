"use client"

import { Truck, Shield, Zap } from 'lucide-react'

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over Rp 1.000.000" },
  { icon: Shield, title: "2 Year Warranty", desc: "On all products" },
  { icon: Zap, title: "Fast Delivery", desc: "Express shipping available" }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-custom-sub-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-custom-base rounded-2xl border border-custom-title/20 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              <feature.icon className="w-12 h-12 text-custom-title mb-4" aria-hidden="true" />
              <h2 className="text-lg md:text-xl font-semibold text-custom-title mb-2">
                {feature.title}
              </h2>
              <p className="text-sm text-custom-subtitle max-w-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
