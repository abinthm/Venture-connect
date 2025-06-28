"use client"

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DealFlowStepProps {
  data: any
  updateData: (data: any) => void
}

export function DealFlowStep({ data, updateData }: DealFlowStepProps) {
  const referralSources = [
    "accelerators",
    "other_investors",
    "entrepreneurs",
    "industry_contacts",
    "online_platforms",
    "events_conferences",
    "cold_outreach",
  ]

  const pitchFormats = [
    "deck_review",
    "demo",
    "financial_models",
    "video_pitch",
    "in_person_meeting",
    "phone_call",
    "written_summary",
  ]

  const handleReferralSourceChange = (source: string, checked: boolean) => {
    const currentSources = data.referralSources || []
    const updatedSources = checked ? [...currentSources, source] : currentSources.filter((s: string) => s !== source)
    updateData({ referralSources: updatedSources })
  }

  const handlePitchFormatChange = (format: string, checked: boolean) => {
    const currentFormats = data.pitchFormatPreference || []
    const updatedFormats = checked ? [...currentFormats, format] : currentFormats.filter((f: string) => f !== format)
    updateData({ pitchFormatPreference: updatedFormats })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="dealsPerQuarter">Deals Per Quarter</Label>
          <Select value={data.dealsPerQuarter || ""} onValueChange={(value) => updateData({ dealsPerQuarter: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select deal frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 deal</SelectItem>
              <SelectItem value="2-3">2-3 deals</SelectItem>
              <SelectItem value="4-5">4-5 deals</SelectItem>
              <SelectItem value="6+">6+ deals</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="communicationPreference">Communication Preference</Label>
          <Select
            value={data.communicationPreference || ""}
            onValueChange={(value) => updateData({ communicationPreference: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select preference" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="video_call">Video Call</SelectItem>
              <SelectItem value="in_person">In Person</SelectItem>
              <SelectItem value="messaging">Messaging Apps</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="meetingAvailability">Meeting Availability</Label>
        <Select
          value={data.meetingAvailability || ""}
          onValueChange={(value) => updateData({ meetingAvailability: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select availability" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekdays_morning">Weekdays Morning</SelectItem>
            <SelectItem value="weekdays_afternoon">Weekdays Afternoon</SelectItem>
            <SelectItem value="weekdays_evening">Weekdays Evening</SelectItem>
            <SelectItem value="weekends">Weekends</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Referral Sources */}
      <div>
        <Label className="text-base font-semibold">Preferred Referral Sources</Label>
        <p className="text-sm text-gray-600 mb-4">How do you prefer to discover new investment opportunities?</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {referralSources.map((source) => (
            <div key={source} className="flex items-center space-x-2">
              <Checkbox
                id={`source-${source}`}
                checked={(data.referralSources || []).includes(source)}
                onCheckedChange={(checked) => handleReferralSourceChange(source, checked as boolean)}
              />
              <Label htmlFor={`source-${source}`} className="text-sm">
                {source.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Pitch Format Preferences */}
      <div>
        <Label className="text-base font-semibold">Pitch Format Preferences</Label>
        <p className="text-sm text-gray-600 mb-4">What formats do you prefer for initial startup pitches?</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {pitchFormats.map((format) => (
            <div key={format} className="flex items-center space-x-2">
              <Checkbox
                id={`format-${format}`}
                checked={(data.pitchFormatPreference || []).includes(format)}
                onCheckedChange={(checked) => handlePitchFormatChange(format, checked as boolean)}
              />
              <Label htmlFor={`format-${format}`} className="text-sm">
                {format.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
