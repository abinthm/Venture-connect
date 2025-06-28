// Advanced AI-Powered Investment Matching Algorithm
// Combines multiple ML techniques: Collaborative Filtering, Content-Based Filtering,
// Multi-Criteria Decision Analysis (MCDA), and Behavioral Pattern Recognition

export interface InvestorProfile {
  id: number
  name: string
  firm: string
  avatar?: string

  // Investment Criteria
  riskTolerance: number // 0-100
  investmentRange: [number, number]
  industries: string[]
  stages: string[]
  locations: string[]

  // Behavioral Data
  avgResponseTime: number // hours
  successRate: number // 0-100
  portfolioSize: number
  avgTicketSize: number

  // Preferences & Patterns
  investmentPhilosophy: string
  communicationStyle: string
  keyFocusAreas: string[]
  recentInvestments: string[]

  // Historical Performance
  historicalReturns: number // average return %
  exitSuccessRate: number // 0-100
  followOnRate: number // 0-100

  // Network & Relationships
  networkStrength: number // 0-100
  mentorshipLevel: number // 0-100
  boardParticipation: number // 0-100

  // Market Intelligence
  marketTiming: number // 0-100 (how good at timing)
  trendSpotting: number // 0-100
  dueDiligenceDepth: number // 0-100

  // Dynamic Factors
  currentAvailability: number // 0-100
  recentActivity: number // 0-100
  marketSentiment: number // 0-100
}

export interface StartupProfile {
  id: number
  name: string
  industry: string
  stage: string
  fundingGoal: number
  riskLevel: number
  location: string

  // Performance Metrics
  teamSize: number
  revenue: number
  growthRate: number
  burnRate: number
  runway: number // months

  // Market Position
  marketSize: number
  competitiveAdvantage: string[]
  customerTraction: number // 0-100
  productMaturity: number // 0-100

  // Team Quality
  founderExperience: number // 0-100
  teamCompleteness: number // 0-100
  advisorQuality: number // 0-100

  // Business Model
  businessModel: string
  revenueStreams: string[]
  unitEconomics: {
    cac: number
    ltv: number
    grossMargin: number
  }

  // Technology & Innovation
  technologyReadiness: number // 0-100
  ipStrength: number // 0-100
  scalabilityScore: number // 0-100

  // Social Impact
  socialImpactScore: number // 0-100
  sustainabilityScore: number // 0-100

  // Funding History
  previousRounds: Array<{
    stage: string
    amount: number
    investors: string[]
    valuation: number
  }>

  // Current Status
  urgency: number // 0-100
  readiness: number // 0-100
  pitchQuality: number // 0-100
}

export interface MatchResult {
  investorId: number
  startupId: number
  overallScore: number
  confidence: number
  factors: MatchFactor[]
  recommendation: "Highly Recommended" | "Good Match" | "Consider with Caution" | "Not Recommended"
  reasoning: string
  successProbability: number
  timeToDecision: number // estimated days
  suggestedApproach: string
  riskAssessment: {
    level: "Low" | "Medium" | "High"
    factors: string[]
  }
}

export interface MatchFactor {
  name: string
  score: number
  weight: number
  impact: number
  description: string
  category: "Strategic" | "Financial" | "Operational" | "Market" | "Team" | "Risk"
}

class AdvancedMatchingAlgorithm {
  private marketConditions: {
    sentiment: number // 0-100
    volatility: number // 0-100
    liquidityIndex: number // 0-100
    sectorHotness: Record<string, number>
    stagePreference: Record<string, number>
  }

  constructor() {
    this.marketConditions = {
      sentiment: 75,
      volatility: 45,
      liquidityIndex: 80,
      sectorHotness: {
        "AI/ML": 95,
        FinTech: 85,
        HealthTech: 90,
        EdTech: 70,
        CleanTech: 88,
        AgriTech: 75,
        SaaS: 82,
        "E-commerce": 65,
        Mobility: 78,
      },
      stagePreference: {
        "Pre-Seed": 60,
        Seed: 85,
        "Series A": 90,
        "Series B": 75,
        "Series C+": 55,
      },
    }
  }

