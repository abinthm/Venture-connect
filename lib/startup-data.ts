import techflowData from "@/data/startups/techflow-solutions.json"
import greenergyData from "@/data/startups/greenergy-innovations.json"
import healthtechData from "@/data/startups/healthtech-pro.json"
import edutechData from "@/data/startups/edutech-revolution.json"
import fintechData from "@/data/startups/fintech-secure.json"
import agritechData from "@/data/startups/agritech-solutions.json"

export interface StartupData {
  id: number
  companyName: string
  tagline: string
  valuation: number
  description: string
  usp: string
  businessModel: string
  category: string
  website: string
  logo: string
  founded: string
  headquarters: string
  stage: string
  keyMetrics: {
    monthlyRevenue: number
    annualRevenue: number
    customers: number
    cashInBank: number
    runway: string
    growthRate: {
      revenue: number
      customers?: number
      mrr?: number
      clinics?: number
      patients?: number
      installations?: number
      schools?: number
      students?: number
      clients?: number
      transactionVolume?: number
      farmers?: number
      sensors?: number
    }
  }
  financials: {
    [year: string]: {
      revenue: number
      grossProfit: number
      operatingExpenses: number
      ebitda: number
      depreciation: number
      ebit: number
      interestExpense: number
      profitBeforeTax: number
      taxExpense: number
      profitAfterTax: number
    }
  }
  projections: {
    [year: string]: {
      revenue: number
      grossProfit: number
      ebitda: number
    }
  }
  balanceSheet: {
    currentAssets: number
    currentLiabilities: number
    inventory: number
    accountsReceivable: number
    accountsPayable: number
    totalAssets: number
    totalLiabilities: number
    shareholderEquity: number
  }
  unitEconomics: {
    cac: number
    ltv: number
    averageSellingPrice: number
    grossMargin: number
    ltvCacRatio: number
  }
  marketPosition: {
    marketShare: number
    brandRecognition: number
    customerSatisfaction: number
    totalAddressableMarket: number
    serviceableAddressableMarket: number
  }
  team: Array<{
    name: string
    role: string
    image: string
    linkedin: string
    ownership: number
    bio: string
  }>
  fundingHistory: Array<{
    round: string
    date: string
    amount: string
    valuation: string
    leadInvestor: string
    useOfFunds: string
  }>
  milestones: Array<{
    date: string
    event: string
    type: string
  }>
  achievements: string[]
  marketSplit: {
    geographic?: Array<{
      name: string
      value: number
      color: string
    }>
    segments?: Array<{
      name: string
      value: number
      color: string
    }>
  }
  salesChannels: Array<{
    channel: string
    percentage: number
    revenue: number
  }>
  pitchVideo: {
    url: string
    description: string
  }
  currentFunding: {
    targetRound: string
    targetAmount: string
    committed: string
    progress: number
  }
  investors: Array<{
    name: string
    type: string
    round: string
  }>
  boardComposition: string[]
}

const startupDataMap: Record<number, StartupData> = {
  1: techflowData as StartupData,
  2: greenergyData as StartupData,
  3: healthtechData as StartupData,
  4: edutechData as StartupData,
  5: fintechData as StartupData,
  6: agritechData as StartupData,
}

export function getStartupData(id: number): StartupData | null {
  return startupDataMap[id] || null
}

export function getAllStartups(): StartupData[] {
  return Object.values(startupDataMap)
}

export function getStartupsByCategory(category: string): StartupData[] {
  return Object.values(startupDataMap).filter((startup) => startup.category === category)
}

export function getStartupsByStage(stage: string): StartupData[] {
  return Object.values(startupDataMap).filter((startup) => startup.stage === stage)
}

export function searchStartups(query: string): StartupData[] {
  const lowercaseQuery = query.toLowerCase()
  return Object.values(startupDataMap).filter(
    (startup) =>
      startup.companyName.toLowerCase().includes(lowercaseQuery) ||
      startup.description.toLowerCase().includes(lowercaseQuery) ||
      startup.category.toLowerCase().includes(lowercaseQuery) ||
      startup.tagline.toLowerCase().includes(lowercaseQuery),
  )
}

// Helper function to format Indian currency
export function formatIndianCurrency(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)} Cr`
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} L`
  } else if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(0)}K`
  } else {
    return `₹${amount.toLocaleString("en-IN")}`
  }
}

// Calculate financial ratios
export function calculateFinancialRatios(startup: StartupData) {
  const currentRatio = startup.balanceSheet.currentAssets / startup.balanceSheet.currentLiabilities
  const debtToEquity = startup.balanceSheet.totalLiabilities / startup.balanceSheet.shareholderEquity
  const grossMarginPercent = startup.unitEconomics.grossMargin

  return {
    currentRatio: Number(currentRatio.toFixed(2)),
    debtToEquity: Number(debtToEquity.toFixed(2)),
    grossMarginPercent,
    ltvCacRatio: startup.unitEconomics.ltvCacRatio,
  }
}

// Get latest financial year data
export function getLatestFinancials(startup: StartupData) {
  const years = Object.keys(startup.financials).sort().reverse()
  const latestYear = years[0]
  return {
    year: latestYear,
    data: startup.financials[latestYear],
  }
}

// Calculate growth rates
export function calculateGrowthRates(startup: StartupData) {
  const years = Object.keys(startup.financials).sort()
  if (years.length < 2) return null

  const currentYear = years[years.length - 1]
  const previousYear = years[years.length - 2]

  const currentRevenue = startup.financials[currentYear].revenue
  const previousRevenue = startup.financials[previousYear].revenue

  const revenueGrowth = ((currentRevenue - previousRevenue) / previousRevenue) * 100

  return {
    revenueGrowth: Number(revenueGrowth.toFixed(1)),
    period: `${previousYear}-${currentYear}`,
  }
}
