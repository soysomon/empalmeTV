import React from 'react';
import { Mail, MapPin, Phone, Send, Youtube, Twitter, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Correo Electrónico',
      detail: 'empalmetv2277@gmail.com',
      link: 'mailto:empalmetv2277@gmail.com',
      color: 'text-blue-500'
    },
    {
      icon: MapPin,
      title: 'Ubicación', 
      detail: 'Transmitiendo a Nivel Nacional',
      link: null,
      color: 'text-green-500'
    },
    {
      icon: Phone,
      title: 'Disponible',
      detail: 'Cobertura Digital 24/7',
      link: null,
      color: 'text-purple-500'
    }
  ];

  const socialLinks = [
    { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@Empalmetv22', color: 'hover:text-red-500 bg-red-50 hover:bg-red-100' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/empalmetv22', color: 'hover:text-blue-400 bg-blue-50 hover:bg-blue-100' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/empalmetv22?igsh=MmQ2MjhsNWc5dnZj', color: 'hover:text-pink-500 bg-pink-50 hover:bg-pink-100' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/share/16xDYTqgHG', color: 'hover:text-blue-600 bg-blue-50 hover:bg-blue-100' },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ponte en <span className="text-yellow-500">Contacto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conéctate con EMPALME TV para consultas, oportunidades de asociación o para compartir tus ideas de historias. Siempre estamos interesados en escuchar a nuestra audiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${info.color.replace('text-', 'bg-').replace('-500', '-100')}`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-gray-600 hover:text-yellow-600 transition-colors"
                        >
                          {info.detail}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Síguenos</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map(({ name, icon: Icon, url, color }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-200 transition-all duration-300 hover:border-yellow-300 ${color}`}
                  >
                    <Icon className="h-6 w-6" />
                    <span className="font-semibold text-gray-700">{name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Horario de Transmisión</h3>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Contenido Digital</span>
                    <span className="font-semibold text-gray-900">Disponible 24/7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Programas en Vivo</span>
                    <span className="font-semibold text-gray-900">Lun - Vie, 8PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Noticias de Última Hora</span>
                    <span className="font-semibold text-gray-900">Cuando sucede</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                  placeholder="tu.correo@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Asunto
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecciona un tema</option>
                  <option value="general">Consulta General</option>
                  <option value="partnership">Oportunidad de Asociación</option>
                  <option value="story">Sugerencia de Historia</option>
                  <option value="feedback">Comentarios</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Cuéntanos más sobre tu consulta..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Mantente Actualizado
          </h3>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín para las últimas noticias, contenido exclusivo y perspectivas detrás de escena de EMPALME TV.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-gray-900 transition-all duration-200"
            />
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;