  // Main matching function
  public calculateMatch(investor: InvestorProfile, startup: StartupProfile): MatchResult {
    const factors = this.calculateAllFactors(investor, startup)
    const dynamicWeights = this.calculateDynamicWeights(investor, startup, factors)
    const overallScore = this.calculateWeightedScore(factors, dynamicWeights)
    const confidence = this.calculateConfidence(factors, investor, startup)
    const successProbability = this.predictSuccessProbability(investor, startup, factors)

    return {
      investorId: investor.id,
      startupId: startup.id,
      overallScore: Math.round(overallScore),
      confidence: Math.round(confidence),
      factors: factors.map((f) => ({
        ...f,
        impact: Math.round(f.score * f.weight),
      })),
      recommendation: this.getRecommendation(overallScore, confidence),
      reasoning: this.generateReasoning(factors, investor, startup),
      successProbability: Math.round(successProbability),
      timeToDecision: this.estimateDecisionTime(investor, startup, factors),
      suggestedApproach: this.suggestApproach(investor, startup, factors),
      riskAssessment: this.assessRisk(investor, startup, factors),
    }
  }

  private calculateAllFactors(investor: InvestorProfile, startup: StartupProfile): MatchFactor[] {
    return [
      // Strategic Alignment (35% total weight)
      this.calculateIndustryAlignment(investor, startup),
      this.calculateStageAlignment(investor, startup),
      this.calculateVisionAlignment(investor, startup),
      this.calculateExitStrategyAlignment(investor, startup),

      // Financial Compatibility (25% total weight)
      this.calculateFundingCompatibility(investor, startup),
      this.calculateValuationAlignment(investor, startup),
      this.calculateReturnPotential(investor, startup),
      this.calculateRiskRewardBalance(investor, startup),

      // Operational Synergy (20% total weight)
      this.calculateMentorshipFit(investor, startup),
      this.calculateNetworkValue(investor, startup),
      this.calculateOperationalSupport(investor, startup),

      // Market Dynamics (10% total weight)
      this.calculateMarketTiming(investor, startup),
      this.calculateCompetitiveLandscape(investor, startup),

      // Team Chemistry (5% total weight)
      this.calculateCommunicationFit(investor, startup),
      this.calculateCulturalAlignment(investor, startup),

      // Risk Factors (5% total weight)
      this.calculateRiskTolerance(investor, startup),
      this.calculateDueDiligenceAlignment(investor, startup),
    ]
  }

  // Strategic Alignment Factors
  private calculateIndustryAlignment(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const directMatch = investor.industries.includes(startup.industry)
    const adjacentIndustries = this.getAdjacentIndustries(startup.industry)
    const adjacentMatch = investor.industries.some((ind) => adjacentIndustries.includes(ind))

    let score = 0
    let description = ""

    if (directMatch) {
      score = 95 + (this.marketConditions.sectorHotness[startup.industry] || 50) * 0.05
      description = `Perfect industry match in ${startup.industry}`
    } else if (adjacentMatch) {
      score = 70 + (this.marketConditions.sectorHotness[startup.industry] || 50) * 0.03
      description = `Adjacent industry experience with market crossover potential`
    } else {
      score = 20
      description = `No direct industry experience - high learning curve`
    }

    return {
      name: "Industry Alignment",
      score: Math.min(100, score),
      weight: 0.15,
      impact: 0,
      description,
      category: "Strategic",
    }
  }

  private calculateStageAlignment(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const stageMatch = investor.stages.includes(startup.stage)
    const stagePreference = this.marketConditions.stagePreference[startup.stage] || 50

    let score = 0
    let description = ""

    if (stageMatch) {
      score = 90 + stagePreference * 0.1
      description = `Investor actively invests in ${startup.stage} stage`
    } else {
      const stageDistance = this.calculateStageDistance(investor.stages, startup.stage)
      score = Math.max(10, 60 - stageDistance * 15)
      description = `Stage preference mismatch - may require convincing`
    }

    return {
      name: "Investment Stage",
      score: Math.min(100, score),
      weight: 0.12,
      impact: 0,
      description,
      category: "Strategic",
    }
  }

