import React from 'react';
import Carousel from '../Carousel/Carousel';

function QuickInfo5({ idioma }) {
  const testimonialsEs = [
    {
      photo:
        'https://lh3.googleusercontent.com/a-/ALV-UjV3DD882RNwLvufn4autcgyzu711qUmhKI2TzdjlOYcvcwBsaSYsA=w120-h120-p-rp-mo-br100',
      rating: 5,
      nombre: 'Alba Magali Juarez',
      url: 'https://maps.app.goo.gl/cantinalallorona',
      text: 'Atención súper amable por parte de la mesera, los músicos cubanos también muy amables. La comida es muy sabrosa de verdad, realmente me gustó mucho el lugar 🎶',
      date: '2026-03-04',
    },
    {
      photo:
        'https://lh3.googleusercontent.com/a-/ALV-UjXK7_enaQuwynGEzJkhhVHU65TGBOg03ODSrY4GP_R8Y2TT=w120-h120-p-rp-mo-br100',
      rating: 5,
      nombre: 'Antilla Day',
      url: 'https://maps.app.goo.gl/cantinalallorona',
      text: '¡Una cena fabulosa con muchas gracias a Javier! Tuvimos una cena encantadora al aire libre con música en vivo y un servicio maravilloso 🌟',
      date: '2026-03-03',
    },
    {
      photo:
        'https://lh3.googleusercontent.com/a-/ALV-UjUxNJQuFLCTAQlSBGAdFgrpbL2zs-1PAWTDEfA0Jq14X7I=w120-h120-p-rp-mo-ba3-br100',
      rating: 5,
      nombre: 'Sandra Espinosa',
      url: 'https://maps.app.goo.gl/cantinalallorona',
      text: 'Muy buen lugar! Comida deli, buena música en vivo y la atención de Brenda de lujo! 👌🏻 Sin duda regresamos y recomendamos 😉',
      date: '2026-03-02',
    },
    {
      photo:
        'https://lh3.googleusercontent.com/a-/ALV-UjVHTZs61uPphRYtaHBB1ZHCHIaah1PelMVFWSHGUF4Kq4w=w120-h120-p-rp-mo-ba5-br100',
      rating: 5,
      nombre: 'Alessandra',
      url: 'https://maps.app.goo.gl/cantinalallorona',
      text: 'Las instalaciones 10/10 y la comida ni se diga, mis favoritas las mini flautas de mole 😍😍😍',
      date: '2026-03-03',
    },
    {
      photo:
        'https://lh3.googleusercontent.com/a-/ALV-UjU6hsbL81jwtge5BeiLkVptdtmN_iWWRNJFQFtLqdPKxhs=w120-h120-p-rp-mo-ba4-br100',
      rating: 5,
      nombre: 'Ian Magargee',
      url: 'https://maps.app.goo.gl/cantinalallorona',
      text: 'Comida muy sabrosa con un ambiente increíble — había una banda de salsa. Nuestro mesero Najar fue muy amable y nos dio buenas sugerencias. Este lugar es fantástico 🔥',
      date: '2026-03-01',
    },
  ];
  const testimonialsEn = [
    {
      photo:
        'https://lh3.googleusercontent.com/a-/ALV-UjU-eD1Bf9aMyK372MXWBN7g4YgbBl6yWx1cC3ZRu_YgW3k=w72-h72-p-rp-mo-ba4-br100',
      rating: 5,
      nombre: 'Amanda V',
      url: 'https://maps.app.goo.gl/GL3A5K35yeAZdQ8u9',
      text: "Service was quick, friendly, and informative about the menu. I got the Don Huevo burger, and it was SO GOOD. (I'm going to start adding arugula and fried eggs when I make burgers at home!) Also got the strawberry horchata (in the pictures) since it was one of the only non-alcoholic options, and it was divine. The flavor was great and it was so creamy. The only thing I wasn't a huge fan of was the TV was on with the volume kind of loud the whole time, the music was a little too loud, and the lights were synchronized with the music, so it was a little overstimulating.",
      date: '2024-01-27',
    },
    {
      photo:
        'https://lh3.googleusercontent.com/a/ACg8ocLmTG6uUsqqWar2n-Vg3S6tGYq7FP_j-tT4fO4Tza_eZ9gupg=w120-h120-p-rp-mo-br100',
      rating: 5,
      nombre: 'lowell moore',
      url: 'https://maps.app.goo.gl/qzCD2gzVXMMeFQRy6',
      text: "First night in Mexico City. Just stopped by for a quick drink and looked at the menu.  Hamburger with carmelized onions and blue cheese is one of the best burgers I've ever had.  Sat outdoors and Robert took excellent care of us. Highly recommend. You will love it!",
      date: '2024-03-20',
    },
    {
      photo:
        'https://lh3.googleusercontent.com/a-/ALV-UjUnq3kLCqTg8Ya2Y47-8DBMxQOerAIr0nW9afCrheO4nW6HIWTN=w72-h72-p-rp-mo-br100',
      rating: 5,
      nombre: 'sandra baca',
      url: 'https://maps.app.goo.gl/ZJMTbNCMEd9dgDLo7',
      text: "Nice cocktails and food, I've just got dessert but it was delicious, excellent service, the only thing is that music is a bit louder 🤗",
      date: '2023-12-27',
    },
    {
      photo:
        'https://lh3.googleusercontent.com/a-/ALV-UjV53O_B5w84E9nEn6l0Bg66cBJv5NwirO2VUOV4PNpqLcaolJ0S=w72-h72-p-rp-mo-ba4-br100',
      rating: 5,
      nombre: 'Kelly Ording',
      url: 'https://maps.app.goo.gl/C6YMzKvwJMA3i1JPA',
      text: 'La Llorona Cantina is a good spot for some food and drinks. I got one of the taco options  and a cocktail. Both were great! The staff was incredibly friendly and put the women’s World Cup on the television. Sometimes they have live music as well.',
      date: '2023-03-17',
    },
    {
      photo:
        'https://lh3.googleusercontent.com/a-/ALV-UjW7BjPqjw-TVmDTjUfsZkcvUkEOvPby-ELyAOYgDDTC9NboaM8r=w72-h72-p-rp-mo-ba5-br100',
      rating: 5,
      nombre: 'Pratik Desai',
      url: 'https://maps.app.goo.gl/Rv94nb1T1xtXC8U37',
      text: 'Amazing artisanal tacos (but smaller in size) - a great place to day drink outside. Some of the servers are a little careless, but the owner (or manager?) is very thoughtful. Good mezcal list as well!',
      date: '2023-03-17',
    },
    {
      photo:
        'https://lh3.googleusercontent.com/a-/ALV-UjWsuBUWoGfABlax52aiF1MsOcMiKvDf_taeMRozKrkYobD3RcU=w72-h72-p-rp-mo-br100',
      rating: 5,
      nombre: 'Christophe Diot',
      url: 'https://maps.app.goo.gl/hidk1jdyDYwZjmFT6',
      text: 'nice outdoor bar atmosphere. nothing fancy but very friendly, tasty food, excellent cocktails. everything you need for a quiet dinner with family in mexico city.',
      date: '2023-03-17',
    },
  ];

  return (
    <>
      {idioma ? (
        <div className="container mx-auto px-4 lg:px-0">
          <Carousel testimonials={testimonialsEs} />
        </div>
      ) : (
        <div className="container mx-auto px-4 lg:px-0">
          <Carousel testimonials={testimonialsEn} />
        </div>
      )}
    </>
  );
}

export default QuickInfo5;
