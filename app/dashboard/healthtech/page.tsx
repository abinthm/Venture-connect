"use client"

import { useState } from "react"
import {
  Building2,
  Users,
  TrendingUp,
  DollarSign,
  Target,
  Calendar,
  MapPin,
  Globe,
  Play,
  Download,
  Share2,
  Edit,
  ExternalLink,
  Award,
  Heart,
  Activity,
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

// Sample data for HealthTech Pro
const revenueData = [
  { year: "2020", revenue: 5000000, projected: null },
  { year: "2021", revenue: 25000000, projected: null },
  { year: "2022", revenue: 65000000, projected: null },
  { year: "2023", revenue: 120000000, projected: null },
  { year: "2024", revenue: null, projected: 204000000 },
  { year: "2025", revenue: null, projected: 377400000 },
]

const marketSplitData = [
  { name: "Rural North", value: 40, color: "#0088FE" },
  { name: "Rural South", value: 30, color: "#00C49F" },
  { name: "Rural West", value: 20, color: "#FFBB28" },
  { name: "Rural East", value: 10, color: "#FF8042" },
]

const salesChannelData = [
  { channel: "Direct Clinic Partnerships", percentage: 60, revenue: 72000000 },
  { channel: "Government Contracts", percentage: 25, revenue: 30000000 },
  { channel: "NGO Partnerships", percentage: 15, revenue: 18000000 },
]

const teamMembers = [
  {
    name: "Dr. Kavita Singh",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 35,
    bio: "Former AIIMS doctor, 15+ years in rural healthcare",
  },
  {
    name: "Rohit Gupta",
    role: "CTO & Co-Founder",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 30,
    bio: "Ex-Google Health engineer, AI/ML expert in healthcare",
  },
  {
    name: "Dr. Amit Sharma",
    role: "Chief Medical Officer",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 10,
    bio: "Rural medicine specialist, 20+ years field experience",
  },
  {
    name: "Priya Patel",
    role: "Head of Operations",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 8,
    bio: "Former Practo operations head, scaled healthcare platforms",
  },
]

const fundingHistory = [
  {
    round: "Pre-Seed",
    date: "Jun 2020",
    amount: "₹3 Cr",
    valuation: "₹20 Cr",
    leadInvestor: "Healthcare Angels",
    useOfFunds: "Platform development, initial team",
  },
  {
    round: "Seed",
    date: "Mar 2021",
    amount: "₹15 Cr",
    valuation: "₹75 Cr",
    leadInvestor: "Healthtech Ventures",
    useOfFunds: "Rural expansion, AI development",
  },
  {
    round: "Series A",
    date: "Sep 2022",
    amount: "₹45 Cr",
    valuation: "₹225 Cr",
    leadInvestor: "Impact Healthcare Fund",
    useOfFunds: "Scale operations, medicine delivery network",
  },
  {
    round: "Series B",
    date: "Jan 2024",
    amount: "₹85 Cr",
    valuation: "₹416 Cr",
    leadInvestor: "Global Health Partners",
    useOfFunds: "Pan-India expansion, advanced AI diagnostics",
  },
]

const milestones = [
  { date: "Jun 2020", event: "Company Founded", type: "founding" },
  { date: "Sep 2020", event: "First Telemedicine Platform Launch", type: "product" },
  { date: "Dec 2020", event: "Reached 50 Rural Clinics", type: "growth" },
  { date: "Mar 2021", event: "Seed Funding Raised", type: "funding" },
  { date: "Jul 2021", event: "AI Diagnostic Tool Launch", type: "product" },
  { date: "Nov 2021", event: "200 Clinics Milestone", type: "growth" },
  { date: "Feb 2022", event: "Medicine Delivery Network Launch", type: "expansion" },
  { date: "Sep 2022", event: "Series A Funding", type: "funding" },
  { date: "Jan 2023", event: "500 Clinics Milestone", type: "growth" },
  { date: "Jun 2023", event: "2M Patients Served", type: "growth" },
  { date: "Jan 2024", event: "Series B Funding", type: "funding" },
]

export default function HealthTechDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editFormData, setEditFormData] = useState({
    // Company Basics
    companyName: "HealthTech Pro",
    tagline: "Telemedicine Platform Connecting Rural India",
    valuation: "4160000000", // ₹416 Cr
    description:
      "HealthTech Pro is transforming rural healthcare delivery through our comprehensive telemedicine platform. We connect 500+ rural clinics with specialist doctors, provide AI-powered diagnostic assistance, and ensure medicine delivery to the last mile. Our platform has served over 2 million patients across rural India, making quality healthcare accessible and affordable.",
    usp: "The only telemedicine platform combining specialist consultations, AI diagnostics, and medicine delivery specifically designed for rural India's unique challenges.",
    businessModel: "B2B2C",
    category: "HealthTech",
    website: "https://healthtechpro.in",

    // Key Metrics
    monthlyRevenue: "10000000", // ₹1 Cr
    annualRevenue: "120000000", // ₹12 Cr
    customers: "500", // clinics
    cashInBank: "680000000", // ₹68 Cr

    // Financial Metrics
    // 2021 Financials
    revenue2021: "25000000", // ₹2.5 Cr
    grossProfit2021: "17500000", // ₹1.75 Cr
    operatingExpenses2021: "35000000", // ₹3.5 Cr
    ebitda2021: "-17500000", // -₹1.75 Cr
    depreciation2021: "1000000", // ₹10 Lakh
    ebit2021: "-18500000", // -₹1.85 Cr
    interestExpense2021: "200000", // ₹2 Lakh
    profitBeforeTax2021: "-18700000", // -₹1.87 Cr
    taxExpense2021: "0", // ₹0
    profitAfterTax2021: "-18700000", // -₹1.87 Cr

    // 2022 Financials
    revenue2022: "65000000", // ₹6.5 Cr
    grossProfit2022: "45500000", // ₹4.55 Cr
    operatingExpenses2022: "75000000", // ₹7.5 Cr
    ebitda2022: "-29500000", // -₹2.95 Cr
    depreciation2022: "2000000", // ₹20 Lakh
    ebit2022: "-31500000", // -₹3.15 Cr
    interestExpense2022: "500000", // ₹5 Lakh
    profitBeforeTax2022: "-32000000", // -₹3.2 Cr
    taxExpense2022: "0", // ₹0
    profitAfterTax2022: "-32000000", // -₹3.2 Cr

    // 2023 Financials
    revenue2023: "120000000", // ₹12 Cr
    grossProfit2023: "84000000", // ₹8.4 Cr
    operatingExpenses2023: "140000000", // ₹14 Cr
    ebitda2023: "-56000000", // -₹5.6 Cr
    depreciation2023: "3000000", // ₹30 Lakh
    ebit2023: "-59000000", // -₹5.9 Cr
    interestExpense2023: "800000", // ₹8 Lakh
    profitBeforeTax2023: "-59800000", // -₹5.98 Cr
    taxExpense2023: "0", // ₹0
    profitAfterTax2023: "-59800000", // -₹5.98 Cr

    // Balance Sheet Items
    currentAssets: "750000000", // ₹75 Cr
    currentLiabilities: "70000000", // ₹7 Cr
    inventory: "25000000", // ₹2.5 Cr
    accountsReceivable: "35000000", // ₹3.5 Cr
    accountsPayable: "20000000", // ₹2 Cr
    totalAssets: "900000000", // ₹90 Cr
    totalLiabilities: "100000000", // ₹10 Cr
    shareholderEquity: "800000000", // ₹80 Cr

    // Pitch Video
    pitchVideoUrl: "",
    pitchVideoDescription: "5-minute presentation highlighting our impact on rural healthcare and growth potential.",

    // Key Achievements
    achievements: ["500+ Rural Clinics", "2M+ Patients Served", "95% AI Diagnostic Accuracy", "20 States Coverage"],

    // Unit Economics
    cac: "60000", // ₹60K per clinic
    ltv: "2400000", // ₹24 Lakh per clinic
    averageSellingPrice: "24000", // ₹24K per month per clinic
    grossMargin: "70",

    // Market Position
    marketShare: "3.2",
    brandRecognition: "45",
    customerSatisfaction: "92",
    totalAddressableMarket: "25000000000000", // ₹2,50,000 Cr
    serviceableAddressableMarket: "5000000000000", // ₹50,000 Cr
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
      year: "2021",
      revenue: Number.parseInt(editFormData.revenue2021),
      grossProfit: Number.parseInt(editFormData.grossProfit2021),
      ebitda: Number.parseInt(editFormData.ebitda2021),
      ebit: Number.parseInt(editFormData.ebit2021),
      beforeTax: Number.parseInt(editFormData.profitBeforeTax2021),
      afterTax: Number.parseInt(editFormData.profitAfterTax2021),
    },
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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{editFormData.companyName}</h1>
                <p className="text-gray-600">{editFormData.tagline}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="secondary">{editFormData.businessModel}</Badge>
                  <Badge variant="secondary">{editFormData.category}</Badge>
                  <Badge variant="secondary">Telemedicine</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800">
                    🏥 Healthcare
                  </Badge>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-red-600">
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
                                <SelectItem value="B2B2C">B2B2C</SelectItem>
                                <SelectItem value="B2B">B2B</SelectItem>
                                <SelectItem value="B2C">B2C</SelectItem>
                                <SelectItem value="B2B + B2C">B2B + B2C</SelectItem>
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
                                <SelectItem value="HealthTech">HealthTech</SelectItem>
                                <SelectItem value="Telemedicine">Telemedicine</SelectItem>
                                <SelectItem value="AI/ML">AI/ML</SelectItem>
                                <SelectItem value="Healthcare">Healthcare</SelectItem>
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

                      {/* Other tabs content similar to previous dashboards but with HealthTech specific data */}
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
                  <CardTitle className="text-sm font-medium">Annual Revenue</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {formatIndianCurrency(Number.parseInt(editFormData.annualRevenue))}
                  </div>
                  <p className="text-xs text-muted-foreground">+85% from last year</p>
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
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Partner Clinics</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{editFormData.customers}</div>
                  <p className="text-xs text-muted-foreground">+50 this quarter</p>
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
                  <p className="text-xs text-muted-foreground">20 months runway</p>
                </CardContent>
              </Card>
            </div>

            {/* Healthcare Impact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Patients Served</CardTitle>
                  <Heart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-600">2M+</div>
                  <p className="text-xs text-muted-foreground">Across rural India</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">AI Diagnostic Accuracy</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <p className="text-xs text-muted-foreground">Validated by specialists</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">States Covered</CardTitle>
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">20</div>
                  <p className="text-xs text-muted-foreground">Pan-India presence</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Customer Satisfaction</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">92%</div>
                  <p className="text-xs text-muted-foreground">NPS Score: 78</p>
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
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <p className="text-red-800">{editFormData.usp}</p>
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
                    <Button size="lg" className="rounded-full w-16 h-16 bg-red-600 hover:bg-red-700">
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
                    <Progress value={95} className="mt-2" />
                    <p className="text-xs text-gray-500 mt-1">Excellent (Target: 3:1+)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <div className="text-sm text-gray-500">Average Revenue Per Clinic</div>
                      <div className="text-lg font-semibold">
                        {formatIndianCurrency(Number.parseInt(editFormData.averageSellingPrice))}/month
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
                      ruralNorth: { label: "Rural North", color: "#0088FE" },
                      ruralSouth: { label: "Rural South", color: "#00C49F" },
                      ruralWest: { label: "Rural West", color: "#FFBB28" },
                      ruralEast: { label: "Rural East", color: "#FF8042" },
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
                  <CardTitle>Revenue Channels</CardTitle>
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
                                    : milestone.type === "expansion"
                                      ? "bg-red-500"
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
                          ) : milestone.type === "expansion" ? (
                            <Globe className="w-4 h-4" />
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
                      <div className="text-3xl font-bold text-green-600">₹148 Cr</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Current Round Target</div>
                      <div className="text-xl font-semibold">₹62.4 Cr Series C</div>
                      <Progress value={45} className="mt-2" />
                      <p className="text-xs text-gray-500 mt-1">₹28.1 Cr committed</p>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-sm text-gray-500">Next Milestone</div>
                      <div className="text-sm font-medium">1000+ clinics (Q4 2024)</div>
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
                          <span className="text-sm">Global Health Partners</span>
                          <Badge variant="secondary">Lead</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Impact Healthcare Fund</span>
                          <Badge variant="secondary">Series A</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Healthtech Ventures</span>
                          <Badge variant="secondary">Seed</Badge>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2">Board Composition</h4>
                      <div className="text-sm space-y-1">
                        <div>• 2 Founder seats</div>
                        <div>• 2 Investor seats</div>
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
