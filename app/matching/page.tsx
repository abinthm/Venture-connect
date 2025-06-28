"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  Building2,
  Target,
  Star,
  Brain,
  MessageSquare,
  Eye,
  BarChart3,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Users,
  Shield,
  Network,
  Search,
  Sparkles,
  ArrowRight,
  SlidersHorizontal,
  ExternalLink,
  MapPin,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

// Import the advanced matching algorithm
import {
  matchingAlgorithm,
  enhancedInvestorProfiles,
  enhancedStartupProfile,
  type MatchResult,
  type InvestorProfile,
} from "@/lib/matching-algorithm"
import { startups } from "@/data/startups" // Import the startups array from the new shared location

// Add this utility function for risk badge color
const getRiskColor = (risk: string) => {
  switch (risk) {
    case "Low":
      return "bg-green-100 text-green-800"
    case "Medium":
      return "bg-yellow-100 text-yellow-800"
    case "High":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

// Add this utility function for traction badge color
const getTractionColor = (traction: string) => {
  switch (traction) {
    case "High":
      return "bg-green-100 text-green-800"
    case "Medium":
      return "bg-yellow-100 text-yellow-800"
    case "Low":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function SmartMatchingPage() {
  const [matches, setMatches] = useState<MatchResult[]>([])
  const [selectedMatch, setSelectedMatch] = useState<MatchResult | null>(null)
  const [selectedInvestor, setSelectedInvestor] = useState<InvestorProfile | null>(null)
  const [pitchFeedback, setPitchFeedback] = useState("")
  const [feedbackRating, setFeedbackRating] = useState(0)
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<any>(null)

  useEffect(() => {
    // Simulate AI processing time
    setIsLoading(true)

    setTimeout(() => {
      // Calculate matches using the advanced algorithm
      const calculatedMatches = enhancedInvestorProfiles
        .map((investor) => matchingAlgorithm.calculateMatch(investor, enhancedStartupProfile))
        .sort((a, b) => b.overallScore - a.overallScore)

      setMatches(calculatedMatches)
      setIsLoading(false)
    }, 2000) // 2 second loading simulation
  }, [])

  const handleSearch = async () => {
    if (!searchQuery.trim()) return

    setIsSearching(true)

    try {
      // Get investor profile from localStorage
      const investorProfileData = localStorage.getItem("investor_profile")

      if (!investorProfileData) {
        // If no investor profile, redirect to onboarding
        window.location.href = "/investor-onboarding"
        return
      }

      const investorData = JSON.parse(investorProfileData)

      // Prepare the request payload
      const requestPayload = {
        query: searchQuery,
        investor_data: investorData,
      }

      // Send POST request to AI insight endpoint
      const response = await fetch("/api/ai-insight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestPayload),
      })

      if (response.ok) {
        const results = await response.json()
        setSearchResults(results)
        console.log("AI Insight Results:", results)
      } else {
        console.error("Failed to get AI insights:", response.statusText)
      }
    } catch (error) {
      console.error("Error during search:", error)
    } finally {
      setIsSearching(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const popularSearches = [
    "AI startups in healthcare",
    "Series A fintech companies",
    "SaaS startups with $1M+ ARR",
    "AgriTech companies in India",
    "EdTech platforms for K-12",
    "CleanTech with proven traction",
  ]

  const searchCategories = [
    { name: "Industry", icon: Target, count: "12 categories" },
    { name: "Stage", icon: TrendingUp, count: "5 stages" },
    { name: "Location", icon: Users, count: "25+ cities" },
    { name: "Funding", icon: Sparkles, count: "₹1L - ₹100Cr" },
  ]

  const handleSendPitch = (investorId: number) => {
    console.log(`Pitch sent to investor ${investorId}`)
    // In real app, this would trigger an API call
  }

  const handleFeedbackSubmit = () => {
    console.log("Feedback submitted:", { rating: feedbackRating, feedback: pitchFeedback })
    setShowFeedbackDialog(false)
    setPitchFeedback("")
    setFeedbackRating(0)
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`
    }
    return `₹${amount.toLocaleString("en-IN")}`
  }

  const getInvestorById = (id: number) => {
    return enhancedInvestorProfiles.find((inv) => inv.id === id)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-blue-600"
    if (score >= 40) return "text-yellow-600"
    return "text-red-600"
  }

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case "Highly Recommended":
        return "bg-green-500"
      case "Good Match":
        return "bg-blue-500"
      case "Consider with Caution":
        return "bg-yellow-500"
      default:
        return "bg-red-500"
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-white animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">AI Processing Your Matches</h2>
          <p className="text-gray-600 mb-4">Analyzing 847 data points across multiple dimensions...</p>
          <div className="w-64 mx-auto">
            <Progress value={85} className="h-2" />
          </div>
          <p className="text-sm text-gray-500 mt-2">Advanced algorithms at work</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section with Search */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-purple-200">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">AI-Powered Smart Matching</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your Perfect
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Investment Match
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover startups that align with your investment criteria using our advanced AI matching algorithm.
              Search across 500+ verified companies.
            </p>

            {/* Main Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200/50 p-2">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 pl-4">
                      <Search className="w-6 h-6 text-gray-400" />
                    </div>
                    <Input
                      placeholder="Search for startups, industries, or investment criteria..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 border-0 text-lg placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                    />
                    <Button
                      onClick={handleSearch}
                      disabled={!searchQuery.trim() || isSearching}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50"
                    >
                      {isSearching ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Searching...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>Search</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search Results */}
          {searchResults && (
            <div className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-purple-600" />
                    <span>AI Search Results</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Enhanced Result Card using startups page JSX */}
                  {(() => {
                    let startup = null
                    if (searchResults.matched_file) {
                      // Map file name to id (hardcoded for now)
                      const fileToId = {
                        "techflow-solutions.json": 1,
                        "greenergy-innovations.json": 2,
                        "healthtech-pro.json": 3,
                        "edutech-revolution.json": 4,
                        "fintech-secure.json": 5,
                        "agritech-solutions.json": 6,
                      }
                      const id = fileToId[searchResults.matched_file]
                      if (id) {
                        // Import the startups array from the main page
                        startup = startups.find((s) => s.id === id)
                      }
                    }
                    if (startup) {
                      return (
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Startup Card (copied from app/page.tsx) */}
                          <div className="flex-1">
                            <Card className="hover:shadow-lg transition-shadow duration-200">
                              <CardContent className="p-6">
                                <div className="space-y-4">
                                  <div className="flex items-start space-x-4">
                                    <Avatar className="w-16 h-16">
                                      <AvatarImage src={startup.logo || "/placeholder.svg"} alt={startup.name} />
                                      <AvatarFallback>{startup.name.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                      <h3 className="text-xl font-bold text-gray-900">{startup.name}</h3>
                                      <p className="text-gray-600 mb-2">{startup.tagline}</p>
                                      <div className="flex flex-wrap gap-2">
                                        <Badge variant="secondary">{startup.industry}</Badge>
                                        <Badge variant="outline">{startup.stage}</Badge>
                                        <Badge variant="outline" className="flex items-center">
                                          <MapPin className="w-3 h-3 mr-1" />
                                          {startup.location}
                                        </Badge>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                      <div className="text-sm text-gray-500">Funding Raised</div>
                                      <div className="font-semibold text-green-600">{startup.fundingRaised}</div>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">Valuation</div>
                                      <div className="font-semibold">{startup.valuation}</div>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">Revenue</div>
                                      <div className="font-semibold">{startup.revenue}</div>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">Team Size</div>
                                      <div className="font-semibold flex items-center">
                                        <Users className="w-4 h-4 mr-1" />
                                        {startup.employees}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="space-y-3 mb-4">
                                    <div className="flex justify-between items-center mb-1">
                                      <span className="text-sm text-gray-500">Growth Rate</span>
                                      <span className="text-sm font-semibold text-green-600">+{startup.growthRate}%</span>
                                    </div>
                                    <Progress value={Math.min(startup.growthRate / 2, 100)} className="h-2" />
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm text-gray-500">Risk:</span>
                                      <Badge className={getRiskColor(startup.riskLevel)}>{startup.riskLevel}</Badge>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <span className="text-sm text-gray-500">Traction:</span>
                                      <Badge className={getTractionColor(startup.traction)}>{startup.traction}</Badge>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap gap-1 mb-4">
                                    {startup.tags.map((tag, index) => (
                                      <Badge key={index} variant="outline" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                  <div className="flex items-center space-x-2 mb-4">
                                    <span className="text-sm text-gray-500">Founders:</span>
                                    <div className="flex -space-x-2">
                                      {startup.founders.map((founder, index) => (
                                        <Avatar key={index} className="w-6 h-6 border-2 border-white">
                                          <AvatarImage src={founder.image || "/placeholder.svg"} alt={founder.name} />
                                          <AvatarFallback className="text-xs">{founder.name.substring(0, 1)}</AvatarFallback>
                                        </Avatar>
                                      ))}
                                    </div>
                                    <span className="text-sm text-gray-600">
                                      {startup.founders.map((f) => f.name).join(", ")}
                                    </span>
                                  </div>
                                  <div className="flex space-x-3">
                                    <Link href={startup.dashboardPath} className="flex-1">
                                      <Button className="w-full">
                                        <Eye className="w-4 h-4 mr-2" />
                                        View Dashboard
                                      </Button>
                                    </Link>
                                    <Link href={`/startup/${startup.id}`}>
                                      <Button variant="outline">View Details</Button>
                                    </Link>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                          {/* AI Insight */}
                          <div className="flex-1">
                            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg shadow-inner border border-purple-100">
                              <div className="font-semibold text-purple-700 mb-2 flex items-center">
                                <Brain className="w-4 h-4 mr-2" /> AI Insight
                              </div>
                              <div className="prose prose-sm max-w-none text-gray-800 whitespace-pre-line">
                                {searchResults.ai_insight &&
                                  searchResults.ai_insight.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
                                    if (/^\*\*[^*]+\*\*$/.test(part)) {
                                      return <b key={i}>{part.replace(/\*\*/g, "")}</b>;
                                    }
                                    return <span key={i}>{part}</span>;
                                  })}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    } else {
                      // Fallback: show the raw JSON if no startup found
                      return (
                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                          <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                            {JSON.stringify(searchResults, null, 2)}
                          </pre>
                        </div>
                      )
                    }
                  })()}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Popular Searches */}
          <div className="mb-12">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 text-center">
              Popular Searches
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:text-gray-900 hover:border-gray-300 transition-all duration-200"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Search Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {searchCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <category.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/50 backdrop-blur-sm border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-sm text-gray-600">Verified Startups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">₹2,500Cr</div>
              <div className="text-sm text-gray-600">Total Funding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">94%</div>
              <div className="text-sm text-gray-600">Match Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">1,200+</div>
              <div className="text-sm text-gray-600">Successful Matches</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Smart Matching Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered algorithm analyzes multiple data points to find the perfect investment opportunities for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Search & Filter</h3>
            <p className="text-gray-600">
              Use our intelligent search to find startups based on industry, stage, location, and funding requirements.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. AI Analysis</h3>
            <p className="text-gray-600">
              Our algorithm analyzes 50+ data points including financials, team, market, and growth metrics.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Perfect Matches</h3>
            <p className="text-gray-600">
              Get ranked results with match scores, detailed insights, and actionable recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Next Investment?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of investors who have found their perfect startup matches using our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/investor-onboarding">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-50">
                <Users className="w-5 h-5 mr-2" />
                Join as Investor
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Search className="w-5 h-5 mr-2" />
                Browse Startups
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