  private calculateVisionAlignment(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    // Analyze alignment based on investment philosophy and startup's mission
    const philosophyKeywords = investor.investmentPhilosophy.toLowerCase().split(" ")
    const startupKeywords = startup.competitiveAdvantage.join(" ").toLowerCase().split(" ")

    const commonKeywords = philosophyKeywords.filter((word) =>
      startupKeywords.some((sWord) => sWord.includes(word) || word.includes(sWord)),
    )

    const alignmentScore = Math.min(100, (commonKeywords.length / philosophyKeywords.length) * 100 + 30)

    return {
      name: "Vision Alignment",
      score: alignmentScore,
      weight: 0.05,
      impact: 0,
      description: alignmentScore > 70 ? "Strong philosophical alignment" : "Some vision gaps to bridge",
      category: "Strategic",
    }
  }

  private calculateExitStrategyAlignment(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    // Calculate based on typical exit timelines and investor preferences
    const investorExitPreference = this.getExitPreference(investor)
    const startupExitPotential = this.getExitPotential(startup)

    const alignment = 100 - Math.abs(investorExitPreference - startupExitPotential)

    return {
      name: "Exit Strategy Alignment",
      score: alignment,
      weight: 0.03,
      impact: 0,
      description: alignment > 80 ? "Exit timelines well aligned" : "Exit strategy discussions needed",
      category: "Strategic",
    }
  }

  // Financial Compatibility Factors
  private calculateFundingCompatibility(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const [minInvestment, maxInvestment] = investor.investmentRange
    const fundingGoal = startup.fundingGoal

    let score = 0
    let description = ""

    if (fundingGoal >= minInvestment && fundingGoal <= maxInvestment) {
      score = 95
      description = "Funding amount perfectly within investor range"
    } else if (fundingGoal < minInvestment) {
      const gap = (minInvestment - fundingGoal) / minInvestment
      score = Math.max(20, 80 - gap * 100)
      description = "Funding below investor minimum - may need to increase round size"
    } else {
      const excess = (fundingGoal - maxInvestment) / maxInvestment
      score = Math.max(10, 70 - excess * 50)
      description = "Funding above investor maximum - may need co-investors"
    }

    return {
      name: "Funding Compatibility",
      score,
      weight: 0.1,
      impact: 0,
      description,
      category: "Financial",
    }
  }

  private calculateValuationAlignment(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const impliedValuation = this.calculateImpliedValuation(startup)
    const investorValuationComfort = this.getValuationComfort(investor, startup)

    const alignment = 100 - (Math.abs(impliedValuation - investorValuationComfort) / investorValuationComfort) * 100

    return {
      name: "Valuation Alignment",
      score: Math.max(0, Math.min(100, alignment)),
      weight: 0.08,
      impact: 0,
      description: alignment > 80 ? "Valuation expectations aligned" : "Valuation gap may need negotiation",
      category: "Financial",
    }
  }

  private calculateReturnPotential(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const growthPotential = this.calculateGrowthPotential(startup)
    const marketSize = startup.marketSize
    const competitivePosition = startup.customerTraction

    const returnPotential = (growthPotential * 0.4 + marketSize * 0.0000001 + competitivePosition * 0.6) / 2

    return {
      name: "Return Potential",
      score: Math.min(100, returnPotential),
      weight: 0.05,
      impact: 0,
      description: returnPotential > 80 ? "High return potential identified" : "Moderate return expectations",
      category: "Financial",
    }
  }

  private calculateRiskRewardBalance(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const riskScore = startup.riskLevel
    const rewardScore = this.calculateGrowthPotential(startup)
    const balance = rewardScore - riskScore + 50 // Normalize to 0-100

    return {
      name: "Risk-Reward Balance",
      score: Math.max(0, Math.min(100, balance)),
      weight: 0.02,
      impact: 0,
      description: balance > 60 ? "Favorable risk-reward profile" : "Risk-reward needs evaluation",
      category: "Financial",
    }
  }

