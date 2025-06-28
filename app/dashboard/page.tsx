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
  Upload,
  Plus,
  X,
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

// Sample data
const revenueData = [
  { year: "2020", revenue: 10000000, projected: null },
  { year: "2021", revenue: 23300000, projected: null },
  { year: "2022", revenue: 37500000, projected: null },
  { year: "2023", revenue: 60000000, projected: null },
  { year: "2024", revenue: null, projected: 100000000 },
  { year: "2025", revenue: null, projected: 150000000 },
]

const marketSplitData = [
  { name: "North India", value: 45, color: "#0088FE" },
  { name: "South India", value: 30, color: "#00C49F" },
  { name: "West India", value: 20, color: "#FFBB28" },
  { name: "East India", value: 5, color: "#FF8042" },
]

const salesChannelData = [
  { channel: "Direct Online", percentage: 60, revenue: 36000000 },
  { channel: "Retail Partners", percentage: 25, revenue: 15000000 },
  { channel: "B2B Sales", percentage: 15, revenue: 9000000 },
]

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 35,
    bio: "Former VP at Flipkart, 10+ years in tech leadership",
  },
  {
    name: "Arjun Patel",
    role: "CTO & Co-Founder",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 30,
    bio: "Ex-Ola engineer, AI/ML expert with 8 years experience",
  },
  {
    name: "Sneha Gupta",
    role: "Head of Sales",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 5,
    bio: "Former Paytm director, scaled teams from 5 to 50+",
  },
  {
    name: "Rohit Kumar",
    role: "Head of Product",
    image: "/placeholder.svg?height=80&width=80",
    linkedin: "#",
    ownership: 8,
    bio: "Product leader from Zomato, launched 15+ successful features",
  },
]

const fundingHistory = [
  {
    round: "Pre-Seed",
    date: "Jan 2021",
    amount: "₹2.1 Cr",
    valuation: "₹16.6 Cr",
    leadInvestor: "Angel Investors",
    useOfFunds: "Product development, initial team",
  },
  {
    round: "Seed",
    date: "Aug 2022",
    amount: "₹10 Cr",
    valuation: "₹66.6 Cr",
    leadInvestor: "Venture Capital Partners",
    useOfFunds: "Market expansion, team scaling",
  },
  {
    round: "Series A",
    date: "Mar 2024",
    amount: "₹41.6 Cr",
    valuation: "₹208 Cr",
    leadInvestor: "Growth Equity Fund",
    useOfFunds: "Pan-India expansion, R&D",
  },
]

const milestones = [
  { date: "Jan 2021", event: "Company Founded", type: "founding" },
  { date: "Mar 2021", event: "First Product Launch", type: "product" },
  { date: "Aug 2021", event: "Reached 1K Users", type: "growth" },
  { date: "Jan 2022", event: "Series Seed Funding", type: "funding" },
  { date: "Jun 2022", event: "Launched in South India", type: "expansion" },
  { date: "Dec 2022", event: "10K Users Milestone", type: "growth" },
  { date: "Mar 2023", event: "Strategic Partnership with TCS", type: "partnership" },
  { date: "Sep 2023", event: "Series A Funding", type: "funding" },
]

