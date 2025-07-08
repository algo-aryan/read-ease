"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mic, MicOff, Download, Printer, Save, Trash2, FileText, Clock } from "lucide-react"
import Link from "next/link"

export default function SpeechNotesPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [notes, setNotes] = useState("")
  const [savedNotes, setSavedNotes] = useState([
    {
      id: 1,
      title: "Math Homework Notes",
      content: "Remember to practice multiplication tables. Focus on 7x and 8x tables.",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      title: "Science Project Ideas",
      content: "Volcano experiment with baking soda and vinegar. Need to get materials from store.",
      timestamp: "Yesterday",
    },
  ])

  const handleStartRecording = () => {
    setIsRecording(true)
    // Simulate speech recognition
    setTimeout(() => {
      setNotes(notes + " This is a sample of speech-to-text conversion. ")
    }, 2000)
  }

  const handleStopRecording = () => {
    setIsRecording(false)
  }

  const handleSaveNotes = () => {
    if (notes.trim()) {
      const newNote = {
        id: savedNotes.length + 1,
        title: `Notes ${new Date().toLocaleDateString()}`,
        content: notes,
        timestamp: "Just now",
      }
      setSavedNotes([newNote, ...savedNotes])
      setNotes("")
    }
  }

  const handleDeleteNote = (id: number) => {
    setSavedNotes(savedNotes.filter((note) => note.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
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
                <div className="w-8 h-8 bg-orange-100 text-orange-700 rounded-lg flex items-center justify-center">
                  <Mic className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-gray-900">Speech Notes</span>
              </div>
            </div>
            <Badge className="bg-orange-100 text-orange-700">Voice to Text</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recording & Notes Section */}
          <div className="space-y-6">
            {/* Voice Recording */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mic className="w-5 h-5 text-orange-600" />
                  <span>Voice Recording</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="relative">
                  <div
                    className={`w-32 h-32 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
                      isRecording
                        ? "bg-red-100 border-4 border-red-300 animate-pulse"
                        : "bg-orange-100 border-4 border-orange-300"
                    }`}
                  >
                    {isRecording ? (
                      <MicOff className="w-12 h-12 text-red-600" />
                    ) : (
                      <Mic className="w-12 h-12 text-orange-600" />
                    )}
                  </div>
                  {isRecording && (
                    <div className="absolute -inset-4 border-4 border-red-300 rounded-full animate-ping opacity-30"></div>
                  )}
                </div>

                <div>
                  {isRecording ? (
                    <Button onClick={handleStopRecording} size="lg" className="bg-red-600 hover:bg-red-700">
                      <MicOff className="w-5 h-5 mr-2" />
                      Stop Recording
                    </Button>
                  ) : (
                    <Button onClick={handleStartRecording} size="lg" className="bg-orange-600 hover:bg-orange-700">
                      <Mic className="w-5 h-5 mr-2" />
                      Start Recording
                    </Button>
                  )}
                </div>

                <p className="text-sm text-gray-600">
                  {isRecording
                    ? "Listening... Speak clearly into your microphone"
                    : "Click the button above to start voice recording"}
                </p>
              </CardContent>
            </Card>

            {/* Notes Editor */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>Your Notes</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  placeholder="Your speech will appear here as text, or you can type directly..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[200px] text-lg leading-relaxed resize-none"
                />

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={handleSaveNotes}
                    disabled={!notes.trim()}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Notes
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    <Printer className="w-4 h-4 mr-2" />
                    Print
                  </Button>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setNotes("")}
                  className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Notes
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Saved Notes Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <span>Saved Notes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {savedNotes.length > 0 ? (
                  <div className="space-y-4">
                    {savedNotes.map((note) => (
                      <div
                        key={note.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{note.title}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteNote(note.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{note.content}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            <span>{note.timestamp}</span>
                          </div>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm" className="text-xs">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs">
                              Share
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No saved notes yet</h3>
                    <p className="text-gray-600">Start recording or typing to create your first note!</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tips Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Recording Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Speak clearly and at a normal pace</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Use a quiet environment for best results</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>You can edit the text after recording</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Save important notes for later reference</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
