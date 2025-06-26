import React from 'react';
import { User, Linkedin } from 'lucide-react';


import miguelImg from '../../img/Post 7 design Conexion Total (Miguel Martínez).png';
import elayniImg from '../../img/Post 4 design Conexion Total (ELAYNI MATEO).png';
import anapatricia from '../../img/Post 6 design Conexion Total (Ana Patricia Morrillo).png';
import mellisaturbi from '../../img/Post 4 design Conexion Total (Melissa Turbi).png';
import edwinturbi from '../../img/Post 8 design Conexion Total (Edwin Medina).png'
import teamBanner from '../../img/Banner - web - empalme.png';

const Team = () => {
  const teamMembers = [
    {
      name: 'Miguel Martínez',
      role: 'Ingeniero en Redes y Telecomunicaciones',
      bio: 'Una mente técnica con visión estratégica. Combina el conocimiento avanzado en tecnologías emergentes con habilidades comunicacionales y liderazgo político, creando un perfil integral capaz de analizar, comunicar y actuar con precisión en escenarios digitales y sociales. Un profesional del futuro que entiende el poder de la información, la seguridad y la palabra.',
      image: miguelImg,
    },
    {
      name: 'Elayni Mateo',
      role: 'Licenciada en comunicación social',
      bio: 'Especialista en conectar marcas, mensajes y audiencias con propósito. Su formación académica de alto nivel, combinada con una visión estratégica y dominio del lenguaje, la posicionan como una profesional integral capaz de liderar procesos comunicacionales con enfoque, creatividad y resultados. Una voz con autoridad, una mente con estrategia.',
      image: elayniImg,
    },
    {
      name: 'Ana Patricia Morrillo',
      role: 'Licenciada en comunicación social',
      bio: 'Destacada por su excelencia académica y su talento en el manejo de la palabra, combina conocimiento, carisma y profesionalismo en cada presentación. Su voz transmite confianza, su estilo deja huella, y su capacidad para conectar con el público la convierte en una figura indispensable en medios, eventos y escenarios de alto nivel.',
      image: anapatricia,
    },
    {
      name: 'Melissa Turbi',
      role: 'Licenciada en comunicación social',
      bio: 'Con una voz que conecta y una presencia que impacta, combina la técnica del periodismo con el arte de la locución para informar, emocionar y cautivar audiencias. Su formación integral y versatilidad la posicionan como una figura destacada en medios, eventos y campañas comerciales. Más que una comunicadora, es una narradora de historias con propósito.',
      image: mellisaturbi,
    },
    {
      name: 'Edwin Medina',
      role: 'Licenciado en Derecho',
      bio: 'Con una sólida trayectoria en medios de comunicación, se ha consolidado como una voz influyente y un referente en temas sociales, legales y políticos. Su visión estratégica, capacidad de análisis y don de liderazgo lo convierten en un actor clave en la construcción de opinión y toma de decisiones. Más que experiencia, aporta compromiso, credibilidad y pasión por servir.',
      image: edwinturbi,
    },
  ];

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conoce Nuestro <span className="text-yellow-500">Equipo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro diverso equipo de profesionales experimentados reúne décadas de experiencia en periodismo, entretenimiento y medios digitales para entregar contenido excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg card-hover animate-fade-in-up animate-delay-${index * 100}`}
            >
              <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-68 object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-64 bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                          <div class="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center">
                            <svg class="w-10 h-10 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-yellow-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 overflow-hidden rounded-3xl">
  <img
    src={teamBanner}
    alt="Team Banner"
    className="w-full object-cover"
  />
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">5+</div>
            <p className="text-gray-600 font-medium">Años de Experiencia Combinada</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">5</div>
            <p className="text-gray-600 font-medium">Categorías de Contenido Cubiertas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500 mb-2">24/7</div>
            <p className="text-gray-600 font-medium">Creación y Cobertura de Contenido</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;