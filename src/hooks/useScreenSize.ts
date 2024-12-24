"use client"
import { useState, useEffect } from "react"

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"

const breakpoints: Record<Breakpoint, string> = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  "2xl": "1440px",
  "3xl": "1920px",
}

const useScreenSize = (): Breakpoint => {
  const [screenSize, setScreenSize] = useState<Breakpoint>(getCurrentSize())

  function getCurrentSize(): Breakpoint {
    const width = window.innerWidth
    if (width < parseInt(breakpoints.sm)) return "xs"
    if (width < parseInt(breakpoints.md)) return "sm"
    if (width < parseInt(breakpoints.lg)) return "md"
    if (width < parseInt(breakpoints.xl)) return "lg"
    if (width < parseInt(breakpoints["2xl"])) return "xl"
    if (width < parseInt(breakpoints["3xl"])) return "2xl"
    return "3xl"
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getCurrentSize())
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return screenSize
}

export default useScreenSize
