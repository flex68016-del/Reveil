import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const activities = [
  {
    title: 'Classes bibliques pour enfants et adolescents',
    description: 'Enseignements adaptés à chaque tranche d\'âge.'
  },
  {
    title: 'Camps spirituels et retraites de jeunesse',
    description: 'Temps forts de communion et de ressourcement.'
  },
  {
    title: 'Cellules de discipolat et mentorat personnalisé',
    description: 'Accompagnement régulier avec des mentors.'
  },
  {
    title: 'Séminaires et formations sur les dons et le ministère',
    description: 'Découvrir son appel, être équipé.'
  },
  {
    title: 'Programmes d\'évangélisation et de service communautaire',
    description: 'Mettre la foi en action.'
  },
  {
    title: 'Chants, concerts et rallyes',
    description: 'Célébrer la foi par la musique et la louange.'
  }
];

export default function Activites() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">Nos Activités</h1>
          <p className="text-xl text-gray-300">Former une génération enracinée en Christ</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-text max-w-4xl mx-auto leading-relaxed text-center">
            Nous croyons en une jeunesse engagée, passionnée et solidement ancrée dans la foi. À travers un
            programme dynamique et diversifié, nous accompagnons les enfants, adolescents et jeunes adultes dans
            leur croissance spirituelle, leur formation biblique et leur implication dans la vie de l'Église et
            de la communauté.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy mb-12 text-center">
            Nos initiatives clés
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-serif text-xl font-bold text-navy mb-3">{activity.title}</h3>
                <p className="text-text">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accroche finale */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-text max-w-4xl mx-auto leading-relaxed text-center text-lg">
            Chaque activité est pensée pour encourager la jeunesse à vivre une foi authentique, active et
            rayonnante. Rejoins-nous et fais partie d'une génération qui transforme le monde par la puissance
            de l'Évangile !
          </p>
        </div>
      </section>

      {/* Sub-navigation cards */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/activites/camps"
              className="bg-navy text-white p-8 rounded-lg hover:bg-blue-900 transition-colors group"
            >
              <h3 className="font-serif text-2xl font-bold mb-4">Camps des adolescents</h3>
              <p className="text-gray-300 mb-4">
                Découvrez notre formation annuelle FRJ - Flambeau du Réveil Junior
              </p>
              <span className="inline-flex items-center text-gold font-semibold group-hover:translate-x-2 transition-transform">
                En savoir plus
                <ArrowRight className="ml-2" size={20} />
              </span>
            </Link>

            <Link
              href="/activites/discipolat"
              className="bg-flame text-white p-8 rounded-lg hover:bg-orange-600 transition-colors group"
            >
              <h3 className="font-serif text-2xl font-bold mb-4">Discipolat</h3>
              <p className="text-white/90 mb-4">
                Coaching pour un pentecôtiste puissant - Retrouver la flamme
              </p>
              <span className="inline-flex items-center font-semibold group-hover:translate-x-2 transition-transform">
                En savoir plus
                <ArrowRight className="ml-2" size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
