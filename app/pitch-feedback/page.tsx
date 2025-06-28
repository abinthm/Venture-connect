"use client"

import { MessageSquare, Star, Lightbulb, TrendingUp, Target, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import feedbackData from "@/data/pitch-feedback.json"

export default function PitchFeedbackPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleRequestFeedback = async () => {
    setLoading(true)
    setResult(null)
    try {
      const response = await fetch("http://127.0.0.1:5000/ai-improvement-suggestions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      })
      if (!response.ok) {
        throw new Error("Failed to get suggestions")
      }
      const data = await response.json()
      setResult("Success! Suggestions received.")
    } catch (err) {
      setResult("Error: " + (err instanceof Error ? err.message : "Unknown error"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow border p-6">
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Left: Feedback */}
          <div className="flex-1 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold flex items-center mb-2">
              <MessageSquare className="w-6 h-6 mr-2" />
              AI-Enhanced Pitch Feedback Loop
            </h2>
            <h3 className="text-lg font-semibold mb-4">Recent AI-Analyzed Feedback</h3>
            <div className="space-y-6">
              {/* Feedback Card 1 */}
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">Rajesh Kumar</span>
                  <span className="flex items-center text-yellow-500">
                    {[1,2,3,4,5].map((_,i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </span>
                </div>
                <div className="mb-2 text-gray-800">
                  "Strong technical foundation, but need clearer go-to-market strategy. Consider adding more market validation data."
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  2 days ago
                  <span className="ml-2 px-2 py-0.5 rounded bg-gray-200 text-gray-700 font-medium">Technical Review</span>
                </div>
                <div className="rounded bg-blue-100 text-blue-800 text-xs p-2 mt-2">
                  <span className="font-medium">AI Analysis:</span> Feedback indicates strong product-market fit concerns. Recommend focusing on customer validation metrics.
                </div>
              </div>
              {/* Feedback Card 2 */}
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">Priya Sharma</span>
                  <span className="flex items-center text-yellow-500">
                    {[1,2,3,4,5].map((_,i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 5 ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </span>
                </div>
                <div className="mb-2 text-gray-800">
                  "Impressive growth metrics and strong team. Would like to see more details on competitive landscape and differentiation."
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  5 days ago
                  <span className="ml-2 px-2 py-0.5 rounded bg-gray-200 text-gray-700 font-medium">Growth Analysis</span>
                </div>
                <div className="rounded bg-green-100 text-green-800 text-xs p-2 mt-2">
                  <span className="font-medium">AI Analysis:</span> Positive sentiment detected. Competitive analysis section needs strengthening for next pitch.
                </div>
              </div>
              {/* Feedback Card 3 */}
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">Anita Desai</span>
                  <span className="flex items-center text-yellow-500">
                    {[1,2,3,4,5].map((_,i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 3 ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </span>
                </div>
                <div className="mb-2 text-gray-800">
                  "Pitch is promising, but financial projections lack detail. Please include scenario-based forecasts."
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  1 week ago
                  <span className="ml-2 px-2 py-0.5 rounded bg-gray-200 text-gray-700 font-medium">Financial Review</span>
                </div>
                <div className="rounded bg-yellow-100 text-yellow-800 text-xs p-2 mt-2">
                  <span className="font-medium">AI Analysis:</span> Financial projections are too high-level. Add breakdowns and scenario analysis for credibility.
                </div>
              </div>
              {/* Feedback Card 4 */}
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">Vikram Joshi</span>
                  <span className="flex items-center text-yellow-500">
                    {[1,2,3,4,5].map((_,i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 5 ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </span>
                </div>
                <div className="mb-2 text-gray-800">
                  "Excellent team and vision. Would recommend adding more customer testimonials to build trust."
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  3 days ago
                  <span className="ml-2 px-2 py-0.5 rounded bg-gray-200 text-gray-700 font-medium">Market Review</span>
                </div>
                <div className="rounded bg-purple-100 text-purple-800 text-xs p-2 mt-2">
                  <span className="font-medium">AI Analysis:</span> Strong team and vision. Customer validation will further strengthen the pitch.
                </div>
              </div>
              {/* Feedback Card 5 */}
              <div className="border rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold">Neha Agarwal</span>
                  <span className="flex items-center text-yellow-500">
                    {[1,2,3,4,5].map((_,i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </span>
                </div>
                <div className="mb-2 text-gray-800">
                  "Good pitch structure, but competitive differentiation is not clear. Highlight your unique value proposition."
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  4 days ago
                  <span className="ml-2 px-2 py-0.5 rounded bg-gray-200 text-gray-700 font-medium">Competitor Analysis</span>
                </div>
                <div className="rounded bg-orange-100 text-orange-800 text-xs p-2 mt-2">
                  <span className="font-medium">AI Analysis:</span> Clarify what sets you apart from competitors. Add a differentiation matrix if possible.
                </div>
              </div>
            </div>
          </div>
          {/* Right: Suggestions */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">AI-Generated Improvement Suggestions</h3>
            <div className="space-y-4">
              <div className="rounded-lg p-4 bg-blue-50">
                <div className="flex items-center mb-1 text-blue-700 font-semibold">
                  <Lightbulb className="w-5 h-5 mr-2" /> Market Validation Enhancement
                </div>
                <div className="text-sm text-blue-800 mb-1">
                  Add customer testimonials, usage metrics, and NPS scores to strengthen market validation narrative.
                </div>
                <div className="text-xs text-blue-700">Priority: High • Impact: 85%</div>
              </div>
              <div className="rounded-lg p-4 bg-green-50">
                <div className="flex items-center mb-1 text-green-700 font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" /> Financial Projections Detail
                </div>
                <div className="text-sm text-green-800 mb-1">
                  Include detailed revenue breakdown, unit economics, and scenario-based projections.
                </div>
                <div className="text-xs text-green-700">Priority: Medium • Impact: 72%</div>
              </div>
              <div className="rounded-lg p-4 bg-orange-50">
                <div className="flex items-center mb-1 text-orange-700 font-semibold">
                  <Target className="w-5 h-5 mr-2" /> Competitive Differentiation
                </div>
                <div className="text-sm text-orange-800 mb-1">
                  Provide clearer differentiation matrix and competitive moats analysis.
                </div>
                <div className="text-xs text-orange-700">Priority: High • Impact: 78%</div>
              </div>
              <div className="rounded-lg p-4 bg-purple-50">
                <div className="flex items-center mb-1 text-purple-700 font-semibold">
                  <CheckCircle className="w-5 h-5 mr-2" /> Go-to-Market Strategy
                </div>
                <div className="text-sm text-purple-800 mb-1">
                  Strengthen GTM strategy with clear customer acquisition channels and cost metrics.
                </div>
                <div className="text-xs text-purple-700">Priority: High • Impact: 81%</div>
              </div>
              {/* More AI Suggestions */}
              <div className="rounded-lg p-4 bg-pink-50">
                <div className="flex items-center mb-1 text-pink-700 font-semibold">
                  <Lightbulb className="w-5 h-5 mr-2" /> Team Storytelling
                </div>
                <div className="text-sm text-pink-800 mb-1">
                  Share founder stories and team achievements to build credibility and emotional connection.
                </div>
                <div className="text-xs text-pink-700">Priority: Medium • Impact: 65%</div>
              </div>
              <div className="rounded-lg p-4 bg-gray-50">
                <div className="flex items-center mb-1 text-gray-700 font-semibold">
                  <TrendingUp className="w-5 h-5 mr-2" /> Risk Mitigation Plan
                </div>
                <div className="text-sm text-gray-800 mb-1">
                  Outline key risks and your mitigation strategies to increase investor confidence.
                </div>
                <div className="text-xs text-gray-700">Priority: Low • Impact: 55%</div>
              </div>
            </div>
            <div className="mt-8">
              <Button
                className="w-full text-base font-semibold flex items-center justify-center"
                size="lg"
                onClick={handleRequestFeedback}
                disabled={loading}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                {loading ? "Requesting..." : "Request AI-Targeted Feedback"}
              </Button>
              {result && (
                <div className="mt-4 text-center text-sm text-gray-700">{result}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 