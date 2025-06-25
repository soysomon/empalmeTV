import React, { useEffect, useRef, useState } from 'react';
import { Play, ChevronDown, Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import { gsap } from 'gsap';
import logo from '../../img/logoempalmeTV.png';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animación GSAP para el logo
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.5, rotation: -180 },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0, 
        duration: 1.5, 
        ease: 'elastic.out(1, 0.3)', 
        delay: 0.5 
      }
    );

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContent = () => {
    document.querySelector('#content')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen gradient-bg text-white flex items-center relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-yellow-500/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-amber-400/10 to-yellow-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-yellow-400/5 to-amber-500/5 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>

        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content Section */}
          <div className={`space-y-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Logo and Brand Section */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="relative" ref={logoRef}>
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-yellow-400/25 hover:shadow-yellow-400/50 transition-shadow duration-300">
                  <img 
                    src={logo} 
                    alt="Empalme TV Logo" 
                    className="w-20 h-20 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const nextElement = target.nextSibling as HTMLElement;
                      target.style.display = 'none';
                      if (nextElement) nextElement.style.display = 'block';
                    }}
                  />
                  <img 
                    src={logo} 
                    alt="Empalme TV Logo Fallback" 
                    className="w-20 h-20 object-contain hidden"
                  />
                </div>
              </div>
              <div className="text-sm font-medium text-yellow-400 tracking-wider uppercase">
                Contenido Premium
              </div>
            </div>

            {/* Enhanced Typography */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent animate-pulse">
                  EMPALME
                </span>
                <br />
                <span className="text-white relative">
                  TV
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl font-light text-gray-200 tracking-wide">
                  Contenido <span className="text-yellow-400 font-semibold">Fresco</span>, 
                  <span className="text-yellow-400 font-semibold"> Relevante</span> e 
                  <span className="text-yellow-400 font-semibold"> Interactivo</span>
                </p>
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                  Tu destino principal para cobertura integral de política, análisis, entretenimiento, 
                  noticias y periodismo de investigación. Entregamos contenido que importa, cuando importa.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-yellow-400">50K+</div>
                <div className="text-sm text-gray-400">Espectadores</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-yellow-400">24/7</div>
                <div className="text-sm text-gray-400">Cobertura</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-sm text-gray-400">Original</div>
              </div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button
                onClick={scrollToContent}
                className="group relative bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold px-10 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl shadow-yellow-400/25 hover:shadow-yellow-400/40"
              >
                <div className="flex items-center space-x-3">
                  <Play className="h-6 w-6 group-hover:scale-110 transition-transform" />
                  <span className="text-lg">Ver Contenido</span>
                  <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
              </button>
              
              <button
                onClick={scrollToAbout}
                className="group relative border-2 border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/10 backdrop-blur-sm font-semibold px-10 py-4 rounded-2xl transition-all duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-lg">Conoce Más</span>
                  <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Enhanced Categories */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 pt-6">
              {[
                { name: 'Noticias', icon: TrendingUp },
                { name: 'Política', icon: Users },
                { name: 'Entretenimiento', icon: Sparkles },
                { name: 'Investigación', icon: Award },
                { name: 'Opinión', icon: Play },
                { name: 'Análisis', icon: Award }
              ].map((category, index) => (
                <div 
                  key={category.name} 
                  className={`group flex items-center space-x-2 text-sm bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/50 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gray-800/50 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <category.icon className="h-4 w-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{category.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Visual Element */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-2xl backdrop-blur-sm border border-yellow-400/20 flex items-center justify-center animate-float">
                <TrendingUp className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="absolute -top-4 -right-12 w-12 h-12 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-xl backdrop-blur-sm border border-red-400/20 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Users className="h-6 w-6 text-red-400" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-blue-400/20 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Award className="h-7 w-7 text-blue-400" />
              </div>

              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 rounded-[3rem] transform rotate-6 scale-105"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-[3rem] border border-gray-700/50"></div>
                
                <div className="relative inset-0 flex items-center justify-center h-full">
                  <div className="text-center space-y-8 p-8">
                    <div className="relative">
                      <div className="w-40 h-40 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-yellow-400/25 group cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-3">
                        <img 
                          src={logo} 
                          alt="Empalme TV" 
                          className="w-32 h-32 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const nextElement = target.nextSibling as HTMLElement;
                            target.style.display = 'none';
                            if (nextElement) nextElement.style.display = 'block';
                          }}
                        />
                        <img 
                          src={logo} 
                          alt="Empalme TV Fallback" 
                          className="w-32 h-32 object-contain hidden"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Contenido Original
                      </h3>
                      <p className="text-yellow-400 font-semibold text-lg">
                        Periodismo de Calidad
                      </p>
                      <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span>Actualizado diariamente</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout} 
          className="group flex flex-col items-center space-y-2 text-yellow-400 hover:text-yellow-300 transition-all duration-300"
        >
          <div className="text-xs font-medium opacity-70 group-hover:opacity-100">Scroll</div>
          <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center group-hover:border-yellow-400 transition-colors">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `
      }} />
    </section>
  );
};

export default Home;