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
  Sprout,
  Leaf,
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

// Sample data for AgriTech Solutions
const revenueData = [
  { year: "2022", revenue: 5000000, projected: null },
  { year: "2023", revenue: 18000000, projected: null },
  { year: "2024", revenue: null, projected: 42000000 },
  { year: "2025", revenue: null, projected: 89250000 },
]

const marketSplitData = [
  { name: "Precision Farming", value: 50, color: "#0088FE" },
  { name: "Crop Monitoring", value: 30, color: "#00C49F" },
  { name: "Supply Chain", value: 15, color: "#FFBB28" },
  { name: "Weather Analytics", value: 5, color: "#FF8042" },
]

const salesChannelData = [
  { channel: "Direct Farmer Sales", percentage: 60, revenue: 10800000 },
  { channel: "Government Partnerships", percentage: 25, revenue: 4500000 },
  { channel: "Agri Cooperatives", percentage: 15, revenue: 2700000 },
]

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 45,
    bio: "Former John Deere executive, 20+ years in agriculture technology",
  },
  {
    name: "Dr. Priya Singh",
    role: "CTO & Co-Founder",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 35,
    bio: "Agricultural scientist, PhD from IARI, IoT specialist",
  },
  {
    name: "Suresh Patel",
    role: "Head of Operations",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 10,
    bio: "Former Mahindra Agri head, rural market expert",
  },
  {
    name: "Kavita Sharma",
    role: "Head of Data Science",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 5,
    bio: "Ex-Microsoft AI researcher, agricultural data analytics",
  },
]

const fundingHistory = [
  {
    round: "Pre-Seed",
    date: "Mar 2022",
    amount: "₹3 Cr",
    valuation: "₹18 Cr",
    leadInvestor: "AgriTech Angels",
    useOfFunds: "IoT device development, pilot programs",
  },
  {
    round: "Seed",
    date: "Jan 2024",
    amount: "₹15 Cr",
    valuation: "₹75 Cr",
    leadInvestor: "Rural Innovation Fund",
    useOfFunds: "Scale operations, expand to 5 states",
  },
]

const milestones = [
  { date: "Mar 2022", event: "Company Founded", type: "founding" },
  { date: "Jun 2022", event: "First IoT Sensors Deployed", type: "product" },
  { date: "Sep 2022", event: "100 Farmers Onboarded", type: "growth" },
  { date: "Jan 2023", event: "Seed Funding Raised", type: "funding" },
  { date: "Apr 2023", event: "AI Crop Prediction Launch", type: "product" },
  { date: "Aug 2023", event: "1000+ Farmers Network", type: "growth" },
  { date: "Dec 2023", event: "Government Partnership", type: "partnership" },
  { date: "Mar 2024", event: "5000+ Farmers Milestone", type: "growth" },
]

