import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Sidebar</h2>
      <nav className="flex flex-col space-y-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition 
            ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800'}`
          }
        >
          Sections
        </NavLink>
        <NavLink
          to="/cards"
          className={({ isActive }) =>
            `block px-4 py-2 rounded transition 
            ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800'}`
          }
        >
          Cards
        </NavLink>
        {/* Başka sayfalar */}
      </nav>
    </div>
  )
}

export default Sidebar
