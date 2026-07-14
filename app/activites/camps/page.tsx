'use client';

import { useState } from 'react';
import Image from 'next/image';

const campImages = [
  "photo_2026-07-14_11-06-02.jpg",
  "photo_2026-07-14_11-06-19.jpg",
  "photo_2026-07-14_11-06-41.jpg",
  "photo_2026-07-14_11-06-58.jpg",
  "photo_2026-07-14_11-07-03.jpg",
  "photo_2026-07-14_11-07-05.jpg",
  "photo_2026-07-14_11-07-53.jpg",
  "photo_2026-07-14_11-08-03.jpg",
  "photo_2026-07-14_11-08-10.jpg",
  "photo_2026-07-14_11-08-31.jpg",
  "photo_2026-07-14_11-09-34.jpg",
  "photo_2026-07-14_11-09-39.jpg",
  "photo_2026-07-14_11-10-18.jpg",
  "photo_2026-07-14_11-10-23.jpg",
  "photo_2026-07-14_11-10-40.jpg",
  "photo_2026-07-14_11-10-45.jpg",
  "photo_2026-07-14_11-11-26.jpg",
  "photo_2026-07-14_11-11-34.jpg",
  "photo_2026-07-14_11-11-43.jpg",
  "photo_2026-07-14_11-11-47.jpg",
  "photo_2026-07-14_11-12-18.jpg",
  "photo_2026-07-14_11-12-20.jpg",
  "photo_2026-07-14_11-12-31.jpg",
  "photo_2026-07-14_11-12-43.jpg",
  "photo_2026-07-14_11-12-57.jpg",
  "photo_2026-07-14_11-13-08.jpg",
  "photo_2026-07-14_11-13-09.jpg"
].map((filename, index) => ({
  src: `/images/camps/${filename}`,
  alt: `Photo du Camp des adolescents Flambeau du Réveil 2024`
}));

export default function Camps() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">CAMP DES ADOLESCENTS</h1>
          <p className="text-xl text-gray-300">Flambeau du Réveil Junior</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-text leading-relaxed mb-6">
              Le Camp des adolescents dénommé FRJ (Flambeau du Réveil Junior) est un événement annuel
              incontournable qui se déroule chaque année dans les vacances, généralement durant le mois
              d'août, pour une durée maximale de trois semaines. C'est une période unique où la spiritualité,
              le développement social et la découverte des talents se conjuguent harmonieusement.
            </p>
            <p className="text-text leading-relaxed mb-6">
              L'objectif principal de cette formation est de guider les jeunes vers une vie dédiée à Christ,
              tout en les préparant à devenir les leaders de demain. Chaque thème abordé est rigoureusement
              sélectionné et développé pour répondre à leurs besoins spirituels, sociaux et physiologiques.
              L'emploi du temps, riche et structuré, vise à les maintenir pleinement engagés, sans laisser de
              place aux distractions superflues.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Les animateurs et les formateurs sont choisis avec soin. Ce sont des personnes de grande
              moralité, qui incarnent un exemple solide, à la fois dans leur comportement et dans leurs
              enseignements. Leur but est d'avoir un impact durable et positif sur la vie de chaque participant.
            </p>
            <p className="text-text leading-relaxed mb-6">
              La formation Flambeau du Réveil se veut une approche holistique de l'éducation. En plus de
              l'aspect spirituel, une grande importance est accordée à la valorisation des talents. Certaines
              soirées sont dédiées à l'apprentissage d'activités manuelles et entrepreneuriales, permettant aux
              jeunes d'acquérir des compétences concrètes pour lancer leurs propres projets.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Le cœur de cette formation est incontestablement la vie de prière. Peu importe leur passé, tous
              les participants quittent le camp avec une aptitude à la prière et la capacité de guider les
              autres. Ils sont formés en profondeur, puis suivis pour s'assurer qu'ils sont prêts à affronter
              les défis de la vie en s'appuyant sur la prière.
            </p>
            <p className="text-text leading-relaxed">
              Cette formation ne prépare pas seulement des Chrétiens accomplis ; elle façonne des généraux
              pour l'Église, des individus équipés et prêts à propager l'Évangile et à gagner des âmes pour le
              Christ.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4 text-center">
            Quelques images de nos camps
          </h2>
          <p className="text-text-light text-center mb-12">Cliquez sur les images pour les agrandir.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {campImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className="aspect-square rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            aria-label="Fermer"
          >
            ×
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Image
              src={campImages[selectedImage].src}
              alt={campImages[selectedImage].alt}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
