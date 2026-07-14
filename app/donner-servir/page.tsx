import Image from 'next/image';

export default function DonnerServir() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">NOUS SOUTENIR</h1>
          <p className="text-xl text-gray-300">Ensemble, allumons le flambeau dans le cœur des jeunes</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-text max-w-4xl mx-auto leading-relaxed text-center">
            Soutenir Flambeau du Réveil, c'est investir dans une œuvre qui transforme la vie des jeunes.
            Notre mission est d'accompagner la jeunesse dans son épanouissement spirituel, moral, académique
            et professionnel, afin de former une génération éclairée et engagée pour Dieu et pour la société.
            Chaque contribution — financière, matérielle ou spirituelle — nous aide à poursuivre cette vision.
          </p>
        </div>
      </section>

      {/* Soutenir financièrement */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Soutenir financièrement
            </h2>
            <p className="text-text leading-relaxed mb-6">
              Vos dons financiers permettent à l'association de mettre en œuvre ses projets :
            </p>
            <ul className="space-y-3 mb-6 text-text">
              <li className="flex items-start">
                <span className="text-flame font-bold mr-2">•</span>
                <span>l'organisation de séminaires et retraites spirituelles en faveur des jeunes,</span>
              </li>
              <li className="flex items-start">
                <span className="text-flame font-bold mr-2">•</span>
                <span>le soutien scolaire et académique des jeunes,</span>
              </li>
              <li className="flex items-start">
                <span className="text-flame font-bold mr-2">•</span>
                <span>la production de ressources pédagogiques et spirituelles,</span>
              </li>
              <li className="flex items-start">
                <span className="text-flame font-bold mr-2">•</span>
                <span>et le développement d'initiatives sociales en faveur de la jeunesse.</span>
              </li>
            </ul>
            <p className="text-text leading-relaxed mb-6">
              Les dons peuvent être effectués par chèque ou par virement bancaire. Avant tout envoi de don,
              nous vous invitons à nous contacter afin de recevoir les coordonnées bancaires et instructions
              nécessaires :
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-text mb-2">
                <span className="font-semibold">Téléphone :</span> +228 90 86 74 36
              </p>
              <p className="text-text">
                <span className="font-semibold">Email :</span> flambeaudureveil@outlook.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Soutenir par un don matériel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Soutenir par un don matériel
            </h2>
            <p className="text-text leading-relaxed">
              Vous pouvez également nous soutenir en offrant du matériel pédagogique, bureautique ou
              logistique utile à nos activités. Chaque contribution concrète participe à l'amélioration de nos
              programmes de formation et de nos actions sur le terrain.
            </p>
          </div>
        </div>
      </section>

      {/* Soutenir par la prière */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Soutenir par la prière
            </h2>
            <p className="text-text leading-relaxed">
              Au-delà des dons matériels ou financiers, votre soutien spirituel est essentiel. Nous croyons
              en la puissance de la prière. En priant pour Flambeau du Réveil, vous devenez un partenaire
              spirituel de cette œuvre, et ensemble, nous pouvons continuer à impacter positivement la jeunesse
              pour la gloire de Dieu.
            </p>
          </div>
        </div>
      </section>

      {/* Merci pour votre générosité */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-navy mb-6">
              Merci pour votre générosité
            </h2>
            <p className="text-text leading-relaxed">
              Chaque geste compte. Votre soutien, quel qu'il soit, contribue à faire briller la lumière du
              Christ dans la vie de nombreux jeunes. Merci de marcher avec nous pour que le flambeau du réveil
              continue de brûler dans les cœurs et de rayonner dans les nations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact don */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/donner-servir/photo_2026-07-14_12-54-15.jpg"
                alt="Don et générosité"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">
                Pour tous vos dons, contactez-nous !
              </h2>
              <p className="text-gray-300 mb-4">
                <span className="font-semibold text-gold">TÉLÉPHONE :</span> +228 90 86 74 36
              </p>
              <p className="text-gray-300 mb-8">
                <span className="font-semibold text-gold">EMAIL :</span> flambeaudureveil@outlook.com
              </p>
              <blockquote className="border-l-4 border-gold pl-4 italic text-gray-300">
                « L'âme bienfaisante sera rassasiée, et celui qui arrose sera lui-même arrosé. »
                <span className="block text-sm mt-2 text-gold">— Proverbes 11:25</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
