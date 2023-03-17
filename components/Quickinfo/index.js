import React from 'react'
import title from "../Main/title.module.css"
import card from "../Main/card.module.css"
import Link from 'next/link';
import image1 from '../../public/images/home/quickinfo1/mexican-shredded-pork-recipes-900x900 (1).jpg'

import image2 from '../../public/images/home/quickinfo1/aguachileVerde (1).jpg'
import image3 from '../../public/images/home/quickinfo1/HAMBURGUESA_jack_suizo (2).jpeg'
import image4 from '../../public/images/home/quickinfo1/IMG_8064.jpg'
import Image from 'next/image';



function QuickInfo() {
  return (
    <div className="container-llorona px-2">
      <div>
        <h1 className={title.fontTitlemain}>La Llorona Xperience</h1>
      </div>
      <div className='row-qh'>
        <h4 className={title.fontTitleSub}>¿Cómo ser un</h4>
        <h2 className={title.fontTitleline}>Mexicano?</h2>
        <div className="linea"></div>
      </div>

      <div className="py-3 px-3 row-qh">
        <p className="text-center sm:text-2xl text-xl text-black">
          Toma nuestros cocteles con <b>Pulque, Tepache o Mezcal</b>. Prueba con nosotros
          la gastronomía urbana mexicana que va desde{" "}
          <b>tacos, memelas hasta hamburguesas</b> y deleítate con una exquisita
          <b> Cerveza Artesanal Mexicana</b> que encontraras AQUÍ.
        </p>
      </div>

      <div sytle={{ maxWidth: 100}}>

     
      <div className="max-w-3xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-10">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Link href="/menullorona/Alimentos">
            <Image
              alt=""
              src={image1}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-75"
            />
            </Link>
          
          </div>
          
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Link href="/menullorona/Alimentos">
            <Image
              alt=""
              src={image2}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-75"
              />
            </Link>
       
            
       
            
          </div>


          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Link href="/menullorona/Alimentos">
            <Image
              alt=""
              src={image3}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-75"
            />
            </Link>
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Link href="/menullorona/Bebidas/Artesanal">
            <Image
              alt=""
              src={image4}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-75"
            />
            </Link>
          </div>
          
        </div>
      </div>
      </div>
      {/* <div className={card.cardContainer}
      >
        <Link href="/menullorona/Alimentos">
          <div className={card.cardBox}>
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/mexican-shredded-pork-recipes-900x900.jpg"
              alt="Tacos deliciosos de Cochinita Pibil"
            />
            <p className="textoFotosHome text-black">Tacos de Cochinita Pibil</p>
          </div>
        </Link>
        <Link href="/menullorona/Alimentos">
          <div className={card.cardBox}>
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/galeriaimagenes/aguachileVerde.jpg"
              alt="Aguachile Verde Camarón"
            />
            <p className="textoFotosHome text-black">
              Aguachile Verde <br />
              de Camarón
            </p>
          </div>
        </Link>
        <Link href="/menullorona/Alimentos">
          <div className={card.cardBox}>
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/HAMBURGUESA_jack_suizo.JPG"
              alt="Tacos deliciosos de Cochinita Pibil"
            />
            <p className="textoFotosHome text-black">
              Hamburguesa Méxicana <br />
              con especias mexicanas
            </p>
          </div>
        </Link>
        <Link href="/menullorona/Bebidas/Artesanal">
          <div className={card.cardBox}>
            <img
              className="imagenAbajoTexto1Home"
              src="https://imagenesrutalab.s3.amazonaws.com/llorona/mixologia/IMG_8064.jpg"
              alt="Pierde Almas con Mezcal"
            />
            <p className="textoFotosHome text-black">
              Pulque


            </p>
          </div>
        </Link>
      </div> */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href="reserva">
          <button type="button" className="buttonComponente">
            ¡Reserva ya!
          </button>
        </Link>
      </div>
    </div>

  );
}

export default QuickInfo