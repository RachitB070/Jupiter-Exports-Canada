"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"
import { CheckCircle, Users, Globe, TrendingUp } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={staggerContainer}>
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#d35400]/90 to-[#f39c12]/80 z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1920&auto=format&fit=crop"
            alt="About Jupiter Exports"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Jupiter Exports Canada</h1>
            <p className="text-xl md:text-2xl text-gray-200">Your trusted partner in the global scrap metal industry</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Jupiter Exports Canada was founded with a vision to become a leading exporter of high-quality scrap
                  metal products to global markets. What started as a small operation has now grown into a trusted name
                  in the industry, known for our commitment to quality, reliability, and customer satisfaction.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the years, we have expanded our product range and established strong relationships with suppliers
                  and customers worldwide. Our team of experienced professionals works tirelessly to ensure that we
                  deliver the best products and services to our clients.
                </p>
                <p className="text-gray-700">
                  Today, Jupiter Exports Canada stands as a symbol of excellence in the scrap metal industry, continuing
                  to grow and adapt to the changing needs of the market while maintaining our core values of integrity,
                  quality, and sustainability.
                </p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
                  alt="Jupiter Exports Canada Story"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w2xl mx-auto">
              Guided by our core values, we strive to make a positive impact in the scrap metal industry.
            </p>
          </div>

          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-gray-700 mb-6">
                  To provide high-quality scrap metal products to global markets while promoting sustainable recycling
                  practices and contributing to a circular economy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Deliver premium quality products that meet international standards
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Establish long-term relationships with our customers based on trust and reliability
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Implement environmentally responsible practices in all our operations
                    </span>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-gray-700 mb-6">
                  To be recognized as the leading exporter of scrap metal products, known for our commitment to quality,
                  innovation, and environmental stewardship.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Expand our global presence and become the preferred partner for businesses worldwide
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">Continuously improve our processes and adopt new technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Lead the industry in sustainable practices and environmental responsibility
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide our decisions and actions every day.
            </p>
          </div>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md h-full border-t-2 border-[#d35400] hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center p-4 bg-[#d35400]/10 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-[#d35400]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality</h3>
                  <p className="text-gray-700">
                    We are committed to providing the highest quality products that meet or exceed industry standards.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md h-full border-t-2 border-[#d35400] hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center p-4 bg-[#d35400]/10 rounded-full mb-4">
                    <Users className="h-8 w-8 text-[#d35400]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Integrity</h3>
                  <p className="text-gray-700">
                    We conduct our business with honesty, transparency, and ethical practices in all our dealings.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md h-full border-t-2 border-[#d35400] hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center p-4 bg-[#d35400]/10 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-[#d35400]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                  <p className="text-gray-700">
                    We are dedicated to environmentally responsible practices that contribute to a sustainable future.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md h-full border-t-2 border-[#d35400] hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center p-4 bg-[#d35400]/10 rounded-full mb-4">
                    <TrendingUp className="h-8 w-8 text-[#d35400]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-700">
                    We continuously seek to improve our processes and adopt new technologies to better serve our
                    customers.
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
