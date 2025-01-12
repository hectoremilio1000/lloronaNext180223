import { useEffect, useState } from 'react';
import Formulario from './Formulario';

export default function PreguntasChatGTP({ usuario }) {
  return (
    <div>
      <Formulario usuario={usuario} />
    </div>
  );
}
