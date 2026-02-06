# Sri Trinethra Global Projects - Product Requirements Document

## Original Problem Statement
Build a wealth management website showing real estate & investments with trading opportunities for members. Reference style: worldlibertyfinancial.com. Company: Sri Trinethra Global Projects.

## User Choices & Inputs
- **Core Features**: Landing page with hero, about, services + Real estate investment opportunities listing
- **Authentication**: Frontend only initially, add authentication later
- **Trading Features**: Live market data/charts with mock data initially
- **Design**: Blue & gold color scheme (from company logo), premium financial aesthetic
- **Integration**: Mock data for now, real API integration in next phase

## Architecture & Tech Stack
- **Frontend**: React 19, Tailwind CSS, Shadcn UI components
- **Styling**: Inter font, Blue (#3b82f6) + Gold (#fbbf24) color scheme
- **Backend**: FastAPI, MongoDB (to be implemented)
- **Deployment**: Emergent platform

## What's Been Implemented (February 6, 2026)

### Phase 1: Frontend with Mock Data ✅
**Components Created:**
1. `mock.js` - All mock data (properties, trading opportunities, market stats, company info)
2. `Header.jsx` - Fixed navigation with smooth scrolling, mobile responsive
3. `Hero.jsx` - Full-screen hero with company logo, animated background, stats cards
4. `About.jsx` - Mission statement, 4 value cards (Strategic Vision, Client-Centric, Excellence, Global Reach)
5. `Services.jsx` - 3 service cards (Real Estate, Wealth Management, Trading)
6. `RealEstateSection.jsx` - 6 properties grid with filtering, property cards with images
7. `TradingSection.jsx` - Market stats, bar chart visualization, 6 trading opportunities
8. `Footer.jsx` - Company info, quick links, contact details, social media
9. `Home.jsx` - Main landing page combining all sections

**Design Features:**
- Premium blue & gold color scheme matching company logo
- Glassmorphism effects with backdrop blur
- Smooth scroll navigation
- Hover animations and transitions
- Responsive grid layouts
- Professional financial aesthetic
- No prohibited gradients used

## Mock Data Structure

### Real Estate Properties (6 properties)
- Property details: title, location, type, price, ROI, area, status
- Property images from Unsplash
- Filter by: All, Commercial, Residential, Mixed-Use

### Trading Opportunities (6 assets)
- SPX, GOLD, TECH, REIT, ENERGY, INTL
- Live price display, change percentage, volume, market cap
- Visual trend indicators (up/down)

### Market Statistics
- Total Investments: $2.4B
- Active Members: 15,420
- Properties Managed: 127
- Average ROI: 14.2%

## API Contracts (To Be Implemented)

### Real Estate APIs
```
GET /api/properties - List all properties
GET /api/properties/:id - Get property details
POST /api/properties - Create property (admin)
PUT /api/properties/:id - Update property (admin)
DELETE /api/properties/:id - Delete property (admin)
```

### Trading APIs
```
GET /api/trading/opportunities - Get trading opportunities
GET /api/trading/market-stats - Get market statistics
GET /api/trading/chart-data - Get chart data
```

### Member APIs (Future)
```
POST /api/auth/register - Register new member
POST /api/auth/login - Member login
GET /api/members/dashboard - Member dashboard
POST /api/members/invest - Submit investment interest
```

## Next Action Items

### P0 - Immediate Next Steps
1. **Backend Development**
   - Set up MongoDB models (Property, Trading, Member)
   - Implement REST APIs for properties and trading data
   - Connect frontend to backend APIs
   - Remove mock data, integrate real data

2. **Member Authentication**
   - Implement registration/login system
   - Create member dashboard
   - Protected routes for member features

### P1 - High Priority Features
1. **Real-time Trading Integration**
   - Integrate with financial data API (Alpha Vantage, Yahoo Finance)
   - Live chart updates
   - Real-time price feeds

2. **Property Management**
   - Admin panel for property CRUD
   - Image upload functionality
   - Property inquiry form

3. **Investment Features**
   - Investment calculator
   - ROI projections
   - Portfolio tracker for members

### P2 - Enhancement Features
1. **Advanced Features**
   - Email notifications
   - Document management
   - Investment reports generation
   - Chat/support system

2. **Analytics & Tracking**
   - User behavior analytics
   - Investment tracking
   - Performance dashboards

## Current Status
✅ Frontend MVP complete with mock data
✅ All sections designed and functional
✅ Responsive design implemented
✅ Premium aesthetic achieved

⏳ Backend development pending
⏳ Authentication system pending
⏳ Real API integrations pending

## Notes
- All mock data is stored in `/app/frontend/src/mock.js`
- Color scheme: Blue (#1e40af, #3b82f6) + Gold (#fbbf24, #f59e0b)
- Logo integrated in header and hero section
- Smooth scroll navigation between sections
- Mobile-responsive design implemented
