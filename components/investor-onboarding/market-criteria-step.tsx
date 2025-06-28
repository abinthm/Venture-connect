"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MarketCriteriaStepProps {
  data: any
  updateData: (data: any) => void
}

export function MarketCriteriaStep({ data, updateData }: MarketCriteriaStepProps) {
  const marketMaturityOptions = ["emerging", "growing", "mature", "declining"]

  const handleMaturityChange = (maturity: string, checked: boolean) => {
    const currentMaturity = data.marketMaturity || []
    const updatedMaturity = checked
      ? [...currentMaturity, maturity]
      : currentMaturity.filter((m: string) => m !== maturity)
    updateData({ marketMaturity: updatedMaturity })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="minimumTam">Minimum TAM (Total Addressable Market)</Label>
          <Input
            id="minimumTam"
            type="number"
            value={data.minimumTam || ""}
            onChange={(e) => updateData({ minimumTam: Number(e.target.value) })}
            placeholder="1000000000"
          />
          <p className="text-xs text-gray-500 mt-1">Enter amount in USD</p>
        </div>
        <div>
          <Label htmlFor="minimumSam">Minimum SAM (Serviceable Addressable Market)</Label>
          <Input
            id="minimumSam"
            type="number"
            value={data.minimumSam || ""}
            onChange={(e) => updateData({ minimumSam: Number(e.target.value) })}
            placeholder="100000000"
          />
          <p className="text-xs text-gray-500 mt-1">Enter amount in USD</p>
        </div>
      </div>

      <div>
        <Label className="text-base font-semibold">Market Maturity Preferences</Label>
        <p className="text-sm text-gray-600 mb-4">Select the market maturity stages you're comfortable with</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {marketMaturityOptions.map((maturity) => (
            <div key={maturity} className="flex items-center space-x-2">
              <Checkbox
                id={`maturity-${maturity}`}
                checked={(data.marketMaturity || []).includes(maturity)}
                onCheckedChange={(checked) => handleMaturityChange(maturity, checked as boolean)}
              />
              <Label htmlFor={`maturity-${maturity}`} className="text-sm capitalize">
                {maturity}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="competitiveLandscape">Competitive Landscape Comfort</Label>
          <Select
            value={data.competitiveLandscape || ""}
            onValueChange={(value) => updateData({ competitiveLandscape: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no_competition_preferred">No competition preferred</SelectItem>
              <SelectItem value="light_competition_acceptable">Light competition acceptable</SelectItem>
              <SelectItem value="moderate_competition_acceptable">Moderate competition acceptable</SelectItem>
              <SelectItem value="heavy_competition_acceptable">Heavy competition acceptable</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="marketShareExpectations">Market Share Expectations (%)</Label>
          <Input
            id="marketShareExpectations"
            type="number"
            value={data.marketShareExpectations || ""}
            onChange={(e) => updateData({ marketShareExpectations: Number(e.target.value) })}
            placeholder="5"
          />
        </div>
      </div>
    </div>
  )
}
