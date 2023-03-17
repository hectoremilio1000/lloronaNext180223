import Link from 'next/link';
import React from 'react'
import FranquiciaInfo from '../components/FranquiciaInfo/FranquiciaInfo';


function Franquicias() {
    return (
        <div className="pb-8">
            <div className="d-flex subContenedor1Banner bannerFranquicias banner">

                {/* <video autoPlay muted loop src={videoPort} /> */}

                <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
                    <h3 className=" font-weight-bold proximamente2 text-white">
                        <b>Franquicias</b>
                    </h3>

                    <div className="subSubDiv1Banner">
                        <a href="https://wa.me/+5215549242477">
                            <button type="button" className="buttonComponente">
                                ¡Solicita información ya!
                            </button>
                        </a>
                    </div>

                    {/* <div className="subSubDiv1Banner">
            <Link href="/reserva">
              <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                ¡Reserva ya!
              </button>
            </Link>
          </div> */}
                </div>
            </div>
            <FranquiciaInfo className="" />
            <div className="subSubDiv1Banner">
                <a href="https://wa.me/+5215549242477">
                    <button type="button" className="buttonComponente">
                        ¡Solicita información ya!
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Franquicias