export default function StartupDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editFormData, setEditFormData] = useState({
    // Company Basics
    companyName: "TechFlow Solutions",
    tagline: "AI-Powered Business Analytics Platform",
    valuation: "2080000000", // ₹208 Cr in paise
    description:
      "TechFlow Solutions is revolutionizing how Indian businesses analyze and act on their data. Our AI-powered platform provides real-time insights, predictive analytics, and automated reporting that helps companies make data-driven decisions faster than ever before.",
    usp: "The only platform that combines real-time data processing with AI-driven insights, reducing analysis time by 90% while increasing accuracy by 40%.",
    businessModel: "SaaS",
    category: "B2B",
    website: "https://techflow.in",

    // Key Metrics
    monthlyRevenue: "5666667", // ₹56.67 Lakh
    annualRevenue: "68000000", // ₹6.8 Cr
    customers: "2847",
    cashInBank: "266666667", // ₹26.67 Cr

    // Financial Metrics
    // 2021 Financials
    revenue2021: "23300000", // ₹2.33 Cr
    grossProfit2021: "18200000", // ₹1.82 Cr
    operatingExpenses2021: "13866667", // ₹1.39 Cr
    ebitda2021: "4333333", // ₹43.33 Lakh
    depreciation2021: "583333", // ₹5.83 Lakh
    ebit2021: "3750000", // ₹37.5 Lakh
    interestExpense2021: "166667", // ₹1.67 Lakh
    profitBeforeTax2021: "3583333", // ₹35.83 Lakh
    taxExpense2021: "916667", // ₹9.17 Lakh
    profitAfterTax2021: "2666667", // ₹26.67 Lakh

    // 2022 Financials
    revenue2022: "37500000", // ₹3.75 Cr
    grossProfit2022: "29250000", // ₹2.93 Cr
    operatingExpenses2022: "21333333", // ₹2.13 Cr
    ebitda2022: "7916667", // ₹79.17 Lakh
    depreciation2022: "1000000", // ₹10 Lakh
    ebit2022: "6916667", // ₹69.17 Lakh
    interestExpense2022: "250000", // ₹2.5 Lakh
    profitBeforeTax2022: "6666667", // ₹66.67 Lakh
    taxExpense2022: "1666667", // ₹16.67 Lakh
    profitAfterTax2022: "5000000", // ₹50 Lakh

    // 2023 Financials
    revenue2023: "60000000", // ₹6 Cr
    grossProfit2023: "46800000", // ₹4.68 Cr
    operatingExpenses2023: "32800000", // ₹3.28 Cr
    ebitda2023: "14000000", // ₹1.4 Cr
    depreciation2023: "1500000", // ₹15 Lakh
    ebit2023: "12500000", // ₹1.25 Cr
    interestExpense2023: "333333", // ₹3.33 Lakh
    profitBeforeTax2023: "12166667", // ₹1.22 Cr
    taxExpense2023: "3083333", // ₹30.83 Lakh
    profitAfterTax2023: "9083333", // ₹90.83 Lakh

    // Balance Sheet Items
    currentAssets: "350000000", // ₹35 Cr
    currentLiabilities: "74166667", // ₹7.42 Cr
    inventory: "20416667", // ₹2.04 Cr
    accountsReceivable: "13000000", // ₹1.3 Cr
    accountsPayable: "7416667", // ₹74.17 Lakh
    totalAssets: "566666667", // ₹56.67 Cr
    totalLiabilities: "100000000", // ₹10 Cr
    shareholderEquity: "466666667", // ₹46.67 Cr

    // Pitch Video
    pitchVideoUrl: "",
    pitchVideoDescription:
      "3-minute pitch presentation highlighting our key value propositions and Indian market opportunity.",

    // Key Achievements
    achievements: ["Best AI Startup India 2023", "2,847+ Active Users", "15+ States", "Fortune 500 Indian Clients"],

    // Unit Economics
    cac: "20417", // ₹204.17
    ltv: "245000", // ₹2.45 Lakh
    averageSellingPrice: "7417", // ₹74.17
    grossMargin: "78",

    // Market Position
    marketShare: "2.3",
    brandRecognition: "34",
    customerSatisfaction: "92",
    totalAddressableMarket: "3750000000000", // ₹37,500 Cr
    serviceableAddressableMarket: "683333333333", // ₹6,833 Cr
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
    // Here you would typically save to your backend/database
    console.log("Saving profile data:", editFormData)
    setIsEditDialogOpen(false)
    // You could add a toast notification here
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
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{editFormData.companyName}</h1>
                <p className="text-gray-600">{editFormData.tagline}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <Badge variant="secondary">{editFormData.businessModel}</Badge>
                  <Badge variant="secondary">{editFormData.category}</Badge>
                  <Badge variant="secondary">AI/ML</Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    🇮🇳 India
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
                                <SelectItem value="SaaS">SaaS</SelectItem>
                                <SelectItem value="E-commerce">E-commerce</SelectItem>
                                <SelectItem value="Marketplace">Marketplace</SelectItem>
                                <SelectItem value="Hardware">Hardware</SelectItem>
                                <SelectItem value="Consulting">Consulting</SelectItem>
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
                                <SelectItem value="B2B">B2B</SelectItem>
                                <SelectItem value="B2C">B2C</SelectItem>
                                <SelectItem value="B2B2C">B2B2C</SelectItem>
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

                      <TabsContent value="metrics" className="space-y-4">
                        <h3 className="text-lg font-semibold">Key Metrics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="annualRevenue">Annual Revenue (₹)</Label>
                            <Input
                              id="annualRevenue"
                              type="number"
                              value={editFormData.annualRevenue}
                              onChange={(e) => handleFormUpdate("annualRevenue", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="monthlyRevenue">Monthly Recurring Revenue (₹)</Label>
                            <Input
                              id="monthlyRevenue"
                              type="number"
                              value={editFormData.monthlyRevenue}
                              onChange={(e) => handleFormUpdate("monthlyRevenue", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="customers">Active Customers</Label>
                            <Input
                              id="customers"
                              type="number"
                              value={editFormData.customers}
                              onChange={(e) => handleFormUpdate("customers", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="cashInBank">Cash in Bank (₹)</Label>
                            <Input
                              id="cashInBank"
                              type="number"
                              value={editFormData.cashInBank}
                              onChange={(e) => handleFormUpdate("cashInBank", e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-md font-semibold">Balance Sheet</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="currentAssets">Current Assets (₹)</Label>
                              <Input
                                id="currentAssets"
                                type="number"
                                value={editFormData.currentAssets}
                                onChange={(e) => handleFormUpdate("currentAssets", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="currentLiabilities">Current Liabilities (₹)</Label>
                              <Input
                                id="currentLiabilities"
                                type="number"
                                value={editFormData.currentLiabilities}
                                onChange={(e) => handleFormUpdate("currentLiabilities", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="inventory">Inventory (₹)</Label>
                              <Input
                                id="inventory"
                                type="number"
                                value={editFormData.inventory}
                                onChange={(e) => handleFormUpdate("inventory", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="accountsReceivable">Accounts Receivable (₹)</Label>
                              <Input
                                id="accountsReceivable"
                                type="number"
                                value={editFormData.accountsReceivable}
                                onChange={(e) => handleFormUpdate("accountsReceivable", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="accountsPayable">Accounts Payable (₹)</Label>
                              <Input
                                id="accountsPayable"
                                type="number"
                                value={editFormData.accountsPayable}
                                onChange={(e) => handleFormUpdate("accountsPayable", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="shareholderEquity">Shareholder Equity (₹)</Label>
                              <Input
                                id="shareholderEquity"
                                type="number"
                                value={editFormData.shareholderEquity}
                                onChange={(e) => handleFormUpdate("shareholderEquity", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="financials" className="space-y-6">
                        <h3 className="text-lg font-semibold">Financial Performance</h3>

                        {/* 2021 Financials */}
                        <div className="space-y-4">
                          <h4 className="text-md font-semibold">2021 Financials</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="revenue2021">Revenue (₹)</Label>
                              <Input
                                id="revenue2021"
                                type="number"
                                value={editFormData.revenue2021}
                                onChange={(e) => handleFormUpdate("revenue2021", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="grossProfit2021">Gross Profit (₹)</Label>
                              <Input
                                id="grossProfit2021"
                                type="number"
                                value={editFormData.grossProfit2021}
                                onChange={(e) => handleFormUpdate("grossProfit2021", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="operatingExpenses2021">Operating Expenses (₹)</Label>
                              <Input
                                id="operatingExpenses2021"
                                type="number"
                                value={editFormData.operatingExpenses2021}
                                onChange={(e) => handleFormUpdate("operatingExpenses2021", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="ebitda2021">EBITDA (₹)</Label>
                              <Input
                                id="ebitda2021"
                                type="number"
                                value={editFormData.ebitda2021}
                                onChange={(e) => handleFormUpdate("ebitda2021", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="depreciation2021">Depreciation (₹)</Label>
                              <Input
                                id="depreciation2021"
                                type="number"
                                value={editFormData.depreciation2021}
                                onChange={(e) => handleFormUpdate("depreciation2021", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="ebit2021">EBIT (₹)</Label>
                              <Input
                                id="ebit2021"
                                type="number"
                                value={editFormData.ebit2021}
                                onChange={(e) => handleFormUpdate("ebit2021", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="interestExpense2021">Interest Expense (₹)</Label>
                              <Input
                                id="interestExpense2021"
                                type="number"
                                value={editFormData.interestExpense2021}
                                onChange={(e) => handleFormUpdate("interestExpense2021", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="profitBeforeTax2021">Profit Before Tax (₹)</Label>
                              <Input
                                id="profitBeforeTax2021"
                                type="number"
                                value={editFormData.profitBeforeTax2021}
                                onChange={(e) => handleFormUpdate("profitBeforeTax2021", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="taxExpense2021">Tax Expense (₹)</Label>
                              <Input
                                id="taxExpense2021"
                                type="number"
                                value={editFormData.taxExpense2021}
                                onChange={(e) => handleFormUpdate("taxExpense2021", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="profitAfterTax2021">Profit After Tax (₹)</Label>
                              <Input
                                id="profitAfterTax2021"
                                type="number"
                                value={editFormData.profitAfterTax2021}
                                onChange={(e) => handleFormUpdate("profitAfterTax2021", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        {/* 2022 Financials */}
                        <div className="space-y-4">
                          <h4 className="text-md font-semibold">2022 Financials</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="revenue2022">Revenue (₹)</Label>
                              <Input
                                id="revenue2022"
                                type="number"
                                value={editFormData.revenue2022}
                                onChange={(e) => handleFormUpdate("revenue2022", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="grossProfit2022">Gross Profit (₹)</Label>
                              <Input
                                id="grossProfit2022"
                                type="number"
                                value={editFormData.grossProfit2022}
                                onChange={(e) => handleFormUpdate("grossProfit2022", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="operatingExpenses2022">Operating Expenses (₹)</Label>
                              <Input
                                id="operatingExpenses2022"
                                type="number"
                                value={editFormData.operatingExpenses2022}
                                onChange={(e) => handleFormUpdate("operatingExpenses2022", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="ebitda2022">EBITDA (₹)</Label>
                              <Input
                                id="ebitda2022"
                                type="number"
                                value={editFormData.ebitda2022}
                                onChange={(e) => handleFormUpdate("ebitda2022", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="depreciation2022">Depreciation (₹)</Label>
                              <Input
                                id="depreciation2022"
                                type="number"
                                value={editFormData.depreciation2022}
                                onChange={(e) => handleFormUpdate("depreciation2022", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="ebit2022">EBIT (₹)</Label>
                              <Input
                                id="ebit2022"
                                type="number"
                                value={editFormData.ebit2022}
                                onChange={(e) => handleFormUpdate("ebit2022", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="interestExpense2022">Interest Expense (₹)</Label>
                              <Input
                                id="interestExpense2022"
                                type="number"
                                value={editFormData.interestExpense2022}
                                onChange={(e) => handleFormUpdate("interestExpense2022", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="profitBeforeTax2022">Profit Before Tax (₹)</Label>
                              <Input
                                id="profitBeforeTax2022"
                                type="number"
                                value={editFormData.profitBeforeTax2022}
                                onChange={(e) => handleFormUpdate("profitBeforeTax2022", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="taxExpense2022">Tax Expense (₹)</Label>
                              <Input
                                id="taxExpense2022"
                                type="number"
                                value={editFormData.taxExpense2022}
                                onChange={(e) => handleFormUpdate("taxExpense2022", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="profitAfterTax2022">Profit After Tax (₹)</Label>
                              <Input
                                id="profitAfterTax2022"
                                type="number"
                                value={editFormData.profitAfterTax2022}
                                onChange={(e) => handleFormUpdate("profitAfterTax2022", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                        {/* 2023 Financials */}
                        <div className="space-y-4">
                          <h4 className="text-md font-semibold">2023 Financials</h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <Label htmlFor="revenue2023">Revenue (₹)</Label>
                              <Input
                                id="revenue2023"
                                type="number"
                                value={editFormData.revenue2023}
                                onChange={(e) => handleFormUpdate("revenue2023", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="grossProfit2023">Gross Profit (₹)</Label>
                              <Input
                                id="grossProfit2023"
                                type="number"
                                value={editFormData.grossProfit2023}
                                onChange={(e) => handleFormUpdate("grossProfit2023", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="operatingExpenses2023">Operating Expenses (₹)</Label>
                              <Input
                                id="operatingExpenses2023"
                                type="number"
                                value={editFormData.operatingExpenses2023}
                                onChange={(e) => handleFormUpdate("operatingExpenses2023", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="ebitda2023">EBITDA (₹)</Label>
                              <Input
                                id="ebitda2023"
                                type="number"
                                value={editFormData.ebitda2023}
                                onChange={(e) => handleFormUpdate("ebitda2023", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="depreciation2023">Depreciation (₹)</Label>
                              <Input
                                id="depreciation2023"
                                type="number"
                                value={editFormData.depreciation2023}
                                onChange={(e) => handleFormUpdate("depreciation2023", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="ebit2023">EBIT (₹)</Label>
                              <Input
                                id="ebit2023"
                                type="number"
                                value={editFormData.ebit2023}
                                onChange={(e) => handleFormUpdate("ebit2023", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="interestExpense2023">Interest Expense (₹)</Label>
                              <Input
                                id="interestExpense2023"
                                type="number"
                                value={editFormData.interestExpense2023}
                                onChange={(e) => handleFormUpdate("interestExpense2023", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="profitBeforeTax2023">Profit Before Tax (₹)</Label>
                              <Input
                                id="profitBeforeTax2023"
                                type="number"
                                value={editFormData.profitBeforeTax2023}
                                onChange={(e) => handleFormUpdate("profitBeforeTax2023", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="taxExpense2023">Tax Expense (₹)</Label>
                              <Input
                                id="taxExpense2023"
                                type="number"
                                value={editFormData.taxExpense2023}
                                onChange={(e) => handleFormUpdate("taxExpense2023", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="profitAfterTax2023">Profit After Tax (₹)</Label>
                              <Input
                                id="profitAfterTax2023"
                                type="number"
                                value={editFormData.profitAfterTax2023}
                                onChange={(e) => handleFormUpdate("profitAfterTax2023", e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="content" className="space-y-4">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Pitch Video</h3>
                          <div className="grid grid-cols-1 gap-4">
                            <div>
                              <Label htmlFor="pitchVideoUrl">Pitch Video URL</Label>
                              <Input
                                id="pitchVideoUrl"
                                placeholder="https://youtube.com/watch?v=..."
                                value={editFormData.pitchVideoUrl}
                                onChange={(e) => handleFormUpdate("pitchVideoUrl", e.target.value)}
                              />
                            </div>
                            <div>
                              <Label htmlFor="pitchVideoDescription">Video Description</Label>
                              <Textarea
                                id="pitchVideoDescription"
                                rows={2}
                                value={editFormData.pitchVideoDescription}
                                onChange={(e) => handleFormUpdate("pitchVideoDescription", e.target.value)}
                              />
                            </div>
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                              <Upload className="mx-auto h-12 w-12 text-gray-400" />
                              <div className="mt-2">
                                <Button variant="outline">Upload Video File</Button>
                              </div>
                              <p className="text-sm text-gray-500 mt-2">Or drag and drop your video file here</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Key Achievements</h3>
                          <div className="space-y-2">
                            {editFormData.achievements.map((achievement, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Input
                                  value={achievement}
                                  onChange={(e) => handleAchievementUpdate(index, e.target.value)}
                                  placeholder="Enter achievement"
                                />
                                <Button variant="outline" size="sm" onClick={() => removeAchievement(index)}>
                                  <X className="w-4 h-4" />
                                </Button>
                              </div>
                            ))}
                            <Button variant="outline" onClick={addAchievement} className="w-full bg-transparent">
                              <Plus className="w-4 h-4 mr-2" />
                              Add Achievement
                            </Button>
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="economics" className="space-y-4">
                        <h3 className="text-lg font-semibold">Unit Economics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="cac">Customer Acquisition Cost (₹)</Label>
                            <Input
                              id="cac"
                              type="number"
                              value={editFormData.cac}
                              onChange={(e) => handleFormUpdate("cac", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="ltv">Lifetime Value (₹)</Label>
                            <Input
                              id="ltv"
                              type="number"
                              value={editFormData.ltv}
                              onChange={(e) => handleFormUpdate("ltv", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="averageSellingPrice">Average Selling Price (₹)</Label>
                            <Input
                              id="averageSellingPrice"
                              type="number"
                              value={editFormData.averageSellingPrice}
                              onChange={(e) => handleFormUpdate("averageSellingPrice", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="grossMargin">Gross Margin (%)</Label>
                            <Input
                              id="grossMargin"
                              type="number"
                              value={editFormData.grossMargin}
                              onChange={(e) => handleFormUpdate("grossMargin", e.target.value)}
                            />
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="market" className="space-y-4">
                        <h3 className="text-lg font-semibold">Market Position</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="marketShare">Market Share (%)</Label>
                            <Input
                              id="marketShare"
                              type="number"
                              step="0.1"
                              value={editFormData.marketShare}
                              onChange={(e) => handleFormUpdate("marketShare", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="brandRecognition">Brand Recognition (%)</Label>
                            <Input
                              id="brandRecognition"
                              type="number"
                              value={editFormData.brandRecognition}
                              onChange={(e) => handleFormUpdate("brandRecognition", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="customerSatisfaction">Customer Satisfaction (%)</Label>
                            <Input
                              id="customerSatisfaction"
                              type="number"
                              value={editFormData.customerSatisfaction}
                              onChange={(e) => handleFormUpdate("customerSatisfaction", e.target.value)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="totalAddressableMarket">Total Addressable Market (₹)</Label>
                            <Input
                              id="totalAddressableMarket"
                              type="number"
                              value={editFormData.totalAddressableMarket}
                              onChange={(e) => handleFormUpdate("totalAddressableMarket", e.target.value)}
                            />
                          </div>
                          <div className="md:col-span-2">
                            <Label htmlFor="serviceableAddressableMarket">Serviceable Addressable Market (₹)</Label>
                            <Input
                              id="serviceableAddressableMarket"
                              type="number"
                              value={editFormData.serviceableAddressableMarket}
                              onChange={(e) => handleFormUpdate("serviceableAddressableMarket", e.target.value)}
                            />
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>

                    {/* Action Buttons */}
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
                  <p className="text-xs text-muted-foreground">+60% from last year</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Recurring Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {formatIndianCurrency(Number.parseInt(editFormData.monthlyRevenue))}
                  </div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {Number.parseInt(editFormData.customers).toLocaleString("en-IN")}
                  </div>
                  <p className="text-xs text-muted-foreground">+18% from last month</p>
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
                  <p className="text-xs text-muted-foreground">18 months runway</p>
                </CardContent>
              </Card>
            </div>

            {/* Financial Performance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">EBITDA (2023)</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    {formatIndianCurrency(Number.parseInt(editFormData.ebitda2023))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {(
                      ((Number.parseInt(editFormData.ebitda2023) - Number.parseInt(editFormData.ebitda2022)) /
                        Number.parseInt(editFormData.ebitda2022)) *
                      100
                    ).toFixed(0)}
                    % from 2022
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Profit Before Tax (2023)</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600">
                    {formatIndianCurrency(Number.parseInt(editFormData.profitBeforeTax2023))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {(
                      ((Number.parseInt(editFormData.profitBeforeTax2023) -
                        Number.parseInt(editFormData.profitBeforeTax2022)) /
                        Number.parseInt(editFormData.profitBeforeTax2022)) *
                      100
                    ).toFixed(0)}
                    % from 2022
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Profit After Tax (2023)</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-600">
                    {formatIndianCurrency(Number.parseInt(editFormData.profitAfterTax2023))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {(
                      ((Number.parseInt(editFormData.profitAfterTax2023) -
                        Number.parseInt(editFormData.profitAfterTax2022)) /
                        Number.parseInt(editFormData.profitAfterTax2022)) *
                      100
                    ).toFixed(0)}
                    % from 2022
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Current Ratio</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">
                    {(
                      Number.parseInt(editFormData.currentAssets) / Number.parseInt(editFormData.currentLiabilities)
                    ).toFixed(1)}
                  </div>
                  <p className="text-xs text-muted-foreground">Excellent liquidity</p>
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
                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                      <p className="text-orange-800">{editFormData.usp}</p>
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
                    {editFormData.pitchVideoUrl ? (
                      <div className="w-full h-full rounded-lg overflow-hidden">
                        <iframe src={editFormData.pitchVideoUrl} className="w-full h-full" allowFullScreen />
                      </div>
                    ) : (
                      <Button size="lg" className="rounded-full w-16 h-16">
                        <Play className="w-6 h-6" />
                      </Button>
                    )}
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
                        ₹{Number.parseInt(editFormData.cac).toLocaleString("en-IN")}
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
                    <Progress value={85} className="mt-2" />
                    <p className="text-xs text-gray-500 mt-1">Excellent (Target: 3:1+)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <div className="text-sm text-gray-500">Average Selling Price</div>
                      <div className="text-lg font-semibold">
                        ₹{Number.parseInt(editFormData.averageSellingPrice).toLocaleString("en-IN")}/month
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

            {/* Comprehensive Financial Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>EBITDA Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      ebitda: {
                        label: "EBITDA",
                        color: "hsl(var(--chart-1))",
                      },
                      ebit: {
                        label: "EBIT",
                        color: "hsl(var(--chart-2))",
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
                        <Bar dataKey="ebitda" fill="var(--color-ebitda)" />
                        <Bar dataKey="ebit" fill="var(--color-ebit)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>

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
            </div>

            {/* Financial Health */}
            <Card>
              <CardHeader>
                <CardTitle>Financial Health & Balance Sheet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Assets</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Current Assets</span>
                        <span className="font-semibold">
                          {formatIndianCurrency(Number.parseInt(editFormData.currentAssets))}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Inventory</span>
                        <span className="font-semibold">
                          {formatIndianCurrency(Number.parseInt(editFormData.inventory))}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Accounts Receivable</span>
                        <span className="font-semibold">
                          {formatIndianCurrency(Number.parseInt(editFormData.accountsReceivable))}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Liabilities</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Current Liabilities</span>
                        <span className="font-semibold">
                          {formatIndianCurrency(Number.parseInt(editFormData.currentLiabilities))}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Accounts Payable</span>
                        <span className="font-semibold">
                          {formatIndianCurrency(Number.parseInt(editFormData.accountsPayable))}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Key Ratios</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Current Ratio</span>
                        <span className="font-semibold text-green-600">
                          {(
                            Number.parseInt(editFormData.currentAssets) /
                            Number.parseInt(editFormData.currentLiabilities)
                          ).toFixed(1)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Debt-to-Equity</span>
                        <span className="font-semibold">
                          {(
                            Number.parseInt(editFormData.currentLiabilities) /
                            Number.parseInt(editFormData.shareholderEquity)
                          ).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">EBITDA Margin (2023)</span>
                        <span className="font-semibold text-blue-600">
                          {(
                            (Number.parseInt(editFormData.ebitda2023) / Number.parseInt(editFormData.revenue2023)) *
                            100
                          ).toFixed(1)}
                          %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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

            <Card>
              <CardHeader>
                <CardTitle>Ownership Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <ChartContainer
                      config={{
                        founders: { label: "Founders", color: "hsl(var(--chart-1))" },
                        employees: { label: "Employees", color: "hsl(var(--chart-2))" },
                        investors: { label: "Investors", color: "hsl(var(--chart-3))" },
                        esop: { label: "ESOP Pool", color: "hsl(var(--chart-4))" },
                      }}
                      className="h-[250px]"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: "Founders", value: 65, fill: "var(--color-founders)" },
                              { name: "Employees", value: 13, fill: "var(--color-employees)" },
                              { name: "Investors", value: 17, fill: "var(--color-investors)" },
                              { name: "ESOP Pool", value: 5, fill: "var(--color-esop)" },
                            ]}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            dataKey="value"
                            label={({ name, value }) => `${name}: ${value}%`}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Cap Table Summary</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Founders</span>
                          <span className="font-semibold">65%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Investors</span>
                          <span className="font-semibold">17%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Employees</span>
                          <span className="font-semibold">13%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">ESOP Pool</span>
                          <span className="font-semibold">5%</span>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2">Team Growth</h4>
                      <p className="text-sm text-gray-600">
                        Started with 2 founders in 2021, now 23 full-time employees across engineering, sales, and
                        operations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                      northIndia: { label: "North India", color: "#0088FE" },
                      southIndia: { label: "South India", color: "#00C49F" },
                      westIndia: { label: "West India", color: "#FFBB28" },
                      eastIndia: { label: "East India", color: "#FF8042" },
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

            <Card>
              <CardHeader>
                <CardTitle>Where We Operate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Online Presence</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Company Website</span>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-xs text-gray-500">45K monthly visitors</div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Amazon Web Services</span>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-xs text-gray-500">Featured partner</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Retail Partners</h4>
                    <div className="space-y-2">
                      <div className="text-sm">Reliance Digital</div>
                      <div className="text-sm">Croma Electronics</div>
                      <div className="text-sm">Vijay Sales</div>
                      <div className="text-xs text-gray-500 mt-2">12 retail partners total</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Office Locations</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Bangalore, KA (HQ)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Mumbai, MH</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">Delhi, DL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                      <div className="text-3xl font-bold text-green-600">₹53.7 Cr</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Current Round Target</div>
                      <div className="text-xl font-semibold">₹83.3 Cr Series B</div>
                      <Progress value={35} className="mt-2" />
                      <p className="text-xs text-gray-500 mt-1">₹29.2 Cr committed</p>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="text-sm text-gray-500">Next Milestone</div>
                      <div className="text-sm font-medium">₹16.7 Cr ARR (Q2 2024)</div>
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
                          <span className="text-sm">Venture Capital Partners</span>
                          <Badge variant="secondary">Lead</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Growth Equity Fund</span>
                          <Badge variant="secondary">Series A</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Indian Angel Network</span>
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
