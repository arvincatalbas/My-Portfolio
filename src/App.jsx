import './App.css'
import Home from './routes/Home'
import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/project'
import Certifications from './pages/certification'
import Contact from './pages/contact'
import ThemeToggle from './components/ThemeToggle'
import { useTheme } from './components/config/theme'

function App() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className="app">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
        </div>
    )
}

export default App