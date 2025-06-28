# Startup-Investor Matching Platform

A modern web application that connects startups with potential investors using AI-powered matching algorithms and feedback systems.

## 🚀 Features

- **AI-Powered Matching**: Advanced algorithm to match startups with investors based on multiple criteria
- **Smart Dashboard**: Comprehensive startup dashboards with real-time metrics and analytics
- **Pitch Feedback System**: AI-enhanced feedback loop for pitch improvement
- **Investor Onboarding**: Multi-step onboarding process for investor profiles
- **Responsive Design**: Modern, mobile-friendly UI built with Next.js and Tailwind CSS

## 🏗️ Architecture

- **Frontend**: Next.js 14 with TypeScript, Tailwind CSS, and shadcn/ui components
- **Backend**: Flask API with CORS support for AI-powered suggestions
- **Data**: JSON-based data storage with TypeScript interfaces

## 📁 Project Structure

```
startup (3)/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Startup dashboards
│   ├── investor-onboarding/ # Investor onboarding flow
│   ├── matching/          # Smart matching page
│   └── pitch-feedback/    # AI feedback system
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   └── investor-onboarding/ # Onboarding step components
├── data/                 # JSON data files
├── lib/                  # Utility functions and algorithms
├── backend/              # Flask backend
│   ├── app.py           # Main Flask application
│   └── requirements.txt # Python dependencies
└── public/              # Static assets
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm/pnpm
- Python 3.8+ and pip
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

### Backend Setup (Flask)

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create virtual environment (optional but recommended):**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask server:**
   ```bash
   python app.py
   ```

5. **Verify backend is running:**
   The server should start on [http://127.0.0.1:5000](http://127.0.0.1:5000)

## 🎯 Key Features Explained

### 1. Smart Matching Algorithm
- Analyzes startup and investor profiles across multiple dimensions
- Calculates compatibility scores based on industry, stage, location, and preferences
- Provides AI-powered insights and recommendations

### 2. Startup Dashboards
- **AgriTech Dashboard**: IoT-enabled smart farming solutions
- **EduTech Dashboard**: Educational technology platforms
- **FinTech Dashboard**: Financial technology innovations
- **GreenEnergy Dashboard**: Sustainable energy solutions
- **HealthTech Dashboard**: Healthcare technology platforms

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
- Analyzes investor feedback using AI
- Generates targeted improvement suggestions
- Provides priority-based recommendations
- Tracks feedback history and trends

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:5000
```

### Data Files
- `data/startups/`: Startup profile data
- `data/investor-schema.json`: Investor profile schema
- `data/pitch-feedback.json`: Sample pitch feedback data

## 🚀 Deployment

### Frontend Deployment
The Next.js app can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify

### Backend Deployment
The Flask backend can be deployed to:
- Heroku
- AWS Elastic Beanstalk
- Google Cloud Run
- DigitalOcean App Platform

## 🧪 Testing

### Frontend Testing
```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```

### Backend Testing
```bash
# Navigate to backend directory
cd backend

# Run Flask tests
python -m pytest
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
}
```

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

---

Built with ❤️ using Next.js, Flask, and AI-powered algorithms. 