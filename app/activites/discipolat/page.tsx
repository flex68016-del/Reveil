'use client';

import { useState } from 'react';
import Image from 'next/image';

const discipolatImages = [
  "485108083_648792747795962_5016959340676770489_n.jpg",
  "485615971_648794331129137_5766128655406022646_n.jpg",
  "485916542_648794647795772_8532396658081792683_n.jpg",
  "486065374_648794511129119_3920966521555755391_n.jpg",
  "486141387_648795744462329_4996280064379537963_n.jpg",
  "486148667_648794151129155_3982494819429480175_n.jpg",
  "486157731_648795501129020_390899768094849194_n.jpg",
  "486232451_648796761128894_4951617337883464497_n.jpg",
  "486343466_648798121128758_77627116834318690_n.jpg"
].map((filename, index) => ({
  src: `/images/discipolat/${filename}`,
  alt: `Photo d'une séance de discipolat Flambeau du Réveil`
}));

export default function Discipolat() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">DISCIPOLAT</h1>
          <p className="text-xl text-gray-300">Coaching pour un discipolat</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="font-serif text-2xl font-bold text-navy mb-4">
              Retrouver la Flamme : Les Séances de Coaching pour un Pentecôtiste Puissant
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Les séances de coaching pour un pentecôtiste puissant sont bien plus que de simples ateliers ;
              ce sont de véritables tribunes d'échange spirituel conçues pour initier une recharge d'énergie
              divine essentielle. Cette énergie ne se trouve nulle part ailleurs que dans l'intense soif du
              réveil, cette même ferveur qui a marqué l'histoire du christianisme.
            </p>

            <h3 className="font-serif text-xl font-bold text-navy mb-4">
              L'Écho Puissant des Réveils Historiques
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Nous puisons notre inspiration et notre conviction dans les réveils du temps jadis, ces moments
              où la gloire de Dieu s'est manifestée avec une force indéniable. On pense immédiatement au
              ministère fulgurant d'hommes de Dieu comme Charles Finney, dont les prédications transformaient
              des villes entières, et, de manière encore plus significative, au Réveil d'Azusa Street
              (1906-1915). Ce dernier a fait un écho retentissant dans le monde entier, portant des fruits qui
              ont traversé les âges et donné naissance au mouvement pentecôtiste tel que nous le connaissons
              aujourd'hui. Ces évènements ne sont pas de l'histoire morte, mais le patrimoine de la puissance
              auquel nous aspirons.
            </p>

            <h3 className="font-serif text-xl font-bold text-navy mb-4">
              La Soif du Renouveau Face à l'Endormissement
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Hélas, des générations ont passé, et la nouvelle génération n'ayant pas été témoin de prodiges
              d'une telle ampleur, elle risque de sombrer dans l'endormissement spirituel. Face à l'absence de
              miracles visibles et de manifestations tangibles de la présence de Dieu, le doute et la tiédeur
              s'installent.
            </p>
            <p className="text-text leading-relaxed mb-6">
              C'est une vérité d'une clarté limpide : tant qu'il n'y a pas cette envie dévorante de voir Dieu
              agir comme dans les temps passés, le peuple de Dieu se vautrera dans les compromis subtils. Il
              croira servir Dieu, mais en réalité, il marchera à côté de Sa volonté pure, et le vrai réveil ne
              verra jamais le jour. L'absence de soif engendre la stagnation et permet aux standards mondains
              de s'infiltrer dans l'Église.
            </p>

            <h3 className="font-serif text-xl font-bold text-navy mb-4">
              L'Objectif : Un Retour aux Normes de la Gloire
            </h3>
            <p className="text-text leading-relaxed mb-6">
              Ces séances de coaching deviennent donc des lieux de mémoire et de transmission. Elles sont les
              tribunes où se déploient les témoignages percutants du passé, illustrant comment la puissance du
              Saint-Esprit s'est farouchement révélée et comment il a œuvré puissamment par Ses serviteurs.
            </p>
            <p className="text-text leading-relaxed mb-6">
              Mais il ne s'agit pas uniquement de nostalgie. Ces instants sont avant tout l'occasion de
              sensibiliser les ouvriers, les leaders et l'ensemble des chrétiens à l'impératif de se mettre
              dans les normes divines. Il est urgent d'abandonner les tiédeurs, les demi-mesures et les
              compromis pour créer l'environnement spirituel nécessaire pour que la gloire perdue il y a
              longtemps revienne.
            </p>
            <p className="text-text leading-relaxed">
              L'objectif est clair et inébranlable : nous ne nous contenterons pas d'entendre parler de cette
              gloire. Nous devons la voir de nos propres yeux et la toucher de nos propres mains avant de
              quitter cette terre. Le temps est venu de manifester la puissance de l'Évangile dans toute son
              authenticité.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-navy mb-4 text-center">
            QUELQUES IMAGES DU DISCIPOLAT
          </h2>
          <p className="text-text-light text-center mb-12">Cliquez sur les images pour les agrandir.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {discipolatImages.map((image, index) => (
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
              src={discipolatImages[selectedImage].src}
              alt={discipolatImages[selectedImage].alt}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
