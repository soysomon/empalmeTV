import React from 'react';
import { Target, Eye, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Nuestra Misión',
      description: 'Entregar contenido fresco, relevante e interactivo que informe, entretenga y comprometa a nuestra audiencia a través de múltiples plataformas.'
    },
    {
      icon: Eye,
      title: 'Nuestra Visión',
      description: 'Convertirnos en la fuente líder de cobertura mediática integral, estableciendo nuevos estándares para el contenido televisivo digital.'
    },
    {
      icon: Users,
      title: 'Nuestra Audiencia',
      description: 'Servimos a espectadores que demandan contenido de calidad que abarca política, entretenimiento, noticias y periodismo de investigación.'
    },
    {
      icon: Zap,
      title: 'Nuestro Impacto',
      description: 'Creando diálogo significativo y fomentando comunidades informadas a través de narrativas poderosas y análisis profundo.'
    }
  ];

  const contentAreas = [
    'Noticias y Actualidad',
    'Análisis Político y Social',
    'Entretenimiento y Cultura',
    'Opinión y Debate',
    'Contenido Comercial',
    'Periodismo de Investigación'
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Acerca de <span className="text-yellow-500">EMPALME TV</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            EMPALME TV es un proyecto televisivo revolucionario dedicado a entregar contenido fresco e interactivo que abarca el espectro de los medios modernos. Nuestro compromiso con la excelencia nos impulsa a crear narrativas convincentes en política, análisis, entretenimiento, noticias y periodismo de investigación.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center space-y-4 animate-fade-in-up animate-delay-${index * 100}`}
            >
              <div className="w-16 h-16 accent-gradient rounded-2xl flex items-center justify-center mx-auto">
                <feature.icon className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Content Areas */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Enfoque de Contenido
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cubrimos una amplia gama de temas para asegurar cobertura integral de los asuntos que más importan a nuestra audiencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentAreas.map((area, index) => (
              <div
                key={area}
                className={`bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 card-hover animate-fade-in-up animate-delay-${index * 100}`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <h4 className="text-lg font-semibold text-gray-900">{area}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.querySelector('#team')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Conoce Nuestro Equipo
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;