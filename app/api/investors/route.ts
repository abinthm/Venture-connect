import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const investorData = await request.json()

    // Log the received data for debugging
    console.log("Received investor data:", JSON.stringify(investorData, null, 2))

    // Here you would typically:
    // 1. Validate the data
    // 2. Save to database
    // 3. Send confirmation email
    // 4. Trigger matching algorithm

    // For now, we'll just simulate a successful response
    const response = {
      success: true,
      message: "Investor profile created successfully",
      investorId: investorData.investor_profile.id,
      profileCompleteness: investorData.metadata.profile_completeness,
      timestamp: new Date().toISOString(),
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error("Error creating investor profile:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create investor profile",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({ message: "Investor API endpoint is working" }, { status: 200 })
}
