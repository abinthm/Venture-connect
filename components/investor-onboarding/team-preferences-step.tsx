"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface TeamPreferencesStepProps {
  data: any
  updateData: (data: any) => void
}

export function TeamPreferencesStep({ data, updateData }: TeamPreferencesStepProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="minimumTeamSize">Minimum Team Size</Label>
          <Input
            id="minimumTeamSize"
            type="number"
            value={data.minimumTeamSize || ""}
            onChange={(e) => updateData({ minimumTeamSize: Number(e.target.value) })}
            placeholder="3"
          />
        </div>
        <div>
          <Label htmlFor="previousStartupExperience">Previous Startup Experience</Label>
          <Select
            value={data.previousStartupExperience || ""}
            onValueChange={(value) => updateData({ previousStartupExperience: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="required">Required</SelectItem>
              <SelectItem value="preferred">Preferred</SelectItem>
              <SelectItem value="not_important">Not Important</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="founderExperienceRequired"
            checked={data.founderExperienceRequired || false}
            onCheckedChange={(checked) => updateData({ founderExperienceRequired: checked })}
          />
          <Label htmlFor="founderExperienceRequired">Founder experience in the industry is required</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="domainExpertiseImportant"
            checked={data.domainExpertiseImportant || false}
            onCheckedChange={(checked) => updateData({ domainExpertiseImportant: checked })}
          />
          <Label htmlFor="domainExpertiseImportant">Domain expertise is important</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="technicalCofounderRequired"
            checked={data.technicalCofounderRequired || false}
            onCheckedChange={(checked) => updateData({ technicalCofounderRequired: checked })}
          />
          <Label htmlFor="technicalCofounderRequired">Technical co-founder is required</Label>
        </div>
      </div>
    </div>
  )
}
