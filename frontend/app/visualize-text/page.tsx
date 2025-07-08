"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  ImageIcon,
  Download,
  Printer,
  Wand2,
  BookOpen,
  Lightbulb,
  Sparkles,
  Brain,
  Eye,
  Zap,
  Target,
  Layers,
  Share2,
  Save,
  RefreshCw,
} from "lucide-react"
import Link from "next/link"

export default function VisualizeTextPage() {
  const [inputText, setInputText] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)
  const [generatedVisuals, setGeneratedVisuals] = useState<any[]>([])
  const [selectedStyle, setSelectedStyle] = useState("realistic")
  const [complexity, setComplexity] = useState("medium")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<any>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const visualStyles = [
    { id: "realistic", name: "Photorealistic", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { id: "cartoon", name: "Cartoon", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { id: "abstract", name: "Abstract", color: "bg-orange-50 text-orange-700 border-orange-200" },
    { id: "minimalist", name: "Minimalist", color: "bg-green-50 text-green-700 border-green-200" },
  ]

  const complexityLevels = [
    { id: "simple", name: "Simple", description: "Basic visual elements" },
    { id: "medium", name: "Detailed", description: "Rich visual storytelling" },
    { id: "complex", name: "Complex", description: "Multi-layered narratives" },
  ]

  const handleGenerateVisuals = async () => {
    if (!inputText.trim()) return

    setIsGenerating(true)
    setGenerationProgress(0)
    setIsAnalyzing(true)

    // Simulate text analysis
    const analysisInterval = setInterval(() => {
      setGenerationProgress((prev) => {
        if (prev >= 30) {
          clearInterval(analysisInterval)
          setIsAnalyzing(false)
          return 30
        }
        return prev + 2
      })
    }, 100)

    // Simulate analysis results
    setTimeout(() => {
      setAnalysisResults({
        keyWords: ["cat", "mat", "sitting", "comfortable"],
        sentiment: "positive",
        complexity: "medium",
        concepts: ["animals", "furniture", "relaxation"],
      })
    }, 1500)

    // Simulate visual generation
    setTimeout(() => {
      const generationInterval = setInterval(() => {
        setGenerationProgress((prev) => {
          if (prev >= 100) {
            clearInterval(generationInterval)
            setGeneratedVisuals([
              {
                id: 1,
                url: "/placeholder.svg?height=300&width=300",
                title: "Main Scene",
                confidence: 94,
                style: selectedStyle,
                elements: ["cat", "mat", "room"],
              },
              {
                id: 2,
                url: "/placeholder.svg?height=300&width=300",
                title: "Character Focus",
                confidence: 89,
                style: selectedStyle,
                elements: ["cat", "expression", "posture"],
              },
              {
                id: 3,
                url: "/placeholder.svg?height=300&width=300",
                title: "Environment",
                confidence: 92,
                style: selectedStyle,
                elements: ["mat", "texture", "lighting"],
              },
              {
                id: 4,
                url: "/placeholder.svg?height=300&width=300",
                title: "Concept Map",
                confidence: 87,
                style: selectedStyle,
                elements: ["relationships", "context", "meaning"],
              },
            ])
            setIsGenerating(false)
            return 100
          }
          return prev + 1
        })
      }, 50)
    }, 2000)
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
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Visualize Text</h1>
                  <p className="text-sm text-blue-600">AI-Powered Visual Learning</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-50 text-blue-700 border border-blue-200">Neural Processing Active</Badge>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Brain className="w-4 h-4 mr-2" />
                AI Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input & Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Text Input */}
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-gray-900">
                  <BookOpen className="w-5 h-5 text-blue-500" />
                  <span>Input Text</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Enter the text you'd like to visualize. Our AI will analyze the content and generate relevant, educational imagery..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="min-h-[200px] border-gray-300 text-gray-900 placeholder:text-gray-500 resize-none text-lg leading-relaxed"
                />

                {/* Style Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700">Visual Style</label>
                  <div className="grid grid-cols-2 gap-2">
                    {visualStyles.map((style) => (
                      <Button
                        key={style.id}
                        variant={selectedStyle === style.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedStyle(style.id)}
                        className={
                          selectedStyle === style.id
                            ? `${style.color} border`
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }
                      >
                        {style.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Complexity Level */}
                <div className="space-y-3">
                  <label className="text-sm font-medium text-gray-700">Detail Level</label>
                  <div className="space-y-2">
                    {complexityLevels.map((level) => (
                      <Button
                        key={level.id}
                        variant={complexity === level.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setComplexity(level.id)}
                        className={`w-full justify-start ${
                          complexity === level.id
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "border-gray-300 text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <div className="text-left">
                          <div className="font-medium">{level.name}</div>
                          <div className="text-xs opacity-70">{level.description}</div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleGenerateVisuals}
                  disabled={!inputText.trim() || isGenerating}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      {isAnalyzing ? "Analyzing..." : "Generating..."}
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5 mr-2" />
                      Generate Visuals
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* AI Analysis */}
            {analysisResults && (
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-gray-900">
                    <Brain className="w-5 h-5 text-green-500" />
                    <span>AI Analysis</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Concepts</h4>
                    <div className="flex flex-wrap gap-2">
                      {analysisResults.concepts.map((concept: string, index: number) => (
                        <Badge key={index} className="bg-green-50 text-green-700 border border-green-200">
                          {concept}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Sentiment</h4>
                    <Badge className="bg-blue-50 text-blue-700 border border-blue-200">
                      {analysisResults.sentiment}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tips */}
            <Card className="bg-yellow-50 border border-yellow-200 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <Lightbulb className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-yellow-800 mb-2">Pro Tips</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Use descriptive language for better visuals</li>
                      <li>• Include emotions and actions</li>
                      <li>• Break complex ideas into scenes</li>
                      <li>• Specify important details</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Generation Progress & Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress */}
            {isGenerating && (
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {isAnalyzing ? "Analyzing Text..." : "Generating Visuals..."}
                    </h3>
                    <span className="text-sm text-gray-600">{generationProgress}%</span>
                  </div>
                  <Progress value={generationProgress} className="h-3 mb-4" />
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span>
                      {isAnalyzing
                        ? "Processing natural language and extracting visual concepts..."
                        : "Creating high-quality educational imagery..."}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Generated Visuals */}
            {generatedVisuals.length > 0 && (
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2 text-gray-900">
                      <ImageIcon className="w-5 h-5 text-blue-500" />
                      <span>Generated Visuals</span>
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        <Save className="w-4 h-4 mr-2" />
                        Save All
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {generatedVisuals.map((visual, index) => (
                      <div key={visual.id} className="group relative">
                        <div className="relative overflow-hidden rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                          <div className="aspect-square relative">
                            <img
                              src={visual.url || "/placeholder.svg"}
                              alt={visual.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="flex space-x-2">
                                <Button size="sm" className="bg-white/90 hover:bg-white text-gray-900">
                                  <Download className="w-4 h-4" />
                                </Button>
                                <Button size="sm" className="bg-white/90 hover:bg-white text-gray-900">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button size="sm" className="bg-white/90 hover:bg-white text-gray-900">
                                  <Share2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-gray-900">{visual.title}</h4>
                              <Badge className="bg-green-50 text-green-700 border border-green-200">
                                {visual.confidence}%
                              </Badge>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {visual.elements.map((element: string, elemIndex: number) => (
                                <Badge
                                  key={elemIndex}
                                  className="bg-blue-50 text-blue-700 border border-blue-200 text-xs"
                                >
                                  {element}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Download Collection
                    </Button>
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                      <Printer className="w-4 h-4 mr-2" />
                      Print Learning Sheet
                    </Button>
                    <Button className="flex-1 bg-orange-600 hover:bg-orange-700 text-white">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Generate More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Empty State */}
            {!isGenerating && generatedVisuals.length === 0 && (
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardContent className="py-20 text-center">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                    <ImageIcon className="w-12 h-12 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Create Visual Magic</h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-8">
                    Enter your text and watch as our advanced AI transforms words into stunning, educational visuals
                    that enhance understanding and memory retention.
                  </p>
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Zap className="w-4 h-4" />
                      <span>Instant Generation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4" />
                      <span>High Accuracy</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Layers className="w-4 h-4" />
                      <span>Multiple Styles</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
