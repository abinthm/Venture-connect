"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2 } from "lucide-react"

interface PortfolioCompany {
  name: string
  category: string
  stage_invested: string
  current_status: string
  outcome: string
}

interface ExperienceData {
  yearsInvesting: string
  numberOfInvestments: number
  successfulExits: number
  portfolioCompanies: PortfolioCompany[]
  professionalBackground: string[]
  industryExpertise: string[]
}

interface ExperienceStepProps {
  data: any
  updateData: (data: any) => void
}

export function ExperienceStep({ data, updateData }: ExperienceStepProps) {
  const [newPortfolioCompany, setNewPortfolioCompany] = useState({
    name: "",
    category: "",
    stage_invested: "",
    current_status: "",
    outcome: "",
  })

  const professionalBackgrounds = [
    "Technology",
    "Finance",
    "Operations",
    "Marketing",
    "Sales",
    "Consulting",
    "Legal",
    "Healthcare",
    "Education",
    "Manufacturing",
  ]

  const industryExpertises = [
    "AgriTech",
    "FinTech",
    "HealthTech",
    "EdTech",
    "CleanTech",
    "AI/ML",
    "SaaS",
    "E-commerce",
    "Enterprise Software",
    "Consumer",
  ]

  const handleBackgroundChange = (background: string, checked: boolean) => {
    const currentBackgrounds = data.professionalBackground || []
    const updatedBackgrounds = checked
      ? [...currentBackgrounds, background]
      : currentBackgrounds.filter((b: string) => b !== background)
    updateData({ professionalBackground: updatedBackgrounds })
  }

  const handleExpertiseChange = (expertise: string, checked: boolean) => {
    const currentExpertise = data.industryExpertise || []
    const updatedExpertise = checked
      ? [...currentExpertise, expertise]
      : currentExpertise.filter((e: string) => e !== expertise)
    updateData({ industryExpertise: updatedExpertise })
  }

  const addPortfolioCompany = () => {
    if (newPortfolioCompany.name && newPortfolioCompany.category) {
      const currentCompanies = data.portfolioCompanies || []
      updateData({
        portfolioCompanies: [...currentCompanies, { ...newPortfolioCompany }],
      })
      setNewPortfolioCompany({
        name: "",
        category: "",
        stage_invested: "",
        current_status: "",
        outcome: "",
      })
    }
  }

  const removePortfolioCompany = (index: number) => {
    const currentCompanies = data.portfolioCompanies || []
    const updatedCompanies = currentCompanies.filter((_: any, i: number) => i !== index)
    updateData({ portfolioCompanies: updatedCompanies })
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label className="text-lg font-semibold">Investment Experience</Label>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="yearsInvesting">Years Investing</Label>
            <Select value={data.yearsInvesting || ""} onValueChange={(value) => updateData({ yearsInvesting: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select years" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-2">0-2 years</SelectItem>
                <SelectItem value="2-5">2-5 years</SelectItem>
                <SelectItem value="5-10">5-10 years</SelectItem>
                <SelectItem value="10+">10+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="numberOfInvestments">Number of Investments</Label>
            <Input
              id="numberOfInvestments"
              type="number"
              value={data.numberOfInvestments || ""}
              onChange={(e) => updateData({ numberOfInvestments: Number(e.target.value) })}
              placeholder="12"
              min="0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="successfulExits">Successful Exits</Label>
            <Input
              id="successfulExits"
              type="number"
              value={data.successfulExits || ""}
              onChange={(e) => updateData({ successfulExits: Number(e.target.value) })}
              placeholder="4"
              min="0"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-lg font-semibold">Portfolio Companies</Label>

        {/* Existing Portfolio Companies */}
        {(data.portfolioCompanies || []).map((company: any, index: number) => (
          <Card key={index} className="mb-3">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 flex-1">
                  <div>
                    <span className="text-sm font-medium">{company.name}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">{company.category}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">{company.stage_invested}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600">{company.outcome}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => removePortfolioCompany(index)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Add New Portfolio Company */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Add Portfolio Company</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={newPortfolioCompany.name}
                  onChange={(e) => setNewPortfolioCompany({ ...newPortfolioCompany, name: e.target.value })}
                  placeholder="Company name"
                />
              </div>
              <div>
                <Label htmlFor="companyCategory">Category</Label>
                <Input
                  id="companyCategory"
                  value={newPortfolioCompany.category}
                  onChange={(e) => setNewPortfolioCompany({ ...newPortfolioCompany, category: e.target.value })}
                  placeholder="e.g., FinTech"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label htmlFor="stageInvested">Stage Invested</Label>
                <Select
                  value={newPortfolioCompany.stage_invested}
                  onValueChange={(value) => setNewPortfolioCompany({ ...newPortfolioCompany, stage_invested: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pre-Seed">Pre-Seed</SelectItem>
                    <SelectItem value="Seed">Seed</SelectItem>
                    <SelectItem value="Series A">Series A</SelectItem>
                    <SelectItem value="Series B">Series B</SelectItem>
                    <SelectItem value="Series C+">Series C+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="currentStatus">Current Status</Label>
                <Input
                  id="currentStatus"
                  value={newPortfolioCompany.current_status}
                  onChange={(e) => setNewPortfolioCompany({ ...newPortfolioCompany, current_status: e.target.value })}
                  placeholder="e.g., Series B"
                />
              </div>
              <div>
                <Label htmlFor="outcome">Outcome</Label>
                <Select
                  value={newPortfolioCompany.outcome}
                  onValueChange={(value) => setNewPortfolioCompany({ ...newPortfolioCompany, outcome: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select outcome" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="exit_2x">Exit 2x</SelectItem>
                    <SelectItem value="exit_3x">Exit 3x</SelectItem>
                    <SelectItem value="exit_5x+">Exit 5x+</SelectItem>
                    <SelectItem value="write_off">Write-off</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={addPortfolioCompany} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Company
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Label className="text-lg font-semibold">Professional Background</Label>
        <p className="text-sm text-gray-600 mb-4">Select your professional background areas</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {professionalBackgrounds.map((background) => (
            <div key={background} className="flex items-center space-x-2">
              <Checkbox
                id={`background-${background}`}
                checked={(data.professionalBackground || []).includes(background)}
                onCheckedChange={(checked) => handleBackgroundChange(background, checked as boolean)}
              />
              <Label htmlFor={`background-${background}`} className="text-sm">
                {background}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <Label className="text-lg font-semibold">Industry Expertise</Label>
        <p className="text-sm text-gray-600 mb-4">Select industries where you have deep expertise</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {industryExpertises.map((expertise) => (
            <div key={expertise} className="flex items-center space-x-2">
              <Checkbox
                id={`expertise-${expertise}`}
                checked={(data.industryExpertise || []).includes(expertise)}
                onCheckedChange={(checked) => handleExpertiseChange(expertise, checked as boolean)}
              />
              <Label htmlFor={`expertise-${expertise}`} className="text-sm">
                {expertise}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
