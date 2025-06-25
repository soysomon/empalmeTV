import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, Calendar, Clock } from 'lucide-react';
import axios from 'axios';

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

const Content = () => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [videos, setVideos] = useState<Video[]>([]);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [error, setError] = useState<string | null>(null);
  const [visibleVideos, setVisibleVideos] = useState(6); // Límite inicial de 6 videos

  // Obtener videos desde la API
  useEffect(() => {
    axios.get('http://localhost:5001/api/youtube')
      .then(response => {
        setVideos(response.data);
        if (response.data.length > 0) {
          setSelectedVideo(0);
        }
      })
      .catch(err => {
        setError('Error al cargar los videos');
        console.error('Error al obtener videos:', err);
      });
  }, []);

  const categories = ['Todos', ...new Set(videos.map(video => video.category))];

  const filteredVideos = activeCategory === 'Todos'
    ? videos
    : videos.filter(video => video.category === activeCategory);

  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  };

  const getThumbnailUrl = (video: Video) => {
    if (video.thumbnail) {
      return video.thumbnail;
    }
    const videoId = getVideoId(video.url);
    return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : 'https://via.placeholder.com/480x270/EAC119/333333?text=No+Thumbnail';
  };

  const loadMoreVideos = () => {
    setVisibleVideos(prev => Math.min(prev + 6, filteredVideos.length)); // Aumenta en 6, pero no más allá del total
  };

  return (
    <section id="content" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestro <span className="text-yellow-500">Contenido</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explora nuestra amplia gama de programación desde noticias de última hora y análisis político hasta cobertura de entretenimiento y periodismo de investigación.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-yellow-400 text-gray-900 shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Main Video Player */}
        {videos.length > 0 ? (
          <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl mb-12">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${getVideoId(videos[selectedVideo].url)}?rel=0&modestbranding=1`}
                title={videos[selectedVideo].title}
                className="w-full h-96 md:h-[500px]"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  {videos[selectedVideo].category}
                </span>
                <div className="flex items-center text-gray-400 text-sm space-x-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{videos[selectedVideo].duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(videos[selectedVideo].publishDate).toLocaleDateString('es-ES')}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {videos[selectedVideo].title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {videos[selectedVideo].description}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">{error || 'No hay videos disponibles'}</p>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.slice(0, visibleVideos).map((video, index) => (
            <div
              key={video._id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer animate-fade-in-up animate-delay-${index * 100} ${
                selectedVideo === videos.indexOf(video) ? 'ring-4 ring-yellow-400' : ''
              }`}
              onClick={() => setSelectedVideo(videos.indexOf(video))}
            >
              <div className="relative">
                <img
                  src={getThumbnailUrl(video)}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = `https://via.placeholder.com/480x270/EAC119/333333?text=${encodeURIComponent(video.category)}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-gray-900 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded text-sm font-semibold">
                    {video.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {video.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {video.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(video.publishDate).toLocaleDateString('es-ES')}</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón "Mostrar más" */}
        {visibleVideos < filteredVideos.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMoreVideos}
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300"
            >
              Mostrar más
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Suscríbete para Más Contenido
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Mantente actualizado con nuestros últimos videos, noticias de última hora y contenido exclusivo suscribiéndote a nuestro canal de YouTube.
          </p>
          <a
            href="https://www.youtube.com/@Empalmetv22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Play className="h-5 w-5" />
            <span>Suscríbete a EMPALME TV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Content;