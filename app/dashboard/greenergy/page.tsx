"use client"

import { useState } from "react"
import {
  Building2,
  Users,
  TrendingUp,
  DollarSign,
  Target,
  Calendar,
  Play,
  Download,
  Share2,
  Edit,
  ExternalLink,
  Award,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Chart components
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"

// Sample data for GreenEnergy Innovations
const revenueData = [
  { year: "2022", revenue: 2000000, projected: null },
  { year: "2023", revenue: 15000000, projected: null },
  { year: "2024", revenue: null, projected: 33000000 },
  { year: "2025", revenue: null, projected: 72600000 },
]

const marketSplitData = [
  { name: "Maharashtra", value: 35, color: "#0088FE" },
  { name: "Karnataka", value: 25, color: "#00C49F" },
  { name: "Gujarat", value: 20, color: "#FFBB28" },
  { name: "Tamil Nadu", value: 20, color: "#FF8042" },
]

const salesChannelData = [
  { channel: "Direct B2B Sales", percentage: 50, revenue: 7500000 },
  { channel: "Government Contracts", percentage: 35, revenue: 5250000 },
  { channel: "Channel Partners", percentage: 15, revenue: 2250000 },
]

const teamMembers = [
  {
    name: "Arjun Mehta",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 40,
    bio: "Former Tesla engineer, 12+ years in renewable energy",
  },
  {
    name: "Sneha Patel",
    role: "CTO & Co-Founder",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 35,
    bio: "Ex-ISRO scientist, PhD in Solar Technology from IIT Bombay",
  },
  {
    name: "Rajesh Kumar",
    role: "Head of Operations",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 8,
    bio: "Former Tata Power executive, 10+ years in energy sector",
  },
  {
    name: "Priya Singh",
    role: "Head of Sales",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 7,
    bio: "Ex-Adani Green Energy, scaled renewable energy sales teams",
  },
]

const fundingHistory = [
  {
    round: "Pre-Seed",
    date: "Mar 2022",
    amount: "₹1.5 Cr",
    valuation: "₹12 Cr",
    leadInvestor: "Climate Angels",
    useOfFunds: "Product development, prototype testing",
  },
  {
    round: "Seed",
    date: "Nov 2023",
    amount: "₹8.5 Cr",
    valuation: "₹42.5 Cr",
    leadInvestor: "Green Ventures Fund",
    useOfFunds: "Manufacturing setup, team expansion",
  },
]

const milestones = [
  { date: "Mar 2022", event: "Company Founded", type: "founding" },
  { date: "Jun 2022", event: "First Solar Panel Prototype", type: "product" },
  { date: "Sep 2022", event: "Patent Filed for Smart Solar Tech", type: "product" },
  { date: "Nov 2022", event: "Seed Funding Raised", type: "funding" },
  { date: "Feb 2023", event: "First Commercial Installation", type: "growth" },
  { date: "May 2023", event: "Partnership with Pune Smart City", type: "partnership" },
  { date: "Aug 2023", event: "Reached 25 Installations", type: "growth" },
  { date: "Dec 2023", event: "Series A Funding Target", type: "funding" },
]

export default function GreenEnergyDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editFormData, setEditFormData] = useState({
    // Company Basics
    companyName: "GreenEnergy Innovations",
    tagline: "Smart Solar Solutions for Urban Infrastructure",
    valuation: "832000000", // ₹83.2 Cr
    description:
      "GreenEnergy Innovations is revolutionizing urban solar infrastructure with next-generation solar panels that deliver 30% higher efficiency than traditional solutions. Our integrated IoT monitoring system provides real-time performance analytics and predictive maintenance, making solar energy more reliable and cost-effective for smart cities across India.",
    usp: "The only solar solution combining 30% higher efficiency panels with AI-powered IoT monitoring, reducing maintenance costs by 50% while maximizing energy output.",
    businessModel: "B2B + B2G",
    category: "CleanTech",
    website: "https://greenenergy.in",

    // Key Metrics
    monthlyRevenue: "2750000", // ₹27.5 Lakh
    annualRevenue: "33000000", // ₹3.3 Cr (projected 2024)
    customers: "45",
    cashInBank: "120000000", // ₹12 Cr

    // Financial Metrics
    // 2022 Financials
    revenue2022: "2000000", // ₹20 Lakh
    grossProfit2022: "1400000", // ₹14 Lakh
    operatingExpenses2022: "8000000", // ₹80 Lakh
    ebitda2022: "-6600000", // -₹66 Lakh
    depreciation2022: "200000", // ₹2 Lakh
    ebit2022: "-6800000", // -₹68 Lakh
    interestExpense2022: "100000", // ₹1 Lakh
    profitBeforeTax2022: "-6900000", // -₹69 Lakh
    taxExpense2022: "0", // ₹0
    profitAfterTax2022: "-6900000", // -₹69 Lakh

    // 2023 Financials
    revenue2023: "15000000", // ₹1.5 Cr
    grossProfit2023: "10500000", // ₹1.05 Cr
    operatingExpenses2023: "18000000", // ₹1.8 Cr
    ebitda2023: "-7500000", // -₹75 Lakh
    depreciation2023: "500000", // ₹5 Lakh
    ebit2023: "-8000000", // -₹80 Lakh
    interestExpense2023: "200000", // ₹2 Lakh
    profitBeforeTax2023: "-8200000", // -₹82 Lakh
    taxExpense2023: "0", // ₹0
    profitAfterTax2023: "-8200000", // -₹82 Lakh

    // 2024 Projections
    revenue2024: "33000000", // ₹3.3 Cr
    grossProfit2024: "23100000", // ₹2.31 Cr
    operatingExpenses2024: "25000000", // ₹2.5 Cr
    ebitda2024: "-1900000", // -₹19 Lakh
    depreciation2024: "800000", // ₹8 Lakh
    ebit2024: "-2700000", // -₹27 Lakh
    interestExpense2024: "300000", // ₹3 Lakh
    profitBeforeTax2024: "-3000000", // -₹30 Lakh
    taxExpense2024: "0", // ₹0
    profitAfterTax2024: "-3000000", // -₹30 Lakh

    // Balance Sheet Items
    currentAssets: "150000000", // ₹15 Cr
    currentLiabilities: "30000000", // ₹3 Cr
    inventory: "45000000", // ₹4.5 Cr
    accountsReceivable: "18000000", // ₹1.8 Cr
    accountsPayable: "12000000", // ₹1.2 Cr
    totalAssets: "200000000", // ₹20 Cr
    totalLiabilities: "50000000", // ₹5 Cr
    shareholderEquity: "150000000", // ₹15 Cr

    // Pitch Video
    pitchVideoUrl: "",
    pitchVideoDescription:
      "4-minute presentation showcasing our revolutionary solar technology and smart city partnerships.",

    // Key Achievements
    achievements: ["30% Higher Solar Efficiency", "45+ Installations", "Smart City Partnerships", "Patent Filed"],

    // Unit Economics
    cac: "111111", // ₹1.11 Lakh
    ltv: "3333333", // ₹33.33 Lakh
    averageSellingPrice: "733333", // ₹7.33 Lakh per installation
    grossMargin: "70",

    // Market Position
    marketShare: "0.8",
    brandRecognition: "25",
    customerSatisfaction: "89",
    totalAddressableMarket: "12500000000000", // ₹1,25,000 Cr
    serviceableAddressableMarket: "2500000000000", // ₹25,000 Cr
  })

  const handleFormUpdate = (field: string, value: string | string[]) => {
    setEditFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAchievementUpdate = (index: number, value: string) => {
    const newAchievements = [...editFormData.achievements]
    newAchievements[index] = value
    handleFormUpdate("achievements", newAchievements)
  }

  const addAchievement = () => {
    const newAchievements = [...editFormData.achievements, ""]
    handleFormUpdate("achievements", newAchievements)
  }

  const removeAchievement = (index: number) => {
    const newAchievements = editFormData.achievements.filter((_, i) => i !== index)
    handleFormUpdate("achievements", newAchievements)
  }

  const handleSaveProfile = () => {
    console.log("Saving profile data:", editFormData)
    setIsEditDialogOpen(false)
  }

  // Helper function to format Indian currency
  const formatIndianCurrency = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(1)} Cr`
    } else if (amount >= 100000) {
      return `₹${(amount / 100000).toFixed(1)} L`
    } else if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(0)}K`
    } else {
      return `₹${amount.toLocaleString("en-IN")}`
    }
  }

  // Generate profit data from form data
  const profitData = [
    {
      year: "2022",
      revenue: Number.parseInt(editFormData.revenue2022),
      grossProfit: Number.parseInt(editFormData.grossProfit2022),
      ebitda: Number.parseInt(editFormData.ebitda2022),
      ebit: Number.parseInt(editFormData.ebit2022),
      beforeTax: Number.parseInt(editFormData.profitBeforeTax2022),
      afterTax: Number.parseInt(editFormData.profitAfterTax2022),
    },
    {
      year: "2023",
      revenue: Number.parseInt(editFormData.revenue2023),
      grossProfit: Number.parseInt(editFormData.grossProfit2023),
      ebitda: Number.parseInt(editFormData.ebitda2023),
      ebit: Number.parseInt(editFormData.ebit2023),
      beforeTax: Number.parseInt(editFormData.profitBeforeTax2023),
      afterTax: Number.parseInt(editFormData.profitAfterTax2023),
    },
    {
      year: "2024",
      revenue: Number.parseInt(editFormData.revenue2024),
      grossProfit: Number.parseInt(editFormData.grossProfit2024),
      ebitda: Number.parseInt(editFormData.ebitda2024),
      ebit: Number.parseInt(editFormData.ebit2024),
      beforeTax: Number.parseInt(editFormData.profitBeforeTax2024),
      afterTax: Number.parseInt(editFormData.profitAfterTax2024),
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{editFormData.companyName}</h1>
                <p className="text-gray-600">{editFormData.tagline}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="secondary">{editFormData.businessModel}</Badge>
                  <Badge variant="secondary">{editFormData.category}</Badge>
                  <Badge variant="secondary">Solar Tech</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    🌱 Sustainable
                  </Badge>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600">
                {formatIndianCurrency(Number.parseInt(editFormData.valuation))}
              </div>
              <div className="text-sm text-gray-500">Current Valuation</div>
              <div className="flex space-x-2 mt-3">
                <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Edit Company Profile</DialogTitle>
                      <DialogDescription>Update your company information and key metrics</DialogDescription>
                    </DialogHeader>

                    <Tabs defaultValue="basics" className="space-y-6">
                      <TabsList className="grid w-full grid-cols-6">
                        <TabsTrigger value="basics">Basics</TabsTrigger>
                        <TabsTrigger value="metrics">Metrics</TabsTrigger>
                        <TabsTrigger value="financials">Financials</TabsTrigger>
                        <TabsTrigger value="content">Content</TabsTrigger>
                        <TabsTrigger value="economics">Economics</TabsTrigger>
                        <TabsTrigger value="market">Market</TabsTrigger>
                      </TabsList>

                      <TabsContent value="basics" className="space-y-4">
                        <h3 className="text-lg font-semibold">Company Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="companyName">Company Name</Label>
                            <Input
                              id="companyName"
                              value={editFormData.companyName}
                              onChange={(e) => handleFormUpdate("companyName", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="tagline">Tagline</Label>
                            <Input
                              id="tagline"
                              value={editFormData.tagline}
                              onChange={(e) => handleFormUpdate("tagline", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="valuation">Current Valuation (₹)</Label>
                            <Input
                              id="valuation"
                              type="number"
                              value={editFormData.valuation}
                              onChange={(e) => handleFormUpdate("valuation", e.target.value)}
                              placeholder="Amount in rupees"
                            />
                          </div>
                          <div>
                            <Label htmlFor="website">Website</Label>
                            <Input
                              id="website"
                              value={editFormData.website}
                              onChange={(e) => handleFormUpdate("website", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="businessModel">Business Model</Label>
                            <Select
                              value={editFormData.businessModel}
                              onValueChange={(value) => handleFormUpdate("businessModel", value)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="B2B + B2G">B2B + B2G</SelectItem>
                                <SelectItem value="B2B">B2B</SelectItem>
                                <SelectItem value="B2C">B2C</SelectItem>
                                <SelectItem value="B2B2C">B2B2C</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="category">Category</Label>
                            <Select
                              value={editFormData.category}
                              onValueChange={(value) => handleFormUpdate("category", value)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="CleanTech">CleanTech</SelectItem>
                                <SelectItem value="Energy">Energy</SelectItem>
                                <SelectItem value="IoT">IoT</SelectItem>
                                <SelectItem value="Hardware">Hardware</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="description">Company Description</Label>
                          <Textarea
                            id="description"
                            rows={4}
                            value={editFormData.description}
                            onChange={(e) => handleFormUpdate("description", e.target.value)}
                          />
                        </div>

                        <div>
                          <Label htmlFor="usp">Unique Selling Proposition</Label>
                          <Textarea
                            id="usp"
                            rows={3}
                            value={editFormData.usp}
                            onChange={(e) => handleFormUpdate("usp", e.target.value)}
                          />
                        </div>
                      </TabsContent>

                      {/* Other tabs content similar to TechFlow but with GreenEnergy specific data */}
                    </Tabs>

                    <div className="flex justify-end space-x-2 pt-4 border-t">
                      <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleSaveProfile}>Save Changes</Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button size="sm" variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </div>
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
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="funding">Funding</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Annual Revenue (Projected)</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {formatIndianCurrency(Number.parseInt(editFormData.annualRevenue))}
                  </div>
                  <p className="text-xs text-muted-foreground">+120% from last year</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {formatIndianCurrency(Number.parseInt(editFormData.monthlyRevenue))}
                  </div>
                  <p className="text-xs text-muted-foreground">Growing rapidly</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Installations</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{editFormData.customers}</div>
                  <p className="text-xs text-muted-foreground">+25 this quarter</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cash in Bank</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {formatIndianCurrency(Number.parseInt(editFormData.cashInBank))}
                  </div>
                  <p className="text-xs text-muted-foreground">24 months runway</p>
                </CardContent>
              </Card>
            </div>

            {/* Company Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Company Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">About {editFormData.companyName}</h4>
                    <p className="text-gray-600 leading-relaxed">{editFormData.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Unique Selling Proposition</h4>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-green-800">{editFormData.usp}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {editFormData.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award className="w-5 h-5 text-yellow-500" />
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pitch Video</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16 bg-green-600 hover:bg-green-700">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{editFormData.pitchVideoDescription}</p>
                </CardContent>
              </Card>
            </div>

            {/* Unit Economics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Unit Economics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">Customer Acquisition Cost</div>
                      <div className="text-2xl font-bold text-red-600">
                        {formatIndianCurrency(Number.parseInt(editFormData.cac))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Lifetime Value</div>
                      <div className="text-2xl font-bold text-green-600">
                        {formatIndianCurrency(Number.parseInt(editFormData.ltv))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">LTV/CAC Ratio</div>
                    <div className="text-3xl font-bold text-blue-600">
                      {Math.round(Number.parseInt(editFormData.ltv) / Number.parseInt(editFormData.cac))}:1
                    </div>
                    <Progress value={90} className="mt-2" />
                    <p className="text-xs text-gray-500 mt-1">Excellent (Target: 3:1+)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <div className="text-sm text-gray-500">Average Project Value</div>
                      <div className="text-lg font-semibold">
                        {formatIndianCurrency(Number.parseInt(editFormData.averageSellingPrice))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Gross Margin</div>
                      <div className="text-lg font-semibold text-green-600">{editFormData.grossMargin}%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Position</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Market Share</span>
                        <span className="text-sm font-semibold">{editFormData.marketShare}%</span>
                      </div>
                      <Progress value={Number.parseFloat(editFormData.marketShare) * 10} />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Brand Recognition</span>
                        <span className="text-sm font-semibold">{editFormData.brandRecognition}%</span>
                      </div>
                      <Progress value={Number.parseInt(editFormData.brandRecognition)} />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Customer Satisfaction</span>
                        <span className="text-sm font-semibold">{editFormData.customerSatisfaction}%</span>
                      </div>
                      <Progress value={Number.parseInt(editFormData.customerSatisfaction)} />
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-sm text-gray-500">Total Addressable Market</div>
                      <div className="text-2xl font-bold">
                        {formatIndianCurrency(Number.parseInt(editFormData.totalAddressableMarket))}
                      </div>
                      <div className="text-sm text-gray-500">Serviceable Addressable Market</div>
                      <div className="text-lg font-semibold">
                        {formatIndianCurrency(Number.parseInt(editFormData.serviceableAddressableMarket))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="financials" className="space-y-6">
            {/* Revenue Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Revenue Growth & Projections</CardTitle>
                <CardDescription>Historical performance and future projections (in ₹)</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    revenue: {
                      label: "Actual Revenue",
                      color: "hsl(var(--chart-1))",
                    },
                    projected: {
                      label: "Projected Revenue",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="var(--color-revenue)"
                        strokeWidth={3}
                        dot={{ fill: "var(--color-revenue)", strokeWidth: 2, r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="projected"
                        stroke="var(--color-projected)"
                        strokeWidth={3}
                        strokeDasharray="5 5"
                        dot={{ fill: "var(--color-projected)", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Financial Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profitability Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      beforeTax: {
                        label: "Before Tax",
                        color: "hsl(var(--chart-3))",
                      },
                      afterTax: {
                        label: "After Tax",
                        color: "hsl(var(--chart-4))",
                      },
                    }}
                    className="h-[250px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={profitData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="beforeTax" fill="var(--color-beforeTax)" />
                        <Bar dataKey="afterTax" fill="var(--color-afterTax)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Current Assets</span>
                      <span className="font-semibold">
                        {formatIndianCurrency(Number.parseInt(editFormData.currentAssets))}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Current Liabilities</span>
                      <span className="font-semibold">
                        {formatIndianCurrency(Number.parseInt(editFormData.currentLiabilities))}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Current Ratio</span>
                      <span className="font-semibold text-green-600">
                        {(
                          Number.parseInt(editFormData.currentAssets) / Number.parseInt(editFormData.currentLiabilities)
                        ).toFixed(1)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Inventory</span>
                      <span className="font-semibold">
                        {formatIndianCurrency(Number.parseInt(editFormData.inventory))}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Accounts Receivable</span>
                      <span className="font-semibold">
                        {formatIndianCurrency(Number.parseInt(editFormData.accountsReceivable))}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.role}</p>
                        <Badge variant="outline" className="mt-2">
                          {member.ownership}% ownership
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500">{member.bio}</p>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="market" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Geographic Market Split</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      maharashtra: { label: "Maharashtra", color: "#0088FE" },
                      karnataka: { label: "Karnataka", color: "#00C49F" },
                      gujarat: { label: "Gujarat", color: "#FFBB28" },
                      tamilnadu: { label: "Tamil Nadu", color: "#FF8042" },
                    }}
                    className="h-[250px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={marketSplitData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {marketSplitData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sales Channels</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {salesChannelData.map((channel, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{channel.channel}</span>
                          <span className="text-sm">{channel.percentage}%</span>
                        </div>
                        <Progress value={channel.percentage} />
                        <div className="text-xs text-gray-500">Revenue: {formatIndianCurrency(channel.revenue)}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Company Timeline</CardTitle>
                <CardDescription>Key milestones and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  <div className="space-y-6">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="relative flex items-start space-x-4">
                        <div
                          className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold ${
                            milestone.type === "founding"
                              ? "bg-purple-500"
                              : milestone.type === "product"
                                ? "bg-blue-500"
                                : milestone.type === "growth"
                                  ? "bg-green-500"
                                  : milestone.type === "funding"
                                    ? "bg-yellow-500"
                                    : milestone.type === "partnership"
                                      ? "bg-indigo-500"
                                      : "bg-gray-500"
                          }`}
                        >
                          {milestone.type === "founding" ? (
                            <Building2 className="w-4 h-4" />
                          ) : milestone.type === "product" ? (
                            <Target className="w-4 h-4" />
                          ) : milestone.type === "growth" ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : milestone.type === "funding" ? (
                            <DollarSign className="w-4 h-4" />
                          ) : milestone.type === "partnership" ? (
                            <Users className="w-4 h-4" />
                          ) : (
                            <Calendar className="w-4 h-4" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <p className="text-sm font-medium text-gray-900">{milestone.event}</p>
                            <Badge variant="outline" className="text-xs">
                              {milestone.date}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="funding" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Funding History</CardTitle>
                <CardDescription>Previous fundraising rounds and investor information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fundingHistory.map((round, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">Round</div>
                          <div className="font-semibold">{round.round}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Date</div>
                          <div className="font-semibold">{round.date}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Amount</div>
                          <div className="font-semibold text-green-600">{round.amount}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Valuation</div>
                          <div className="font-semibold">{round.valuation}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Lead Investor</div>
                          <div className="font-semibold">{round.leadInvestor}</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t">
                        <div className="text-sm text-gray-500">Use of Funds</div>
                        <div className="text-sm">{round.useOfFunds}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Funding Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500">Total Raised</div>
                      <div className="text-3xl font-bold text-green-600">₹10 Cr</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Current Round Target</div>
                      <div className="text-xl font-semibold">₹20.8 Cr Series A</div>
                      <Progress value={25} className="mt-2" />
                      <p className="text-xs text-gray-500 mt-1">₹5.2 Cr committed</p>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-sm text-gray-500">Next Milestone</div>
                      <div className="text-sm font-medium">100+ installations (Q3 2024)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Investor Relations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Investors</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Green Ventures Fund</span>
                          <Badge variant="secondary">Lead</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Climate Angels</span>
                          <Badge variant="secondary">Pre-Seed</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Sustainability Partners</span>
                          <Badge variant="secondary">Strategic</Badge>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2">Board Composition</h4>
                      <div className="text-sm space-y-1">
                        <div>• 2 Founder seats</div>
                        <div>• 1 Investor seat</div>
                        <div>• 1 Independent director</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
