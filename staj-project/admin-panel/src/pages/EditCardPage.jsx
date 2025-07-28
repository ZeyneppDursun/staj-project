import { useQuery, useMutation } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';
import { GET_CARD_BY_ID, UPDATE_CARD } from '../lib/graphql';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

function EditCardPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_CARD_BY_ID, { variables: { id } });
  const [updateCard] = useMutation(UPDATE_CARD);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const variables = { id };
    for (let [key, value] of formData.entries()) {
      variables[key] = value;
    }
    updateCard({ variables });
    navigate('/cards');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <button onClick={() => navigate('/cards')} className="flex items-center text-gray-600 mb-4">
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Cards
        </button>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Edit Card</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" name="title" id="title" defaultValue={data.cards_by_pk.title} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" id="description" defaultValue={data.cards_by_pk.description} rows="4" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
            <input type="text" name="image" id="image" defaultValue={data.cards_by_pk.image} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input type="text" name="category" id="category" defaultValue={data.cards_by_pk.category} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow-md transition">Update Card</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCardPage;