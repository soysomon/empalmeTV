import React from 'react';
import { Youtube, Twitter, Instagram, Facebook, Mail, Tv, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/@Empalmetv22',
      color: 'hover:text-red-500 hover:bg-red-500/10',
      description: 'Suscríbete a nuestro canal'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/empalmetv22',
      color: 'hover:text-blue-400 hover:bg-blue-400/10',
      description: 'Síguenos en Twitter'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/emplametv22',
      color: 'hover:text-pink-500 hover:bg-pink-500/10',
      description: 'Fotos y videos exclusivos'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/empalmetv22',
      color: 'hover:text-blue-600 hover:bg-blue-600/10',
      description: 'Únete a nuestra comunidad'
    },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Nuestro Equipo', href: '#team' },
    { name: 'Contenido', href: '#content' },
    { name: 'Contacto', href: '#contact' },
  ];

  const contentCategories = [
    'Política y Análisis',
    'Entretenimiento',
    'Noticias Actuales',
    'Investigación',
    'Deportes',
    'Cultura y Sociedad'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-primary-400 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-blue-400 to-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="p-3 accent-gradient rounded-2xl shadow-lg">
                  <Tv className="h-8 w-8 text-gray-900" />
                </div>
                <div className="absolute inset-0 accent-gradient rounded-2xl blur-lg opacity-30"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">EMPALME</span>
                <span className="text-lg font-medium text-gray-400 -mt-1">TV</span>
              </div>
            </div>

            <p className="text-gray-400 max-w-md leading-relaxed">
              Ofreciendo contenido fresco, relevante e interactivo en política, análisis, entretenimiento,
              noticias y periodismo de investigación. Tu fuente confiable de información y entretenimiento.
            </p>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary-400">Síguenos</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map(({ name, icon: Icon, url, color, description }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-3 p-4 glass rounded-xl transition-all duration-300 border-white/10 hover:border-white/20 ${color}`}
                  >
                    <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white text-sm">{name}</div>
                      <div className="text-xs text-gray-400 truncate">{description}</div>
                    </div>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary-400">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content Categories */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-primary-400">Nuestro Contenido</h3>
            <ul className="space-y-3">
              {contentCategories.map((category) => (
                <li key={category}>
                  <span className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="card p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mantente Actualizado
            </h3>
            <p className="text-gray-400 mb-6">
              Suscríbete para recibir las últimas noticias y contenido exclusivo de EMPALME TV.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-300"
              />
              <button className="btn-primary px-8">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="card p-8 mb-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-6">Contacto</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="mailto:empalmetv2277@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
                <span>empalmetv2277@gmail.com</span>
              </a>
              <div className="text-gray-400">
                Transmitiendo 24/7 desde República Dominicana
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 EMPALME TV. Todos los derechos reservados.</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Hecho con</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>en República Dominicana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;