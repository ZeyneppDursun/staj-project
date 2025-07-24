import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import SectionsPage from './pages/SectionsPage'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AdminLayout>
              <SectionsPage />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  )
}
export default App;

