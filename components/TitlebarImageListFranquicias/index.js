import Image from 'next/image';
import React from 'react'
import title from "../Main/title.module.css"

import image1 from '../../public/images/franquicia/IMG_0059.jpg'
import image2 from '../../public/images/franquicia/IMG_0062.jpg'
import image3 from '../../public/images/franquicia/IMG_0063.jpg'
import image4 from '../../public/images/franquicia/IMG_0071.jpg'

const images = [
  { id: 1, img: "/images/franquicia/IMG_0059.jpg", alt: 'imagen1' },
  { id: 2, img: "/images/franquicia/IMG_0062.jpg", alt: 'imagen2' },
  { id: 3, img: "/images/franquicia/IMG_0063.jpg", alt: 'imagen1' },
  { id: 4, img: "/images/franquicia/IMG_0071.jpg", alt: 'imagen2' },
];


function TitlebarImageListFranquicias() {
  return (
    <div>
      <div>
        <h4 className={title.fontTitleSub}>Experiencias únicas</h4>
        <h2 className={title.fontTitleline}>
          que generan grandes ganancias
        </h2>
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

      {/* <div className="max-w-4xl mx-auto py-8 ">
        <div className="flex md:flex-row lg:flex-row flex-wrap justify-center">

          {images.map((image) =>

            <img src={image.img} className="w-full h-auto py-2 max-w-md px-2" alt={image.id} />

          )}
        </div>
      </div> */}
    </div>
  );
}


export default TitlebarImageListFranquicias;