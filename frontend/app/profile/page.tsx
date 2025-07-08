"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  User,
  Trophy,
  Target,
  Clock,
  BookOpen,
  Volume2,
  ImageIcon,
  Mic,
  Star,
  Calendar,
  Settings,
  Award,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  const moduleProgress = [
    { name: "Visualize Text", icon: ImageIcon, progress: 75, color: "bg-blue-500" },
    { name: "SoundSteps", icon: Volume2, progress: 60, color: "bg-green-500" },
    { name: "Reading Companion", icon: BookOpen, progress: 90, color: "bg-purple-500" },
    { name: "Speech Notes", icon: Mic, progress: 45, color: "bg-orange-500" },
  ]

  const achievements = [
    { title: "First Steps", description: "Completed your first lesson", icon: Star, earned: true },
    { title: "Reading Master", description: "Read 10 texts with Reading Companion", icon: BookOpen, earned: true },
    { title: "Sound Explorer", description: "Mastered 5 phonics sounds", icon: Volume2, earned: true },
    { title: "Voice Champion", description: "Created 20 speech notes", icon: Mic, earned: false },
    { title: "Visual Learner", description: "Generated 50 text visualizations", icon: ImageIcon, earned: false },
    { title: "Consistency King", description: "Used ReadEase for 7 days straight", icon: Calendar, earned: false },
  ]

  const recentActivity = [
    { activity: "Completed SoundSteps Level 3", time: "2 hours ago", icon: Volume2 },
    { activity: "Created speech notes for Math homework", time: "Yesterday", icon: Mic },
    { activity: "Used Reading Companion for Science article", time: "2 days ago", icon: BookOpen },
    { activity: "Generated visuals for History lesson", time: "3 days ago", icon: ImageIcon },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-gray-900">My Profile</span>
              </div>
            </div>
            <Link href="/settings">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/placeholder.svg" alt="Profile" />
                <AvatarFallback className="text-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                  JD
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Jamie Davis</h1>
                <p className="text-gray-600 mb-4">Learning since March 2024</p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  <Badge className="bg-green-100 text-green-700">Active Learner</Badge>
                  <Badge className="bg-blue-100 text-blue-700">Reading Champion</Badge>
                  <Badge className="bg-purple-100 text-purple-700">Sound Explorer</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">127</div>
                    <div className="text-sm text-gray-600">Total Sessions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">45</div>
                    <div className="text-sm text-gray-600">Hours Learned</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">8</div>
                    <div className="text-sm text-gray-600">Achievements</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
          <Button
            variant={activeTab === "overview" ? "default" : "ghost"}
            onClick={() => setActiveTab("overview")}
            className="flex-1"
          >
            Overview
          </Button>
          <Button
            variant={activeTab === "progress" ? "default" : "ghost"}
            onClick={() => setActiveTab("progress")}
            className="flex-1"
          >
            Progress
          </Button>
          <Button
            variant={activeTab === "achievements" ? "default" : "ghost"}
            onClick={() => setActiveTab("achievements")}
            className="flex-1"
          >
            Achievements
          </Button>
          <Button
            variant={activeTab === "activity" ? "default" : "ghost"}
            onClick={() => setActiveTab("activity")}
            className="flex-1"
          >
            Activity
          </Button>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-indigo-600" />
                  <span>Today's Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Daily Goal</span>
                  <span className="text-sm text-gray-600">3 of 5 activities</span>
                </div>
                <Progress value={60} className="h-3" />

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-blue-600">25m</div>
                    <div className="text-xs text-gray-600">Time Today</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <Trophy className="w-6 h-6 text-green-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-green-600">3</div>
                    <div className="text-xs text-gray-600">Tasks Done</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Module Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Module Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {moduleProgress.map((module, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <module.icon className="w-4 h-4 text-gray-600" />
                        <span className="text-sm font-medium">{module.name}</span>
                      </div>
                      <span className="text-sm text-gray-600">{module.progress}%</span>
                    </div>
                    <Progress value={module.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "progress" && (
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {moduleProgress.map((module, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={`w-16 h-16 ${module.color.replace("bg-", "bg-").replace("-500", "-100")} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <module.icon className={`w-8 h-8 ${module.color.replace("bg-", "text-")}`} />
                      </div>
                      <h3 className="font-medium mb-2">{module.name}</h3>
                      <div className="space-y-2">
                        <Progress value={module.progress} className="h-2" />
                        <p className="text-sm text-gray-600">{module.progress}% Complete</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xs text-gray-600 mb-2">{day}</div>
                      <div className={`h-8 rounded ${index < 5 ? "bg-green-200" : "bg-gray-100"}`}></div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Great job! You've been active 5 out of 7 days this week.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "achievements" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`${achievement.earned ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200" : "bg-gray-50"}`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      achievement.earned ? "bg-yellow-100 text-yellow-600" : "bg-gray-200 text-gray-400"
                    }`}
                  >
                    <achievement.icon className="w-8 h-8" />
                  </div>
                  <h3 className={`font-semibold mb-2 ${achievement.earned ? "text-gray-900" : "text-gray-500"}`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${achievement.earned ? "text-gray-600" : "text-gray-400"}`}>
                    {achievement.description}
                  </p>
                  {achievement.earned && (
                    <Badge className="mt-3 bg-yellow-100 text-yellow-700">
                      <Award className="w-3 h-3 mr-1" />
                      Earned
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "activity" && (
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{item.activity}</p>
                      <p className="text-sm text-gray-600">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
