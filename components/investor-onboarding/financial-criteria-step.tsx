"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FinancialCriteriaStepProps {
  data: any
  updateData: (data: any) => void
}

export function FinancialCriteriaStep({ data, updateData }: FinancialCriteriaStepProps) {
  const keyMetrics = [
    "monthlyRevenue",
    "annualRevenue",
    "growthRate",
    "customers",
    "runway",
    "ltvCacRatio",
    "grossMargin",
    "burnRate",
    "cashFlow",
  ]

  const handleMetricChange = (metric: string, checked: boolean) => {
    const currentMetrics = data.keyMetricsFocus || []
    const updatedMetrics = checked ? [...currentMetrics, metric] : currentMetrics.filter((m: string) => m !== metric)
    updateData({ keyMetricsFocus: updatedMetrics })
  }

  return (
    <div className="space-y-8">
      {/* Revenue Requirements */}
      <div>
        <Label className="text-base font-semibold">Revenue Requirements</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="minimumMonthlyRevenue">Minimum Monthly Revenue</Label>
            <Input
              id="minimumMonthlyRevenue"
              type="number"
              value={data.minimumMonthlyRevenue || ""}
              onChange={(e) => updateData({ minimumMonthlyRevenue: Number(e.target.value) })}
              placeholder="100000"
            />
          </div>
          <div>
            <Label htmlFor="minimumAnnualRevenue">Minimum Annual Revenue</Label>
            <Input
              id="minimumAnnualRevenue"
              type="number"
              value={data.minimumAnnualRevenue || ""}
              onChange={(e) => updateData({ minimumAnnualRevenue: Number(e.target.value) })}
              placeholder="1000000"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="growthRateExpectation">Growth Rate Expectation (%)</Label>
            <Input
              id="growthRateExpectation"
              type="number"
              value={data.growthRateExpectation || ""}
              onChange={(e) => updateData({ growthRateExpectation: Number(e.target.value) })}
              placeholder="100"
            />
          </div>
          <div>
            <Label htmlFor="revenueMultipleComfort">Revenue Multiple Comfort</Label>
            <Input
              id="revenueMultipleComfort"
              type="number"
              value={data.revenueMultipleComfort || ""}
              onChange={(e) => updateData({ revenueMultipleComfort: Number(e.target.value) })}
              placeholder="15"
            />
          </div>
        </div>
      </div>

      {/* Key Metrics Focus */}
      <div>
        <Label className="text-base font-semibold">Key Metrics Focus</Label>
        <p className="text-sm text-gray-600 mb-4">Select the metrics most important to your investment decisions</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {keyMetrics.map((metric) => (
            <div key={metric} className="flex items-center space-x-2">
              <Checkbox
                id={`metric-${metric}`}
                checked={(data.keyMetricsFocus || []).includes(metric)}
                onCheckedChange={(checked) => handleMetricChange(metric, checked as boolean)}
              />
              <Label htmlFor={`metric-${metric}`} className="text-sm capitalize">
                {metric.replace(/([A-Z])/g, " $1").trim()}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Unit Economics Requirements */}
      <div>
        <Label className="text-base font-semibold">Unit Economics Requirements</Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <Label htmlFor="minimumGrossMargin">Minimum Gross Margin (%)</Label>
            <Input
              id="minimumGrossMargin"
              type="number"
              value={data.minimumGrossMargin || ""}
              onChange={(e) => updateData({ minimumGrossMargin: Number(e.target.value) })}
              placeholder="60"
            />
          </div>
          <div>
            <Label htmlFor="maximumCacPayback">Maximum CAC Payback (months)</Label>
            <Input
              id="maximumCacPayback"
              type="number"
              value={data.maximumCacPayback || ""}
              onChange={(e) => updateData({ maximumCacPayback: Number(e.target.value) })}
              placeholder="12"
            />
          </div>
          <div>
            <Label htmlFor="minimumLtvCacRatio">Minimum LTV/CAC Ratio</Label>
            <Input
              id="minimumLtvCacRatio"
              type="number"
              value={data.minimumLtvCacRatio || ""}
              onChange={(e) => updateData({ minimumLtvCacRatio: Number(e.target.value) })}
              placeholder="3"
            />
          </div>
        </div>
      </div>

      {/* Runway Preferences */}
      <div>
        <Label className="text-base font-semibold">Runway Preferences</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="minimumRunwayMonths">Minimum Runway (months)</Label>
            <Input
              id="minimumRunwayMonths"
              type="number"
              value={data.minimumRunwayMonths || ""}
              onChange={(e) => updateData({ minimumRunwayMonths: Number(e.target.value) })}
              placeholder="12"
            />
          </div>
          <div>
            <Label htmlFor="maximumRunwayMonths">Maximum Runway (months)</Label>
            <Input
              id="maximumRunwayMonths"
              type="number"
              value={data.maximumRunwayMonths || ""}
              onChange={(e) => updateData({ maximumRunwayMonths: Number(e.target.value) })}
              placeholder="24"
            />
          </div>
          <div>
            <Label htmlFor="comfortableRunwayRange">Comfortable Runway Range</Label>
            <Select
              value={data.comfortableRunwayRange || ""}
              onValueChange={(value) => updateData({ comfortableRunwayRange: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select runway range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="6-12">6-12 months</SelectItem>
                <SelectItem value="12-18">12-18 months</SelectItem>
                <SelectItem value="18-36">18-36 months</SelectItem>
                <SelectItem value="36+">36+ months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}
