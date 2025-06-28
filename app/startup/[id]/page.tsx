"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  Building2,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Target,
  Globe,
  Mail,
  Phone,
  Linkedin,
  Download,
  MessageSquare,
  Bookmark,
  Share2,
  Star,
  CheckCircle,
  Brain,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

// This would typically come from an API or database
const getStartupById = (id: string) => {
  const startups = [
    {
      id: 1,
      name: "TechFlow Solutions",
      tagline: "AI-powered workflow automation for enterprises",
      logo: "/placeholder.svg?height=120&width=120",
      industry: "AI/ML",
      stage: "Series A",
      location: "Bangalore, India",
      founded: 2021,
      employees: "23-50",
      fundingGoal: 416000000, // ₹41.6 Cr
      valuation: 2080000000, // ₹208 Cr
      revenue: 60000000, // ₹6 Cr ARR
      growth: 60,
      description:
        "Revolutionary AI platform that automates complex business workflows, reducing operational costs by 40% while improving efficiency. Our proprietary machine learning algorithms analyze business processes and create intelligent automation solutions that adapt to changing requirements.",
      longDescription:
        "TechFlow Solutions is at the forefront of enterprise automation, leveraging cutting-edge AI and machine learning technologies to transform how businesses operate. Our platform integrates seamlessly with existing enterprise systems, providing intelligent workflow automation that learns and adapts over time. We serve Fortune 500 companies across various industries, helping them achieve significant cost savings while improving operational efficiency.",
      founders: [
        {
          name: "Rajesh Kumar",
          role: "CEO & Co-Founder",
          avatar: "/placeholder.svg?height=80&width=80",
          linkedin: "#",
          bio: "Former VP of Engineering at Microsoft India with 15+ years in enterprise software. IIT Delhi alumnus with expertise in AI/ML systems.",
          experience: "15+ years",
        },
        {
          name: "Priya Sharma",
          role: "CTO & Co-Founder",
          avatar: "/placeholder.svg?height=80&width=80",
          linkedin: "#",
          bio: "Ex-Google senior engineer specializing in distributed systems and machine learning. PhD in Computer Science from Stanford.",
          experience: "12+ years",
        },
      ],
      metrics: {
        customers: 150,
        retention: 94,
        nps: 72,
        burnRate: 8000000, // ₹80L per month
        runway: 18, // months
        mrr: 5000000, // ₹50L MRR
        cac: 50000, // ₹50K
        ltv: 2000000, // ₹20L
        grossMargin: 85,
        churnRate: 2.5,
      },
      financials: {
        revenue2023: 60000000,
        revenue2022: 37500000,
        revenue2021: 15000000,
        projectedRevenue2024: 96000000,
        projectedRevenue2025: 144000000,
        expenses2023: 45000000,
        grossProfit2023: 51000000,
        netProfit2023: 6000000,
        cashBurn: 8000000,
        cashOnHand: 144000000,
      },
      highlights: [
        "40% cost reduction for clients",
        "94% customer retention rate",
        "150+ enterprise clients",
        "85% gross margin",
        "₹50L monthly recurring revenue",
        "18-month runway with current funding",
      ],
      tags: ["AI", "Enterprise", "SaaS", "Automation", "Machine Learning"],
      riskLevel: "Medium",
      lastUpdated: "2024-01-15",
      pitchDeck: true,
      financials: true,
      traction: "Strong",
      team: "Experienced",
      market: "Large",
      competition: "Moderate",
      technology: "Proprietary",
      businessModel: "B2B SaaS",
      revenueModel: "Subscription",
      socialImpact: "Medium",
      sustainability: "High",
      marketSize: "₹50,000 Cr",
      competitiveAdvantage: "Proprietary AI algorithms with 40% better performance than competitors",
      useOfFunds: [
        { category: "Product Development", percentage: 40, amount: 166400000 },
        { category: "Sales & Marketing", percentage: 30, amount: 124800000 },
        { category: "Team Expansion", percentage: 20, amount: 83200000 },
        { category: "Operations", percentage: 10, amount: 41600000 },
      ],
      milestones: [
        { date: "Q2 2024", milestone: "Launch enterprise AI platform v2.0", status: "planned" },
        { date: "Q3 2024", milestone: "Expand to 200+ enterprise clients", status: "planned" },
        { date: "Q4 2024", milestone: "International market entry (SEA)", status: "planned" },
        { date: "Q1 2025", milestone: "Series B funding round", status: "planned" },
      ],
      competitors: [
        { name: "UiPath", marketShare: "25%", differentiation: "Better AI integration" },
        { name: "Automation Anywhere", marketShare: "20%", differentiation: "Lower cost, higher efficiency" },
        { name: "Blue Prism", marketShare: "15%", differentiation: "Superior user experience" },
      ],
      customers: [
        {
          name: "Tata Consultancy Services",
          logo: "/placeholder.svg?height=40&width=40",
          testimonial: "40% reduction in operational costs",
        },
        {
          name: "Infosys",
          logo: "/placeholder.svg?height=40&width=40",
          testimonial: "Streamlined our entire workflow",
        },
        {
          name: "Wipro",
          logo: "/placeholder.svg?height=40&width=40",
          testimonial: "Best automation platform we've used",
        },
      ],
      documents: [
        { name: "Pitch Deck", type: "PDF", size: "2.5 MB", lastUpdated: "2024-01-15" },
        { name: "Financial Projections", type: "Excel", size: "1.2 MB", lastUpdated: "2024-01-10" },
        { name: "Product Demo", type: "Video", size: "45 MB", lastUpdated: "2024-01-12" },
        { name: "Market Analysis", type: "PDF", size: "3.1 MB", lastUpdated: "2024-01-08" },
      ],
      contact: {
        email: "invest@techflow.com",
        phone: "+91 98765 43210",
        website: "https://techflow.com",
        address: "Koramangala, Bangalore, Karnataka 560034",
      },
      socialMedia: {
        linkedin: "https://linkedin.com/company/techflow",
        twitter: "https://twitter.com/techflow",
      },
      investmentTerms: {
        minimumInvestment: 10000000, // ₹1 Cr
        maximumInvestment: 100000000, // ₹10 Cr
        equityOffered: "8-12%",
        boardSeat: "Available for ₹5+ Cr investment",
        liquidationPreference: "1x Non-participating",
        antiDilution: "Weighted average",
      },
    },
    // Add other startups here with similar structure
  ]

  return startups.find((startup) => startup.id === Number.parseInt(id))
}