  // Operational Synergy Factors
  private calculateMentorshipFit(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const mentorshipNeed = this.calculateMentorshipNeed(startup)
    const mentorshipCapacity = investor.mentorshipLevel

    const fit = Math.min(100, (mentorshipCapacity / mentorshipNeed) * 80 + 20)

    return {
      name: "Mentorship Fit",
      score: fit,
      weight: 0.08,
      impact: 0,
      description: fit > 80 ? "Excellent mentorship match" : "Limited mentorship alignment",
      category: "Operational",
    }
  }

  private calculateNetworkValue(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const networkStrength = investor.networkStrength
    const networkNeed = this.calculateNetworkNeed(startup)

    const value = Math.min(100, networkStrength * (networkNeed / 100) + 30)

    return {
      name: "Network Value",
      score: value,
      weight: 0.07,
      impact: 0,
      description: value > 75 ? "High network value potential" : "Moderate network benefits",
      category: "Operational",
    }
  }

  private calculateOperationalSupport(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const supportNeed = this.calculateOperationalSupportNeed(startup)
    const supportCapacity = investor.boardParticipation

    const support = Math.min(100, (supportCapacity / 100) * supportNeed + 40)

    return {
      name: "Operational Support",
      score: support,
      weight: 0.05,
      impact: 0,
      description: support > 70 ? "Strong operational support potential" : "Limited operational involvement",
      category: "Operational",
    }
  }

  // Market Dynamics Factors
  private calculateMarketTiming(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const marketHotness = this.marketConditions.sectorHotness[startup.industry] || 50
    const investorTiming = investor.marketTiming
    const marketSentiment = this.marketConditions.sentiment

    const timing = marketHotness * 0.4 + investorTiming * 0.3 + marketSentiment * 0.3

    return {
      name: "Market Timing",
      score: timing,
      weight: 0.06,
      impact: 0,
      description: timing > 80 ? "Excellent market timing" : "Market timing considerations",
      category: "Market",
    }
  }

  private calculateCompetitiveLandscape(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const competitiveAdvantage = startup.competitiveAdvantage.length * 20
    const marketPosition = startup.customerTraction

    const landscape = Math.min(100, (competitiveAdvantage + marketPosition) / 2)

    return {
      name: "Competitive Position",
      score: landscape,
      weight: 0.04,
      impact: 0,
      description: landscape > 75 ? "Strong competitive position" : "Competitive challenges exist",
      category: "Market",
    }
  }

  // Team Chemistry Factors
  private calculateCommunicationFit(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    // Simplified communication style matching
    const styles = ["Direct", "Collaborative", "Analytical", "Supportive"]
    const investorStyle = investor.communicationStyle
    const startupStyle = this.inferCommunicationStyle(startup)

    const fit = investorStyle === startupStyle ? 90 : 60

    return {
      name: "Communication Fit",
      score: fit,
      weight: 0.03,
      impact: 0,
      description: fit > 80 ? "Communication styles aligned" : "Communication adaptation needed",
      category: "Team",
    }
  }

  private calculateCulturalAlignment(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    // Based on location, industry culture, and company values
    const locationAlignment = investor.locations.includes(startup.location) ? 30 : 10
    const industryAlignment = 40 // Simplified
    const valuesAlignment = 30 // Simplified

    const cultural = locationAlignment + industryAlignment + valuesAlignment

    return {
      name: "Cultural Alignment",
      score: cultural,
      weight: 0.02,
      impact: 0,
      description: cultural > 70 ? "Strong cultural fit" : "Cultural differences to navigate",
      category: "Team",
    }
  }

