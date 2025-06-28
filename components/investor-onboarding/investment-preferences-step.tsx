"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"

interface InvestmentPreferencesStepProps {
  data: any
  updateData: (data: any) => void
}

export function InvestmentPreferencesStep({ data, updateData }: InvestmentPreferencesStepProps) {
  const categories = [
    "AgriTech",
    "FinTech",
    "HealthTech",
    "EdTech",
    "CleanTech",
    "AI/ML",
    "SaaS",
    "E-commerce",
    "Logistics",
    "Food & Beverage",
    "Real Estate",
    "Gaming",
  ]

  const stages = ["Pre-Seed", "Seed", "Series A", "Series B", "Series C+"]

  const businessModels = ["B2B", "B2C", "B2B + B2C", "B2G", "B2B + B2G", "SaaS", "Marketplace", "Platform"]

  const regions = [
    "North America",
    "Europe",
    "India",
    "Southeast Asia",
    "East Asia",
    "Middle East",
    "Africa",
    "Latin America",
    "Australia/Oceania",
  ]

  const handleCategoryChange = (category: string, checked: boolean) => {
    const currentCategories = data.categories || []
    const updatedCategories = checked
      ? [...currentCategories, category]
      : currentCategories.filter((c: string) => c !== category)
    updateData({ categories: updatedCategories })
  }

  const handleStageChange = (stage: string, checked: boolean) => {
    const currentStages = data.stagePreference || []
    const updatedStages = checked ? [...currentStages, stage] : currentStages.filter((s: string) => s !== stage)
    updateData({ stagePreference: updatedStages })
  }

  const handleBusinessModelChange = (model: string, checked: boolean) => {
    const currentModels = data.businessModels || []
    const updatedModels = checked ? [...currentModels, model] : currentModels.filter((m: string) => m !== model)
    updateData({ businessModels: updatedModels })
  }

  const handleRegionChange = (region: string, checked: boolean) => {
    const currentRegions = data.primaryRegions || []
    const updatedRegions = checked ? [...currentRegions, region] : currentRegions.filter((r: string) => r !== region)
    updateData({ primaryRegions: updatedRegions })
  }

  return (
    <div className="space-y-8">
      {/* Investment Categories */}
      <div>
        <Label className="text-base font-semibold">Investment Categories *</Label>
        <p className="text-sm text-gray-600 mb-4">Select the industries you're interested in investing in</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={(data.categories || []).includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <Label htmlFor={`category-${category}`} className="text-sm">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Investment Stages */}
      <div>
        <Label className="text-base font-semibold">Investment Stages *</Label>
        <p className="text-sm text-gray-600 mb-4">Select the funding stages you prefer</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {stages.map((stage) => (
            <div key={stage} className="flex items-center space-x-2">
              <Checkbox
                id={`stage-${stage}`}
                checked={(data.stagePreference || []).includes(stage)}
                onCheckedChange={(checked) => handleStageChange(stage, checked as boolean)}
              />
              <Label htmlFor={`stage-${stage}`} className="text-sm">
                {stage}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Business Models */}
      <div>
        <Label className="text-base font-semibold">Business Models</Label>
        <p className="text-sm text-gray-600 mb-4">Select preferred business models</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {businessModels.map((model) => (
            <div key={model} className="flex items-center space-x-2">
              <Checkbox
                id={`model-${model}`}
                checked={(data.businessModels || []).includes(model)}
                onCheckedChange={(checked) => handleBusinessModelChange(model, checked as boolean)}
              />
              <Label htmlFor={`model-${model}`} className="text-sm">
                {model}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Preferences */}
      <div>
        <Label className="text-base font-semibold">Geographic Preferences</Label>
        <p className="text-sm text-gray-600 mb-4">Select regions you're comfortable investing in</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {regions.map((region) => (
            <div key={region} className="flex items-center space-x-2">
              <Checkbox
                id={`region-${region}`}
                checked={(data.primaryRegions || []).includes(region)}
                onCheckedChange={(checked) => handleRegionChange(region, checked as boolean)}
              />
              <Label htmlFor={`region-${region}`} className="text-sm">
                {region}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Remote Investment Comfort */}
      <div>
        <Label className="text-base font-semibold">Remote Investment Comfort</Label>
        <p className="text-sm text-gray-600 mb-4">
          How comfortable are you investing in companies you haven't met in person? (1 = Not comfortable, 5 = Very
          comfortable)
        </p>
        <div className="px-2">
          <Slider
            value={[data.remoteInvestmentComfort || 3]}
            onValueChange={(value) => updateData({ remoteInvestmentComfort: value[0] })}
            max={5}
            min={1}
            step={1}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>Not comfortable</span>
            <span>Very comfortable</span>
          </div>
        </div>
      </div>

      {/* Valuation Range */}
      <div>
        <Label className="text-base font-semibold">Valuation Range Preferences</Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <Label htmlFor="valuationMin">Minimum Valuation</Label>
            <Input
              id="valuationMin"
              type="number"
              value={data.valuationMin || ""}
              onChange={(e) => updateData({ valuationMin: Number(e.target.value) })}
              placeholder="5000000"
            />
          </div>
          <div>
            <Label htmlFor="valuationMax">Maximum Valuation</Label>
            <Input
              id="valuationMax"
              type="number"
              value={data.valuationMax || ""}
              onChange={(e) => updateData({ valuationMax: Number(e.target.value) })}
              placeholder="100000000"
            />
          </div>
          <div>
            <Label htmlFor="valuationSweetSpot">Sweet Spot Valuation</Label>
            <Input
              id="valuationSweetSpot"
              type="number"
              value={data.valuationSweetSpot || ""}
              onChange={(e) => updateData({ valuationSweetSpot: Number(e.target.value) })}
              placeholder="25000000"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
