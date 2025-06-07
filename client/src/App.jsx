import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import MainContent from './components/layout/MainContent'

function App() {
  return (
    <div className="min-h-screen bg-main">
      <Header />
      <div className="flex h-[calc(100vh-73px)]">
        <Sidebar />
        <MainContent>
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="bg-surface-light p-6 rounded-lg shadow-sm">
                  <h1 className="text-2xl font-bold mb-4 text-sidebar">Welcome to Tools Dashboard</h1>
                  <p className="text-sidebar/80">Select a tool or workflow from the sidebar to get started.</p>
                </div>
              } 
            />
          </Routes>
        </MainContent>
      </div>
    </div>
  )
}

export default App
