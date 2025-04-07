"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Layers, Zap, Smartphone, PaintBucket, Code, Lock } from "lucide-react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const features = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Component-Based",
      description: "Build your UI with reusable components that can be easily combined.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Performance",
      description: "Optimized for speed with server-side rendering and static generation.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Responsive Design",
      description: "Looks great on any device with a mobile-first responsive layout.",
    },
    {
      icon: <PaintBucket className="h-6 w-6" />,
      title: "Customizable",
      description: "Easily customize the design to match your brand with Tailwind CSS.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Developer Experience",
      description: "Great developer experience with hot reloading and TypeScript support.",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Authentication Ready",
      description: "Ready-to-use authentication components for sign in and sign up.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to build modern web applications
            </p>
          </motion.div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex flex-col items-center space-y-2 rounded-lg border p-6 bg-card shadow-sm"
              >
                <div className="p-2 rounded-full bg-primary/20 text-primary">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

