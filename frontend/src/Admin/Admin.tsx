import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';

interface Video {
  _id: string;
  url: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  publishDate: string;
  thumbnail: string;
}

const Admin: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    description: '',
    category: '',
    duration: '',
    publishDate: '',
    thumbnail: ''
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 5;
  
  const { getApiUrl } = useApi();

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(getApiUrl('/youtube'));
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(getApiUrl(`/youtube/${editingId}`), formData);
        setEditingId(null);
      } else {
        await axios.post(getApiUrl('/youtube'), formData);
      }
      setFormData({ url: '', title: '', description: '', category: '', duration: '', publishDate: '', thumbnail: '' });
      fetchVideos();
      setCurrentPage(1);
    } catch (error) {
      console.error('Error saving video:', error);
    }
  };

  const handleEdit = (video: Video) => {
    setEditingId(video._id);
    setFormData({
      url: video.url,
      title: video.title,
      description: video.description,
      category: video.category,
      duration: video.duration,
      publishDate: video.publishDate.split('T')[0],
      thumbnail: video.thumbnail
    });
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(getApiUrl(`/youtube/${id}`));
      fetchVideos();
      if (currentPage > 1 && videos.length <= videosPerPage) setCurrentPage(prev => prev - 1);
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Administración</h1>
      <Link to="/content" className="text-blue-500 mb-4 inline-block hover:underline">Volver a Contenido</Link>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="URL de YouTube"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Título"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="border p-2 rounded"
            required
          >
            <option value="">Selecciona una categoría</option>
            <option value="Política">Política</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Noticias">Noticias</option>
            <option value="Investigación">Investigación</option>
            <option value="Deporte">Deporte</option>
          </select>
          <input
            type="text"
            placeholder="Duración (ej. 25:30)"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="date"
            value={formData.publishDate}
            onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Thumbnail URL (opcional)"
            value={formData.thumbnail}
            onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Descripción"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="border p-2 rounded md:col-span-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
          {editingId ? 'Actualizar Video' : 'Agregar Video'}
        </button>
      </form>
      <div>
        <h2 className="text-xl font-semibold mb-4">Videos</h2>
        <ul className="space-y-4">
          {currentVideos.map((video) => (
            <li key={video._id} className="border p-4 rounded flex justify-between items-center">
              <div>
                <h3 className="font-bold">{video.title}</h3>
                <p>{video.category} - {video.duration}</p>
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(video)} className="text-blue-500">
                  <Edit size={20} />
                </button>
                <button onClick={() => handleDelete(video._id)} className="text-red-500">
                  <Trash2 size={20} />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Anterior
          </button>
          <span>Página {currentPage} de {totalPages}</span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;