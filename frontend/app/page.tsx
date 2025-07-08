"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  ImageIcon,
  Mic,
  Settings,
  User,
  Menu,
  X,
  Headphones,
  Sparkles,
  ArrowRight,
  Play,
  Zap,
  Brain,
  Heart,
  Target,
  Award,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function WelcomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const [activeModule, setActiveModule] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const modules = [
    {
      title: "Visualize Text",
      description: "AI-powered visual learning that transforms complex text into interactive, memorable imagery",
      icon: ImageIcon,
      color: "bg-blue-50 border-blue-200",
      iconColor: "bg-blue-500 text-white",
      href: "/visualize-text",
      stats: "94% comprehension boost",
      features: ["Neural text analysis", "Dynamic image generation", "Memory enhancement"],
    },
    {
      title: "SoundSteps",
      description: "Immersive phonics adventures with spatial audio and haptic feedback for multisensory learning",
      icon: Headphones,
      color: "bg-green-50 border-green-200",
      iconColor: "bg-green-500 text-white",
      href: "/soundsteps",
      stats: "87% faster phonics mastery",
      features: ["3D spatial audio", "Adaptive difficulty", "Real-time feedback"],
    },
    {
      title: "Reading Companion",
      description: "Advanced neural text-to-speech with emotion recognition and personalized reading assistance",
      icon: BookOpen,
      color: "bg-purple-50 border-purple-200",
      iconColor: "bg-purple-500 text-white",
      href: "/reading-companion",
      stats: "76% reading speed increase",
      features: ["Emotion-aware TTS", "Dyslexia optimization", "Biometric adaptation"],
    },
    {
      title: "Speech Notes",
      description: "Revolutionary voice-to-text with context understanding and intelligent note organization",
      icon: Mic,
      color: "bg-orange-50 border-orange-200",
      iconColor: "bg-orange-500 text-white",
      href: "/speech-notes",
      stats: "92% accuracy rate",
      features: ["Context awareness", "Smart organization", "Multi-language support"],
    },
  ]

  const achievements = [
    { icon: Brain, label: "Cognitive Enhancement", value: "2.3x", color: "bg-blue-50 text-blue-700" },
    { icon: Heart, label: "Engagement Rate", value: "96%", color: "bg-red-50 text-red-700" },
    { icon: Target, label: "Learning Goals Met", value: "89%", color: "bg-green-50 text-green-700" },
    { icon: Award, label: "Student Satisfaction", value: "4.9/5", color: "bg-purple-50 text-purple-700" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">ReadEase</span>
                <div className="text-xs text-blue-600 font-medium">Neural Learning Platform</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/research" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Research
              </Link>
              <Link href="/support" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Support
              </Link>
              <Link href="/profile">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </Link>
              <Link href="/settings">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-600 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/research" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Research
              </Link>
              <Link href="/support" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Support
              </Link>
              <Link href="/profile" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Profile
              </Link>
              <Link href="/settings" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Settings
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div
          className={`text-center transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 text-sm font-medium">Powered by Advanced AI</span>
          </div>

          <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-tight text-gray-900">
            The Future of
            <br />
            <span className="text-blue-600">Inclusive Learning</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered platform that adapts to every learner's unique neural patterns, transforming how
            neurodiverse students experience education through cutting-edge technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Begin Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-12 py-6 text-lg font-semibold bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`${achievement.color} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <achievement.icon className="w-8 h-8 mb-3" />
                <div className="text-2xl font-bold mb-1">{achievement.value}</div>
                <div className="text-sm opacity-80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Module Showcase */}
        <div className="relative">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Revolutionary Learning Modules</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <Link key={index} href={module.href}>
                <Card
                  className={`${module.color} hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer h-full`}
                  onMouseEnter={() => setActiveModule(index)}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 ${module.iconColor} rounded-2xl flex items-center justify-center`}>
                        <module.icon className="w-8 h-8" />
                      </div>
                      <Badge className="bg-white text-gray-700 border border-gray-300">{module.stats}</Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{module.title}</h3>

                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{module.description}</p>

                    <div className="space-y-2 mb-6">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                      Explore Module
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Advanced Features Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Next-Generation Accessibility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breakthrough technologies that understand and adapt to individual learning patterns
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Brain className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Neural Adaptation</h3>
              <p className="text-gray-600 leading-relaxed">
                AI that learns your unique cognitive patterns and adapts content delivery in real-time for optimal
                comprehension.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Heart className="w-12 h-12 text-red-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emotional Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced emotion recognition that adjusts learning pace and provides supportive feedback based on your
                emotional state.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-12 h-12 text-green-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Machine learning algorithms that predict learning challenges and proactively provide personalized
                interventions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-gray-900">ReadEase</span>
                <div className="text-xs text-blue-600">Neural Learning Platform</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              © 2024 ReadEase. Revolutionizing education through AI and accessibility.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
