import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Formations() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">FORMATIONS</h1>
          <p className="text-xl text-gray-300">Un croyant transformé est un flambeau qui éclaire</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-text max-w-4xl mx-auto leading-relaxed text-center">
            À Flambeau du Réveil, nous croyons qu'un croyant transformé est un flambeau qui éclaire sa
            génération. C'est pourquoi la formation est au cœur de notre mission : transmettre la Parole de
            Dieu avec puissance, clarté et onction, pour faire naître des disciples solides, engagés et
            spirituellement matures.
          </p>
        </div>
      </section>

      {/* Formations des moniteurs */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Formations des moniteurs
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Nous formons les enseignants et encadreurs d'enfants dans une vision d'excellence, de
              profondeur biblique et d'impact durable. Cette formation est organisée en deux phases :
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-flame mb-2">
                  1. Chaque samedi de 15h à 17h
                </h3>
                <p className="text-text">
                  Séances hebdomadaires avec enseignements pratiques et interactifs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-serif text-xl font-bold text-flame mb-2">
                  2. Formation accélérée – Juillet & Août
                </h3>
                <p className="text-text">
                  Une session intensive chaque semaine, du lundi au vendredi, idéale pour ceux qui
                  souhaitent se former durant les vacances.
                </p>
              </div>
            </div>
            <p className="text-text leading-relaxed">
              Formation en collaboration avec l'AEE (Association pour l'Évangélisation des Enfants), une
              structure reconnue pour son expertise dans le ministère auprès des enfants.
            </p>
          </div>
        </div>
      </section>

      {/* Formations théologiques avec BTU */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Formations théologiques avec BTU
            </h2>
            <p className="text-text leading-relaxed mb-6">
              En partenariat avec BTU Berea Theological University, nous offrons une formation théologique
              structurée, en ligne et en présentiel, accessible à tous ceux qui désirent approfondir leur
              appel ministériel.
            </p>
            <h3 className="font-serif text-xl font-bold text-navy mb-4">
              Programmes disponibles :
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-flame font-bold mr-2">•</span>
                <span className="text-text">Licence en Théologie</span>
              </li>
              <li className="flex items-start">
                <span className="text-flame font-bold mr-2">•</span>
                <span className="text-text">Licence en Aumônerie</span>
              </li>
              <li className="flex items-start">
                <span className="text-flame font-bold mr-2">•</span>
                <span className="text-text">Master en Leadership</span>
              </li>
            </ul>
            <p className="text-text leading-relaxed">
              Ces parcours offrent un accompagnement académique et spirituel de qualité, avec la possibilité
              d'obtenir des diplômes reconnus tout en restant enraciné dans la réalité du ministère local.
            </p>
          </div>
        </div>
      </section>

      {/* Une formation spirituelle et pratique */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Une formation spirituelle et pratique
            </h2>
            <p className="text-text leading-relaxed">
              Nos formations ne sont pas uniquement académiques : elles sont inspirées par le Saint-Esprit,
              centrées sur la Bible, et orientées vers l'action. Nous formons des hommes et des femmes capables
              de vivre la Parole, de transmettre la foi, et de servir efficacement dans leur sphère d'influence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Intéressé(e) ? Contactez-nous pour plus d'informations ou pour vous inscrire aux prochaines
            sessions de formation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gold hover:bg-yellow-500 text-navy font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Contactez-nous !
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
