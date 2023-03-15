import React from 'react'
import title from "../../../components/Main/title.module.css"

function Cantinero() {
  return (
    <>
      <header className="col jumbotron-fluid pt-3 bannerCantina">
        <div className="d-flex ">
          <div className="subDiv2Banner">
            <h2 className=" font-weight-bold proximamente2">
              <b>Taco x Trago</b>
              <br />
              <b>1 drink 1 food</b>
            </h2>
          </div>
        </div>
      </header>
      <div className="mt-16 mb-16">
        <div className="row-qh">
          <div>
            <h1 className={title.fontTitlemain}>Menú Cantinero</h1>
          </div>
          <div>
            <div>
              <h4 className={title.fontTitleSub}>Pide un copa y te regalamos un llanto</h4>
              <h2 className={title.fontTitleline}>Revivimos las cantinas mexicanas</h2>
              <div className="linea"></div>
            </div>
            <div className='mt-16 mb-16'>
              <p className="text-center sm:text-2xl text-xl text-black">
                En las cantinas mexicanas la botana es una tradición, aquí el
                cliente recibe comida gratis después de cada brebaje de enjundia. Es decir,
                después de una mixologia, cerveza artesanal o
                destilado favorito, un vaso con caldo de camarón, y
                posteriormente lo que el cuerpo aguante.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://imagenesrutalab.s3.amazonaws.com/llorona/menuDigital/espanol/jpg3/menucantinerofrente080223.jpg"
          style={{ height: "30%", width: "100%" }}
        />
      </div>
    </>
  );
}

export default Cantinero