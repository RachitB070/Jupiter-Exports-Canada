"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, Recycle, TrendingUp, Truck, Award, Leaf, Droplets, Factory } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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

// Product data
const ferrousProducts = [
  {
    name: "Shred Metal",
    description: "Processed for its steel content, ideal for recycling and reuse in various industries.",
    image: "/shred-metal.jpeg",
  },
  {
    name: "Heavy Metal",
    description: "Ideal for industrial recycling, known for its durability and strength.",
    image: "/heavy-metal.webp",
  },
  {
    name: "Re Bars",
    description: "Essential materials for construction and demolition recycling.",
    image: "/re-bars.webp",
  },
  {
    name: "Auto Cast (Drum & Rotor)",
    description: "Key components in automotive recycling, providing valuable materials.",
    image: "/auto-cast.webp",
  },
  {
    name: "Cast Iron",
    description: "Known for its durability and versatility in various applications.",
    image: "/cast-iron.jpeg",
  },
]

const stainlessProducts = [
  {
    name: "Stainless Steel 304",
    description: "Known for its excellent corrosion resistance and wide range of applications.",
    image: "/stainless-steel-304.jpeg",
  },
  {
    name: "Stainless Steel 316",
    description: "Prized for its superior durability and resistance to harsh environments.",
    image: "/stainless-steel-316.jpeg",
  },
  {
    name: "Stainless Steel Turnings",
    description: "A byproduct of machining processes that is valuable for recycling.",
    image: "/stainless-steel-turnings.jpeg",
  },
]

const zincProducts = [
  {
    name: "Zinc Die Cast",
    description: "Highly valued for its strength, durability, and versatility in numerous applications.",
    image: "/zinc-die-cast.webp",
  },
]

const copperProducts = [
  {
    name: "Scrap with Copper Content",
    description: "Various materials containing valuable copper for recycling.",
    image: "/things-with-copper.jpeg",
  },
  {
    name: "House Wire",
    description: "Electrical wiring from residential buildings, valuable for its copper content.",
    image: "/house-wires.png",
  },
  {
    name: "Copper Turnings",
    description: "Copper shavings and turnings from machining processes.",
    image: "/copper-turnings.jpeg",
  },
]

const aluminumProducts = [
  {
    name: "Extrusion 6061",
    description: "Aluminum alloy commonly used in various applications due to its excellent properties.",
    image: "/extrusion-6061.webp",
  },
  {
    name: "Extrusion 6063",
    description: "Aluminum alloy ideal for architectural applications and recycling.",
    image: "/extrusion-6063.jpeg",
  },
  {
    name: "356 Car Rims",
    description: "Aluminum alloy wheels from vehicles, highly recyclable and valuable.",
    image: "/car-rims.png",
  },
  {
    name: "Litho Sheet",
    description: "Aluminum sheets used in lithographic printing, recyclable after use.",
    image: "/litho-sheets.png",
  },
]

const electricMotorProducts = [
  {
    name: "AC Motors",
    description: "Alternating current motors valued for their recyclable materials.",
    image: "/ac-motor.png",
  },
  {
    name: "DC Motors",
    description: "Direct current motors with valuable copper windings and other recyclable components.",
    image: "/dc-motors-scrap.jpeg",
  },
  {
    name: "Appliance Motors",
    description: "Motors from household appliances, recyclable for their metal content.",
    image: "/appliance-motor.jpeg",
  },
]

const brassProducts = [
  {
    name: "Yellow Brass",
    description: "Known for its versatility and high recycling value in various applications.",
    image: "/yellow-brass.png",
  },
  {
    name: "Brass Faucets",
    description: "Used plumbing fixtures made of brass, recyclable after processing.",
    image: "/brass-faucets.jpeg",
  },
  {
    name: "Brass Turnings",
    description: "Brass shavings and turnings from machining processes, recyclable.",
    image: "/brass-turnings.jpeg",
  },
]

