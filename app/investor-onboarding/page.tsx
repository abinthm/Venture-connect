"use client"

import React from "react"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Check,
  User,
  DollarSign,
  Target,
  BarChart3,
  Users,
  Globe,
  Shield,
  HandHeart,
  FileCheck,
  Briefcase,
  MessageSquare,
  Eye,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"

import { BasicProfileStep } from "@/components/investor-onboarding/basic-profile-step"
import { InvestmentCapacityStep } from "@/components/investor-onboarding/investment-capacity-step"
import { InvestmentPreferencesStep } from "@/components/investor-onboarding/investment-preferences-step"
import { FinancialCriteriaStep } from "@/components/investor-onboarding/financial-criteria-step"
import { TeamPreferencesStep } from "@/components/investor-onboarding/team-preferences-step"
import { MarketCriteriaStep } from "@/components/investor-onboarding/market-criteria-step"
import { RiskExpectationsStep } from "@/components/investor-onboarding/risk-expectations-step"
import { InvolvementPreferencesStep } from "@/components/investor-onboarding/involvement-preferences-step"
import { DueDiligenceStep } from "@/components/investor-onboarding/due-diligence-step"
import { ExperienceStep } from "@/components/investor-onboarding/experience-step"
import { DealFlowStep } from "@/components/investor-onboarding/deal-flow-step"
import { ReviewStep } from "@/components/investor-onboarding/review-step"

const steps = [
  { id: 1, title: "Basic Profile", icon: User, description: "Personal and organization details" },
  { id: 2, title: "Investment Capacity", icon: DollarSign, description: "Capital availability and check sizes" },
  { id: 3, title: "Investment Preferences", icon: Target, description: "Categories, stages, and geography" },
  { id: 4, title: "Financial Criteria", icon: BarChart3, description: "Revenue and metrics requirements" },
  { id: 5, title: "Team Preferences", icon: Users, description: "Founder and team requirements" },
  { id: 6, title: "Market Criteria", icon: Globe, description: "Market size and competition" },
  { id: 7, title: "Risk & Returns", icon: Shield, description: "Risk tolerance and expectations" },
  { id: 8, title: "Involvement Level", icon: HandHeart, description: "Mentoring and participation" },
  { id: 9, title: "Due Diligence", icon: FileCheck, description: "Review process requirements" },
  { id: 10, title: "Experience", icon: Briefcase, description: "Investment history and background" },
  { id: 11, title: "Deal Flow", icon: MessageSquare, description: "Sourcing and communication" },
  { id: 12, title: "Review", icon: Eye, description: "Final confirmation" },
]

