import React from 'react'
import { useAppContext } from '../context/Context'
import title from "../Main/title.module.css"
import Link from 'next/link';

function Encontramos() {
    const { espa } = useAppContext();
    return (
        <>
            {espa ?
                <>
                <div>
                    <h1 className="text-center text-3xl md:text-4xl uppercase font-black">Ubicación de esta Increíble experiencia</h1>
                </div>
                <div>
                    <h4 className={title.fontTitleSub}>Alvaro Obregón 308 Roma Condesa</h4>
                    <h2 className={title.fontTitleline}>Somos un Restaurante premiado</h2>
                    <div className="linea"></div>
                    
                </div>
                <div style={{
                    justifyContent: "center",
                display: "flex",
                width: "100%",
                }} className='mx-2 my-2' >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9147905379655!2d-99.17210979010005!3d19.416087281784087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff471aa89e01%3A0x19ddea4c05056652!2sLa%20Llorona%20Cantina!5e0!3m2!1sen!2smx!4v1682974852347!5m2!1sen!2smx"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                            allowFullScreen=""
                        loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }} className="py-3">
                    <Link href="/reserva">
                        <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            ¡Reserva ya!
                        </button>
                    </Link>
                </div>
                </> :
                <>
                    <div>
                        <h1 className="text-center text-3xl md:text-4xl uppercase font-black">Location of this incredible experience</h1>
                    </div>
                    <div>
                        <h4 className={title.fontTitleSub}>Alvaro Obregón 308 Roma Condesa</h4>
                        <h2 className={title.fontTitleline}>We are an award-winning restaurant</h2>
                        <div className="linea"></div>

                    </div>
                    <div style={{
                        justifyContent: "center",
                        display: "flex",
                        width: "100%",
                    }} className='mx-2 my-2' >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9147905379655!2d-99.17210979010005!3d19.416087281784087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff471aa89e01%3A0x19ddea4c05056652!2sLa%20Llorona%20Cantina!5e0!3m2!1sen!2smx!4v1682974852347!5m2!1sen!2smx"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }} className="py-3">
                        <Link href="/reserva">
                            <button type="button" className="buttonComponente focus:outline-none text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Book now!
                            </button>
                        </Link>
                    </div>
                </>}
    
        </>
  )
}

export default Encontramos