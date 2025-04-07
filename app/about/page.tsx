import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"
import About from "@/components/about"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Usss</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn more about our company and our mission
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <About />

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground">
                  To create the most developer-friendly and efficient web development tools that empower creators to
                  build the next generation of web applications.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Values</h3>
                <p className="text-muted-foreground">
                  We believe in open source, community collaboration, and creating tools that prioritize developer
                  experience without compromising on performance.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Our Team</h3>
                <p className="text-muted-foreground">
                  A passionate group of developers and designers dedicated to pushing the boundaries of what's possible
                  on the web.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

