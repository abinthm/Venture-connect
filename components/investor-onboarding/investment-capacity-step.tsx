"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface InvestmentCapacityStepProps {
  data: any
  updateData: (data: any) => void
}

export function InvestmentCapacityStep({ data, updateData }: InvestmentCapacityStepProps) {
  const handleInputChange = (field: string, value: string | number | boolean) => {
    updateData({ [field]: value })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="minimumInvestment">Minimum Investment Amount *</Label>
          <Input
            id="minimumInvestment"
            type="number"
            value={data.minimumInvestment || ""}
            onChange={(e) => handleInputChange("minimumInvestment", Number(e.target.value))}
            placeholder="25000"
          />
        </div>
        <div>
          <Label htmlFor="maximumInvestment">Maximum Investment Amount *</Label>
          <Input
            id="maximumInvestment"
            type="number"
            value={data.maximumInvestment || ""}
            onChange={(e) => handleInputChange("maximumInvestment", Number(e.target.value))}
            placeholder="250000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="typicalCheckSize">Typical Check Size *</Label>
          <Input
            id="typicalCheckSize"
            type="number"
            value={data.typicalCheckSize || ""}
            onChange={(e) => handleInputChange("typicalCheckSize", Number(e.target.value))}
            placeholder="50000"
          />
        </div>
        <div>
          <Label htmlFor="availableCapital">Available Capital (12 months) *</Label>
          <Input
            id="availableCapital"
            type="number"
            value={data.availableCapital || ""}
            onChange={(e) => handleInputChange("availableCapital", Number(e.target.value))}
            placeholder="500000"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="currency">Currency *</Label>
        <Select value={data.currency || ""} onValueChange={(value) => handleInputChange("currency", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USD">USD - US Dollar</SelectItem>
            <SelectItem value="INR">INR - Indian Rupee</SelectItem>
            <SelectItem value="EUR">EUR - Euro</SelectItem>
            <SelectItem value="GBP">GBP - British Pound</SelectItem>
            <SelectItem value="SGD">SGD - Singapore Dollar</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="followOnReserves"
            checked={data.followOnReserves || false}
            onCheckedChange={(checked) => handleInputChange("followOnReserves", checked)}
          />
          <Label htmlFor="followOnReserves">I maintain follow-on reserves for existing investments</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="coInvestmentComfortable"
            checked={data.coInvestmentComfortable || false}
            onCheckedChange={(checked) => handleInputChange("coInvestmentComfortable", checked)}
          />
          <Label htmlFor="coInvestmentComfortable">I'm comfortable with co-investment opportunities</Label>
        </div>
      </div>
    </div>
  )
}