export default function AgriTechDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editFormData, setEditFormData] = useState({
    // Company Basics
    companyName: "AgriTech Solutions",
    tagline: "Smart Farming with IoT & AI",
    valuation: "936000000", // ₹93.6 Cr
    description:
      "AgriTech Solutions is revolutionizing Indian agriculture through IoT sensors, AI-powered crop monitoring, and precision farming techniques. Our platform helps 5000+ farmers increase crop yields by 35% while reducing water usage by 40%. We're building the future of sustainable farming with data-driven insights and smart agricultural practices.",
    usp: "The only AgriTech platform combining IoT sensors, AI crop prediction, and precision farming to deliver 35% yield increase and 40% water savings for farmers.",
    businessModel: "B2B + B2G",
    category: "AgriTech",
    website: "https://agritechsolutions.in",

    // Key Metrics
    monthlyRevenue: "1500000", // ₹15 Lakh
    annualRevenue: "18000000", // ₹1.8 Cr
    customers: "5000", // farmers
    cashInBank: "156000000", // ₹15.6 Cr

    // Financial Metrics
    // 2022 Financials
    revenue2022: "5000000", // ₹50 Lakh
    grossProfit2022: "3500000", // ₹35 Lakh
    operatingExpenses2022: "12000000", // ₹1.2 Cr
    ebitda2022: "-8500000", // -₹85 Lakh
    depreciation2022: "500000", // ₹5 Lakh
    ebit2022: "-9000000", // -₹90 Lakh
    interestExpense2022: "200000", // ₹2 Lakh
    profitBeforeTax2022: "-9200000", // -₹92 Lakh
    taxExpense2022: "0", // ₹0
    profitAfterTax2022: "-9200000", // -₹92 Lakh

    // 2023 Financials
    revenue2023: "18000000", // ₹1.8 Cr
    grossProfit2023: "12600000", // ₹1.26 Cr
    operatingExpenses2023: "28000000", // ₹2.8 Cr
    ebitda2023: "-15400000", // -₹1.54 Cr
    depreciation2023: "1000000", // ₹10 Lakh
    ebit2023: "-16400000", // -₹1.64 Cr
    interestExpense2023: "300000", // ₹3 Lakh
    profitBeforeTax2023: "-16700000", // -₹1.67 Cr
    taxExpense2023: "0", // ₹0
    profitAfterTax2023: "-16700000", // -₹1.67 Cr

    // Balance Sheet Items
    currentAssets: "180000000", // ₹18 Cr
    currentLiabilities: "24000000", // ₹2.4 Cr
    inventory: "8000000", // ₹80 Lakh
    accountsReceivable: "6000000", // ₹60 Lakh
    accountsPayable: "4000000", // ₹40 Lakh
    totalAssets: "200000000", // ₹20 Cr
    totalLiabilities: "30000000", // ₹3 Cr
    shareholderEquity: "170000000", // ₹17 Cr

    // Pitch Video
    pitchVideoUrl: "",
    pitchVideoDescription:
      "7-minute presentation showcasing our IoT-enabled smart farming solutions and farmer success stories.",

    // Key Achievements
    achievements: ["5000+ Farmers Network", "35% Yield Increase", "40% Water Savings", "Government Partnership"],

    // Unit Economics
    cac: "3600", // ₹3.6K per farmer
    ltv: "36000", // ₹36K per farmer
    averageSellingPrice: "3000", // ₹3K per month per farmer
    grossMargin: "70",

    // Market Position
    marketShare: "1.2",
    brandRecognition: "25",
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <Sprout className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{editFormData.companyName}</h1>
                <p className="text-gray-600">{editFormData.tagline}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="secondary">{editFormData.businessModel}</Badge>
                  <Badge variant="secondary">{editFormData.category}</Badge>
                  <Badge variant="secondary">IoT</Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    🌱 Agriculture
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
                  <p className="text-xs text-muted-foreground">+260% from last year</p>
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
                  <p className="text-xs text-muted-foreground">+18% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Farmers Network</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{editFormData.customers}</div>
                  <p className="text-xs text-muted-foreground">+500 this quarter</p>
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
                  <p className="text-xs text-muted-foreground">22 months runway</p>
                </CardContent>
              </Card>
            </div>

            {/* AgriTech Specific Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Crop Yield Increase</CardTitle>
                  <Leaf className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">35%</div>
                  <p className="text-xs text-muted-foreground">Average improvement</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Water Savings</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">40%</div>
                  <p className="text-xs text-muted-foreground">Reduced water usage</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">IoT Sensors Deployed</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">15K+</div>
                  <p className="text-xs text-muted-foreground">Across 5 states</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Farmer Satisfaction</CardTitle>
                  <Award className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-indigo-600">92%</div>
                  <p className="text-xs text-muted-foreground">Retention rate</p>
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
                    <Progress value={100} className="mt-2" />
                    <p className="text-xs text-gray-500 mt-1">Excellent (Target: 3:1+)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <div className="text-sm text-gray-500">Average Revenue Per Farmer</div>
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
                  <CardTitle>Market Segment Split</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      precisionFarming: { label: "Precision Farming", color: "#0088FE" },
                      cropMonitoring: { label: "Crop Monitoring", color: "#00C49F" },
                      supplyChain: { label: "Supply Chain", color: "#FFBB28" },
                      weatherAnalytics: { label: "Weather Analytics", color: "#FF8042" },
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
                              ? "bg-green-500"
                              : milestone.type === "product"
                                ? "bg-blue-500"
                                : milestone.type === "growth"
                                  ? "bg-purple-500"
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
                      <div className="text-3xl font-bold text-green-600">₹18 Cr</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Current Round Target</div>
                      <div className="text-xl font-semibold">₹40 Cr Series A</div>
                      <Progress value={30} className="mt-2" />
                      <p className="text-xs text-gray-500 mt-1">₹12 Cr committed</p>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-sm text-gray-500">Next Milestone</div>
                      <div className="text-sm font-medium">10K farmers network (Q3 2024)</div>
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
                          <span className="text-sm">Rural Innovation Fund</span>
                          <Badge variant="secondary">Lead</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">AgriTech Angels</span>
                          <Badge variant="secondary">Pre-Seed</Badge>
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
