# WSET Level 3 Study Hub

A Progressive Web App (PWA) for WSET Level 3 Wine certification study, featuring interactive quizzes, winemaking process diagrams, and comprehensive wine regions explorer with memory aids.

🍷 **Live App:** https://wset-quiz.vercel.app

## Features

### 📚 Interactive Quiz Practice
- 100 comprehensive multiple-choice questions covering all WSET Level 3 modules
- Real-time progress tracking and timer functionality
- Detailed explanations for each answer
- Module-based performance breakdown

### 🍷 Winemaking Process Diagrams
- 5 complete winemaking process visualizations
- Interactive step-by-step explanations
- Technical parameters (temperature, timing, methods)
- Professional wine-themed UI design

### 🌍 Wine Regions Explorer
- Complete coverage of Old World and New World wine regions
- Memory aids and acronyms for every region
- Interactive world map with accurate wine region positioning
- Comprehensive details on climate, soils, grapes, and wine styles

### 📱 Progressive Web App
- **Installable** on mobile devices (iOS/Android)
- **Offline support** - works without internet connection
- **Mobile-responsive** design with safe area insets
- **Native app experience** with fullscreen mode

## Modules Covered

1. The Systematic Approach to Tasting
2. Natural Factors and Human Influences in the Vineyard
3. Human Factors in the Winery
4. White Wines of Alsace, Germany, Austria and Tokaj
5. White Wines of Burgundy, Loire Valley and Bordeaux
6. Red and Rosé Wines of Bordeaux, SW France and Loire
7. Red Wines of Burgundy and Rhône Valley
8. Southern Rhône, Southern France, Spain and Portugal
9. Northern Spain and Northern Italy
10. Central/Southern Italy, Portugal and Greece
11. Premium Red Wines of New Zealand, USA, and Australia
12. Premium White Wine Regions of the New World
13. Regional Specialties and Argentina/Chile
14. Sparkling Wines
15. Fortified Wines

## Technology Stack

- **Framework:** Next.js 15 with TypeScript
- **UI:** React 19 with custom CSS
- **Deployment:** Vercel with GitHub integration
- **PWA:** Service Worker with offline caching
- **Design:** Wine-themed color palette and typography

## Installation

### Install as Mobile App

1. Visit https://wset-quiz.vercel.app on your mobile device
2. **iOS:** Tap Share → "Add to Home Screen"
3. **Android:** Tap menu → "Add to Home Screen" or "Install App"

### Run Locally

```bash
# Clone the repository
git clone https://github.com/helloemzy/wset-quiz.git
cd wset-quiz

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

## Project Structure

```
wset-quiz/
├── app/                    # Next.js app directory
├── components/             # React components
├── data/                   # Quiz questions and wine data
├── public/                 # Static assets and PWA files
│   ├── manifest.json      # PWA manifest
│   ├── sw.js             # Service worker
│   └── icons/            # App icons
└── scripts/               # Build scripts
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is for educational purposes. WSET content is referenced under fair use for study purposes.

---

Created with ❤️ for WSET Level 3 students worldwide