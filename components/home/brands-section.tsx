"use client"

import Image from "next/image"

export const brands = [
  { name: 'Apple', logo: "/images/brands/Apple.svg" },
  { name: 'Samsung', logo: "/images/brands/Samsung.svg" },
  { name: 'Sony', logo: "/images/brands/Sony.svg" },
  { name: 'Miscrosoft', logo: "/images/brands/Microsoft.svg" },
  { name: 'Meta', logo: "/images/brands/Meta.svg" },
]

export default function BrandsSection() {
  return (
    <div className="bg-custom-sub-base">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-between py-8 sm:px-4 xl:px-0 gap-10">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="relative w-[160px] h-[60px] lg:w-[200px] lg:h-[70px] transition-all duration-300 transform hover:scale-110 brightness-0 invert opacity-70 hover:opacity-100"
          >
            <Image
              priority
              src={brand.logo}
              alt={brand.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
