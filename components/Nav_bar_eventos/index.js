// components/NavBarEs/NavBarEs.js
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiShoppingBag,
  FiGlobe,
} from 'react-icons/fi';

// Ajusta el path si tu logo está en otra carpeta
import logo from '../../data/imagenes/logo_alta_sin_nombre.png';

// Si ya usas tu Context de idiomas, descomenta esta línea.
// Asegúrate de que el path sea correcto según tu proyecto.
// import { useAppContext } from '../context/Context';

const gold = '#D4AF37';
const WHATSAPP = '525549242477';
const waText = (lang) =>
  encodeURIComponent(
    lang === 'en'
      ? 'Hi! I want to book a group event at Cantina La Llorona (Roma–Condesa). Date: __ People: __ Time: __'
      : 'Hola, quiero cotizar un evento/grupo en Cantina La Llorona (Roma–Condesa). Fecha: __ Personas: __ Hora: __'
  );
const waUrl = (lang) => `https://wa.me/${WHATSAPP}?text=${waText(lang)}`;

export default function NavBarEventos() {
  const [open, setOpen] = useState(false);
  const [city, setCity] = useState('México');
  const [lang, setLang] = useState('es'); // si usas Context, sincroniza aquí

  // // Si ya tienes contexto de idioma:
  // const { espa, ingles, onIdiomaIngles, onIdiomaEspa } = useAppContext();
  // useEffect(() => setLang(ingles ? 'en' : 'es'), [ingles]);
  // const setES = () => { onIdiomaEspa(); setLang('es'); };
  // const setEN = () => { onIdiomaIngles(); setLang('en'); };

  const items = useMemo(
    () => [
      {
        label: lang === 'en' ? 'Restaurants' : 'Restaurantes',
        href: '/#restaurantes',
      },
      { label: 'Beach Clubs', href: '/#beach' },
      {
        label: lang === 'en' ? 'Sept 15th' : '15 de Septiembre',
        href: '/#15sep',
      },
      { label: lang === 'en' ? 'Groups' : 'Grupos', href: '/paquetes' },
      { label: 'Concierge', href: '/#concierge' },
      { label: 'Blog', href: '/#blog' },
    ],
    [lang]
  );

  const setES = () => setLang('es');
  const setEN = () => setLang('en');

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="La Llorona" width={44} height={44} priority />
          <span className="text-lg font-black tracking-wide text-white">
            La Llorona
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {items.map((it) => (
            <Link
              key={it.label}
              href={it.href}
              className="text-sm font-medium text-white/90 transition hover:text-white"
            >
              {it.label}
            </Link>
          ))}

          {/* Selector ciudad */}
          <div className="group relative">
            <button
              className="flex items-center gap-2 text-sm font-medium text-white/90 transition hover:text-white"
              aria-haspopup="listbox"
            >
              <FiGlobe className="opacity-80" /> {city} <FiChevronDown />
            </button>
            <div className="invisible absolute right-0 mt-2 w-40 rounded-xl border border-white/10 bg-black/90 p-2 opacity-0 shadow-xl backdrop-blur-md transition group-hover:visible group-hover:opacity-100">
              {['México', 'Madrid', 'Miami'].map((c) => (
                <button
                  key={c}
                  onClick={() => setCity(c)}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm text-white/90 hover:bg-white/10 ${
                    c === city ? 'text-white' : ''
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Idiomas */}
          <div className="flex items-center gap-3 text-sm font-semibold text-white/80">
            <button
              aria-label="ES"
              onClick={setES}
              className={`hover:text-white ${
                lang === 'es' ? 'text-white' : ''
              }`}
            >
              ES
            </button>
            <span className="text-white/30">|</span>
            <button
              aria-label="EN"
              onClick={setEN}
              className={`hover:text-white ${
                lang === 'en' ? 'text-white' : ''
              }`}
            >
              EN
            </button>
          </div>

          {/* Carrito (0) */}
          <div className="relative">
            <FiShoppingBag className="text-white/90" size={20} />
            <span
              className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full text-xs font-bold text-black"
              style={{ backgroundColor: gold }}
            >
              0
            </span>
          </div>

          {/* CTA WhatsApp */}
          <a
            href={waUrl(lang)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            style={{ borderColor: gold }}
          >
            {lang === 'en' ? 'Get a quote' : 'Cotizar evento'}
          </a>
        </nav>

        {/* Mobile trigger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
        >
          <FiMenu className="text-white" size={22} />
        </button>

        {/* Mobile drawer */}
        {open && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm md:hidden">
            <div className="absolute right-0 top-0 h-full w-[84%] max-w-sm border-l border-white/10 bg-neutral-950 p-6">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-lg font-black text-white">
                  La Llorona
                </span>
                <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
                  <FiX className="text-white" size={22} />
                </button>
              </div>

              <div className="space-y-2">
                {items.map((it) => (
                  <Link
                    key={it.label}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="mb-4">
                  <label className="mb-2 block text-sm text-white/60">
                    Ciudad
                  </label>
                  <div className="flex gap-2">
                    {['México', 'Madrid', 'Miami'].map((c) => (
                      <button
                        key={c}
                        onClick={() => setCity(c)}
                        className={`rounded-full px-3 py-1 text-sm ${
                          c === city
                            ? 'bg-white text-black'
                            : 'bg-white/10 text-white'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-white/80">
                  <span>Idioma:</span>
                  <button
                    onClick={setES}
                    className={`rounded-full px-3 py-1 ${
                      lang === 'es'
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    ES
                  </button>
                  <button
                    onClick={setEN}
                    className={`rounded-full px-3 py-1 ${
                      lang === 'en'
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white'
                    }`}
                  >
                    EN
                  </button>
                </div>

                <a
                  href={waUrl(lang)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block rounded-xl border px-4 py-3 text-center font-semibold text-white"
                  style={{ borderColor: gold }}
                  onClick={() => setOpen(false)}
                >
                  {lang === 'en'
                    ? 'Quote via WhatsApp'
                    : 'Cotizar por WhatsApp'}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
