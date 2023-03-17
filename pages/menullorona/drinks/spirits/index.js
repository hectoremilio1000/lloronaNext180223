import React from 'react'
import title from "../../../../components/Main/title.module.css"

function Spirits() {
    const menuComida1 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/food1.jpg"
    const menuComida2 = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/food2.jpg"
    const mixologia = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/MixologyEnglish.jpg"
    const soda = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/SpiritsBeersSodas.jpg"
    const cervezaArtesanal = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/draftbeer.jpg"
    const mezcales = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/mezcalIngles.jpg"
    const destilados = "https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/distillates.jpg"
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
                    <h4 className={title.fontTitleSub}>Sodas & Spirits</h4>
                    <h2 className={title.fontTitleline}>Industrial Mexican Beers</h2>
                    <div className="linea"></div>
                    <div className="w-full px-4">
                        <img
                            src={destilados}
                            alt="destilados"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div> <div className="w-full px-4">
                        <img
                            src={soda}
                            alt="soda"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div>

                </>
                <>
                    <h4 className={title.fontTitleSub}>Mexican drinks</h4>
                    <h2 className={title.fontTitleline}>
                        Mixology with liquors and mexican flavors, Craft Mexican Beers and Mexican Mezcals
                    </h2>
                    <div className="linea"></div>

                    <div className="w-full px-4">
                        <img
                            src={mixologia}
                            alt="comida sabrosa"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div>
                    <div className="w-full px-4">
                        <img
                            src={cervezaArtesanal}
                            alt="comida sabrosa"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div> <div className="w-full px-4">
                        <img
                            src={mezcales}
                            alt="comida sabrosa"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div>
                </>
                <>
                    <h4 className={title.fontTitleSub}>Mexican dishes</h4>
                    <h2 className={title.fontTitleline}>
                        Cooked with love and lots of passion
                    </h2>
                    <div className="linea"></div>

                    <div className="w-full px-4">
                        <img
                            src={menuComida1}
                            alt="comida sabrosa"
                            width={1000}
                            height={500}
                            className="w-full"
                        />
                    </div>
                    <div className="w-full px-4">
                        <img
                            src={menuComida2}
                            alt="comida sabrosa"
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

export default Spirits