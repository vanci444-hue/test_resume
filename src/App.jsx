import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/LangContext'
import CRTOverlay from './components/CRTOverlay'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ShapeGrid from './components/ShapeGrid'
import SplashCursor from './components/SplashCursor'
import Home from './pages/Home'
import About from './pages/About'
import WorkProjects from './pages/WorkProjects'
import Contact from './pages/Contact'

function AppRoutes() {
  const location = useLocation()
  return (
      <main
      key={location.pathname}
      className="w-full pt-16 relative z-10 max-w-[1152px] mx-auto px-4 lg:px-8 min-h-screen"
    >
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<WorkProjects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-on-background)] relative">
          {/* Animated grid background */}
          <div className="fixed inset-0 z-0">
            <ShapeGrid
              speed={0.5}
              squareSize={40}
              direction="diagonal"
              borderColor="#2F293A"
              hoverFillColor="#222"
              shape="square"
              hoverTrailAmount={0}
            />
          </div>
          {/* Fluid cursor splash effect */}
          <SplashCursor
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.2}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
            SHADING
            RAINBOW_MODE={false}
            COLOR="#00FF41"
          />
          <CRTOverlay />
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </LangProvider>
    </ThemeProvider>
  )
}
