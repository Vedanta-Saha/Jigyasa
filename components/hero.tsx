"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import "@/styles/globals.css"


export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section className="main w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                 Jigyasa
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                A modern starter template with everything you need to get started quickly. Responsive design,
                animations, and more.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="bg-cyan-500">Get Started</Button>
              </Link>
              <Link href="/#features">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
          >
            <div className="h-full w-full bg-gradient-to-br from-cyan-500/40 to-black rounded-xl flex items-center justify-center">
              <div className="bg-background/70 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-border ">
              <h3 className="text-xl font-bold">HawkTuah Starter</h3>
              <p className="text-muted-foreground">Ready for production</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

