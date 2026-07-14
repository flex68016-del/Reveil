'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/brand/logo-flambeau-du-reveil.png"
              alt="Logo Flambeau du Réveil"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-navy text-lg">Flambeau du Réveil</span>
              <span className="text-xs text-text-light hidden sm:block">
                Ministère d'études biblique d'évangélisation et de prière
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-navy hover:text-flame transition-colors font-medium">
              Accueil
            </Link>
            
            {/* Dropdown Activités */}
            <div className="relative group">
              <button className="text-navy hover:text-flame transition-colors font-medium flex items-center">
                Activités
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/activites/camps" className="block px-4 py-2 text-navy hover:bg-bg-light hover:text-flame transition-colors">
                  Camps
                </Link>
                <Link href="/activites/discipolat" className="block px-4 py-2 text-navy hover:bg-bg-light hover:text-flame transition-colors">
                  Discipolat
                </Link>
              </div>
            </div>

            <Link href="/notre-equipe" className="text-navy hover:text-flame transition-colors font-medium">
              Notre Équipe
            </Link>
            <Link href="/formations" className="text-navy hover:text-flame transition-colors font-medium">
              Formations
            </Link>
            <Link href="/actualites" className="text-navy hover:text-flame transition-colors font-medium">
              Actualités
            </Link>
            <Link href="/contact" className="text-navy hover:text-flame transition-colors font-medium">
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link
              href="/donner-servir"
              className="bg-gold hover:bg-yellow-500 text-navy font-semibold px-6 py-2 rounded-full transition-colors"
            >
              Faire un don
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-navy"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-navy hover:text-flame transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <div className="flex flex-col space-y-2 pl-4">
                <span className="text-navy font-medium">Activités</span>
                <Link href="/activites/camps" className="text-text-light hover:text-flame transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Camps
                </Link>
                <Link href="/activites/discipolat" className="text-text-light hover:text-flame transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Discipolat
                </Link>
              </div>
              <Link href="/notre-equipe" className="text-navy hover:text-flame transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Notre Équipe
              </Link>
              <Link href="/formations" className="text-navy hover:text-flame transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Formations
              </Link>
              <Link href="/actualites" className="text-navy hover:text-flame transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Actualités
              </Link>
              <Link href="/contact" className="text-navy hover:text-flame transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link
                href="/donner-servir"
                className="bg-gold hover:bg-yellow-500 text-navy font-semibold px-6 py-2 rounded-full transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Faire un don
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
