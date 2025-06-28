"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Building2, Search, UserPlus, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Venture Connect Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Venture Connect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Startups
            </Link>
            <Link href="/matching" className="text-gray-700 hover:text-gray-900 font-medium">
              Smart Matching
            </Link>
            <Link href="/investor-onboarding" className="text-gray-700 hover:text-gray-900 font-medium">
              Investor Onboarding
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/pitch-feedback">
              <Button size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                Pitch Feedback
              </Button>
            </Link>
            <a
              href="https://legendary-sable-846891.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" variant="outline">
                Valuation Calculation
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Startups
              </Link>
              <Link
                href="/matching"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Smart Matching
              </Link>
              <Link
                href="/investor-onboarding"
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Investor Onboarding
              </Link>
              <div className="pt-4 pb-2 space-y-2">
                <Link href="/pitch-feedback" onClick={() => setIsMenuOpen(false)}>
                  <Button size="sm" className="w-full">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Pitch Feedback
                  </Button>
                </Link>
                <a
                  href="https://legendary-sable-846891.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button size="sm" variant="outline" className="w-full">
                    Valuation Calculation
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