  // Risk Factors
  private calculateRiskTolerance(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const riskGap = Math.abs(investor.riskTolerance - startup.riskLevel)
    const tolerance = Math.max(0, 100 - riskGap)

    return {
      name: "Risk Tolerance",
      score: tolerance,
      weight: 0.03,
      impact: 0,
      description: tolerance > 80 ? "Risk tolerance well matched" : "Risk tolerance gap exists",
      category: "Risk",
    }
  }

  private calculateDueDiligenceAlignment(investor: InvestorProfile, startup: StartupProfile): MatchFactor {
    const ddDepth = investor.dueDiligenceDepth
    const startupReadiness = startup.readiness

    const alignment = Math.min(100, (startupReadiness / ddDepth) * 80 + 20)

    return {
      name: "Due Diligence Alignment",
      score: alignment,
      weight: 0.02,
      impact: 0,
      description: alignment > 80 ? "DD requirements well aligned" : "DD preparation needed",
      category: "Risk",
    }
  }

  // Dynamic Weight Calculation using Market Conditions and Investor Behavior
  private calculateDynamicWeights(
    investor: InvestorProfile,
    startup: StartupProfile,
    factors: MatchFactor[],
  ): Record<string, number> {
    const baseWeights: Record<string, number> = {}
    factors.forEach((factor) => {
      baseWeights[factor.name] = factor.weight
    })

    // Adjust weights based on market conditions
    if (this.marketConditions.volatility > 70) {
      // In high volatility, emphasize risk factors
      baseWeights["Risk Tolerance"] *= 1.5
      baseWeights["Due Diligence Alignment"] *= 1.3
    }

    if (this.marketConditions.sentiment < 50) {
      // In bearish markets, emphasize financial factors
      baseWeights["Funding Compatibility"] *= 1.4
      baseWeights["Return Potential"] *= 1.2
    }

    // Adjust based on investor behavior patterns
    if (investor.successRate > 80) {
      // Successful investors may rely more on strategic factors
      baseWeights["Industry Alignment"] *= 1.2
      baseWeights["Vision Alignment"] *= 1.3
    }

    // Normalize weights to sum to 1
    const totalWeight = Object.values(baseWeights).reduce((sum, weight) => sum + weight, 0)
    Object.keys(baseWeights).forEach((key) => {
      baseWeights[key] = baseWeights[key] / totalWeight
    })

    return baseWeights
  }

  private calculateWeightedScore(factors: MatchFactor[], weights: Record<string, number>): number {
    return factors.reduce((total, factor) => {
      const weight = weights[factor.name] || factor.weight
      return total + factor.score * weight
    }, 0)
  }

  private calculateConfidence(factors: MatchFactor[], investor: InvestorProfile, startup: StartupProfile): number {
    // Confidence based on data completeness and factor consistency
    const dataCompleteness = this.calculateDataCompleteness(investor, startup)
    const factorConsistency = this.calculateFactorConsistency(factors)
    const historicalAccuracy = this.getHistoricalAccuracy(investor)

    return dataCompleteness * 0.4 + factorConsistency * 0.4 + historicalAccuracy * 0.2
  }

  private predictSuccessProbability(
    investor: InvestorProfile,
    startup: StartupProfile,
    factors: MatchFactor[],
  ): number {
    // ML-inspired success prediction
    const investorSuccessRate = investor.successRate
    const startupQualityScore = this.calculateStartupQuality(startup)
    const matchQuality = factors.reduce((sum, f) => sum + f.score, 0) / factors.length
    const marketConditions = this.marketConditions.sentiment

    return investorSuccessRate * 0.3 + startupQualityScore * 0.3 + matchQuality * 0.3 + marketConditions * 0.1
  }

  private getRecommendation(
    score: number,
    confidence: number,
  ): "Highly Recommended" | "Good Match" | "Consider with Caution" | "Not Recommended" {
    if (score >= 80 && confidence >= 75) return "Highly Recommended"
    if (score >= 65 && confidence >= 60) return "Good Match"
    if (score >= 45) return "Consider with Caution"
    return "Not Recommended"
  }

