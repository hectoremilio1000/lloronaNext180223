import { menuEspa1, menuEspa2 } from './menuEspa/menuEspa';
import { menuFood1, menuFood2 } from './menuIngles';

// Secciones del menú por idioma. `key` es la sección en el API de Impulso;
// `fallback` son las imágenes locales que se muestran si esa sección falla.
// Las cartas de bebidas locales son las vigentes (español 15-sep-2026,
// inglés 22-oct-2026): al cambiar la carta, actualizar Impulso Y estas copias.
const bebidas = (lang) =>
  [1, 2, 3, 4].map((n) => `/images/menuBebidas/${lang}/bebidas-${n}.webp`);

export const SECCIONES_MENU = {
  es: {
    alimentos: {
      key: 'alimentos',
      alt: 'Menú de comida La Llorona',
      fallback: [menuEspa1, menuEspa2],
    },
    bebidas: {
      key: 'bebidas',
      alt: 'Carta de bebidas La Llorona',
      fallback: bebidas('es'),
    },
  },
  en: {
    alimentos: {
      key: 'alimentos',
      alt: 'La Llorona food menu',
      fallback: [menuFood1, menuFood2],
    },
    bebidas: {
      key: 'bebidas',
      alt: 'La Llorona drinks menu',
      fallback: bebidas('en'),
    },
  },
};
