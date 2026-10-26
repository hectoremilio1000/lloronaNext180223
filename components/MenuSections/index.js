import React, { useEffect, useState } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_RESTAURANT_API_BASE;
const RESTAURANT_SLUG = process.env.NEXT_PUBLIC_RESTAURANT_SLUG || 'la-llorona';

// Cada sección (alimentos, bebidas…) se pide y se pinta por separado: si una
// viene vacía, falla el API o no carga alguna de sus fotos, SOLO esa sección
// cae a sus imágenes locales y las demás se siguen mostrando.
async function loadSection(locale, key) {
  if (!API_BASE) return [];
  const res = await fetch(
    `${API_BASE}/api/restaurants/${RESTAURANT_SLUG}/menus/${locale}/${key}/photos`
  );
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();
  if (!data.ok) throw new Error('Respuesta inválida del API');
  return data.photos || [];
}

function MenuSection({ locale, section, loadingText }) {
  const [photos, setPhotos] = useState(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadSection(locale, section.key)
      .then((list) => {
        if (cancelled) return;
        setPhotos(list);
        if (list.length === 0) setUseFallback(true);
      })
      .catch((err) => {
        console.error(`Menú ${locale}/${section.key}:`, err);
        if (!cancelled) setUseFallback(true);
      });
    return () => {
      cancelled = true;
    };
  }, [locale, section.key]);

  if (!useFallback && photos === null) {
    return <p className="text-center py-8 text-white">{loadingText}</p>;
  }

  const images = useFallback
    ? section.fallback.map((src, i) => ({ id: `local-${i}`, url: src }))
    : photos;

  return (
    <div
      className="pt-3 grid grid-cols-1 md:grid-cols-1 gap-2 my-8"
      data-menu-section={section.key}
      data-menu-source={useFallback ? 'local' : 'api'}
    >
      {images.map((p) => (
        <div key={p.id} className="w-full px-0 md:px-4">
          <img
            src={p.url}
            alt={p.altText || section.alt}
            width={1000}
            height={500}
            className="w-full"
            onError={useFallback ? undefined : () => setUseFallback(true)}
          />
        </div>
      ))}
    </div>
  );
}

function MenuSections({ locale, sections, loadingText }) {
  return (
    <>
      {sections.map((section) => (
        <MenuSection
          key={section.key}
          locale={locale}
          section={section}
          loadingText={loadingText}
        />
      ))}
    </>
  );
}

export default MenuSections;
