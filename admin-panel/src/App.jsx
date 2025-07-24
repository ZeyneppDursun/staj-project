import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import SectionsPage from './pages/SectionsPage'
import EditSectionPage from './pages/EditSectionPage'
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
        <Route
          path="/edit-section/:id"
          element={
            <AdminLayout>
              <EditSectionPage />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  )
}
export default App;

