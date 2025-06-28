"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BasicProfileStepProps {
  data: any
  updateData: (data: any) => void
}

export function BasicProfileStep({ data, updateData }: BasicProfileStepProps) {
  const handleInputChange = (field: string, value: string) => {
    updateData({ [field]: value })
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={data.name || ""}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <Label htmlFor="organizationName">Organization Name</Label>
          <Input
            id="organizationName"
            value={data.organizationName || ""}
            onChange={(e) => handleInputChange("organizationName", e.target.value)}
            placeholder="Your company or fund name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={data.email || ""}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={data.phone || ""}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="+1-555-0123"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            value={data.city || ""}
            onChange={(e) => handleInputChange("city", e.target.value)}
            placeholder="San Francisco"
          />
        </div>
        <div>
          <Label htmlFor="state">State/Province</Label>
          <Input
            id="state"
            value={data.state || ""}
            onChange={(e) => handleInputChange("state", e.target.value)}
            placeholder="California"
          />
        </div>
        <div>
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            value={data.country || ""}
            onChange={(e) => handleInputChange("country", e.target.value)}
            placeholder="USA"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="investorType">Investor Type *</Label>
          <Select value={data.investorType || ""} onValueChange={(value) => handleInputChange("investorType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select investor type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Individual Angel">Individual Angel</SelectItem>
              <SelectItem value="Angel Group">Angel Group</SelectItem>
              <SelectItem value="Venture Capital">Venture Capital</SelectItem>
              <SelectItem value="Corporate VC">Corporate VC</SelectItem>
              <SelectItem value="Family Office">Family Office</SelectItem>
              <SelectItem value="Accelerator">Accelerator</SelectItem>
              <SelectItem value="Government Fund">Government Fund</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            value={data.website || ""}
            onChange={(e) => handleInputChange("website", e.target.value)}
            placeholder="https://yourwebsite.com"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="linkedin">LinkedIn Profile</Label>
        <Input
          id="linkedin"
          value={data.linkedin || ""}
          onChange={(e) => handleInputChange("linkedin", e.target.value)}
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </div>
    </div>
  )
}
