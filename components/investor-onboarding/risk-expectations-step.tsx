"use client"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface RiskExpectationsStepProps {
  data: any
  updateData: (data: any) => void
}

export function RiskExpectationsStep({ data, updateData }: RiskExpectationsStepProps) {
  const lossScenarios = [
    "product_risk",
    "market_risk",
    "team_risk",
    "technology_risk",
    "regulatory_risk",
    "competitive_risk",
    "execution_risk",
  ]

  const dealBreakers = [
    "regulatory_heavy",
    "capital_intensive",
    "long_sales_cycles",
    "unproven_business_model",
    "single_customer_dependency",
    "ip_concerns",
  ]

  const handleLossScenarioChange = (scenario: string, checked: boolean) => {
    const currentScenarios = data.acceptableLossScenarios || []
    const updatedScenarios = checked
      ? [...currentScenarios, scenario]
      : currentScenarios.filter((s: string) => s !== scenario)
    updateData({ acceptableLossScenarios: updatedScenarios })
  }

  const handleDealBreakerChange = (breaker: string, checked: boolean) => {
    const currentBreakers = data.dealBreakers || []
    const updatedBreakers = checked
      ? [...currentBreakers, breaker]
      : currentBreakers.filter((b: string) => b !== breaker)
    updateData({ dealBreakers: updatedBreakers })
  }

  return (
    <div className="space-y-8">
      {/* Risk Tolerance */}
      <div>
        <Label className="text-base font-semibold">Risk Tolerance</Label>
        <p className="text-sm text-gray-600 mb-4">
          Rate your risk tolerance (1 = Very Conservative, 5 = Very Aggressive)
        </p>
        <div className="px-2">
          <Slider
            value={[data.riskTolerance || 3]}
            onValueChange={(value) => updateData({ riskTolerance: value[0] })}
            max={5}
            min={1}
            step={1}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>Very Conservative</span>
            <span>Very Aggressive</span>
          </div>
        </div>
      </div>

      {/* Risk Tolerance Description */}
      <div>
        <Label htmlFor="riskToleranceDescription">Risk Tolerance Description</Label>
        <Textarea
          id="riskToleranceDescription"
          value={data.riskToleranceDescription || ""}
          onChange={(e) => updateData({ riskToleranceDescription: e.target.value })}
          placeholder="Describe your risk tolerance and investment philosophy..."
          rows={3}
        />
      </div>

      {/* Expected Returns */}
      <div>
        <Label className="text-base font-semibold">Expected Returns</Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <Label htmlFor="targetRoi">Target ROI</Label>
            <Select value={data.targetRoi || ""} onValueChange={(value) => updateData({ targetRoi: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select target ROI" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3-5x">3-5x</SelectItem>
                <SelectItem value="5-10x">5-10x</SelectItem>
                <SelectItem value="10-20x">10-20x</SelectItem>
                <SelectItem value="20x+">20x+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="investmentHorizon">Investment Horizon</Label>
            <Select
              value={data.investmentHorizon || ""}
              onValueChange={(value) => updateData({ investmentHorizon: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select investment horizon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3-5 years">3-5 years</SelectItem>
                <SelectItem value="5-7 years">5-7 years</SelectItem>
                <SelectItem value="7-10 years">7-10 years</SelectItem>
                <SelectItem value="10+ years">10+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Acceptable Loss Scenarios */}
      <div>
        <Label className="text-base font-semibold">Acceptable Loss Scenarios</Label>
        <p className="text-sm text-gray-600 mb-4">Select the types of risks you're willing to accept</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {lossScenarios.map((scenario) => (
            <div key={scenario} className="flex items-center space-x-2">
              <Checkbox
                id={`scenario-${scenario}`}
                checked={(data.acceptableLossScenarios || []).includes(scenario)}
                onCheckedChange={(checked) => handleLossScenarioChange(scenario, checked as boolean)}
              />
              <Label htmlFor={`scenario-${scenario}`} className="text-sm">
                {scenario.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Deal Breakers */}
      <div>
        <Label className="text-base font-semibold">Deal Breakers</Label>
        <p className="text-sm text-gray-600 mb-4">Select factors that would prevent you from investing</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {dealBreakers.map((breaker) => (
            <div key={breaker} className="flex items-center space-x-2">
              <Checkbox
                id={`breaker-${breaker}`}
                checked={(data.dealBreakers || []).includes(breaker)}
                onCheckedChange={(checked) => handleDealBreakerChange(breaker, checked as boolean)}
              />
              <Label htmlFor={`breaker-${breaker}`} className="text-sm">
                {breaker.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
