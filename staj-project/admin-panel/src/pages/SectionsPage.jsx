import { gql, useQuery } from '@apollo/client'
import { PencilSquareIcon } from '@heroicons/react/24/outline'

const GET_SECTIONS = gql`
  query {
    sections(order_by: { id: asc }) {
      id
      name
      title
      subtitle
      image
      button
    }
  }
`

function SectionsPage() {
  const { loading, error, data } = useQuery(GET_SECTIONS)

  if (loading) return <p className="p-4 text-center text-gray-500">Loading...</p>
  if (error) return <p className="p-4 text-center text-red-500">Error: {error.message}</p>
  if (!data || !data.sections) return <p className="p-4">No data found</p>

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Sections</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-500 border-b font-semibold">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Subtitle</th>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Button</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.sections.map((section, idx) => (
                <tr
                key={section.id}
                className={`cursor-pointer hover:bg-gray-100 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
                >
                <td className="px-6 py-4 whitespace-nowrap">{section.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{section.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{section.title}</td>
                <td className="px-6 py-4">{section.subtitle}</td>
                <td className="px-6 py-4">
                  {section.image ? (
                    <img
                      src={section.image}
                      alt="img"
                      className="w-16 h-10 object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  {section.button ? (
                    <a
                      href={section.button}
                      className="text-blue-600 hover:underline text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {section.button}
                    </a>
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => alert(`Edit section: ${section.id}`)}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold rounded shadow-sm transition"
                  >
                    <PencilSquareIcon className="w-4 h-4" />
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SectionsPage
