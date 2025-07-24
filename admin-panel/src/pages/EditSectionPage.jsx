import { useParams, useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { useState, useEffect } from 'react'
import {
  GET_SECTION_BY_ID,
  UPDATE_SECTION,
  GET_SECTIONS,
} from '../lib/graphql'

function EditSectionPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    subtitle: '',
    image: '',
    button: '',
  })

  const { data, loading, error } = useQuery(GET_SECTION_BY_ID, {
    variables: { id: parseInt(id) },
  })

  const [updateSection, { loading: updateLoading }] = useMutation(
    UPDATE_SECTION,
    {
      refetchQueries: [{ query: GET_SECTIONS }],
    },
  )

  useEffect(() => {
    if (data && data.sections_by_pk) {
      const { __typename, ...sectionData } = data.sections_by_pk
      setFormData(sectionData)
    }
  }, [data])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { __typename, id: sectionId, ...updateData } = formData;
    try {
      await updateSection({
        variables: {
          id: parseInt(id),
          ...updateData,
        },
      });
      navigate('/');
    } catch (err) {
      console.error('Error updating section:', err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Edit Section</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">Subtitle</label>
          <textarea
            name="subtitle"
            id="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            rows="3"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="button" className="block text-sm font-medium text-gray-700">Button URL</label>
          <input
            type="text"
            name="button"
            id="button"
            value={formData.button}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="mr-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={updateLoading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
          >
            {updateLoading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditSectionPage;