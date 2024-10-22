'use client'

import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Calculator, Atom, Globe, GraduationCap } from "lucide-react"

const subjects = [
  { id: 'math', name: 'Mathematics', icon: Calculator, color: 'text-blue-500', progress: 30, totalLessons: 10 },
  { id: 'science', name: 'Science', icon: Atom, color: 'text-green-500', progress: 40, totalLessons: 12 },
  { id: 'literature', name: 'Literature', icon: BookOpen, color: 'text-yellow-500', progress: 20, totalLessons: 8 },
  { id: 'geography', name: 'Geography', icon: Globe, color: 'text-purple-500', progress: 40, totalLessons: 6 },
]

function page() {
  const totalProgress = subjects.reduce((acc, subject) => acc + subject.progress, 0) / subjects.length

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
            <div className="flex items-center space-x-4">
              <GraduationCap className="h-8 w-8 text-blue-500" />
              <div>
                <p className="text-sm font-medium text-gray-500">Welcome back,</p>
                <p className="text-lg font-semibold text-gray-900">John Doe</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Overall Progress</h2>
          <Progress value={totalProgress} className="h-4 w-full" />
          <p className="mt-2 text-sm text-gray-600">{totalProgress.toFixed(0)}% of all lessons completed</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Subjects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {subjects.map((subject) => (
            <Link href={`/subject/${subject.id}`} key={subject.id} className="block group">
              <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                    {subject.name}
                  </CardTitle>
                  <subject.icon className={`h-6 w-6 ${subject.color}`} />
                </CardHeader>
                <CardContent>
                  <Progress value={subject.progress} className="h-2 mb-2" />
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">{subject.progress}% complete</span>
                    <span className="text-gray-500">{Math.round(subject.progress / 100 * subject.totalLessons)} / {subject.totalLessons} lessons</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default page