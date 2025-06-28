"use client"

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface InvolvementPreferencesStepProps {
  data: any
  updateData: (data: any) => void
}

export function InvolvementPreferencesStep({ data, updateData }: InvolvementPreferencesStepProps) {
  const expertiseAreas = [
    "Go-to-market strategy",
    "Enterprise sales",
    "Product development",
    "Fundraising",
    "Team building",
    "Operations",
    "Marketing",
    "Business development",
    "Technology",
    "Legal",
    "Finance",
  ]

  const handleExpertiseChange = (area: string, checked: boolean) => {
    const currentAreas = data.expertiseAreas || []
    const updatedAreas = checked ? [...currentAreas, area] : currentAreas.filter((a: string) => a !== area)
    updateData({ expertiseAreas: updatedAreas })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="involvementLevel">Involvement Level</Label>
          <Select
            value={data.involvementLevel || ""}
            onValueChange={(value) => updateData({ involvementLevel: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select involvement level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Hands-off investor">Hands-off investor</SelectItem>
              <SelectItem value="Occasional check-ins">Occasional check-ins</SelectItem>
              <SelectItem value="Regular mentoring/advisory role">Regular mentoring/advisory role</SelectItem>
              <SelectItem value="Active board participation">Active board participation</SelectItem>
              <SelectItem value="Hands-on operational support">Hands-on operational support</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="mentoringTimeCommitment">Mentoring Time Commitment</Label>
          <Select
            value={data.mentoringTimeCommitment || ""}
            onValueChange={(value) => updateData({ mentoringTimeCommitment: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select time commitment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2 hours per month">1-2 hours per month</SelectItem>
              <SelectItem value="2-4 hours per month">2-4 hours per month</SelectItem>
              <SelectItem value="4-8 hours per month">4-8 hours per month</SelectItem>
              <SelectItem value="8+ hours per month">8+ hours per month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="boardParticipationInterest"
            checked={data.boardParticipationInterest || false}
            onCheckedChange={(checked) => updateData({ boardParticipationInterest: checked })}
          />
          <Label htmlFor="boardParticipationInterest">I'm interested in board participation</Label>
        </div>
      </div>

      {/* Expertise Areas */}
      <div>
        <Label className="text-base font-semibold">Expertise Areas</Label>
        <p className="text-sm text-gray-600 mb-4">Select areas where you can provide value to startups</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {expertiseAreas.map((area) => (
            <div key={area} className="flex items-center space-x-2">
              <Checkbox
                id={`expertise-${area}`}
                checked={(data.expertiseAreas || []).includes(area)}
                onCheckedChange={(checked) => handleExpertiseChange(area, checked as boolean)}
              />
              <Label htmlFor={`expertise-${area}`} className="text-sm">
                {area}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Network Value */}
      <div>
        <Label className="text-base font-semibold">Network Value</Label>
        <p className="text-sm text-gray-600 mb-4">Select the types of connections you can provide</p>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="customerConnections"
              checked={data.customerConnections || false}
              onCheckedChange={(checked) => updateData({ customerConnections: checked })}
            />
            <Label htmlFor="customerConnections">Customer connections</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="investorNetwork"
              checked={data.investorNetwork || false}
              onCheckedChange={(checked) => updateData({ investorNetwork: checked })}
            />
            <Label htmlFor="investorNetwork">Investor network</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="talentNetwork"
              checked={data.talentNetwork || false}
              onCheckedChange={(checked) => updateData({ talentNetwork: checked })}
            />
            <Label htmlFor="talentNetwork">Talent network</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="strategicPartnerships"
              checked={data.strategicPartnerships || false}
              onCheckedChange={(checked) => updateData({ strategicPartnerships: checked })}
            />
            <Label htmlFor="strategicPartnerships">Strategic partnerships</Label>
          </div>
        </div>
      </div>
    </div>
  )
}
