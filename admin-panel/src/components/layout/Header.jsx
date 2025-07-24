function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Header</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Çıkış Yap
      </button>
    </header>
  )
}

export default Header
