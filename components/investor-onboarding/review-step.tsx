import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface ReviewStepProps {
  formData: any
}

export function ReviewStep({ formData }: ReviewStepProps) {
  const formatCurrency = (amount: number, currency = "USD") => {
    if (!amount) return "Not specified"
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatArray = (arr: string[]) => {
    if (!arr || arr.length === 0) return "None specified"
    return arr.join(", ")
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Review Your Profile</h3>
        <p className="text-gray-600">Please review all information before submitting</p>
      </div>

      {/* Basic Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Basic Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Name:</span> {formData.basicProfile.name || "Not provided"}
            </div>
            <div>
              <span className="font-medium">Organization:</span>{" "}
              {formData.basicProfile.organizationName || "Not provided"}
            </div>
            <div>
              <span className="font-medium">Email:</span> {formData.basicProfile.email || "Not provided"}
            </div>
            <div>
              <span className="font-medium">Type:</span> {formData.basicProfile.investorType || "Not provided"}
            </div>
            <div>
              <span className="font-medium">Location:</span>{" "}
              {[formData.basicProfile.city, formData.basicProfile.country].filter(Boolean).join(", ") || "Not provided"}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investment Capacity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Investment Capacity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Check Size:</span>{" "}
              {formatCurrency(formData.investmentCapacity.minimumInvestment, formData.investmentCapacity.currency)} -{" "}
              {formatCurrency(formData.investmentCapacity.maximumInvestment, formData.investmentCapacity.currency)}
            </div>
            <div>
              <span className="font-medium">Typical Check:</span>{" "}
              {formatCurrency(formData.investmentCapacity.typicalCheckSize, formData.investmentCapacity.currency)}
            </div>
            <div>
              <span className="font-medium">Available Capital:</span>{" "}
              {formatCurrency(formData.investmentCapacity.availableCapital, formData.investmentCapacity.currency)}
            </div>
            <div>
              <span className="font-medium">Currency:</span> {formData.investmentCapacity.currency || "Not specified"}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investment Preferences */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Investment Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <span className="font-medium text-sm">Categories:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {(formData.investmentPreferences.categories || []).map((category: string, index: number) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
              {(!formData.investmentPreferences.categories ||
                formData.investmentPreferences.categories.length === 0) && (
                <span className="text-sm text-gray-500">None specified</span>
              )}
            </div>
          </div>
          <div>
            <span className="font-medium text-sm">Stages:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {(formData.investmentPreferences.stagePreference || []).map((stage: string, index: number) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {stage}
                </Badge>
              ))}
              {(!formData.investmentPreferences.stagePreference ||
                formData.investmentPreferences.stagePreference.length === 0) && (
                <span className="text-sm text-gray-500">None specified</span>
              )}
            </div>
          </div>
          <div className="text-sm">
            <span className="font-medium">Valuation Range:</span>{" "}
            {formatCurrency(formData.investmentPreferences.valuationMin)} -{" "}
            {formatCurrency(formData.investmentPreferences.valuationMax)}
          </div>
        </CardContent>
      </Card>

      {/* Financial Criteria */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Financial Criteria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Min Monthly Revenue:</span>{" "}
              {formatCurrency(formData.financialCriteria.minimumMonthlyRevenue)}
            </div>
            <div>
              <span className="font-medium">Min Annual Revenue:</span>{" "}
              {formatCurrency(formData.financialCriteria.minimumAnnualRevenue)}
            </div>
            <div>
              <span className="font-medium">Growth Rate:</span>{" "}
              {formData.financialCriteria.growthRateExpectation || "Not specified"}%
            </div>
            <div>
              <span className="font-medium">Min Runway:</span>{" "}
              {formData.financialCriteria.minimumRunwayMonths || "Not specified"} months
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Investment Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-medium">Years Investing:</span>{" "}
              {formData.experience.yearsInvesting || "Not specified"}
            </div>
            <div>
              <span className="font-medium">Investments:</span> {formData.experience.numberOfInvestments || "0"}
            </div>
            <div>
              <span className="font-medium">Exits:</span> {formData.experience.successfulExits || "0"}
            </div>
          </div>
          {formData.experience.portfolioCompanies && formData.experience.portfolioCompanies.length > 0 && (
            <div>
              <span className="font-medium text-sm">Portfolio Companies:</span>
              <div className="mt-1 text-sm text-gray-600">
                {formData.experience.portfolioCompanies.map((company: any, index: number) => (
                  <div key={index}>
                    {company.name} ({company.category})
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Risk & Returns */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Risk & Returns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Risk Tolerance:</span>{" "}
              {formData.riskExpectations.riskTolerance || "Not specified"}/5
            </div>
            <div>
              <span className="font-medium">Target ROI:</span> {formData.riskExpectations.targetRoi || "Not specified"}
            </div>
            <div>
              <span className="font-medium">Investment Horizon:</span>{" "}
              {formData.riskExpectations.investmentHorizon || "Not specified"}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Involvement */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Involvement Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-sm">
            <div>
              <span className="font-medium">Involvement Level:</span>{" "}
              {formData.involvementPreferences.involvementLevel || "Not specified"}
            </div>
            <div>
              <span className="font-medium">Time Commitment:</span>{" "}
              {formData.involvementPreferences.mentoringTimeCommitment || "Not specified"}
            </div>
            <div>
              <span className="font-medium">Board Interest:</span>{" "}
              {formData.involvementPreferences.boardParticipationInterest ? "Yes" : "No"}
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      <div className="text-center text-sm text-gray-600">
        <p>By submitting this form, you agree to our terms of service and privacy policy.</p>
        <p className="mt-2">Your profile will be used to match you with relevant startup opportunities.</p>
      </div>
    </div>
  )
}
