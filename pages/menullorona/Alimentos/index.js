import React from 'react';
import { SECCIONES_MENU } from '../../../data/menu/menuSecciones';
import MenuSections from '../../../components/MenuSections';

const { alimentos, bebidas } = SECCIONES_MENU.es;

function Alimentos() {
  return (
    <MenuSections
      locale="es"
      sections={[alimentos, bebidas]}
      loadingText="Cargando menú…"
    />
  );
}

export default Alimentos;
