"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { PlusCircle, BookOpen, Calendar, Clock, Award, BarChart3, Settings } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Dashboard() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const recentQuizzes = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      date: "April 2, 2025",
      questions: 15,
      completions: 24,
    },
    {
      id: 2,
      title: "JavaScript Essentials",
      date: "April 1, 2025",
      questions: 20,
      completions: 18,
    },
    {
      id: 3,
      title: "React Basics",
      date: "March 28, 2025",
      questions: 12,
      completions: 32,
    },
    {
      id: 4,
      title: "CSS Mastery",
      date: "March 25, 2025",
      questions: 18,
      completions: 15,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navbar */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Jigyasa</h1>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-cyan-500 hover:text-cyan-400 transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
              Features
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <img
                src="../../public/bg.jpghelo.jpg"
                alt="Logo"
                className="h-10 w-10 rounded-full border border-gray-700"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Welcome to Your Jigyasa Dashboard</h2>
          <p className="text-gray-400">Create and manage your quizzes with ease</p>
        </motion.div>

        {/* Create Quiz Button */}
        <Dialog>
          <DialogTrigger asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-12 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Create a New Quiz</h3>
                  <p className="text-gray-400 max-w-md">
                    Design your own quiz with custom questions and share it with your audience
                  </p>
                  <Button className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-white">
                    <PlusCircle className="mr-2 h-4 w-4" /> Create Quiz
                  </Button>
                </div>
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 bg-cyan-500 bg-opacity-20 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 bg-cyan-500 bg-opacity-10 rounded-full animate-pulse animation-delay-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="h-20 w-20 text-cyan-500" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-gray-900 text-gray-100 border-gray-800">
            <DialogHeader>
              <DialogTitle className="text-xl">Create New Quiz</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="quiz-name">Quiz Name</Label>
                <Input id="quiz-name" placeholder="Enter quiz name" className="bg-gray-800 border-gray-700" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="quiz-date">Quiz Date</Label>
                <Input id="quiz-date" type="date" className="bg-gray-800 border-gray-700" />
              </div>
            </div>
            <div className="flex justify-end">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Create Quiz</Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Recent Quizzes */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-6">Recent Quizzes</h3>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {recentQuizzes.map((quiz) => (
              <motion.div key={quiz.id} variants={item}>
                <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                  <CardHeader>
                    <CardTitle className="text-cyan-500">{quiz.title}</CardTitle>
                    <CardDescription className="text-gray-400 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" /> {quiz.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-gray-400 mb-2">
                      <Award className="h-4 w-4 mr-2" />
                      <span>{quiz.questions} Questions</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      <span>{quiz.completions} Completions</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-300">
                      <Settings className="h-4 w-4 mr-1" /> Edit
                    </Button>
                    <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                      View Results
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Quizzes</CardTitle>
              <BookOpen className="h-4 w-4 text-cyan-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-gray-400">+2 from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
              <Clock className="h-4 w-4 text-cyan-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">248</div>
              <p className="text-xs text-gray-400">+18% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg. Completion Rate</CardTitle>
              <Award className="h-4 w-4 text-cyan-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86%</div>
              <p className="text-xs text-gray-400">+2% from last month</p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}