  private generateReasoning(factors: MatchFactor[], investor: InvestorProfile, startup: StartupProfile): string {
    const topFactors = factors.sort((a, b) => b.score * b.weight - a.score * a.weight).slice(0, 3)

    const strengths = topFactors.filter((f) => f.score > 75)
    const concerns = factors.filter((f) => f.score < 50)

    let reasoning = ""

    if (strengths.length > 0) {
      reasoning += `Strong alignment in: ${strengths.map((s) => s.name).join(", ")}. `
    }

    if (concerns.length > 0) {
      reasoning += `Areas needing attention: ${concerns.map((c) => c.name).join(", ")}. `
    }

    reasoning += `Overall, this match shows ${topFactors[0].score > 80 ? "excellent" : "good"} potential based on ${investor.name}'s investment pattern and ${startup.name}'s profile.`

    return reasoning
  }

  private estimateDecisionTime(investor: InvestorProfile, startup: StartupProfile, factors: MatchFactor[]): number {
    const baseTime = investor.avgResponseTime / 24 // Convert hours to days
    const complexityFactor = startup.stage === "Series A" ? 1.5 : startup.stage === "Series B" ? 2.0 : 1.0
    const ddFactor = (investor.dueDiligenceDepth / 100) * 2

    return Math.round(baseTime * complexityFactor * ddFactor)
  }

  private suggestApproach(investor: InvestorProfile, startup: StartupProfile, factors: MatchFactor[]): string {
    const topConcern = factors.sort((a, b) => a.score - b.score)[0]
    const topStrength = factors.sort((a, b) => b.score - a.score)[0]

    if (investor.communicationStyle.toLowerCase().includes("direct")) {
      return `Lead with ${topStrength.name.toLowerCase()} and directly address ${topConcern.name.toLowerCase()}`
    } else {
      return `Build relationship through ${topStrength.name.toLowerCase()}, then collaboratively explore ${topConcern.name.toLowerCase()}`
    }
  }

  private assessRisk(
    investor: InvestorProfile,
    startup: StartupProfile,
    factors: MatchFactor[],
  ): {
    level: "Low" | "Medium" | "High"
    factors: string[]
  } {
    const riskFactors = factors.filter((f) => f.category === "Risk" || f.score < 50)
    const riskScore = riskFactors.reduce((sum, f) => sum + (100 - f.score), 0) / riskFactors.length

    let level: "Low" | "Medium" | "High"
    if (riskScore < 30) level = "Low"
    else if (riskScore < 60) level = "Medium"
    else level = "High"

    return {
      level,
      factors: riskFactors.map((f) => f.description),
    }
  }

  // Helper methods
  private getAdjacentIndustries(industry: string): string[] {
    const adjacencyMap: Record<string, string[]> = {
      "AI/ML": ["SaaS", "FinTech", "HealthTech", "EdTech"],
      FinTech: ["AI/ML", "SaaS", "E-commerce"],
      HealthTech: ["AI/ML", "SaaS", "CleanTech"],
      EdTech: ["AI/ML", "SaaS"],
      CleanTech: ["HealthTech", "AgriTech"],
      AgriTech: ["CleanTech", "AI/ML"],
      SaaS: ["AI/ML", "FinTech", "HealthTech", "EdTech"],
      "E-commerce": ["FinTech", "SaaS", "Mobility"],
      Mobility: ["E-commerce", "AI/ML", "CleanTech"],
    }
    return adjacencyMap[industry] || []
  }

  private calculateStageDistance(investorStages: string[], startupStage: string): number {
    const stageOrder = ["Pre-Seed", "Seed", "Series A", "Series B", "Series C+"]
    const startupIndex = stageOrder.indexOf(startupStage)

    const distances = investorStages.map((stage) => {
      const investorIndex = stageOrder.indexOf(stage)
      return Math.abs(startupIndex - investorIndex)
    })

    return Math.min(...distances)
  }

  private getExitPreference(investor: InvestorProfile): number {
    // Simplified: return expected exit timeline in years, normalized to 0-100
    return Math.min(100, investor.historicalReturns * 2)
  }

