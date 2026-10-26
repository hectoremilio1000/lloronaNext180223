import React from 'react';
import title from '../Main/title.module.css';
import MenuSections from '../MenuSections';
import { SECCIONES_MENU } from '../../data/menu/menuSecciones';

const TEXTOS = {
  es: {
    bebidasSub: 'Bebidas Mexicanas',
    bebidasTitulo: 'Carta de bebidas',
    comidaSub: 'Platillos mexicanos',
    comidaTitulo: 'Cocinados con amor y mucho sazón',
    cargando: 'Cargando menú…',
  },
  en: {
    bebidasSub: 'Mexican Drinks',
    bebidasTitulo: 'Drinks menu',
    comidaSub: 'Mexican dishes',
    comidaTitulo: 'Cooked with love and lots of passion',
    cargando: 'Loading menu…',
  },
};

// Páginas sueltas de bebidas (/menullorona/Bebidas/*, /menullorona/drinks/*):
// la carta de bebidas vigente primero y luego la comida, con el mismo
// respaldo por sección que /menullorona.
function MenuBebidasPagina({ locale }) {
  const t = TEXTOS[locale];
  const { alimentos, bebidas } = SECCIONES_MENU[locale];

  return (
    <>
      <div
        className="d-flex subContenedor1Banner banner"
        style={{
          backgroundImage: `url("/img/ambiente/interior-techo-raices.webp")`,
          backgroundSize: 'cover',
          height: '40vh',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
          <h3 className=" font-weight-bold proximamente2 text-white">
            <b>Mexican Experience</b>
          </h3>
        </div>
      </div>
      <div className="mt-16 mb-16 max-w-[1184px] mx-auto w-full px-2 md:px-[20px]">
        <h4 className={title.fontTitleSub}>{t.bebidasSub}</h4>
        <h2 className={title.fontTitleline}>{t.bebidasTitulo}</h2>
        <div className="linea"></div>
        <MenuSections
          locale={locale}
          sections={[bebidas]}
          loadingText={t.cargando}
        />

        <h4 className={title.fontTitleSub}>{t.comidaSub}</h4>
        <h2 className={title.fontTitleline}>{t.comidaTitulo}</h2>
        <div className="linea"></div>
        <MenuSections
          locale={locale}
          sections={[alimentos]}
          loadingText={t.cargando}
        />
      </div>
    </>
  );
}

export default MenuBebidasPagina;
