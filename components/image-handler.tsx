"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface ImageHandlerProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
  priority?: boolean
}

export default function ImageHandler({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
}: ImageHandlerProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  const handleError = () => {
    // Fallback to placeholder if image fails to load
    setImgSrc("/placeholder.svg")
  }

  const handleLoad = () => {
    setImgLoaded(true)
  }

  return (
    <div className={`relative ${fill ? "w-full h-full" : ""} ${!imgLoaded ? "bg-gray-200 animate-pulse" : ""}`}>
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={className}
        fill={fill}
        priority={priority}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  )
}
