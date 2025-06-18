import Link from "next/link"
import Image from "next/image"
import {Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-12 w-12">
                <Image src="/jupiter-logo-new.png" alt="Jupiter Exports Canada Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-[#f39c12]">Jupiter</span>
                <span className="text-sm text-gray-300">Exports Canada</span>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Leading exporters of ferrous and non-ferrous scrap metal products, committed to sustainable recycling
              solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#f39c12] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#f39c12] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-[#f39c12] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#sustainability" className="text-gray-400 hover:text-[#f39c12] transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#f39c12] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#f39c12] shrink-0" />
                <span className="text-gray-400">+1 (647) 861-4000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#f39c12] shrink-0" />
                <span className="text-gray-400">info@jupiterexportscanada.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Jupiter Exports Canada. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