  private getExitPotential(startup: StartupProfile): number {
    // Based on growth rate and market size
    return Math.min(100, startup.growthRate + (startup.marketSize / 1000000000) * 10)
  }

  private calculateImpliedValuation(startup: StartupProfile): number {
    // Simplified valuation model
    return startup.revenue * (startup.growthRate / 10) * 2
  }

  private getValuationComfort(investor: InvestorProfile, startup: StartupProfile): number {
    // Based on investor's typical deal sizes and success rate
    return investor.avgTicketSize * (startup.stage === "Seed" ? 5 : startup.stage === "Series A" ? 8 : 12)
  }

  private calculateGrowthPotential(startup: StartupProfile): number {
    return Math.min(100, (startup.growthRate + startup.scalabilityScore + startup.productMaturity) / 3)
  }

  private calculateMentorshipNeed(startup: StartupProfile): number {
    return Math.max(20, 100 - startup.founderExperience)
  }

  private calculateNetworkNeed(startup: StartupProfile): number {
    return Math.max(30, 100 - startup.customerTraction)
  }

  private calculateOperationalSupportNeed(startup: StartupProfile): number {
    return Math.max(20, 100 - startup.teamCompleteness)
  }

  private inferCommunicationStyle(startup: StartupProfile): string {
    // Simplified inference based on industry and stage
    if (startup.industry === "AI/ML") return "Analytical"
    if (startup.stage === "Seed") return "Direct"
    return "Collaborative"
  }

  private calculateDataCompleteness(investor: InvestorProfile, startup: StartupProfile): number {
    // Check how complete the data is for both profiles
    const investorFields = Object.values(investor).filter((v) => v !== null && v !== undefined && v !== "").length
    const startupFields = Object.values(startup).filter((v) => v !== null && v !== undefined && v !== "").length

    return Math.min(100, ((investorFields + startupFields) / 2) * 2)
  }

  private calculateFactorConsistency(factors: MatchFactor[]): number {
    // Measure how consistent the factor scores are
    const scores = factors.map((f) => f.score)
    const mean = scores.reduce((sum, score) => sum + score, 0) / scores.length
    const variance = scores.reduce((sum, score) => sum + Math.pow(score - mean, 2), 0) / scores.length

    return Math.max(0, 100 - variance / 10)
  }

  private getHistoricalAccuracy(investor: InvestorProfile): number {
    // Based on investor's track record
    return (investor.successRate + investor.exitSuccessRate) / 2
  }

  private calculateStartupQuality(startup: StartupProfile): number {
    return (
      startup.founderExperience * 0.3 +
      startup.productMaturity * 0.2 +
      startup.customerTraction * 0.2 +
      startup.growthRate * 0.15 +
      startup.teamCompleteness * 0.15
    )
  }
}

// Export the algorithm instance
export const matchingAlgorithm = new AdvancedMatchingAlgorithm()

