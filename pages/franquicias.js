import Link from 'next/link';
import React from 'react'
import FranquiciaInfo from '../components/FranquiciaInfo/FranquiciaInfo';


function Franquicias() {
    return (
        <>
            <div
                className="d-flex subContenedor1Banner bannerFranquicias"
               
            >
                <div className="d-flex ">
                    <div className="subDiv2Banner">
                        <h3 className=" font-weight-bold proximamente2 text-white">
                            <b>Franquicias</b>
                        </h3>

                        <div className="subSubDiv1Banner">
                            <Link href="/reserva">
                                <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    ¡Reserva ya!
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <FranquiciaInfo className="mt-2" />
        </>
    );
}

export default Franquicias