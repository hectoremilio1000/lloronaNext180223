import React from 'react';
import CarouselRevistas from '../CarouselRevistas/CarouselRevistas';

function RevistasPopup({ idioma }) {
  const testimonialsEs = [
    {
      photo:
        'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/logo+timeout.jpeg',
      rating: 5,
      nombre: 'Revista Time Out',
      url: 'https://www.timeoutmexico.mx/ciudad-de-mexico/bares-y-cantinas/la-llorona',
      text: 'La Llorona –por la canción de Chavela Vargas– es un concepto relajado e ideal para las noches prolongadas con innumerables tragos de mezcal.',
      date: '2023-03-15',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0veKlMowDS0j_Kw38zUlUk1nM1uofzGz6g&s',
      rating: 5,
      nombre: 'Forbes',
      url: 'https://mbmarcobeteta.com/lugares/terraza-cha-cha-cha/',
      text: 'Concepto muy cool de terraza-bar, de lo más solicitado entre adultos jóvenes, donde mandan divertido y ruidoso ambiente, insuperables vistas a la ciudad, buenos drinks y sabrosa comida mexicana con toque internacional. Recomiendo: carnitas de pato, chamorro de cerdo, tacos de pescado o jaiba, tuétano con esquites. Brunch sábado y domingo.',
      date: '2024-03-20',
    },
    {
      photo:
        'https://www.att.com.mx/dw/image/v2/BJKW_PRD/on/demandware.static/-/Sites-att-Library/default/dw148ea01a/images/migration/entretenimiento/DondeIR.jpeg',
      rating: 5,
      nombre: 'Donde ir',
      url: 'https://www.dondeir.com/restaurante/la-llorona-restaurante-cantina-grill-en-condesa/14684/',
      text: 'La Llorona, se encuentra frente al Parque España, en la Roma rinde tributo a las raíces de su creador sin pretensiones de vanguardia culinaria, lo cual se agradece',
      date: '2023-03-17',
    },
    {
      photo: 'https://img.chilango.com/2017/01/logoChilangoWeb-300x128.png',
      rating: 5,
      nombre: 'Chilango',
      url: 'https://www.chilango.com/comida/la-llorona-la-nueva-cantina-de-la-condesa/',
      text: 'El lugar tiene motivos mexicanos por todas partes. Así que encontrarás tucanes, mariposas, caimanes y serpientes trepando por sus paredes (de mentiritas). Su logo es una fusión entre la tradicional catrina y Frida Kahlo.',
      date: '2023-03-17',
    },
    {
      photo:
        'https://revistatop.com.mx/wp-content/uploads/2020/02/Logotipo1.png',
      rating: 5,
      nombre: 'Tpp',
      url: 'https://revistatop.com.mx/inauguracion-de-la-llorona/',
      text: 'La Llorona” restaurante, Viva la vida',
      date: '2023-03-17',
    },
  ];
  const testimonialsEn = [
    {
      photo:
        'https://imagenesrutalab.s3.amazonaws.com/llorona/nextImage/logo+timeout.jpeg',
      rating: 5,
      nombre: 'Revista Time Out',
      url: 'https://www.timeoutmexico.mx/ciudad-de-mexico/bares-y-cantinas/la-llorona',
      text: 'La Llorona –inspired by the song of Chavela Vargas– is a relaxed concept, perfect for long nights with countless mezcal drinks.',
      date: '2023-03-15',
    },
    {
      photo:
        'https://1000marcas.net/wp-content/uploads/2020/03/logo-Forbes-1024x576.png',
      rating: 5,
      nombre: 'Forbes',
      url: 'https://www.forbes.com.mx/forbes-life/la-llorona-cantina-del-siglo-xxi/#google_vignette',
      text: 'In terms of gastronomy, La Llorona adopts the classic cantina format, offering premium spirits and expertly crafted mezcal-based cocktails.',
      date: '2024-03-20',
    },
    {
      photo:
        'https://www.att.com.mx/dw/image/v2/BJKW_PRD/on/demandware.static/-/Sites-att-Library/default/dw148ea01a/images/migration/entretenimiento/DondeIR.jpeg',
      rating: 5,
      nombre: 'Donde ir',
      url: 'https://www.dondeir.com/restaurante/la-llorona-restaurante-cantina-grill-en-condesa/14684/',
      text: 'La Llorona, located across from Parque España in Roma, pays tribute to the roots of its creator without any pretensions of culinary avant-garde, which is greatly appreciated.',
      date: '2023-03-17',
    },
    {
      photo: 'https://img.chilango.com/2017/01/logoChilangoWeb-300x128.png',
      rating: 5,
      nombre: 'Chilango',
      url: 'https://www.chilango.com/comida/la-llorona-la-nueva-cantina-de-la-condesa/',
      text: "The place has Mexican motifs everywhere. So you'll find toucans, butterflies, caimans, and snakes climbing its walls (just pretend). Its logo is a fusion between the traditional Catrina and Frida Kahlo.",
      date: '2023-03-17',
    },
    {
      photo:
        'https://revistatop.com.mx/wp-content/uploads/2020/02/Logotipo1.png',
      rating: 5,
      nombre: 'Tpp',
      url: 'https://revistatop.com.mx/inauguracion-de-la-llorona/',
      text: 'La Llorona restaurant, Viva la vida, enjoy the great food of this place.',
      date: '2023-03-17',
    },
  ];

  return (
    <>
      {idioma ? (
        <div className="container mx-auto px-4 lg:px-0">
          <CarouselRevistas testimonials={testimonialsEs} />
        </div>
      ) : (
        <div className="container mx-auto px-4 lg:px-0">
          <CarouselRevistas testimonials={testimonialsEn} />
        </div>
      )}
    </>
  );
}

export default RevistasPopup;
