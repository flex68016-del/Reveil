import Link from 'next/link';
import { Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et citation */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/brand/logo-flambeau-du-reveil.png"
                alt="Logo Flambeau du Réveil"
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
              <span className="font-serif font-bold text-xl">Flambeau du Réveil</span>
            </div>
            <p className="text-gray-300 text-sm italic">
              « Porter le flambeau du réveil d'une génération à l'autre, jusqu'à ce que la
              connaissance de la gloire de l'Éternel remplisse la terre, comme les eaux couvrent
              le fond de la mer. » — Habakuk 2:14
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-gold">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-flame transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/notre-equipe" className="text-gray-300 hover:text-flame transition-colors">
                  Notre Équipe
                </Link>
              </li>
              <li>
                <Link href="/activites" className="text-gray-300 hover:text-flame transition-colors">
                  Activités
                </Link>
              </li>
              <li>
                <Link href="/formations" className="text-gray-300 hover:text-flame transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="text-gray-300 hover:text-flame transition-colors">
                  Actualités
                </Link>
              </li>
              <li>
                <Link href="/donner-servir" className="text-gray-300 hover:text-flame transition-colors">
                  Donner / Servir
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-flame transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4 text-gold">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:flambeaudureveil@outlook.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-flame transition-colors"
              >
                <Mail size={18} />
                <span>flambeaudureveil@outlook.com</span>
              </a>
              <a
                href="tel:+22890867436"
                className="flex items-center space-x-2 text-gray-300 hover:text-flame transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+228 90 86 74 36</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 Copyright Flambeau du Réveil</p>
        </div>
      </div>
    </footer>
  );
}
