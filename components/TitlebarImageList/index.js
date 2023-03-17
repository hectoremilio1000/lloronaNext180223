import Image from 'next/image';
import React from 'react'
import card from '../Main/card.module.css'

import image1 from '../../public/images/Mezcal/IMG_1905.jpg'
import image2 from '../../public/images/Mezcal/IMG_9982.jpg'
import image3 from '../../public/images/Mezcal/IMG_1905.jpg'
import image4 from '../../public/images/Mezcal/IMG_9984.jpg'

import title from '../Main/title.module.css'


function TitlebarImageList() {
  return (
    <div>
      <div>
        <h4 className={title.fontTitleSub}>Ancestral</h4>
        <h2 className={title.fontTitleline}>Proceso</h2>
        <div className="linea"></div>
      </div>

      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image
              alt=""
              src={image1}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-75"
            />
        
          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image
              alt=""
              src={image2}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-75"
            />

          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image
              alt=""
              src={image3}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-75"
            />

          </div>
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <Image
              alt=""
              src={image4}
              layout="fill"
              objectFit="cover"
              className="group-hover:opacity-75"
            />

          </div>
          </div>
          </div>



      

      {/* <div className={card.cardContainer}>
        
        
      <div className={card.cardBox}>
            <Image
              className="imagenAbajoTexto1Home"
            src={image1}
            width="640" height="360"
            alt="Nuestro Palenque, Santa Catarina Minas, Oaxaca" 
            
            />
          <p className="textoFotosHome text-black">Nuestro Palenque, Santa Catarina Minas, Oaxaca</p>
        </div>
        
        
      
        <div className={card.cardBox}>
          <Image
            className="imagenAbajoTexto1Home"
            src={image2}
            alt="Nuestro Palenque, Santa Catarina Minas, Oaxaca" 
            width="640" height="360"
          />
          <p className="textoFotosHome text-black">Molienda con manos de artesanos oaxaqueños</p>
        </div>
        <div className="h-64 w-96 relative">
          <Image
            
            src={image3}
            
            layout="fill" // required
            objectFit="cover" // change to suit your needs
            className="rounded-full" // just an example
            alt="Nuestro Palenque, Santa Catarina Minas, Oaxaca"
          />
          <p className="textoFotosHome text-black">Fermentación 100% libre de químicos</p>
        </div>

        <div className="h-64 w-96 relative">
          <Image
            className="imagenAbajoTexto1Home"
            src={image4}
            alt="Nuestro Palenque, Santa Catarina Minas, Oaxaca" 
          />
          <p className="textoFotosHome text-black">Destilación en Ollas de Barro de Cobre</p>
        </div>
   
        </div> */}
     
      <div className="subSubDiv1Banner">
        <a href="https://wa.me/+5215549242477">
          <button type="button" className="buttonComponente">
            ¡Comprar ahora!
          </button>
        </a>
      </div>
    </div>
  );
}

// const itemData = [
//   {
//     img: "https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/IMG_9982.jpg",
//     title: "Nuestro Palenque, Santa Catarina Minas, Oaxaca",
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: "https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/IMG_9984.jpg",
//     title: "Molienda con manos de artesanos oaxaqueños",
//   },
//   {
//     img: "https://images.squarespace-cdn.com/content/5f04aed9153c537f9abcb851/1595359863647-9FCGVBUGXDSW2IKBDQLF/IMG_1905.jpg?format=1000w&content-type=image%2Fjpeg",
//     title: "Fermentación 100% libre de químicos",
//   },
//   {
//     img: "https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/IMG_9983.jpg",
//     title: "Destilación en Ollas de Barro de Cobre",
//     cols: 2,
//   },
// ];

export default TitlebarImageList;