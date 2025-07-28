/*import Sidebar from './Sidebar'
import Header from './Header'

function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
*/



import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="p-6 bg-gray-100 flex-grow">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
