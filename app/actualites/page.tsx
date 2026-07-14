import Image from 'next/image';

const actualites = [
  {
    title: 'WINTERFEST TOGO 2026 — Debout pour Jésus',
    description: 'Trois jours de louange, de danse et de communion. 20–22 août 2026, Palais des Congrès de Lomé. Entrée gratuite.',
    image: '/images/actualites/winterfest-2026.jpg',
    link: 'https://winterfesttogo.netlify.app/'
  }
];

export default function Actualites() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">Actualités</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-text max-w-4xl mx-auto leading-relaxed text-center">
            Ici, vous trouverez toutes les informations récentes sur la vie de notre association : les
            rapports de nos actions sur le terrain, nos projets en cours, nos événements et les témoignages
            de ceux qui partagent notre vision.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {actualites.map((actualite, index) => (
              <a
                key={index}
                href={actualite.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group flex flex-col md:flex-row"
              >
                <div className="md:w-1/2 aspect-[3/4] md:aspect-auto relative">
                  <Image
                    src={actualite.image}
                    alt="Affiche officielle Winterfest Togo 2026"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="font-serif text-3xl font-bold text-navy mb-4 group-hover:text-flame transition-colors">
                    {actualite.title}
                  </h2>
                  <p className="text-text mb-6 leading-relaxed">
                    {actualite.description}
                  </p>
                  <span className="inline-flex items-center bg-flame hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors w-fit">
                    En savoir plus
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