export default function StartupDetailPage() {
  const params = useParams()
  const [startup, setStartup] = useState<any>(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [showContactDialog, setShowContactDialog] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    if (params.id) {
      const startupData = getStartupById(params.id as string)
      setStartup(startupData)
    }
  }, [params.id])

  if (!startup) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Startup Not Found</h2>
          <p className="text-gray-600 mb-4">The startup you're looking for doesn't exist or has been removed.</p>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Platform
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const formatCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`
    }
    return `₹${amount.toLocaleString("en-IN")}`
  }

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

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Pre-Seed":
        return "bg-purple-100 text-purple-800"
      case "Seed":
        return "bg-blue-100 text-blue-800"
      case "Series A":
        return "bg-green-100 text-green-800"
      case "Series B":
        return "bg-orange-100 text-orange-800"
      case "Series C+":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <Button variant="ghost" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Platform</span>
              </Button>
            </Link>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={isBookmarked ? "bg-orange-50 border-orange-200" : ""}
              >
                <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? "fill-orange-500 text-orange-500" : ""}`} />
                {isBookmarked ? "Bookmarked" : "Bookmark"}
              </Button>
              <Button variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button onClick={() => setShowContactDialog(true)}>
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Startup
              </Button>
            </div>
          </div>

          {/* Startup Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <Building2 className="w-12 h-12 text-gray-600" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{startup.name}</h1>
                <p className="text-xl text-gray-600 mb-3">{startup.tagline}</p>
                <div className="flex items-center space-x-4 text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{startup.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Founded {startup.founded}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{startup.employees} employees</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  <Badge className={getStageColor(startup.stage)}>{startup.stage}</Badge>
                  <Badge variant="outline">{startup.industry}</Badge>
                  <Badge className={getRiskColor(startup.riskLevel)}>{startup.riskLevel} Risk</Badge>
                  <Badge variant="secondary">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {startup.traction} Traction
                  </Badge>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-3xl font-bold text-orange-600 mb-1">{formatCurrency(startup.fundingGoal)}</div>
              <div className="text-sm text-gray-500 mb-2">Funding Goal</div>
              <div className="text-lg font-semibold text-gray-900">{formatCurrency(startup.valuation)}</div>
              <div className="text-sm text-gray-500">Valuation</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="market">Market</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="investment">Investment</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About {startup.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-4">{startup.longDescription}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Business Model</h4>
                        <p className="text-sm text-gray-600">{startup.businessModel}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Revenue Model</h4>
                        <p className="text-sm text-gray-600">{startup.revenueModel}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Key Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {startup.highlights.map((highlight: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Customer Testimonials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {startup.customers.map((customer: any, index: number) => (
                        <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                            <Building2 className="w-6 h-6 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-semibold">{customer.name}</div>
                            <div className="text-sm text-gray-600">"{customer.testimonial}"</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Annual Revenue</span>
                        <span className="font-semibold">{formatCurrency(startup.revenue)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">YoY Growth</span>
                        <span className="font-semibold text-green-600">{startup.growth}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Customers</span>
                        <span className="font-semibold">{startup.metrics.customers}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Retention Rate</span>
                        <span className="font-semibold">{startup.metrics.retention}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">NPS Score</span>
                        <span className="font-semibold">{startup.metrics.nps}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Gross Margin</span>
                        <span className="font-semibold">{startup.metrics.grossMargin}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Market Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Market Size</span>
                        <span className="font-semibold">{startup.marketSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Competition</span>
                        <span className="font-semibold">{startup.competition}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Technology</span>
                        <span className="font-semibold">{startup.technology}</span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600 block mb-2">Competitive Advantage</span>
                        <p className="text-sm font-medium">{startup.competitiveAdvantage}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{startup.contact.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{startup.contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{startup.contact.website}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{startup.contact.address}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="financials" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>2021</span>
                      <span className="font-semibold">{formatCurrency(startup.financials.revenue2021)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2022</span>
                      <span className="font-semibold">{formatCurrency(startup.financials.revenue2022)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2023</span>
                      <span className="font-semibold">{formatCurrency(startup.financials.revenue2023)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center text-blue-600">
                      <span className="font-medium">2024 (Projected)</span>
                      <span className="font-bold">{formatCurrency(startup.financials.projectedRevenue2024)}</span>
                    </div>
                    <div className="flex justify-between items-center text-blue-600">
                      <span className="font-medium">2025 (Projected)</span>
                      <span className="font-bold">{formatCurrency(startup.financials.projectedRevenue2025)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Gross Profit (2023)</span>
                      <span className="font-semibold">{formatCurrency(startup.financials.grossProfit2023)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Net Profit (2023)</span>
                      <span className="font-semibold text-green-600">
                        {formatCurrency(startup.financials.netProfit2023)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Monthly Burn Rate</span>
                      <span className="font-semibold text-red-600">{formatCurrency(startup.financials.cashBurn)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cash on Hand</span>
                      <span className="font-semibold">{formatCurrency(startup.financials.cashOnHand)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Runway</span>
                      <span className="font-semibold">{startup.metrics.runway} months</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Unit Economics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Monthly Recurring Revenue</span>
                      <span className="font-semibold">{formatCurrency(startup.metrics.mrr)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Customer Acquisition Cost</span>
                      <span className="font-semibold">{formatCurrency(startup.metrics.cac)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Lifetime Value</span>
                      <span className="font-semibold">{formatCurrency(startup.metrics.ltv)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">LTV/CAC Ratio</span>
                      <span className="font-semibold text-green-600">
                        {(startup.metrics.ltv / startup.metrics.cac).toFixed(1)}x
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Churn Rate</span>
                      <span className="font-semibold">{startup.metrics.churnRate}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Use of Funds</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {startup.useOfFunds.map((fund: any, index: number) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{fund.category}</span>
                          <span className="text-sm text-gray-600">
                            {fund.percentage}% • {formatCurrency(fund.amount)}
                          </span>
                        </div>
                        <Progress value={fund.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Founding Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {startup.founders.map((founder: any, index: number) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={founder.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {founder.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{founder.name}</h3>
                        <p className="text-orange-600 font-medium mb-2">{founder.role}</p>
                        <p className="text-sm text-gray-600 mb-3">{founder.bio}</p>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{founder.experience}</Badge>
                          <Button variant="ghost" size="sm">
                            <Linkedin className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="market" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Market Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Total Addressable Market</h4>
                      <p className="text-2xl font-bold text-blue-600">{startup.marketSize}</p>
                      <p className="text-sm text-gray-600">Enterprise automation market in India</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Market Position</h4>
                      <p className="text-sm text-gray-600">
                        Leading player in AI-powered workflow automation with proprietary technology that delivers 40%
                        better performance than traditional solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Competitive Landscape</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {startup.competitors.map((competitor: any, index: number) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium">{competitor.name}</div>
                          <div className="text-sm text-gray-600">{competitor.marketShare} market share</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-green-600">{competitor.differentiation}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Milestones & Roadmap</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {startup.milestones.map((milestone: any, index: number) => (
                    <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium">{milestone.milestone}</div>
                        <div className="text-sm text-gray-600">{milestone.date}</div>
                      </div>
                      <Badge variant={milestone.status === "completed" ? "default" : "secondary"}>
                        {milestone.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Available Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {startup.documents.map((doc: any, index: number) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Download className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium">{doc.name}</div>
                          <div className="text-sm text-gray-600">
                            {doc.type} • {doc.size}
                          </div>
                          <div className="text-xs text-gray-500">Updated {doc.lastUpdated}</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="investment" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Investment Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Minimum Investment</span>
                      <span className="font-semibold">{formatCurrency(startup.investmentTerms.minimumInvestment)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Maximum Investment</span>
                      <span className="font-semibold">{formatCurrency(startup.investmentTerms.maximumInvestment)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Equity Offered</span>
                      <span className="font-semibold">{startup.investmentTerms.equityOffered}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Board Seat</span>
                      <span className="font-semibold">{startup.investmentTerms.boardSeat}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Liquidation Preference</span>
                      <span className="font-semibold">{startup.investmentTerms.liquidationPreference}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Anti-Dilution</span>
                      <span className="font-semibold">{startup.investmentTerms.antiDilution}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investment Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-green-900">Strong Unit Economics</div>
                        <p className="text-sm text-green-700">
                          LTV/CAC ratio of {(startup.metrics.ltv / startup.metrics.cac).toFixed(1)}x with 85% gross
                          margins
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-blue-900">Rapid Growth</div>
                        <p className="text-sm text-blue-700">
                          {startup.growth}% YoY revenue growth with strong customer retention
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                      <Brain className="w-5 h-5 text-purple-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-purple-900">Proprietary Technology</div>
                        <p className="text-sm text-purple-700">
                          AI algorithms with 40% better performance than competitors
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-lg">
                      <Target className="w-5 h-5 text-orange-600 mt-0.5" />
                      <div>
                        <div className="font-medium text-orange-900">Large Market Opportunity</div>
                        <p className="text-sm text-orange-700">
                          {startup.marketSize} addressable market with low competition
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Ready to Invest?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <p className="text-gray-600">
                    Join leading investors in backing the next generation of enterprise automation.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <Button size="lg" onClick={() => setShowContactDialog(true)}>
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Express Interest
                    </Button>
                    <Button variant="outline" size="lg">
                      <Download className="w-4 h-4 mr-2" />
                      Download Pitch Deck
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Contact {startup.name}</DialogTitle>
            <DialogDescription>
              Send a message to the founding team to express your investment interest.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="investor-name">Your Name</Label>
              <Input id="investor-name" placeholder="Enter your full name" />
            </div>
            <div>
              <Label htmlFor="investor-email">Email Address</Label>
              <Input id="investor-email" type="email" placeholder="Enter your email" />
            </div>
            <div>
              <Label htmlFor="investment-amount">Investment Interest</Label>
              <Input id="investment-amount" placeholder="e.g., ₹5 Cr - ₹10 Cr" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell them about your investment thesis and why you're interested..."
                rows={4}
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowContactDialog(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowContactDialog(false)}>Send Message</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
