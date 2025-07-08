"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Headphones,
  Volume2,
  Play,
  Pause,
  RotateCcw,
  Star,
  Trophy,
  Target,
  Zap,
  Brain,
  Heart,
  Award,
  TrendingUp,
  Music,
  Mic,
  Speaker,
  Waves,
  Activity,
} from "lucide-react"
import Link from "next/link"

export default function SoundStepsPage() {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [currentSound, setCurrentSound] = useState("A")
  const [isPlaying, setIsPlaying] = useState(false)
  const [score, setScore] = useState(1247)
  const [progress, setProgress] = useState(68)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)
  const [streak, setStreak] = useState(12)
  const [audioWaveform, setAudioWaveform] = useState<number[]>([])
  const [isListening, setIsListening] = useState(false)
  const waveformRef = useRef<HTMLCanvasElement>(null)

  const phonicsData = {
    A: {
      sound: "/eɪ/",
      words: ["Apple", "Ant", "Airplane", "Amazing"],
      correctAnswer: "Apple",
      options: ["Apple", "Banana", "Cat", "Dog"],
      difficulty: "Beginner",
      points: 100,
    },
    B: {
      sound: "/biː/",
      words: ["Ball", "Bee", "Butterfly", "Beautiful"],
      correctAnswer: "Ball",
      options: ["Apple", "Ball", "Cat", "Dog"],
      difficulty: "Beginner",
      points: 100,
    },
    C: {
      sound: "/siː/",
      words: ["Cat", "Car", "Cookie", "Colorful"],
      correctAnswer: "Cat",
      options: ["Apple", "Ball", "Cat", "Dog"],
      difficulty: "Intermediate",
      points: 150,
    },
  }

  // Generate audio waveform animation
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setAudioWaveform(Array.from({ length: 20 }, () => Math.random() * 100))
      }, 100)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const handlePlaySound = () => {
    setIsPlaying(true)
    setIsListening(true)
    setTimeout(() => {
      setIsPlaying(false)
      setIsListening(false)
    }, 2000)
  }

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
    setShowFeedback(true)

    if (answer === phonicsData[currentSound as keyof typeof phonicsData].correctAnswer) {
      setScore(score + phonicsData[currentSound as keyof typeof phonicsData].points)
      setStreak(streak + 1)
      setTimeout(() => {
        setShowFeedback(false)
        setSelectedAnswer("")
      }, 2000)
    } else {
      setStreak(0)
      setTimeout(() => {
        setShowFeedback(false)
        setSelectedAnswer("")
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">SoundSteps</h1>
                  <p className="text-sm text-green-600">Immersive Phonics Adventure</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-50 text-green-700 border border-green-200">Level {currentLevel}</Badge>
              <div className="flex items-center space-x-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2">
                <Trophy className="w-4 h-4 text-yellow-600" />
                <span className="font-bold text-yellow-700">{score.toLocaleString()}</span>
              </div>
              <div className="flex items-center space-x-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-orange-600" />
                <span className="font-bold text-orange-700">{streak}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Progress Dashboard */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{progress}%</div>
              <div className="text-sm text-gray-600">Overall Progress</div>
              <Progress value={progress} className="h-2 mt-3" />
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{score.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total Score</div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{streak}</div>
              <div className="text-sm text-gray-600">Current Streak</div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">A+</div>
              <div className="text-sm text-gray-600">Performance</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Interactive Sound Practice */}
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900">
                <Volume2 className="w-5 h-5 text-green-500" />
                <span>Neural Audio Learning</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 3D Sound Visualizer */}
              <div className="bg-green-50 border border-green-200 rounded-3xl p-8">
                <div className="text-center mb-6">
                  <div className="text-8xl font-black text-gray-900 mb-4 relative">{currentSound}</div>
                  <div className="text-3xl text-green-600 mb-6 font-mono">
                    {phonicsData[currentSound as keyof typeof phonicsData].sound}
                  </div>

                  {/* Audio Waveform Visualization */}
                  <div className="flex items-center justify-center space-x-1 h-16 mb-6">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-green-500 rounded-full transition-all duration-100"
                        style={{
                          height: isPlaying ? `${audioWaveform[i] || Math.random() * 60 + 10}%` : "20%",
                        }}
                      />
                    ))}
                  </div>

                  <Button
                    onClick={handlePlaySound}
                    size="lg"
                    className={`${
                      isPlaying ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
                    } text-white px-12 py-6 text-lg font-semibold shadow-lg`}
                    disabled={isPlaying}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-6 h-6 mr-3" />
                        Playing...
                      </>
                    ) : (
                      <>
                        <Play className="w-6 h-6 mr-3" />
                        Play Sound
                      </>
                    )}
                  </Button>
                </div>

                {/* Sound Controls */}
                <div className="flex justify-center space-x-3">
                  {["A", "B", "C"].map((sound) => (
                    <Button
                      key={sound}
                      variant={currentSound === sound ? "default" : "outline"}
                      size="lg"
                      onClick={() => setCurrentSound(sound)}
                      className={`w-16 h-16 rounded-full text-xl font-bold ${
                        currentSound === sound
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "border-gray-300 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {sound}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Difficulty & Points */}
              <div className="flex items-center justify-between">
                <Badge className="bg-purple-50 text-purple-700 border border-purple-200 px-4 py-2">
                  {phonicsData[currentSound as keyof typeof phonicsData].difficulty}
                </Badge>
                <div className="flex items-center space-x-2 text-yellow-600">
                  <Star className="w-5 h-5" />
                  <span className="font-bold">
                    +{phonicsData[currentSound as keyof typeof phonicsData].points} points
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Answer Selection */}
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900">
                <Target className="w-5 h-5 text-blue-500" />
                <span>Smart Recognition Challenge</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center mb-6">
                <p className="text-lg text-gray-700 mb-4">
                  Which word starts with the <span className="text-green-600 font-bold">"{currentSound}"</span> sound?
                </p>
                <div className="text-sm text-gray-500">Listen carefully and choose the correct answer</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {phonicsData[currentSound as keyof typeof phonicsData].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showFeedback}
                    className={`h-20 text-lg font-semibold transition-all duration-300 ${
                      selectedAnswer === option
                        ? option === phonicsData[currentSound as keyof typeof phonicsData].correctAnswer
                          ? "bg-green-100 border-green-500 text-green-700 scale-105"
                          : "bg-red-100 border-red-500 text-red-700 scale-95"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105"
                    }`}
                  >
                    {option}
                  </Button>
                ))}
              </div>

              {showFeedback && (
                <div
                  className={`text-center p-6 rounded-2xl transition-all duration-500 ${
                    selectedAnswer === phonicsData[currentSound as keyof typeof phonicsData].correctAnswer
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  {selectedAnswer === phonicsData[currentSound as keyof typeof phonicsData].correctAnswer ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-green-700 mb-1">Excellent Work!</div>
                        <div className="text-sm text-green-600">
                          +{phonicsData[currentSound as keyof typeof phonicsData].points} points earned
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-red-700 mb-1">Keep Trying!</div>
                        <div className="text-sm text-red-600">
                          The correct answer is "{phonicsData[currentSound as keyof typeof phonicsData].correctAnswer}"
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  onClick={() => {
                    setSelectedAnswer("")
                    setShowFeedback(false)
                  }}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Advanced Analytics Dashboard */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900">
                <Brain className="w-5 h-5 text-purple-500" />
                <span>Neural Patterns</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Recognition Speed</span>
                  <span className="text-gray-900 font-bold">1.2s avg</span>
                </div>
                <Progress value={85} className="h-2" />
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Pattern Accuracy</span>
                  <span className="text-gray-900 font-bold">94%</span>
                </div>
                <Progress value={94} className="h-2" />
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Learning Velocity</span>
                  <span className="text-gray-900 font-bold">Fast</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900">
                <Activity className="w-5 h-5 text-green-500" />
                <span>Audio Analysis</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">97%</div>
                  <div className="text-sm text-gray-600">Pronunciation Accuracy</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">2.1s</div>
                    <div className="text-xs text-gray-500">Response Time</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">15</div>
                    <div className="text-xs text-gray-500">Sounds Mastered</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">A+</div>
                    <div className="text-xs text-gray-500">Grade</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-gray-900">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span>Achievement Unlocked</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 mb-1">Phonics Pioneer</div>
                  <div className="text-sm text-gray-600">Completed 10 consecutive challenges</div>
                </div>
                <Badge className="bg-yellow-50 text-yellow-700 border border-yellow-200">+500 Bonus Points</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Immersive Learning Environment */}
        <Card className="mt-12 bg-white border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-900">
              <Waves className="w-5 h-5 text-blue-500" />
              <span>3D Spatial Audio Environment</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Environmental Settings</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Music className="w-4 h-4 mr-2" />
                    Forest
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                    <Speaker className="w-4 h-4 mr-2" />
                    Classroom
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                    <Mic className="w-4 h-4 mr-2" />
                    Library
                  </Button>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                    <Headphones className="w-4 h-4 mr-2" />
                    Studio
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">Audio Enhancement</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Spatial Audio</span>
                    <Badge className="bg-green-50 text-green-700 border border-green-200">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Noise Cancellation</span>
                    <Badge className="bg-blue-50 text-blue-700 border border-blue-200">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Haptic Feedback</span>
                    <Badge className="bg-purple-50 text-purple-700 border border-purple-200">On</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
