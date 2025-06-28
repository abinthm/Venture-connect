# Startup-Investor Matching Platform

A modern web application that connects startups with potential investors using AI-powered matching algorithms and feedback systems.

## 🚀 Features

- **AI-Powered Matching**: Advanced algorithm to match startups with investors based on multiple criteria
- **Smart Dashboard**: Comprehensive startup dashboards with real-time metrics and analytics
- **Pitch Feedback System**: AI-enhanced feedback loop for pitch improvement
- **Investor Onboarding**: Multi-step onboarding process for investor profiles
- **Responsive Design**: Modern, mobile-friendly UI built with Next.js and Tailwind CSS
- **API Integration**: Built-in API routes for AI insights and external service integration

## 🏗️ Architecture

- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS, and shadcn/ui components
- **API Routes**: Next.js API routes for backend functionality
- **Data**: JSON-based data storage with TypeScript interfaces
- **External APIs**: Integration with external AI services via API routes

## 📁 Project Structure

```
startup (3)/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── ai-insight/    # AI insight endpoint
│   │   └── investors/     # Investor data endpoint
│   ├── dashboard/         # Startup dashboards
│   ├── investor-onboarding/ # Investor onboarding flow
│   ├── matching/          # Smart matching page
│   └── pitch-feedback/    # AI feedback system
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   └── investor-onboarding/ # Onboarding step components
├── data/                 # JSON data files
│   ├── startups/         # Startup profile data
│   ├── investor-schema.json
│   └── pitch-feedback.json
├── lib/                  # Utility functions and algorithms
│   ├── matching-algorithm.ts
│   ├── startup-data.ts
│   └── utils.ts
├── backend/              # Backend utilities and data
│   ├── data/            # Additional backend data
│   ├── test.ipynb       # Jupyter notebook for testing
│   └── requirements.txt # Python dependencies (for future use)
└── public/              # Static assets
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm/pnpm
- Git

### Frontend Setup (Next.js)

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### API Integration

The application includes built-in API routes that can be extended to integrate with external services:

- `/api/ai-insight` - AI-powered insights and recommendations
- `/api/investors` - Investor data management

## 🎯 Key Features Explained

### 1. Smart Matching Algorithm
- Analyzes startup and investor profiles across multiple dimensions
- Calculates compatibility scores based on industry, stage, location, and preferences
- Provides AI-powered insights and recommendations
- Real-time matching with advanced scoring algorithms

### 2. Startup Dashboards
- **AgriTech Dashboard**: IoT-enabled smart farming solutions with real-time metrics
- **EduTech Dashboard**: Educational technology platforms with growth analytics
- **FinTech Dashboard**: Financial technology innovations with security metrics
- **GreenEnergy Dashboard**: Sustainable energy solutions with environmental impact
- **HealthTech Dashboard**: Healthcare technology platforms with compliance tracking

### 3. Investor Onboarding
12-step comprehensive onboarding process:
- Basic Profile
- Investment Capacity
- Investment Preferences
- Deal Flow Preferences
- Market Criteria
- Team Preferences
- Experience & Background
- Financial Criteria
- Risk Expectations
- Involvement Preferences
- Due Diligence Process
- Review & Submit

### 4. AI-Enhanced Pitch Feedback
- Analyzes investor feedback using AI algorithms
- Generates targeted improvement suggestions
- Provides priority-based recommendations
- Tracks feedback history and trends
- Integrates with external AI services for enhanced insights

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_EXTERNAL_AI_URL=http://127.0.0.1:5000
```

### Data Files
- `data/startups/`: Comprehensive startup profile data with metrics
- `data/investor-schema.json`: Investor profile schema and validation
- `data/pitch-feedback.json`: Sample pitch feedback data for testing

## 🚀 Deployment

### Frontend Deployment
The Next.js app can be deployed to:
- **Vercel** (recommended) - Zero-config deployment with automatic API routes
- **Netlify** - Static site generation with serverless functions
- **AWS Amplify** - Full-stack deployment with backend integration

### API Routes Deployment
Next.js API routes are automatically deployed with the frontend:
- Serverless functions on Vercel
- Netlify Functions on Netlify
- AWS Lambda on AWS Amplify

## 🧪 Testing

### Frontend Testing
```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run linting
pnpm lint
```

### API Testing
```bash
# Test API routes locally
curl http://localhost:3000/api/ai-insight

# Test with sample data
curl -X POST http://localhost:3000/api/ai-insight \
  -H "Content-Type: application/json" \
  -d '{"query": "test query"}'
```

## 📊 Data Structure

### Startup Profile
```typescript
interface Startup {
  id: string
  name: string
  industry: string
  stage: string
  location: string
  description: string
  founders: Founder[]
  metrics: Metrics
  financials: Financials
  dashboardPath: string
}
```

### Investor Profile
```typescript
interface InvestorProfile {
  id: number
  name: string
  investmentCapacity: InvestmentCapacity
  preferences: InvestmentPreferences
  criteria: MarketCriteria
  experience: Experience
  riskExpectations: RiskExpectations
}
```

### Match Result
```typescript
interface MatchResult {
  investor: InvestorProfile
  overallScore: number
  categoryScores: {
    industry: number
    stage: number
    location: number
    preferences: number
  }
  recommendation: string
  insights: string[]
}
```

## 🔌 API Endpoints

### AI Insight Endpoint
- **POST** `/api/ai-insight`
- Analyzes queries and provides AI-powered insights
- Integrates with external AI services

### Investors Endpoint
- **GET** `/api/investors`
- Returns investor profile data
- Supports filtering and search

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed description
3. Include error logs and steps to reproduce

## 🔗 Links

- [Live Demo](https://your-demo-url.com)
- [API Documentation](https://your-api-docs.com)
- [Design System](https://your-design-system.com)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/startup-investor-platform.git

# Navigate to project directory
cd startup-investor-platform

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open in browser
open http://localhost:3000
```

---

Built with ❤️ using Next.js, TypeScript, and AI-powered algorithms. 