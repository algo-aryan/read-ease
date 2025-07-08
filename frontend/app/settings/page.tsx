"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Settings, Type, Volume2, Eye, Accessibility, User } from "lucide-react"
import Link from "next/link"

export default function SettingsPage() {
  const [dyslexiaFont, setDyslexiaFont] = useState(true)
  const [highContrast, setHighContrast] = useState(false)
  const [fontSize, setFontSize] = useState([16])
  const [lineSpacing, setLineSpacing] = useState([1.5])
  const [soundEffects, setSoundEffects] = useState(true)
  const [voiceSpeed, setVoiceSpeed] = useState([1])
  const [notifications, setNotifications] = useState(true)
  const [autoSave, setAutoSave] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
                <div className="w-8 h-8 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-gray-900">Accessibility Settings</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Typography Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Type className="w-5 h-5 text-blue-600" />
                <span>Typography & Reading</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="dyslexia-font" className="text-base font-medium">
                    Dyslexia-Friendly Font
                  </Label>
                  <p className="text-sm text-gray-600">Use OpenDyslexic font designed for better readability</p>
                </div>
                <Switch id="dyslexia-font" checked={dyslexiaFont} onCheckedChange={setDyslexiaFont} />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-medium">Font Size</Label>
                  <span className="text-sm text-gray-600">{fontSize[0]}px</span>
                </div>
                <Slider value={fontSize} onValueChange={setFontSize} min={12} max={32} step={1} className="w-full" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-medium">Line Spacing</Label>
                  <span className="text-sm text-gray-600">{lineSpacing[0]}x</span>
                </div>
                <Slider
                  value={lineSpacing}
                  onValueChange={setLineSpacing}
                  min={1}
                  max={3}
                  step={0.1}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base font-medium">Reading Theme</Label>
                <Select defaultValue="default">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a reading theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default (White)</SelectItem>
                    <SelectItem value="cream">Cream Background</SelectItem>
                    <SelectItem value="sepia">Sepia Tone</SelectItem>
                    <SelectItem value="dark">Dark Mode</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Visual Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-green-600" />
                <span>Visual & Display</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="high-contrast" className="text-base font-medium">
                    High Contrast Mode
                  </Label>
                  <p className="text-sm text-gray-600">Increase contrast for better visibility</p>
                </div>
                <Switch id="high-contrast" checked={highContrast} onCheckedChange={setHighContrast} />
              </div>

              <div className="space-y-2">
                <Label className="text-base font-medium">Color Theme</Label>
                <div className="grid grid-cols-4 gap-3">
                  <button className="h-12 bg-white border-2 border-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium">Default</span>
                  </button>
                  <button className="h-12 bg-blue-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium">Blue</span>
                  </button>
                  <button className="h-12 bg-green-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium">Green</span>
                  </button>
                  <button className="h-12 bg-purple-100 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium">Purple</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Reduce Motion</Label>
                  <p className="text-sm text-gray-600">Minimize animations and transitions</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Audio Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Volume2 className="w-5 h-5 text-purple-600" />
                <span>Audio & Speech</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sound-effects" className="text-base font-medium">
                    Sound Effects
                  </Label>
                  <p className="text-sm text-gray-600">Play sounds for interactions and feedback</p>
                </div>
                <Switch id="sound-effects" checked={soundEffects} onCheckedChange={setSoundEffects} />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-base font-medium">Voice Speed</Label>
                  <span className="text-sm text-gray-600">{voiceSpeed[0]}x</span>
                </div>
                <Slider
                  value={voiceSpeed}
                  onValueChange={setVoiceSpeed}
                  min={0.5}
                  max={2}
                  step={0.1}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-base font-medium">Voice Type</Label>
                <Select defaultValue="female">
                  <SelectTrigger>
                    <SelectValue placeholder="Choose voice type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Natural Female Voice</SelectItem>
                    <SelectItem value="male">Natural Male Voice</SelectItem>
                    <SelectItem value="child">Child-Friendly Voice</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Accessibility Features */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Accessibility className="w-5 h-5 text-orange-600" />
                <span>Accessibility Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Keyboard Navigation</Label>
                  <p className="text-sm text-gray-600">Navigate using keyboard shortcuts</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Screen Reader Support</Label>
                  <p className="text-sm text-gray-600">Enhanced compatibility with screen readers</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Focus Indicators</Label>
                  <p className="text-sm text-gray-600">Show clear focus outlines for navigation</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* App Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-indigo-600" />
                <span>App Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="notifications" className="text-base font-medium">
                    Learning Reminders
                  </Label>
                  <p className="text-sm text-gray-600">Get gentle reminders to practice</p>
                </div>
                <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-save" className="text-base font-medium">
                    Auto-Save Progress
                  </Label>
                  <p className="text-sm text-gray-600">Automatically save your work and progress</p>
                </div>
                <Switch id="auto-save" checked={autoSave} onCheckedChange={setAutoSave} />
              </div>

              <div className="space-y-2">
                <Label className="text-base font-medium">Daily Goal</Label>
                <Select defaultValue="30">
                  <SelectTrigger>
                    <SelectValue placeholder="Set daily learning goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes</SelectItem>
                    <SelectItem value="30">30 minutes</SelectItem>
                    <SelectItem value="45">45 minutes</SelectItem>
                    <SelectItem value="60">1 hour</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Save Settings */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline">Reset to Defaults</Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
