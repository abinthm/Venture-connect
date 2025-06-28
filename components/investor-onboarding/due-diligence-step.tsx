"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface DueDiligenceStepProps {
  data: any
  updateData: (data: any) => void
}

export function DueDiligenceStep({ data, updateData }: DueDiligenceStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <Label className="text-base font-semibold">Due Diligence Requirements</Label>
        <p className="text-sm text-gray-600 mb-4">Select the due diligence processes you require</p>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="financialStatementsRequired"
              checked={data.financialStatementsRequired || false}
              onCheckedChange={(checked) => updateData({ financialStatementsRequired: checked })}
            />
            <Label htmlFor="financialStatementsRequired">Financial statements review required</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="technicalReview"
              checked={data.technicalReview || false}
              onCheckedChange={(checked) => updateData({ technicalReview: checked })}
            />
            <Label htmlFor="technicalReview">Technical/product review required</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="referenceChecks"
              checked={data.referenceChecks || false}
              onCheckedChange={(checked) => updateData({ referenceChecks: checked })}
            />
            <Label htmlFor="referenceChecks">Reference checks required</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="marketValidation"
              checked={data.marketValidation || false}
              onCheckedChange={(checked) => updateData({ marketValidation: checked })}
            />
            <Label htmlFor="marketValidation">Market validation required</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="legalReview"
              checked={data.legalReview || false}
              onCheckedChange={(checked) => updateData({ legalReview: checked })}
            />
            <Label htmlFor="legalReview">Legal review required</Label>
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="timelineDays">Due Diligence Timeline (days)</Label>
        <Input
          id="timelineDays"
          type="number"
          value={data.timelineDays || ""}
          onChange={(e) => updateData({ timelineDays: Number(e.target.value) })}
          placeholder="30"
        />
        <p className="text-xs text-gray-500 mt-1">Typical time from initial interest to investment decision</p>
      </div>
    </div>
  )
}
