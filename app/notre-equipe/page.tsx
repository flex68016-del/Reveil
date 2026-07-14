import Image from 'next/image';

const teamMembers = [
  {
    name: 'Timothée GBO',
    role: 'Directeur Général',
    photo: '/images/team/timothee-gboN.jpg',
    bio: 'Le Directeur Général est également le Surintendant des Églises de Dieu du Plein Évangile de l\'Afrique Ouest Francophone. Leader spirituel et visionnaire, il veille à l\'orientation générale de l\'association. Son rôle est d\'assurer la cohérence entre les missions spirituelles et les actions concrètes de Flambeau du Réveil, tout en inspirant la jeunesse à poursuivre une vie fondée sur la foi, l\'excellence et le service.'
  },
  {
    name: 'Ezeckiel AWAGA',
    role: 'Directeur des Missions',
    photo: '/images/team/ezeckiel-awagaN.jpg',
    bio: 'Le Directeur des Missions supervise l\'organisation et la coordination de toutes les activités missionnaires et évangéliques. Il veille à la mise en œuvre des programmes d\'évangélisation, de formation spirituelle et de développement communautaire, afin de répondre efficacement aux besoins spirituels des jeunes.'
  },
  {
    name: 'Daniel AMOUZOU',
    role: 'Directeur Pédagogique',
    photo: '/images/team/daniel-amouzouN.jpg',
    bio: 'Le Directeur Pédagogique, également Coordonnateur National de Hope for One Togo, a pour mission de concevoir et de suivre les programmes éducatifs et de formation proposés par l\'association. Il s\'assure que les activités académiques et professionnelles de Flambeau du Réveil contribuent à l\'épanouissement intellectuel et moral des jeunes, en harmonisant la connaissance spirituelle et la réussite scolaire ou professionnelle.'
  },
  {
    name: 'Isidore Biwelon THAMIE',
    role: 'Trésorier',
    photo: '/images/team/isidore-thamieN.jpg',
    bio: 'Le Trésorier gère les ressources financières de l\'association avec rigueur et transparence. Il veille à la bonne utilisation des fonds et à la planification budgétaire des projets, garantissant ainsi la stabilité et la durabilité des actions menées par Flambeau du Réveil.'
  },
  {
    name: 'Grâce Afi KONDO',
    role: 'Secrétaire Générale',
    photo: '/images/team/grace-kondoN.jpg',
    bio: 'La Secrétaire Générale assure le suivi administratif et la bonne circulation de l\'information au sein de l\'équipe dirigeante. Elle veille à la coordination des communications internes et externes, à la rédaction des rapports et à la bonne tenue des archives de l\'association.'
  }
];

export default function NotreEquipe() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold mb-4">NOTRE EQUIPE</h1>
          <p className="text-xl text-gray-300">Une Équipe Unie au Service de la Jeunesse</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-text max-w-4xl mx-auto leading-relaxed text-center">
            Au cœur de l'action de Flambeau du Réveil, une équipe dynamique et engagée œuvre avec passion
            pour le bien-être spirituel et académique des jeunes. Unis par une même vision, ces hommes et
            femmes de foi conduisent l'association avec sagesse, excellence et dévouement.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-navy mb-1">{member.name}</h3>
                  <p className="text-flame font-semibold mb-4">{member.role}</p>
                  <p className="text-text text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-text max-w-4xl mx-auto leading-relaxed text-center">
            Ensemble, ces responsables constituent le socle de Flambeau du Réveil. Leur engagement commun
            vise à accompagner les jeunes dans leur croissance spirituelle, intellectuelle et sociale, afin
            qu'ils deviennent des flambeaux éclairant leur génération pour la gloire de Dieu.
          </p>
        </div>
      </section>
    </div>
  );
}
