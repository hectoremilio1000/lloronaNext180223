import React from 'react';
import {
  menuEspa1,
  menuEspa2,
  mixoEspa,
  mezcaEspa,
  destiladosEspa,
  sodaEspa,
} from '../../../data/menu/menuEspa/menuEspa';
import MenuSections from '../../../components/MenuSections';

const SECTIONS = [
  {
    key: 'alimentos',
    alt: 'Menú de comida La Llorona',
    fallback: [menuEspa1, menuEspa2],
  },
  {
    key: 'bebidas',
    alt: 'Menú de bebidas La Llorona',
    fallback: [mixoEspa, mezcaEspa, destiladosEspa, sodaEspa],
  },
];

function Alimentos() {
  return (
    <MenuSections locale="es" sections={SECTIONS} loadingText="Cargando menú…" />
  );
}

export default Alimentos;
