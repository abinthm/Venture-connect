"use client"

import { useState, useMemo } from "react"
import { Search, Filter, Grid, List, Users, MapPin, ArrowUpDown, Eye } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Navbar } from "@/components/navbar"
import { startups } from "@/data/startups"

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [selectedStages, setSelectedStages] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedRiskLevels, setSelectedRiskLevels] = useState<string[]>([])
  const [selectedTraction, setSelectedTraction] = useState<string[]>([])
  const [selectedBusinessModels, setSelectedBusinessModels] = useState<string[]>([])
  const [selectedSocialImpact, setSelectedSocialImpact] = useState<string[]>([])
  const [selectedTechnologyFocus, setSelectedTechnologyFocus] = useState<string[]>([])
  const [fundingRange, setFundingRange] = useState([0, 100])
  const [revenueRange, setRevenueRange] = useState([0, 30])
  const [teamSizeRange, setTeamSizeRange] = useState([0, 150])
  const [foundingYearRange, setFoundingYearRange] = useState([2020, 2024])
  const [sortBy, setSortBy] = useState("relevance")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Get unique values for filter options
  const industries = [...new Set(startups.map((s) => s.industry))]
  const stages = [...new Set(startups.map((s) => s.stage))]
  const locations = [...new Set(startups.map((s) => s.location))]
  const riskLevels = [...new Set(startups.map((s) => s.riskLevel))]
  const tractionLevels = [...new Set(startups.map((s) => s.traction))]
  const businessModels = [...new Set(startups.map((s) => s.businessModel))]
  const socialImpactLevels = [...new Set(startups.map((s) => s.socialImpact))]
  const technologyFocuses = [...new Set(startups.map((s) => s.technologyFocus))]

  // Filter and sort startups
  const filteredAndSortedStartups = useMemo(() => {
    const filtered = startups.filter((startup) => {
      const matchesSearch =
        searchTerm === "" ||
        startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
        startup.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(startup.industry)
      const matchesStage = selectedStages.length === 0 || selectedStages.includes(startup.stage)
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(startup.location)
      const matchesRiskLevel = selectedRiskLevels.length === 0 || selectedRiskLevels.includes(startup.riskLevel)
      const matchesTraction = selectedTraction.length === 0 || selectedTraction.includes(startup.traction)
      const matchesBusinessModel =
        selectedBusinessModels.length === 0 || selectedBusinessModels.includes(startup.businessModel)
      const matchesSocialImpact =
        selectedSocialImpact.length === 0 || selectedSocialImpact.includes(startup.socialImpact)
      const matchesTechnologyFocus =
        selectedTechnologyFocus.length === 0 || selectedTechnologyFocus.includes(startup.technologyFocus)

      const fundingValue = Number.parseFloat(startup.fundingRange.split("-")[0])
      const matchesFunding = fundingValue >= fundingRange[0] && fundingValue <= fundingRange[1]

      const revenueValue = Number.parseFloat(startup.revenueRange.split("-")[0])
      const matchesRevenue = revenueValue >= revenueRange[0] && revenueValue <= revenueRange[1]

      const teamSizeValue = Number.parseFloat(startup.teamSize.split("-")[0])
      const matchesTeamSize = teamSizeValue >= teamSizeRange[0] && teamSizeValue <= teamSizeRange[1]

      const matchesFoundingYear =
        startup.foundedYear >= foundingYearRange[0] && startup.foundedYear <= foundingYearRange[1]

      return (
        matchesSearch &&
        matchesIndustry &&
        matchesStage &&
        matchesLocation &&
        matchesRiskLevel &&
        matchesTraction &&
        matchesBusinessModel &&
        matchesSocialImpact &&
        matchesTechnologyFocus &&
        matchesFunding &&
        matchesRevenue &&
        matchesTeamSize &&
        matchesFoundingYear
      )
    })

    // Sort the filtered results
    switch (sortBy) {
      case "funding-high":
        return filtered.sort(
          (a, b) =>
            Number.parseFloat(b.fundingRaised.replace(/[₹\s]/g, "")) -
            Number.parseFloat(a.fundingRaised.replace(/[₹\s]/g, "")),
        )
      case "funding-low":
        return filtered.sort(
          (a, b) =>
            Number.parseFloat(a.fundingRaised.replace(/[₹\s]/g, "")) -
            Number.parseFloat(b.fundingRaised.replace(/[₹\s]/g, "")),
        )
      case "growth":
        return filtered.sort((a, b) => b.growthRate - a.growthRate)
      case "revenue":
        return filtered.sort(
          (a, b) =>
            Number.parseFloat(b.revenue.replace(/[₹\s]/g, "")) - Number.parseFloat(a.revenue.replace(/[₹\s]/g, "")),
        )
      case "team-size":
        return filtered.sort((a, b) => b.employees - a.employees)
      case "newest":
        return filtered.sort((a, b) => b.foundedYear - a.foundedYear)
      default:
        return filtered
    }
  }, [
    searchTerm,
    selectedIndustries,
    selectedStages,
    selectedLocations,
    selectedRiskLevels,
    selectedTraction,
    selectedBusinessModels,
    selectedSocialImpact,
    selectedTechnologyFocus,
    fundingRange,
    revenueRange,
    teamSizeRange,
    foundingYearRange,
    sortBy,
  ])

  const handleIndustryChange = (industry: string, checked: boolean) => {
    if (checked) {
      setSelectedIndustries([...selectedIndustries, industry])
    } else {
      setSelectedIndustries(selectedIndustries.filter((i) => i !== industry))
    }
  }

  const handleStageChange = (stage: string, checked: boolean) => {
    if (checked) {
      setSelectedStages([...selectedStages, stage])
    } else {
      setSelectedStages(selectedStages.filter((s) => s !== stage))
    }
  }

  const handleLocationChange = (location: string, checked: boolean) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, location])
    } else {
      setSelectedLocations(selectedLocations.filter((l) => l !== location))
    }
  }

  const handleRiskLevelChange = (riskLevel: string, checked: boolean) => {
    if (checked) {
      setSelectedRiskLevels([...selectedRiskLevels, riskLevel])
    } else {
      setSelectedRiskLevels(selectedRiskLevels.filter((r) => r !== riskLevel))
    }
  }

  const handleTractionChange = (traction: string, checked: boolean) => {
    if (checked) {
      setSelectedTraction([...selectedTraction, traction])
    } else {
      setSelectedTraction(selectedTraction.filter((t) => t !== traction))
    }
  }

  const handleBusinessModelChange = (businessModel: string, checked: boolean) => {
    if (checked) {
      setSelectedBusinessModels([...selectedBusinessModels, businessModel])
    } else {
      setSelectedBusinessModels(selectedBusinessModels.filter((b) => b !== businessModel))
    }
  }

  const handleSocialImpactChange = (socialImpact: string, checked: boolean) => {
    if (checked) {
      setSelectedSocialImpact([...selectedSocialImpact, socialImpact])
    } else {
      setSelectedSocialImpact(selectedSocialImpact.filter((s) => s !== socialImpact))
    }
  }

  const handleTechnologyFocusChange = (technologyFocus: string, checked: boolean) => {
    if (checked) {
      setSelectedTechnologyFocus([...selectedTechnologyFocus, technologyFocus])
    } else {
      setSelectedTechnologyFocus(selectedTechnologyFocus.filter((t) => t !== technologyFocus))
    }
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setSelectedIndustries([])
    setSelectedStages([])
    setSelectedLocations([])
    setSelectedRiskLevels([])
    setSelectedTraction([])
    setSelectedBusinessModels([])
    setSelectedSocialImpact([])
    setSelectedTechnologyFocus([])
    setFundingRange([0, 100])
    setRevenueRange([0, 30])
    setTeamSizeRange([0, 150])
    setFoundingYearRange([2020, 2024])
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Your Next Investment Opportunity</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with innovative startups across India. Find the perfect match for your investment portfolio with our
            advanced filtering and matching system.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search startups by name, industry, or technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>
            </div>

            {/* Sort and View Controls */}
            <div className="flex gap-3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="funding-high">Funding (High to Low)</SelectItem>
                  <SelectItem value="funding-low">Funding (Low to High)</SelectItem>
                  <SelectItem value="growth">Growth Rate</SelectItem>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="team-size">Team Size</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-80 space-y-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Filters
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                    Clear All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Industry Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Industry</h3>
                  <div className="space-y-2">
                    {industries.map((industry) => (
                      <div key={industry} className="flex items-center space-x-2">
                        <Checkbox
                          id={`industry-${industry}`}
                          checked={selectedIndustries.includes(industry)}
                          onCheckedChange={(checked) => handleIndustryChange(industry, checked as boolean)}
                        />
                        <label htmlFor={`industry-${industry}`} className="text-sm">
                          {industry}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Stage Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Stage</h3>
                  <div className="space-y-2">
                    {stages.map((stage) => (
                      <div key={stage} className="flex items-center space-x-2">
                        <Checkbox
                          id={`stage-${stage}`}
                          checked={selectedStages.includes(stage)}
                          onCheckedChange={(checked) => handleStageChange(stage, checked as boolean)}
                        />
                        <label htmlFor={`stage-${stage}`} className="text-sm">
                          {stage}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Location Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Location</h3>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <div key={location} className="flex items-center space-x-2">
                        <Checkbox
                          id={`location-${location}`}
                          checked={selectedLocations.includes(location)}
                          onCheckedChange={(checked) => handleLocationChange(location, checked as boolean)}
                        />
                        <label htmlFor={`location-${location}`} className="text-sm">
                          {location}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Risk Level Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Risk Level</h3>
                  <div className="space-y-2">
                    {riskLevels.map((riskLevel) => (
                      <div key={riskLevel} className="flex items-center space-x-2">
                        <Checkbox
                          id={`risk-${riskLevel}`}
                          checked={selectedRiskLevels.includes(riskLevel)}
                          onCheckedChange={(checked) => handleRiskLevelChange(riskLevel, checked as boolean)}
                        />
                        <label htmlFor={`risk-${riskLevel}`} className="text-sm">
                          {riskLevel}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Traction Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Traction</h3>
                  <div className="space-y-2">
                    {tractionLevels.map((traction) => (
                      <div key={traction} className="flex items-center space-x-2">
                        <Checkbox
                          id={`traction-${traction}`}
                          checked={selectedTraction.includes(traction)}
                          onCheckedChange={(checked) => handleTractionChange(traction, checked as boolean)}
                        />
                        <label htmlFor={`traction-${traction}`} className="text-sm">
                          {traction}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Business Model Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Business Model</h3>
                  <div className="space-y-2">
                    {businessModels.map((businessModel) => (
                      <div key={businessModel} className="flex items-center space-x-2">
                        <Checkbox
                          id={`business-${businessModel}`}
                          checked={selectedBusinessModels.includes(businessModel)}
                          onCheckedChange={(checked) => handleBusinessModelChange(businessModel, checked as boolean)}
                        />
                        <label htmlFor={`business-${businessModel}`} className="text-sm">
                          {businessModel}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Social Impact Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Social Impact</h3>
                  <div className="space-y-2">
                    {socialImpactLevels.map((socialImpact) => (
                      <div key={socialImpact} className="flex items-center space-x-2">
                        <Checkbox
                          id={`social-${socialImpact}`}
                          checked={selectedSocialImpact.includes(socialImpact)}
                          onCheckedChange={(checked) => handleSocialImpactChange(socialImpact, checked as boolean)}
                        />
                        <label htmlFor={`social-${socialImpact}`} className="text-sm">
                          {socialImpact}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Technology Focus Filter */}
                <div>
                  <h3 className="font-semibold mb-3">Technology Focus</h3>
                  <div className="space-y-2">
                    {technologyFocuses.map((technologyFocus) => (
                      <div key={technologyFocus} className="flex items-center space-x-2">
                        <Checkbox
                          id={`tech-${technologyFocus}`}
                          checked={selectedTechnologyFocus.includes(technologyFocus)}
                          onCheckedChange={(checked) =>
                            handleTechnologyFocusChange(technologyFocus, checked as boolean)
                          }
                        />
                        <label htmlFor={`tech-${technologyFocus}`} className="text-sm">
                          {technologyFocus}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Funding Range */}
                <div>
                  <h3 className="font-semibold mb-3">Funding Range (₹ Cr)</h3>
                  <div className="px-2">
                    <Slider value={fundingRange} onValueChange={setFundingRange} max={100} step={5} className="mb-2" />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>₹{fundingRange[0]} Cr</span>
                      <span>₹{fundingRange[1]} Cr</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Revenue Range */}
                <div>
                  <h3 className="font-semibold mb-3">Revenue Range (₹ Cr)</h3>
                  <div className="px-2">
                    <Slider value={revenueRange} onValueChange={setRevenueRange} max={30} step={1} className="mb-2" />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>₹{revenueRange[0]} Cr</span>
                      <span>₹{revenueRange[1]} Cr</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Team Size Range */}
                <div>
                  <h3 className="font-semibold mb-3">Team Size</h3>
                  <div className="px-2">
                    <Slider
                      value={teamSizeRange}
                      onValueChange={setTeamSizeRange}
                      max={150}
                      step={10}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{teamSizeRange[0]}</span>
                      <span>{teamSizeRange[1]}</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Founding Year Range */}
                <div>
                  <h3 className="font-semibold mb-3">Founded Year</h3>
                  <div className="px-2">
                    <Slider
                      value={foundingYearRange}
                      onValueChange={setFoundingYearRange}
                      min={2020}
                      max={2024}
                      step={1}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{foundingYearRange[0]}</span>
                      <span>{foundingYearRange[1]}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {filteredAndSortedStartups.length} Startups Found
              </h2>
              <p className="text-gray-600">Showing results based on your search and filter criteria</p>
            </div>

            {/* Startup Cards */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 lg:grid-cols-2 gap-6" : "space-y-4"}>
              {filteredAndSortedStartups.map((startup) => (
                <Card key={startup.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className={viewMode === "list" ? "flex items-center space-x-6" : "space-y-4"}>
                      {/* Logo and Basic Info */}
                      <div
                        className={viewMode === "list" ? "flex items-center space-x-4" : "flex items-start space-x-4"}
                      >
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

                      {/* Metrics and Details */}
                      <div className={viewMode === "list" ? "flex-1" : ""}>
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

                        {/* Growth and Risk Indicators */}
                        <div className="space-y-3 mb-4">
                          <div>
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
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {startup.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Founders */}
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

                        {/* Action Buttons */}
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredAndSortedStartups.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No startups found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search criteria or filters to find more results.
                </p>
                <Button onClick={clearAllFilters} variant="outline">
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
