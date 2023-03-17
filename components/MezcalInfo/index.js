import React from 'react'
import title from "../Main/title.module.css"
import card from "../Main/card.module.css"

function MezcalInfo() {
  return (
    <div className="container-llorona py-2">
      <div className='px-2'>
        <h1 className={title.fontTitlemain}>Mezcal Llorona</h1>
      </div>
      <div>
        <h4 className={title.fontTitleSub}>Nuestro Mezcal</h4>

        <div className="linea"></div>
      </div>

      <div className="py-3 px-3 row-qh">
        <p className="text-center sm:text-2xl text-xl text-black">
          La llorona es una canción escrita en la comunidad zapoteca del Istmo
          de Tehuantepec, Oaxaca; cuenta la historia de la búsqueda de un gran
          amor.
        </p>

        <p className="text-center sm:text-2xl text-xl text-black">
          En honor a esta búsqueda del amor hacia la perfección elaboramos un
          sabor que se remonta a 500 años de tradición en la elaboración del
          elixir llamado “mezcal minero”, haciendo alusión al nombre de la
          población donde lo producimos y el cuál se caracteriza por su
          elaboración a mano y su doble destilación en olla de barro.
        </p>
      </div>
      <div className="subSubDiv1Banner">
        <a href="https://wa.me/+5215549242477">
          <button type="button" className="buttonComponente">
            ¡Ordenar ya!
          </button>
        </a>
      </div>
    </div>
  );
}

export default MezcalInfo