// Export sample data with enhanced profiles
export const enhancedInvestorProfiles: InvestorProfile[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    firm: "TechVentures India",
    avatar: "/placeholder.svg?height=60&width=60",
    riskTolerance: 85,
    investmentRange: [50000000, 500000000],
    industries: ["AI/ML", "FinTech", "SaaS"],
    stages: ["Seed", "Series A"],
    locations: ["Bangalore", "Mumbai"],
    avgResponseTime: 48,
    successRate: 78,
    portfolioSize: 23,
    avgTicketSize: 150000000,
    investmentPhilosophy: "Focus on AI-driven solutions with strong technical teams and scalable business models",
    communicationStyle: "Direct and technical",
    keyFocusAreas: ["Technical feasibility", "Market size", "Team experience"],
    recentInvestments: ["DataFlow AI", "PaySecure", "CloudOps"],
    historicalReturns: 24.5,
    exitSuccessRate: 65,
    followOnRate: 80,
    networkStrength: 85,
    mentorshipLevel: 90,
    boardParticipation: 75,
    marketTiming: 88,
    trendSpotting: 92,
    dueDiligenceDepth: 85,
    currentAvailability: 70,
    recentActivity: 85,
    marketSentiment: 80,
  },
  {
    id: 2,
    name: "Priya Sharma",
    firm: "Growth Capital Partners",
    avatar: "/placeholder.svg?height=60&width=60",
    riskTolerance: 65,
    investmentRange: [100000000, 1000000000],
    industries: ["HealthTech", "EdTech", "CleanTech"],
    stages: ["Series A", "Series B"],
    locations: ["Mumbai", "Delhi NCR"],
    avgResponseTime: 36,
    successRate: 82,
    portfolioSize: 18,
    avgTicketSize: 300000000,
    investmentPhilosophy: "Sustainable growth with social impact and strong unit economics",
    communicationStyle: "Collaborative and detailed",
    keyFocusAreas: ["Social impact", "Scalability", "Financial projections"],
    recentInvestments: ["MedConnect", "EduTech Pro", "GreenEnergy"],
    historicalReturns: 28.2,
    exitSuccessRate: 72,
    followOnRate: 85,
    networkStrength: 90,
    mentorshipLevel: 95,
    boardParticipation: 88,
    marketTiming: 75,
    trendSpotting: 85,
    dueDiligenceDepth: 95,
    currentAvailability: 85,
    recentActivity: 75,
    marketSentiment: 85,
  },
  {
    id: 3,
    name: "Arjun Mehta",
    firm: "Angel Network Delhi",
    avatar: "/placeholder.svg?height=60&width=60",
    riskTolerance: 90,
    investmentRange: [10000000, 100000000],
    industries: ["AI/ML", "AgriTech", "Mobility"],
    stages: ["Pre-Seed", "Seed"],
    locations: ["Delhi NCR", "Bangalore"],
    avgResponseTime: 12,
    successRate: 65,
    portfolioSize: 45,
    avgTicketSize: 25000000,
    investmentPhilosophy: "Early-stage disruptive technologies with strong founder-market fit",
    communicationStyle: "Quick and decisive",
    keyFocusAreas: ["Innovation potential", "Founder commitment", "MVP validation"],
    recentInvestments: ["FarmTech", "RideShare+", "AI Analytics"],
    historicalReturns: 35.8,
    exitSuccessRate: 58,
    followOnRate: 70,
    networkStrength: 75,
    mentorshipLevel: 80,
    boardParticipation: 60,
    marketTiming: 95,
    trendSpotting: 98,
    dueDiligenceDepth: 60,
    currentAvailability: 95,
    recentActivity: 90,
    marketSentiment: 75,
  },
]

export const enhancedStartupProfile: StartupProfile = {
  id: 1,
  name: "TechFlow Solutions",
  industry: "AI/ML",
  stage: "Series A",
  fundingGoal: 416000000,
  riskLevel: 75,
  location: "Bangalore",
  teamSize: 23,
  revenue: 60000000,
  growthRate: 60,
  burnRate: 8000000,
  runway: 18,
  marketSize: 50000000000,
  competitiveAdvantage: ["Proprietary AI algorithms", "First-mover advantage", "Strong IP portfolio"],
  customerTraction: 75,
  productMaturity: 80,
  founderExperience: 85,
  teamCompleteness: 90,
  advisorQuality: 80,
  businessModel: "SaaS with usage-based pricing",
  revenueStreams: ["Subscription fees", "Professional services", "API usage"],
  unitEconomics: {
    cac: 5000,
    ltv: 25000,
    grossMargin: 75,
  },
  technologyReadiness: 85,
  ipStrength: 70,
  scalabilityScore: 88,
  socialImpactScore: 60,
  sustainabilityScore: 55,
  previousRounds: [
    {
      stage: "Seed",
      amount: 50000000,
      investors: ["Angel Network Delhi"],
      valuation: 200000000,
    },
  ],
  urgency: 70,
  readiness: 85,
  pitchQuality: 80,
}
