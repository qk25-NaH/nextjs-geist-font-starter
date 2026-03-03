"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"

export default function CoachingApp() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "Support", message: "Hello! How can I help you today?", timestamp: "10:30 AM" },
    { id: 2, user: "You", message: "I need help with my assignment", timestamp: "10:32 AM" },
  ])
  const [newMessage, setNewMessage] = useState("")

  const sendMessage = () => {
    if (newMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          id: chatMessages.length + 1,
          user: "You",
          message: newMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-slate-900/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg" />
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">CoachPro</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" onClick={() => setActiveTab("dashboard")}>Dashboard</Button>
              <Button variant="ghost" onClick={() => setActiveTab("leaderboard")}>Leaderboard</Button>
              <Button variant="ghost" onClick={() => setActiveTab("study")}>Study Materials</Button>
              <Button variant="ghost" onClick={() => setActiveTab("chat")}>Live Support</Button>
              <Button variant="ghost" onClick={() => setActiveTab("payment")}>Pricing</Button>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">Login</Button>
              <Button size="sm">Sign Up</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="study">Study Materials</TabsTrigger>
            <TabsTrigger value="chat">Live Support</TabsTrigger>
            <TabsTrigger value="payment">Pricing</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Progress</CardTitle>
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">78%</div>
                  <Progress value={78} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
                  <Badge variant="secondary">#12</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12th</div>
                  <p className="text-xs text-muted-foreground">Out of 150 students</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
                  <div className="w-4 h-4 bg-blue-500 rounded-full" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24.5h</div>
                  <p className="text-xs text-muted-foreground">This week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Assignments</CardTitle>
                  <Badge variant="destructive">3 Due</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8/11</div>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Live Leaderboard</CardTitle>
                <CardDescription>Real-time rankings updated via Pusher</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { rank: 1, name: "Alex Johnson", score: 2450, change: "+2" },
                    { rank: 2, name: "Sarah Chen", score: 2380, change: "-1" },
                    { rank: 3, name: "Mike Rodriguez", score: 2350, change: "+1" },
                    { rank: 4, name: "Emma Wilson", score: 2320, change: "0" },
                    { rank: 5, name: "David Kim", score: 2290, change: "-2" },
                  ].map((student) => (
                    <div
                      key={student.rank}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            student.rank <= 3
                              ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white"
                              : "bg-slate-100 dark:bg-slate-800"
                          }`}
                        >
                          {student.rank}
                        </div>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.score} points</p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          student.change.startsWith("+")
                            ? "default"
                            : student.change.startsWith("-")
                            ? "destructive"
                            : "secondary"
                        }
                      >
                        {student.change}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Study Materials Tab */}
          <TabsContent value="study" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Mathematics", lessons: 24, progress: 85 },
                { title: "Physics", lessons: 18, progress: 62 },
                { title: "Chemistry", lessons: 20, progress: 73 },
                { title: "Biology", lessons: 16, progress: 91 },
                { title: "English", lessons: 22, progress: 56 },
                { title: "History", lessons: 14, progress: 78 },
              ].map((subject) => (
                <Card key={subject.title}>
                  <CardHeader>
                    <CardTitle>{subject.title}</CardTitle>
                    <CardDescription>{subject.lessons} lessons available</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={subject.progress} className="mb-2" />
                    <p className="text-sm text-muted-foreground">{subject.progress}% completed</p>
                    <Button className="w-full mt-4" variant="outline">
                      Continue Learning
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Live Support Chat Tab */}
          <TabsContent value="chat" className="space-y-6">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle>Live Support Chat</CardTitle>
                <CardDescription>Real-time chat powered by Pusher</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex-1 overflow-y-auto space-y-4 mb-4 p-4 border rounded-lg bg-slate-50 dark:bg-slate-900">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.user === "You" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          msg.user === "You"
                            ? "bg-blue-600 text-white"
                            : "bg-white dark:bg-slate-800 border"
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                        <p className="text-xs opacity-70 mt-1">{msg.timestamp}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  />
                  <Button onClick={sendMessage}>Send</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="payment" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Basic",
                  price: "$29",
                  features: ["Access to basic courses", "Email support", "Progress tracking"],
                },
                {
                  name: "Pro",
                  price: "$59",
                  features: [
                    "All basic features",
                    "Live chat support",
                    "Advanced analytics",
                    "Priority support",
                  ],
                },
                {
                  name: "Premium",
                  price: "$99",
                  features: [
                    "All pro features",
                    "1-on-1 coaching",
                    "Custom study plans",
                    "AI recommendations",
                  ],
                },
              ].map((plan) => (
                <Card key={plan.name} className={plan.name === "Pro" ? "border-blue-500 shadow-lg" : ""}>
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full"
                      variant={plan.name === "Pro" ? "default" : "outline"}
                    >
                      Choose Plan
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
