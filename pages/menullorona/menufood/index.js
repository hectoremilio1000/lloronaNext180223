import React from 'react';
import {
  menuFood1,
  menuFood2,
  mixoIngles,
  mezcaEspaIngles,
  destiladosEspaIngles,
  sodaEspaIngles,
} from '../../../data/menu/menuIngles';
import MenuSections from '../../../components/MenuSections';

const SECTIONS = [
  {
    key: 'alimentos',
    alt: 'La Llorona food menu',
    fallback: [menuFood1, menuFood2],
  },
  {
    key: 'bebidas',
    alt: 'La Llorona drinks menu',
    fallback: [mixoIngles, mezcaEspaIngles, destiladosEspaIngles, sodaEspaIngles],
  },
];

function MenuFood() {
  return (
    <MenuSections locale="en" sections={SECTIONS} loadingText="Loading menu…" />
  );
}

export default MenuFood;
