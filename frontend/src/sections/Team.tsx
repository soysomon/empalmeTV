import React from 'react';
import { User, Linkedin } from 'lucide-react';


import miguelImg from '../../img/miguel-martinez.png';
import elayniImg from '../../img/elayni-mateo.png';
import anapatricia from '../../img/ana-patricia-morillo.png';
import mellisaturbi from '../../img/melissa-turbi.png';
import edwinturbi from '../../img/edwin-medina.png'
import teamBanner from '../../img/Banner - web - empalme.png';

const Team = () => {
  const teamMembers = [
    {
      name: 'Miguel Martínez',
      role: 'Productor Ejecutivo y Presentador',
      bio: 'Periodista veterano con más de 15 años de experiencia en análisis político y periodismo de investigación. Miguel lidera nuestra visión editorial y presenta nuestros segmentos principales de comentario político.',
      image: miguelImg,
    },
    {
      name: 'Elayni Mateo',
      role: 'Directora de Noticias',
      bio: 'Directora de noticias galardonada con experiencia en asuntos actuales y cobertura de noticias de última hora. Elayni asegura que nuestros segmentos noticiosos mantengan los más altos estándares de precisión y puntualidad.',
      image: elayniImg,
    },
    {
      name: 'Ana Patricia Morrillo',
      role: 'Editora de Entretenimiento y Cultura',
      bio: 'Fuerza creativa detrás de nuestra programación de entretenimiento con un ojo agudo para las tendencias culturales. Ana Patricia aporta perspectivas frescas a nuestro contenido de entretenimiento y estilo de vida.',
      image: anapatricia,
    },
    {
      name: 'Melissa Turbi',
      role: 'Gerente de Redes Sociales',
      bio: 'Experta en marketing digital especializada en estrategia de redes sociales y participación de audiencia. Melissa asegura que nuestro contenido llegue y resuene con nuestra creciente comunidad en línea.',
      image: mellisaturbi,
    },
    {
      name: 'Edwin Medina',
      role: 'Director Técnico',
      bio: 'Genio técnico detrás de nuestras operaciones de transmisión con amplia experiencia en producción televisiva. Edwin asegura la entrega impecable de nuestro contenido a través de todas las plataformas.',
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