import dynamic from 'next/dynamic';
// Carga el Carousel sólo en cliente para evitar mismatches SSR/CSR
const Carousel = dynamic(() => import('../Carousel/Carousel'), { ssr: false });

const testimonialsEs = [
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjX8QrtArrR4oEiJ-owNtq5W_AZhGvO982UNTS5ms5PenIrlf8vX=w72-h72-p-rp-mo-br100',
    rating: 5,
    nombre: 'Jessica Burnette',
    url: 'https://maps.app.goo.gl/vpNDiytMvt9xVHar5',
    text: '¡La Llorona fue una experiencia increíble! La comida estaba deliciosa—cada platillo lleno de sabor. Las celebraciones de cumpleaños aquí son de otro nivel, algo que vale la pena vivir. Un agradecimiento enorme a Oscar, quien nos atendió de maravilla. ¡Sin duda volveré en mi próximo viaje a CDMX!',
    date: '2024-03-20',
  },

  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjVSn3NO95DD5Zrq3ApDpn9gK-3G4cCh4kIbYep0jngt46d2vc5k7w=w72-h72-p-rp-mo-ba2-br100',
    rating: 5,
    nombre: 'Alejandro Sánchez',
    url: 'https://maps.app.goo.gl/TReQvKhFxGvxixAF7',
    text: 'Increíble lugar para música cubana en vivo. Taco gobernador y pizzetas deliciosos. Helado muy rico. Muy recomendable',
    date: '2023-03-17',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjW0WhG5CYbQjXh6_kAFqqEk_RkL_4VXrZ4sl64G49dts35C3lZRcg',
    rating: 5,
    nombre: 'Diana Morales',
    url: 'https://g.co/kgs/JtoHnz9',
    text: 'Bonito restaurante con una vista simpática, si te sientas afuera es mucho mejor... Algo tiene la experiencia de comer en el exterior un restaurante y la zona es bonita, les recomiendo intentarlo <br/> Pedí un mezcal de gusano, una hamburguesa de pollo y una cerveza para acompañar!',
    date: '2023-03-15',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjWzh_rXQHgxIYem6jgiGB0BK6U3UwxP2aduOpD5Z1ZuMr1Kp8EpNg=w72-h72-p-rp-mo-ba5-br100',
    rating: 5,
    nombre: 'Bill Franklin',
    url: 'https://maps.app.goo.gl/L6CJDPTM7CgnpfXs9',
    text: 'Terraza Cha Cha Cha was one of the best place I ate on this trip. The service was excellent from the time I walked in to when I left. The view was great and its a perfect spot to grab a drink and look out over the city. All of the food I had here was well cooked and had great flavor. The salsa with the chips was especially good. As mentioned before the service was very good here, everything was brought out quickly and it was never hard to ask the staff for anything.',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjU6hsbL81jwtge5BeiLkVptdtmN_iWWRNJFQFtLqdPKxhs=w120-h120-p-rp-mo-ba4-br100',
    rating: 5,
    nombre: 'Jorge David Santacruz Morhy',
    url: 'https://g.co/kgs/gVgZDhf',
    text: 'Excelente lugar - la cerveza oscura está exquisita, así cómo la  hamburguesa. El servicio muy amable.',
    date: '2023-03-17',
  },
];
const testimonialsEn = [
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjX8QrtArrR4oEiJ-owNtq5W_AZhGvO982UNTS5ms5PenIrlf8vX=w72-h72-p-rp-mo-br100',
    rating: 5,
    nombre: 'Jessica Burnette',
    url: 'https://maps.app.goo.gl/vpNDiytMvt9xVHar5',
    text: 'La Llorona was an incredible experience! The food was delicious—every dish packed with flavor. The birthday celebrations here are next level, truly something to experience. Huge thanks to Oscar, who took wonderful care of us. I will definitely return on my next trip to CDMX!',
    date: '2024-03-20',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjVSn3NO95DD5Zrq3ApDpn9gK-3G4cCh4kIbYep0jngt46d2vc5k7w=w72-h72-p-rp-mo-ba2-br100',
    rating: 5,
    nombre: 'Alejandro Sánchez',
    url: 'https://maps.app.goo.gl/TReQvKhFxGvxixAF7',
    text: 'Incredible spot for live Cuban music. The Taco Gobernador and pizzetas were delicious, and the ice cream was very tasty. Highly recommended!',
    date: '2023-03-17',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjW0WhG5CYbQjXh6_kAFqqEk_RkL_4VXrZ4sl64G49dts35C3lZRcg',
    rating: 5,
    nombre: 'Diana Morales',
    url: 'https://g.co/kgs/JtoHnz9',
    text: 'Nice restaurant with a charming view—sitting outside is even better. There’s something special about dining al fresco here and the area is beautiful. I recommend giving it a try. I ordered a gusano mezcal, a chicken burger, and a beer to go with it!',
    date: '2023-03-15',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjWzh_rXQHgxIYem6jgiGB0BK6U3UwxP2aduOpD5Z1ZuMr1Kp8EpNg=w72-h72-p-rp-mo-ba5-br100',
    rating: 5,
    nombre: 'Bill Franklin',
    url: 'https://maps.app.goo.gl/L6CJDPTM7CgnpfXs9',
    text: 'Terraza Cha Cha Cha was one of the best places I ate on this trip. The service was excellent from the moment I walked in until I left. The view was great and it’s a perfect spot to grab a drink and look out over the city. All of the food I had was well cooked and full of flavor. The salsa with the chips was especially good. As mentioned, the service was very good—everything came out quickly and the staff was always attentive.',
    date: '2023-03-17',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjU6hsbL81jwtge5BeiLkVptdtmN_iWWRNJFQFtLqdPKxhs=w120-h120-p-rp-mo-ba4-br100',
    rating: 5,
    nombre: 'Jorge David Santacruz Morhy',
    url: 'https://g.co/kgs/gVgZDhf',
    text: 'Excellent place—the dark beer is exquisite, as is the hamburger. The service is very friendly.',
    date: '2023-03-17',
  },
];

export default function PopupTestimonios({ idioma }) {
  const list = idioma ? testimonialsEs : testimonialsEn;

  return (
    <div className="container mx-auto px-4 lg:px-0">
      <Carousel testimonials={list} />
    </div>
  );
}
