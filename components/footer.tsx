'use client'

import { usePathname } from 'next/navigation'
import { useAdminStore } from '@/lib/store'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  const pathname = usePathname()
  const { isAuthenticated, userRole } = useAdminStore()

  // Don't show footer on login page or for admin users
  if (
    pathname === '/admin/login' ||
    pathname === '/admin/forgot-password' ||
    !isAuthenticated ||
    userRole === 'admin'
  ) {
    return null
  }

  return (
    <footer className="bg-custom-base border-t border-custom-title/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-custom-title">About Us</h3>
            <p className="text-custom-subtitle">
              NexGen Electronics is your trusted partner for cutting-edge technology and innovative electronic solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-custom-title">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-custom-subtitle hover:text-custom-title transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-custom-title">Connect With Us</h3>
            <div className="flex space-x-4 text-custom-subtitle">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-custom-title transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-custom-title transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-custom-title transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-custom-title transition-colors" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-custom-title/20 text-center text-custom-subtitle">
          <p>&copy; {new Date().getFullYear()} NexGen Electronics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
