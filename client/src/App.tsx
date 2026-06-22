import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="flex items-center justify-center h-screen"><h1 className="text-4xl font-bold">Task Management App</h1></div>} />
      </Routes>
    </Router>
  )
}

export default App
