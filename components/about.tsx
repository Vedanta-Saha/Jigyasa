"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div ref={ref} className="container px-4 md:px-6">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Learn more about our mission and what drives us
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground">
              We're dedicated to providing developers with the best tools and resources to build amazing web
              applications. Our starter template is designed to help you get up and running quickly with all the
              features you need.
            </p>
            <p className="text-muted-foreground">
              With a focus on performance, accessibility, and developer experience, we've created a foundation that you
              can build upon to create something truly special.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>Modern technology stack</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>Best practices built-in</span>
              </div>
              <div className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
                <span>Community-driven development</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto overflow-hidden rounded-xl"
          >
            <div className="aspect-video w-full bg-gradient-to-tr from-primary/20 via-background/50 to-muted rounded-xl flex items-center justify-center border border-border">
              <div className="text-center p-8">
                <h4 className="text-xl font-bold mb-2">Founded in 2023</h4>
                <p className="text-muted-foreground">Building the future of web development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

