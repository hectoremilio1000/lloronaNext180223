import React from 'react'
import title from "../components/Main/title.module.css"


function Vacantes() {
    return (
      <>
      <div className="d-flex subContenedor1Banner bannerVacantes banner">
          <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
              <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
                  <h3 className=" font-weight-bold proximamente2 text-white">
                      <b>Vacantes</b>
                  </h3>

                  <div className="subSubDiv1Banner">
                      <a href="https://wa.me/+5215549242477">
                          <button type="button" className="buttonComponente">
                              ¡Solicita información ya!
                          </button>
                      </a>
                  </div>

                 
              </div>
              
          </div>

      </div>
         <div>
                <h1 className={title.fontTitlemain}>Contratación inmmediata</h1>
                  </div>
                  <div className='row-qh'>
                <h4 className={title.fontTitleSub}>Solicitamos</h4>
                      <h2 className={title.fontTitleline}>MESERO, BARMAN Y COCINERO</h2>
                      <div className="linea"></div>
                  </div>


                  <div className="py-3 px-4 row-qh">
                      <p className="text-justify sm:text-2xl text-xl text-black">
                    Experiencia mínima de 6 meses (comprobable, INDISPENSABLE contar con cartas de recomendación o constancias laborales) en restaurantes establecidos o de cadena.</p>
                <div className="py-3 px-3">

                
                <ul className='sm:text-2xl text-xl text-black list-disc'>
                    <li className='list'>Deseable experiencia en restaurantes.</li>
                    <li>Contar con documentación completa.</li>
                    <li>Excelente actitud de servicio.</li>
                    <li>Sentido de urgencia.</li>
                
                    </ul>
                </div>
            </div>
            <div className="subSubDiv1Banner pb-5">
                <a href="https://wa.me/+5215549242477">
                    <button type="button" className="buttonComponente">
                        ¡Solicita información ya!
                    </button>
                </a>
            </div>
        </>
  )
}

export default Vacantes