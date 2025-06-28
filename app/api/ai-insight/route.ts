import { NextResponse } from "next/server"

type AiInsightRequest = {
  query: string
  investor_data: unknown
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as AiInsightRequest

    // Forward the request to the Flask backend
    const response = await fetch("http://localhost:5000/ai_insight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error forwarding request to backend:", error)
    return NextResponse.json(
      {
        error: "Failed to get AI insights",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
