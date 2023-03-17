import React from 'react'
import title from "../../../../components/Main/title.module.css"


import menuComida1 from '../../../../public/images/menuIngles/food1.jpg'
import menuComida2 from '../../../../public/images/menuIngles//food2.jpg'
import mixologia from '../../../../public/images/menuIngles//MixologyEnglish.jpg'
import soda from '../../../../public/images/menuIngles/SpiritsBeersSodas.jpg'
import cervezaArtesanal from '../../../../public/images/menuIngles/draftbeer.jpg'
import mezcales from '../../../../public/images/menuIngles/mezcalIngles.jpg'
import destilados from '../../../../public/images/menuIngles/distillates.jpg'



import Image from 'next/image';
function Drinks() {
    return (
        <>
            <div className="d-flex subContenedor1Banner banner"
                style={{
                    backgroundImage: `url("https://imagenesrutalab.s3.amazonaws.com/llorona/banner/bannerMenu.jpg")`,
                    backgroundSize: "cover",
                    height: "40vh",
                    backgroundPosition: "center",
                    position: "relative"
                }}>

                <div className="d-flex w-44 sm:w-60 md:w-80 mx-2 title-portada">
                    <h3 className=" font-weight-bold proximamente2 text-white">
                        <b>Mexican Experience</b>
                    </h3>

                </div>
            </div>

            <div className="pt-3">
                <>
                    <h4 className="text-center tituloSection">Mexican drinks</h4>
                    <h2 className="text-center subTituloSection">
                        Mixology with liquors and mexican flavors, Craft Mexican Beers and Mexican Mezcals
                    </h2>
                    <div className="linea"></div>

                    <div className="w-full px-4">
                        <Image
                            src={mixologia}
                            alt="comida sabrosa"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div>
                    <div className="w-full px-4">
                        <Image
                            src={cervezaArtesanal}
                            alt="comida sabrosa"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div> <div className="w-full px-4">
                        <Image
                            src={mezcales}
                            alt="comida sabrosa"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div>
                </>
                <>
                    <h4 className="text-center tituloSection">Mexican dishes</h4>
                    <h2 className="text-center subTituloSection">
                        Cooked with love and lots of passion
                    </h2>
                    <div className="linea"></div>

                    <div className="w-full px-4">
                        <Image
                            src={menuComida1}
                            alt="comida sabrosa"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div>
                    <div className="w-full px-4">
                        <Image
                            src={menuComida2}
                            alt="comida sabrosa"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div>
                </>
                

                <>
                    <h4 className="text-center tituloSection">Sodas & Spirits</h4>
                    <h2 className="text-center subTituloSection">Industrial Mexican Beers</h2>
                    <div className="linea"></div>
                    <div className="w-full px-4">
                        <Image
                            src={destilados}
                            alt="destilados"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div> <div className="w-full px-4">
                        <Image
                            src={soda}
                            alt="soda"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div>

                </>


            </div>
        </>
    )
}

export default Drinks