export default function InvestorOnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  // Form data state
  const [formData, setFormData] = useState({
    basicProfile: {},
    investmentCapacity: {},
    investmentPreferences: {},
    financialCriteria: {},
    teamPreferences: {},
    marketCriteria: {},
    riskExpectations: {},
    involvementPreferences: {},
    dueDiligence: {},
    experience: {},
    dealFlow: {},
  })

  const updateFormData = (step: string, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [step]: { ...prev[step as keyof typeof prev], ...data },
    }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      // Generate the complete JSON structure
      const investorProfile = generateInvestorProfile(formData)

      // Store in localStorage
      localStorage.setItem("investor_profile", JSON.stringify(investorProfile))

      const response = await fetch("/api/investors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(investorProfile),
      })

      if (response.ok) {
        toast({
          title: "Profile Created Successfully!",
          description: "Your investor profile has been saved and you'll start receiving matches soon.",
        })
        // Reset form or redirect
        setCurrentStep(1)
        setFormData({
          basicProfile: {},
          investmentCapacity: {},
          investmentPreferences: {},
          financialCriteria: {},
          teamPreferences: {},
          marketCriteria: {},
          riskExpectations: {},
          involvementPreferences: {},
          dueDiligence: {},
          experience: {},
          dealFlow: {},
        })
      } else {
        throw new Error("Failed to create profile")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create your profile. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const generateInvestorProfile = (data: any) => {
    const now = new Date().toISOString()

    return {
      investor_profile: {
        id: `INV_${Date.now()}`,
        basic_profile: {
          name: data.basicProfile.name || "",
          organization_name: data.basicProfile.organizationName || "",
          email: data.basicProfile.email || "",
          phone: data.basicProfile.phone || "",
          location: {
            city: data.basicProfile.city || "",
            state: data.basicProfile.state || "",
            country: data.basicProfile.country || "",
          },
          investor_type: data.basicProfile.investorType || "",
          website: data.basicProfile.website || "",
          linkedin: data.basicProfile.linkedin || "",
          profile_image: data.basicProfile.profileImage || "/placeholder.svg?height=80&width=80",
        },
        investment_capacity: {
          minimum_investment: data.investmentCapacity.minimumInvestment || 0,
          maximum_investment: data.investmentCapacity.maximumInvestment || 0,
          typical_check_size: data.investmentCapacity.typicalCheckSize || 0,
          available_capital_12_months: data.investmentCapacity.availableCapital || 0,
          currency: data.investmentCapacity.currency || "USD",
          follow_on_reserves: data.investmentCapacity.followOnReserves || false,
          co_investment_comfortable: data.investmentCapacity.coInvestmentComfortable || false,
        },
        investment_preferences: {
          categories: data.investmentPreferences.categories || [],
          stage_preference: data.investmentPreferences.stagePreference || [],
          business_models: data.investmentPreferences.businessModels || [],
          geographic_preference: {
            primary_regions: data.investmentPreferences.primaryRegions || [],
            remote_investment_comfort: data.investmentPreferences.remoteInvestmentComfort || 3,
          },
          valuation_range: {
            minimum: data.investmentPreferences.valuationMin || 0,
            maximum: data.investmentPreferences.valuationMax || 0,
            sweet_spot: data.investmentPreferences.valuationSweetSpot || 0,
          },
        },
        financial_criteria: {
          revenue_requirements: {
            minimum_monthly_revenue: data.financialCriteria.minimumMonthlyRevenue || 0,
            minimum_annual_revenue: data.financialCriteria.minimumAnnualRevenue || 0,
            growth_rate_expectation: data.financialCriteria.growthRateExpectation || 0,
            revenue_multiple_comfort: data.financialCriteria.revenueMultipleComfort || 0,
          },
          key_metrics_focus: data.financialCriteria.keyMetricsFocus || [],
          unit_economics_requirements: {
            minimum_gross_margin: data.financialCriteria.minimumGrossMargin || 0,
            maximum_cac_payback: data.financialCriteria.maximumCacPayback || 0,
            minimum_ltv_cac_ratio: data.financialCriteria.minimumLtvCacRatio || 0,
          },
          runway_preference: {
            minimum_months: data.financialCriteria.minimumRunwayMonths || 0,
            comfortable_range: data.financialCriteria.comfortableRunwayRange || "",
          },
        },
        team_preferences: {
          founder_experience_required: data.teamPreferences.founderExperienceRequired || false,
          minimum_team_size: data.teamPreferences.minimumTeamSize || 0,
          domain_expertise_important: data.teamPreferences.domainExpertiseImportant || false,
          previous_startup_experience: data.teamPreferences.previousStartupExperience || "",
          technical_cofounder_required: data.teamPreferences.technicalCofounderRequired || false,
        },
        market_criteria: {
          minimum_tam: data.marketCriteria.minimumTam || 0,
          minimum_sam: data.marketCriteria.minimumSam || 0,
          market_maturity: data.marketCriteria.marketMaturity || [],
          competitive_landscape: data.marketCriteria.competitiveLandscape || "",
          market_share_expectations: data.marketCriteria.marketShareExpectations || 0,
        },
        risk_expectations: {
          risk_tolerance: data.riskExpectations.riskTolerance || 3,
          risk_tolerance_description: data.riskExpectations.riskToleranceDescription || "",
          expected_returns: {
            target_roi: data.riskExpectations.targetRoi || "",
            investment_horizon: data.riskExpectations.investmentHorizon || "",
          },
          acceptable_loss_scenarios: data.riskExpectations.acceptableLossScenarios || [],
          deal_breakers: data.riskExpectations.dealBreakers || [],
        },
        involvement_preferences: {
          involvement_level: data.involvementPreferences.involvementLevel || "",
          board_participation_interest: data.involvementPreferences.boardParticipationInterest || false,
          mentoring_time_commitment: data.involvementPreferences.mentoringTimeCommitment || "",
          expertise_areas: data.involvementPreferences.expertiseAreas || [],
          network_value: {
            customer_connections: data.involvementPreferences.customerConnections || false,
            investor_network: data.involvementPreferences.investorNetwork || false,
            talent_network: data.involvementPreferences.talentNetwork || false,
            strategic_partnerships: data.involvementPreferences.strategicPartnerships || false,
          },
        },
        due_diligence_requirements: {
          financial_statements_required: data.dueDiligence.financialStatementsRequired || false,
          technical_review: data.dueDiligence.technicalReview || false,
          reference_checks: data.dueDiligence.referenceChecks || false,
          market_validation: data.dueDiligence.marketValidation || false,
          legal_review: data.dueDiligence.legalReview || false,
          timeline_days: data.dueDiligence.timelineDays || 30,
        },
        investment_experience: {
          years_investing: data.experience.yearsInvesting || "",
          number_of_investments: data.experience.numberOfInvestments || 0,
          successful_exits: data.experience.successfulExits || 0,
          portfolio_companies: data.experience.portfolioCompanies || [],
          professional_background: data.experience.professionalBackground || [],
          industry_expertise: data.experience.industryExpertise || [],
        },
        deal_flow_preferences: {
          deals_per_quarter: data.dealFlow.dealsPerQuarter || "",
          referral_sources: data.dealFlow.referralSources || [],
          pitch_format_preference: data.dealFlow.pitchFormatPreference || [],
          communication_preference: data.dealFlow.communicationPreference || "",
          meeting_availability: data.dealFlow.meetingAvailability || "",
        },
      },
      matching_algorithm_data: {
        category_weights: generateCategoryWeights(data.investmentPreferences.categories || []),
        stage_weights: generateStageWeights(data.investmentPreferences.stagePreference || []),
        geographic_weights: generateGeographicWeights(data.investmentPreferences.primaryRegions || []),
        financial_score_weights: {
          revenue_match: 0.3,
          growth_rate: 0.25,
          unit_economics: 0.2,
          runway: 0.15,
          valuation: 0.1,
        },
      },
      metadata: {
        profile_created: now,
        last_updated: now,
        profile_completeness: calculateProfileCompleteness(data),
        verification_status: "email_pending",
        matching_algorithm_version: "v1.2",
        active_status: true,
        last_investment_date: null,
        current_pipeline: 0,
      },
    }
  }

  const generateCategoryWeights = (categories: string[]) => {
    const weights: Record<string, number> = {}
    categories.forEach((category, index) => {
      weights[category] = 10 - index
    })
    return weights
  }

  const generateStageWeights = (stages: string[]) => {
    const weights: Record<string, number> = {}
    stages.forEach((stage, index) => {
      weights[stage] = 10 - index
    })
    return weights
  }

  const generateGeographicWeights = (regions: string[]) => {
    const weights: Record<string, number> = {}
    regions.forEach((region, index) => {
      weights[region] = 10 - index
    })
    return weights
  }

  const calculateProfileCompleteness = (data: any) => {
    const sections = Object.keys(data)
    const completedSections = sections.filter((section) => {
      const sectionData = data[section]
      return Object.keys(sectionData).length > 0
    })
    return Math.round((completedSections.length / sections.length) * 100)
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicProfileStep data={formData.basicProfile} updateData={(data) => updateFormData("basicProfile", data)} />
        )
      case 2:
        return (
          <InvestmentCapacityStep
            data={formData.investmentCapacity}
            updateData={(data) => updateFormData("investmentCapacity", data)}
          />
        )
      case 3:
        return (
          <InvestmentPreferencesStep
            data={formData.investmentPreferences}
            updateData={(data) => updateFormData("investmentPreferences", data)}
          />
        )
      case 4:
        return (
          <FinancialCriteriaStep
            data={formData.financialCriteria}
            updateData={(data) => updateFormData("financialCriteria", data)}
          />
        )
      case 5:
        return (
          <TeamPreferencesStep
            data={formData.teamPreferences}
            updateData={(data) => updateFormData("teamPreferences", data)}
          />
        )
      case 6:
        return (
          <MarketCriteriaStep
            data={formData.marketCriteria}
            updateData={(data) => updateFormData("marketCriteria", data)}
          />
        )
      case 7:
        return (
          <RiskExpectationsStep
            data={formData.riskExpectations}
            updateData={(data) => updateFormData("riskExpectations", data)}
          />
        )
      case 8:
        return (
          <InvolvementPreferencesStep
            data={formData.involvementPreferences}
            updateData={(data) => updateFormData("involvementPreferences", data)}
          />
        )
      case 9:
        return (
          <DueDiligenceStep data={formData.dueDiligence} updateData={(data) => updateFormData("dueDiligence", data)} />
        )
      case 10:
        return <ExperienceStep data={formData.experience} updateData={(data) => updateFormData("experience", data)} />
      case 11:
        return <DealFlowStep data={formData.dealFlow} updateData={(data) => updateFormData("dealFlow", data)} />
      case 12:
        return <ReviewStep formData={formData} />
      default:
        return null
    }
  }

  const progress = (currentStep / steps.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Investor Onboarding</h1>
          <p className="text-gray-600">Complete your profile to start receiving personalized startup matches</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Step {currentStep} of {steps.length}
            </span>
            <span className="text-sm font-medium text-gray-700">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Steps Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm ${
                  step.id === currentStep
                    ? "bg-blue-100 text-blue-800 border border-blue-200"
                    : step.id < currentStep
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-gray-100 text-gray-600 border border-gray-200"
                }`}
              >
                <step.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{step.title}</span>
                {step.id < currentStep && <Check className="w-4 h-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {React.createElement(steps[currentStep - 1].icon, { className: "w-5 h-5" })}
              <span>{steps[currentStep - 1].title}</span>
            </CardTitle>
            <p className="text-gray-600">{steps[currentStep - 1].description}</p>
          </CardHeader>
          <CardContent>{renderCurrentStep()}</CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {currentStep === steps.length ? (
            <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-green-600 hover:bg-green-700">
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Creating Profile...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Create Profile
                </>
              )}
            </Button>
          ) : (
            <Button onClick={nextStep}>
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