const autoPartsProducts = [
  {
    name: "Alternators",
    description: "Valuable for their copper and aluminum content from vehicles.",
    image: "/car-alternators.png",
  },
  {
    name: "Starters",
    description: "Essential components that yield significant amounts of recyclable metals.",
    image: "/car-starter.jpeg",
  },
  {
    name: "Transmissions",
    description: "Known for their substantial aluminum and steel components.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Car Batteries",
    description: "Recyclable lead-acid batteries containing valuable lead, plastic, and acid components.",
    image: "/car-battery.jpeg",
  },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState("ferrous")

  // Function to scroll to products section
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div>
      {/* Hero Section - Made bigger and redesigned buttons */}
      <section className="relative py-32 overflow-hidden min-h-[80vh] flex items-center">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#d35400]/90 to-[#f39c12]/80 z-10"></div>
          <Image
            src="/global-shipping-bg.jpeg"
            alt="Global shipping and logistics"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Premium Scrap Metal Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
                Jupiter Exports Canada: Leading exporters of high-quality ferrous and non-ferrous scrap metal products
                to global markets.
              </p>
              <div className="flex flex-wrap gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="group relative bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#d35400] font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
                  asChild
                >
                  <Link href="/contact">
                    <span className="relative z-10">Contact Us</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="group relative bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#d35400] font-bold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
                  onClick={scrollToProducts}
                >
                  <span className="relative z-10">View Products</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeIn}>
                <Image
                  src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=800&auto=format&fit=crop"
                  alt="Scrap metal processing"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <h2 className="text-3xl font-bold mb-4 jupiter-text-gradient">About Jupiter Exports Canada</h2>
                <div className="w-20 h-1 bg-[#d35400] mb-6"></div>
                <p className="text-gray-700 mb-6">
                  With years of experience in the scrap metal industry, Jupiter Exports Canada has established itself as
                  a trusted name in the global market. We specialize in the export and trade of high-quality ferrous and
                  non-ferrous scrap metal products.
                </p>
                <p className="text-gray-700 mb-8">
                  Our commitment to quality, sustainability, and customer satisfaction has made us a preferred partner
                  for businesses worldwide. We ensure that all our products meet international standards and are
                  processed with the environment in mind.
                </p>
                <Button className="bg-[#d35400] hover:bg-[#e67e22]" asChild>
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 jupiter-text-gradient">Why Choose Jupiter Exports</h2>
            <div className="w-20 h-1 bg-[#d35400] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing high-quality products and exceptional service to our customers.
            </p>
          </div>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md h-full hover:shadow-lg transition-all duration-300 border-t-2 border-[#d35400] hover:border-t-4">
                  <div className="inline-flex items-center justify-center p-4 bg-[#d35400]/10 rounded-full mb-4">
                    <Award className="h-6 w-6 text-[#d35400]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Quality Assurance</h3>
                  <p className="text-gray-600 text-sm">
                    All our products undergo rigorous quality checks to ensure they meet international standards.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md h-full hover:shadow-lg transition-all duration-300 border-t-2 border-[#d35400] hover:border-t-4">
                  <div className="inline-flex items-center justify-center p-4 bg-[#d35400]/10 rounded-full mb-4">
                    <Recycle className="h-6 w-6 text-[#d35400]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Sustainable Practices</h3>
                  <p className="text-gray-600 text-sm">
                    We are committed to environmentally responsible recycling and processing methods.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md h-full hover:shadow-lg transition-all duration-300 border-t-2 border-[#d35400] hover:border-t-4">
                  <div className="inline-flex items-center justify-center p-4 bg-[#d35400]/10 rounded-full mb-4">
                    <TrendingUp className="h-6 w-6 text-[#d35400]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600 text-sm">
                    We offer competitive prices without compromising on the quality of our products.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-md h-full hover:shadow-lg transition-all duration-300 border-t-2 border-[#d35400] hover:border-t-4">
                  <div className="inline-flex items-center justify-center p-4 bg-[#d35400]/10 rounded-full mb-4">
                    <Truck className="h-6 w-6 text-[#d35400]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Global Shipping</h3>
                  <p className="text-gray-600 text-sm">
                    We provide reliable shipping services to customers worldwide with timely delivery.
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 jupiter-text-gradient">Our Products</h2>
            <div className="w-20 h-1 bg-[#d35400] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of high-quality ferrous and non-ferrous scrap metal products to meet your
              specific needs.
            </p>
          </div>

          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto pb-2">
              <TabsList className="h-auto p-1">
                <TabsTrigger value="ferrous" className="py-2 px-4">
                  Ferrous
                </TabsTrigger>
                <TabsTrigger value="stainless" className="py-2 px-4">
                  Stainless Steel
                </TabsTrigger>
                <TabsTrigger value="zinc" className="py-2 px-4">
                  Zinc Die Cast
                </TabsTrigger>
                <TabsTrigger value="copper" className="py-2 px-4">
                  Copper
                </TabsTrigger>
                <TabsTrigger value="aluminum" className="py-2 px-4">
                  Aluminum
                </TabsTrigger>
                <TabsTrigger value="electric-motor" className="py-2 px-4">
                  Electric Motor
                </TabsTrigger>
                <TabsTrigger value="brass" className="py-2 px-4">
                  Brass
                </TabsTrigger>
                <TabsTrigger value="auto-parts" className="py-2 px-4">
                  Auto Parts
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="mt-6">
              <TabsContent value="ferrous" className="mt-0">
                <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">Ferrous Metals</h3>
                  <p className="text-gray-700">
                    We provide extensive export and trade services for ferrous scrap metal products, catering to various
                    recycling needs. Our ferrous metals are known for their high quality and reliability.
                  </p>
                </div>

                <AnimatedSection>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {ferrousProducts.map((product, index) => (
                      <motion.div key={index} variants={fadeIn}>
                        <Card className="h-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 jupiter-shadow">
                          <div className="relative h-52 overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-bold text-base mb-1">{product.name}</h4>
                            <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="stainless" className="mt-0">
                <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">Stainless Steel</h3>
                  <p className="text-gray-700">
                    We market a diverse variety of stainless steel scrap metal including various grades known for their
                    excellent corrosion resistance and durability.
                  </p>
                </div>

                <AnimatedSection>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {stainlessProducts.map((product, index) => (
                      <motion.div key={index} variants={fadeIn}>
                        <Card className="h-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 jupiter-shadow">
                          <div className="relative h-52 overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-bold text-base mb-1">{product.name}</h4>
                            <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="zinc" className="mt-0">
                <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">Zinc Die Cast</h3>
                  <p className="text-gray-700">
                    We buy and sell a wide range of zinc die cast scrap metal products, catering to a variety of
                    recycling needs. Zinc die cast is highly valued for its strength and durability.
                  </p>
                </div>

                <AnimatedSection>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {zincProducts.map((product, index) => (
                      <motion.div key={index} variants={fadeIn}>
                        <Card className="h-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 jupiter-shadow">
                          <div className="relative h-52 overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-bold text-base mb-1">{product.name}</h4>
                            <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="copper" className="mt-0">
                <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">Copper</h3>
                  <p className="text-gray-700">
                    Copper scrap that we trade includes a variety of types such as Insulated Wire, House Wire, and
                    various grades of copper. Our copper products are highly sought after for their quality and purity.
                  </p>
                </div>

                <AnimatedSection>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {copperProducts.slice(0, 6).map((product, index) => (
                      <motion.div key={index} variants={fadeIn}>
                        <Card className="h-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 jupiter-shadow">
                          <div className="relative h-52 overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-bold text-base mb-1">{product.name}</h4>
                            <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {copperProducts.slice(6).map((product, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-md shadow-sm">
                        <h4 className="font-bold text-sm">{product.name}</h4>
                        <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="aluminum" className="mt-0">
                <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">Aluminum</h3>
                  <p className="text-gray-700">
                    Aluminum scrap metal products include a comprehensive range for various applications including
                    Extrusion 6061, 6063, Car Rims, and more. Our aluminum products are highly recyclable.
                  </p>
                </div>

                <AnimatedSection>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {aluminumProducts.slice(0, 6).map((product, index) => (
                      <motion.div key={index} variants={fadeIn}>
                        <Card className="h-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 jupiter-shadow">
                          <div className="relative h-52 overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-bold text-base mb-1">{product.name}</h4>
                            <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {aluminumProducts.slice(6).map((product, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-md shadow-sm">
                        <h4 className="font-bold text-sm">{product.name}</h4>
                        <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="electric-motor" className="mt-0">
                <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">Electric Motor</h3>
                  <p className="text-gray-700">
                    Our range of electric motor scrap metal products is designed to meet diverse recycling needs. We
                    offer various types of electric motors, valued for their recyclable materials.
                  </p>
                </div>

                <AnimatedSection>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {electricMotorProducts.map((product, index) => (
                      <motion.div key={index} variants={fadeIn}>
                        <Card className="h-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 jupiter-shadow">
                          <div className="relative h-52 overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-bold text-base mb-1">{product.name}</h4>
                            <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="brass" className="mt-0">
                <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">Brass</h3>
                  <p className="text-gray-700">
                    We deal in high-quality brass scrap metal products such as Yellow Brass, Brass Faucets, and more.
                    Our brass products are known for their versatility and high recycling value.
                  </p>
                </div>

                <AnimatedSection>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {brassProducts.map((product, index) => (
                      <motion.div key={index} variants={fadeIn}>
                        <Card className="h-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 jupiter-shadow">
                          <div className="relative h-52 overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-bold text-base mb-1">{product.name}</h4>
                            <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              </TabsContent>

              <TabsContent value="auto-parts" className="mt-0">
                <div className="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
                  <h3 className="text-2xl font-bold mb-2">Auto Parts</h3>
                  <p className="text-gray-700">
                    We provide comprehensive export and trade services for a wide range of scrap auto parts. Our
                    offerings include Alternators, Starters, Transmissions, and Car Batteries.
                  </p>
                </div>

                <AnimatedSection>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {autoPartsProducts.map((product, index) => (
                      <motion.div key={index} variants={fadeIn}>
                        <Card className="h-full overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 jupiter-shadow">
                          <div className="relative h-52 overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-bold text-base mb-1">{product.name}</h4>
                            <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </AnimatedSection>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 jupiter-text-gradient">Our Commitment to Sustainability</h2>
            <div className="w-20 h-1 bg-[#d35400] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Building a greener future through responsible recycling practices
            </p>
          </div>

          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <motion.div variants={fadeIn}>
                <h3 className="text-2xl font-bold mb-4">Our Approach to Sustainability</h3>
                <p className="text-gray-700 mb-4">
                  At Jupiter Exports Canada, sustainability is at the core of everything we do. We believe that
                  responsible recycling of scrap metal is not just good for business, but essential for the health of
                  our planet and future generations.
                </p>
                <p className="text-gray-700">
                  Our commitment to sustainability extends beyond mere compliance with environmental regulations. We
                  actively seek to minimize our environmental footprint through innovative processes, energy-efficient
                  operations, and waste reduction strategies.
                </p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <Image
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop"
                  alt="Sustainable Recycling"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm h-full">
                  <div className="inline-flex items-center justify-center p-3 bg-[#d35400]/10 rounded-full mb-3">
                    <Recycle className="h-5 w-5 text-[#d35400]" />
                  </div>
                  <h3 className="text-base font-bold mb-2">Reduces Landfill Waste</h3>
                  <p className="text-gray-700 text-sm">
                    Recycling scrap metal diverts materials from landfills, conserving valuable space.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm h-full">
                  <div className="inline-flex items-center justify-center p-3 bg-[#d35400]/10 rounded-full mb-3">
                    <Factory className="h-5 w-5 text-[#d35400]" />
                  </div>
                  <h3 className="text-base font-bold mb-2">Reduces Mining Impact</h3>
                  <p className="text-gray-700 text-sm">
                    By recycling metals, we reduce the need for mining raw materials.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm h-full">
                  <div className="inline-flex items-center justify-center p-3 bg-[#d35400]/10 rounded-full mb-3">
                    <Leaf className="h-5 w-5 text-[#d35400]" />
                  </div>
                  <h3 className="text-base font-bold mb-2">Saves Energy</h3>
                  <p className="text-gray-700 text-sm">
                    Recycling metals requires significantly less energy than producing from raw materials.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm h-full">
                  <div className="inline-flex items-center justify-center p-3 bg-[#d35400]/10 rounded-full mb-3">
                    <Droplets className="h-5 w-5 text-[#d35400]" />
                  </div>
                  <h3 className="text-base font-bold mb-2">Reduces Pollution</h3>
                  <p className="text-gray-700 text-sm">
                    Metal recycling produces less air and water pollution compared to mining.
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sustainability Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 jupiter-text-gradient">Our Impact</h2>
            <div className="w-20 h-1 bg-[#d35400] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Through our sustainable practices, we have made a significant positive impact on the environment.
            </p>
          </div>

          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full border-t-4 border-[#d35400] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-3xl font-bold text-[#d35400] mb-2">10K+</h3>
                  <p className="text-lg font-semibold mb-1">Tons Recycled</p>
                  <p className="text-gray-600 text-sm">Annually, reducing virgin material needs.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full border-t-4 border-[#d35400] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-3xl font-bold text-[#d35400] mb-2">75%</h3>
                  <p className="text-lg font-semibold mb-1">Energy Savings</p>
                  <p className="text-gray-600 text-sm">Compared to raw material production.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full border-t-4 border-[#d35400] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-3xl font-bold text-[#d35400] mb-2">5K+</h3>
                  <p className="text-lg font-semibold mb-1">Trees Planted</p>
                  <p className="text-gray-600 text-sm">Through our reforestation initiatives.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="text-center">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-full border-t-4 border-[#d35400] hover:shadow-lg transition-all duration-300">
                  <h3 className="text-3xl font-bold text-[#d35400] mb-2">30%</h3>
                  <p className="text-lg font-semibold mb-1">Carbon Reduction</p>
                  <p className="text-gray-600 text-sm">Through sustainable operations.</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 jupiter-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your scrap metal needs and get a competitive quote.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
