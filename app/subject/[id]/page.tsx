'use client'
import React from 'react'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowLeft, BookOpen, Calculator, Atom, Globe, Clock, BarChart, ChevronDown } from 'lucide-react'
import subjects from '@/lib/fakeData'
import { lessonsData } from '@/lib/fakeData'



  // Add literature and geography lessons following the same structure...


function SubjectPage() {
  const router = useRouter()
  const subjectId  = useParams()
  console.log(useParams())

  const [completedLessons, setCompletedLessons] = useState<string[]>([])

  const subject = subjects.find(subjecte => subjecte.id === subjectId.id)|| subjects[0]
  
  console.log(subject)
  const lessons = lessonsData[subjectId.id as keyof typeof lessonsData] || []

  const handleLessonToggle = (lessonId: string) => {
    setCompletedLessons(prev =>
      prev.includes(lessonId)
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    )
  }

  const progress = (completedLessons.length / lessons.length) * 100

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'text-green-500'
      case 'intermediate': return 'text-yellow-500'
      case 'advanced': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">{subject.name}</h1>
            <div className="flex items-center space-x-4">
              <subject.icon className={`h-8 w-8 ${subject.color}`} />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/dashboard" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
          <Card>
            <CardHeader>
              <CardTitle>Course Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="h-4 mb-2" />
              <p className="text-sm text-gray-600">{progress.toFixed(0)}% complete ({completedLessons.length} of {lessons.length} lessons)</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Lessons</h2>
        <div className="space-y-4">
          {lessons.map((lesson) => (
            <Accordion type="single" collapsible key={lesson.id}>
              <AccordionItem value={lesson.id}>
                <AccordionTrigger>
                  <Card className="w-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Checkbox
                          id={lesson.id}
                          checked={completedLessons.includes(lesson.id)}
                          onCheckedChange={() => handleLessonToggle(lesson.id)}
                          className="mt-1"
                        />
                        <div className="flex-grow">
                          <label
                            htmlFor={lesson.id}
                            className="block text-lg font-semibold mb-2 cursor-pointer"
                          >
                            {lesson.title}
                          </label>
                          <div className="flex items-center text-sm text-gray-500 space-x-4">
                            <span className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {lesson.duration}
                            </span>
                            <span className={`flex items-center ${getDifficultyColor(lesson.difficulty)}`}>
                              <BarChart className="h-4 w-4 mr-1" />
                              {lesson.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="mt-4 p-4 bg-white rounded-lg shadow">
                    <h3 className="text-lg font-semibold mb-2">Introduction</h3>
                    <p className="mb-4">{lesson.introduction}</p>
                    
                    <h3 className="text-lg font-semibold mb-2">Exercises</h3>
                    <ul className="list-disc pl-5 mb-4">
                      {lesson.exercises.map((exercise, index) => (
                        <li key={index}>{exercise}</li>
                      ))}
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-2">Resources</h3>
                    <ul className="list-disc pl-5">
                      {lesson.resources.map((resource, index) => (
                        <li key={index}>
                          <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {resource.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="mt-8">
          <Button onClick={() => {
            console.log('Completed lessons:', completedLessons)
            router.push('/dashboard')
          }}>
            Save Progress
          </Button>
        </div>
      </main>
    </div>
  )
}



export default SubjectPage
