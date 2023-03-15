import Image from 'next/image';
import React from 'react'
import title from "../Main/title.module.css"
import { Layout, Menu, Breadcrumb, Card, Row, Col } from 'antd';

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

      <div className="max-w-4xl mx-auto py-8 ">
        <div className="flex md:flex-row lg:flex-row flex-wrap justify-center">

          {images.map((image) =>

            <img src={image.img} className="w-full h-auto py-2 max-w-md px-2" alt={image.id} />

          )}
        </div>
      </div>
    </div>
  );
}


export default TitlebarImageListFranquicias;