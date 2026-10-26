import React from 'react';
import { SECCIONES_MENU } from '../../../data/menu/menuSecciones';
import MenuSections from '../../../components/MenuSections';

const { alimentos, bebidas } = SECCIONES_MENU.en;

function MenuFood() {
  return (
    <MenuSections
      locale="en"
      sections={[alimentos, bebidas]}
      loadingText="Loading menu…"
    />
  );
}

export default MenuFood;
