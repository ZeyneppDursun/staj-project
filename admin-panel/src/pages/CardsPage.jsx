import { useQuery } from '@apollo/client'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import { GET_CARDS } from '../lib/graphql'

function CardsPage() {
  const navigate = useNavigate()
  const { loading, error, data } = useQuery(GET_CARDS)

  if (loading) return <p className="p-4 text-center text-gray-500">Loading...</p>
  if (error) return <p className="p-4 text-center text-red-500">Error: {error.message}</p>
  if (!data || !data.cards) return <p className="p-4">No data found</p>

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Cards</h1>

      {/* Sağ üst köşeye ekle butonu */}
      <button
        onClick={() => navigate('/add-card')}
        className="absolute top-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md transition"
      >
        Ekle
      </button>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-xs uppercase text-gray-500 border-b font-semibold">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.cards.map((card, idx) => (
              <tr
                key={card.id}
                className={`cursor-pointer hover:bg-gray-100 ${
                  idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap">{card.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{card.title}</td>
                <td className="px-6 py-4">{card.description}</td>
                <td className="px-6 py-4">
                  {card.image ? (
                    <img
                      src={card.image}
                      alt="img"
                      className="w-16 h-10 object-cover rounded"
                    />
                  ) : (
                    <span className="text-gray-400">N/A</span>
                  )}
                </td>
                <td className="px-6 py-4">{card.category}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => navigate(`/edit-card/${String(card.id)}`)}
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

export default CardsPage