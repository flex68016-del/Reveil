'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Flambeau du Réveil',
    subtitle: 'Ministère d\'études biblique d\'évangélisation et de prière',
    image: '/images/home/hero-flambeau.jpg',
    color: 'bg-gradient-to-br from-flame to-orange-600'
  },
  {
    title: 'Camp des jeunes',
    subtitle: 'Formation spirituelle et développement des talents',
    image: '/images/home/hero-camp.jpg',
    color: 'bg-gradient-to-br from-navy to-blue-800'
  },
  {
    title: 'Discipolat',
    subtitle: 'Coaching pour un pentecôtiste puissant',
    image: '/images/home/hero-discipolat.jpg',
    color: 'bg-gradient-to-br from-purple-700 to-indigo-900'
  },
  {
    title: 'Formation',
    subtitle: 'Former une génération enracinée en Christ',
    image: '/images/home/hero-formation.jpg',
    color: 'bg-gradient-to-br from-gold to-yellow-600'
  }
];

const partners = [
  {
    name: 'BTU',
    logo: '/images/partners/partner-btu.png',
    link: 'https://www.btu.edu.zm/'
  },
  {
    name: 'COGWM',
    logo: '/images/partners/partner-cogwm.png',
    link: 'https://www.cogwm.org/'
  },
  {
    name: 'Hope For One',
    logo: '/images/partners/partner-hopeforone.jpg',
    link: 'https://www.hopeforone.org/fr/'
  },
  {
    name: 'Partenaire 4',
    logo: '/images/partners/partner-4.jpg',
    link: '#'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Slider */}
      <section className="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative h-full flex items-center justify-center text-center px-4">
              <div className="max-w-4xl">
                <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 mb-8">
                  {slide.subtitle}
                </p>
                <Link
                  href="/donner-servir"
                  className="inline-flex items-center bg-gold hover:bg-yellow-500 text-navy font-semibold px-8 py-3 rounded-full transition-colors"
                >
                  Faire un don
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
          aria-label="Slide précédent"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
          aria-label="Slide suivant"
        >
          <ChevronRight size={32} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Mot de bienvenue */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square">
              <Image
                src="/images/team/timothee-gboN.jpg"
                alt="Pasteur GBO Timothée"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-navy mb-6">
                Mot de bienvenue
              </h2>
              <p className="text-text mb-6 leading-relaxed">
                Bienvenue sur le site de Flambeau du Réveil. Un flambeau allumé pour éclairer une génération !
                Nous sommes un groupe passionné par l'œuvre de Dieu parmi les enfants et les jeunes. Convaincus
                que l'Église de demain se bâtit aujourd'hui, nous œuvrons avec zèle et amour pour former une
                génération forte, équilibrée et enracinée dans la vérité de la Parole.
              </p>
              <p className="text-text mb-6 leading-relaxed">
                À travers nos enseignements, nos activités et nos temps de communion, nous aspirons à voir des
                vies transformées, des vocations éclore, et des cœurs s'embraser pour Christ.
                Bienvenue à tous ceux qui partagent cette vision ! Ensemble, préparons une Église vivante,
                affermie et victorieuse.
              </p>
              <p className="font-serif text-flame font-semibold mb-6">
                Pasteur GBO Timothée
              </p>
              <Link
                href="/donner-servir"
                className="inline-flex items-center bg-flame hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
              >
                FAIRE UN DON
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ministère Flambeau du Réveil */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-navy mb-6 text-center">
            Ministère Flambeau du Réveil
          </h2>
          <p className="text-text max-w-4xl mx-auto mb-12 leading-relaxed text-center">
            Le Ministère Flambeau du Réveil est une œuvre dédiée à l'éveil spirituel et à la formation de
            la nouvelle génération dans la foi chrétienne. S'adressant spécifiquement aux enfants,
            adolescents et jeunes, notre mission est claire : élever une génération de disciples solides,
            enracinés dans les valeurs et la puissance du Pentecôtisme.
            Dans un monde en constante mutation, où les repères spirituels sont souvent flous ou délaissés,
            Flambeau du Réveil s'engage à allumer et entretenir le feu du réveil dans le cœur des plus
            jeunes, afin qu'ils deviennent des témoins fidèles et passionnés de Jésus-Christ.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-navy text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold text-gold mb-4">
                Notre Vision
              </h3>
              <p className="leading-relaxed">
                Faire de chaque enfant, adolescent et jeune un disciple engagé, rempli du Saint-Esprit,
                ancré dans la Parole de Dieu, et prêt à influencer son environnement pour Christ.
              </p>
            </div>

            <div className="bg-flame text-white p-8 rounded-lg">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Notre Mission
              </h3>
              <ul className="space-y-3 leading-relaxed">
                <li>• Enseigner la Parole de Dieu de manière dynamique et adaptée à chaque tranche d'âge.</li>
                <li>• Favoriser une expérience vivante de Dieu à travers la prière, l'adoration et la communion fraternelle.</li>
                <li>• Encourager la manifestation des dons spirituels dès le jeune âge, dans la tradition pentecôtiste.</li>
                <li>• Accompagner les jeunes dans leur croissance spirituelle, morale et sociale à travers un discipolat structuré.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* L'équipe dirigeante (teaser) */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-navy mb-4 text-center">
            Une Équipe Unie au Service de la Jeunesse
          </h2>
          <p className="text-text max-w-4xl mx-auto mb-8 leading-relaxed text-center">
            Au cœur de l'action de Flambeau du Réveil, une équipe dynamique et engagée œuvre avec passion
            pour le bien-être spirituel, académique et professionnel des jeunes. Unis par une même vision,
            ces hommes et femmes de foi conduisent l'association avec sagesse, excellence et dévouement.
          </p>
          <p className="text-text max-w-4xl mx-auto mb-12 leading-relaxed text-center">
            Ces responsables constituent le socle de Flambeau du Réveil. Leur engagement commun vise à
            accompagner les jeunes dans leur croissance spirituelle, intellectuelle et sociale, afin qu'ils
            deviennent des flambeaux éclairant leur génération pour la gloire de Dieu.
          </p>
          <div className="text-center">
            <Link
              href="/notre-equipe"
              className="inline-flex items-center bg-navy hover:bg-blue-900 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Découvrir notre équipe
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Nos Partenaires */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold text-navy mb-12 text-center">
            Nos Partenaires
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.link}
                target={partner.link !== '#' ? '_blank' : undefined}
                rel={partner.link !== '#' ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-center p-6 bg-bg-light rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}