/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import SectionsPage from './pages/SectionsPage'
import EditSectionPage from './pages/EditSectionPage'
import AddSectionPage from './pages/AddSectionPage'
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
        <Route 
          path="/add-section" 
          element={
            <AddSectionPage />
          } 
        />
      </Routes>
    </Router>
  )
}
export default App;
*/






import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout'
import SectionsPage from './pages/SectionsPage'
import EditSectionPage from './pages/EditSectionPage'
import AddSectionPage from './pages/AddSectionPage'
import CardsPage from './pages/CardsPage';
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<SectionsPage />} />
          <Route path="edit-section/:id" element={<EditSectionPage />} />
          <Route path="add-section" element={<AddSectionPage />} />
          <Route path="cards" element={<CardsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
