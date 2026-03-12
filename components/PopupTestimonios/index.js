import dynamic from 'next/dynamic';
// Carga el Carousel sólo en cliente para evitar mismatches SSR/CSR
const Carousel = dynamic(() => import('../Carousel/Carousel'), { ssr: false });

const testimonialsEs = [
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjX8QrtArrR4oEiJ-owNtq5W_AZhGvO982UNTS5ms5PenIrlf8vX=w72-h72-p-rp-mo-br100',
    rating: 5,
    nombre: 'Fernandosu6',
    url: 'https://maps.app.goo.gl/cantinalallorona',
    text: 'Sin duda regresaremos! Nos tomaron la orden de los tragos mientras escogíamos la comida. Mientras traían la comida, bailamos una canción con la banda de salsa en vivo 💃🕺',
    date: '2026-03-02',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjVSn3NO95DD5Zrq3ApDpn9gK-3G4cCh4kIbYep0jngt46d2vc5k7w=w72-h72-p-rp-mo-ba2-br100',
    rating: 5,
    nombre: 'Karen Espinosa Montaño',
    url: 'https://maps.app.goo.gl/cantinalallorona',
    text: 'La comida riquísima, todo caliente y con buen sabor. Las bebidas con mezcal son la mejor opción para los platillos. Recomiendo 100% 🥃',
    date: '2026-03-03',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjW0WhG5CYbQjXh6_kAFqqEk_RkL_4VXrZ4sl64G49dts35C3lZRcg',
    rating: 5,
    nombre: 'Cassandra Pérez Guzmán',
    url: 'https://maps.app.goo.gl/cantinalallorona',
    text: 'La comida es muy rica, el servicio de Brenda fue excelente! Buen ambiente y el lugar es bonito ✨',
    date: '2026-03-02',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjWzh_rXQHgxIYem6jgiGB0BK6U3UwxP2aduOpD5Z1ZuMr1Kp8EpNg=w72-h72-p-rp-mo-ba5-br100',
    rating: 5,
    nombre: 'Raquel Casquilho',
    url: 'https://maps.app.goo.gl/cantinalallorona',
    text: 'Me encanta la comida, muy rica! Quiero agradecer a Najar por el excelente trato 👏',
    date: '2026-03-02',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjU6hsbL81jwtge5BeiLkVptdtmN_iWWRNJFQFtLqdPKxhs=w120-h120-p-rp-mo-ba4-br100',
    rating: 5,
    nombre: 'Lesli Vega',
    url: 'https://maps.app.goo.gl/cantinalallorona',
    text: 'Excelente la atención y servicio de Javier, quedamos muy satisfechos 🙌',
    date: '2026-03-03',
  },
];
const testimonialsEn = [
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjX8QrtArrR4oEiJ-owNtq5W_AZhGvO982UNTS5ms5PenIrlf8vX=w72-h72-p-rp-mo-br100',
    rating: 5,
    nombre: 'Melissa Xnx',
    url: 'https://maps.app.goo.gl/cantinalallorona',
    text: 'The food is absolutely delicious and the prices are super affordable. I loved the atmosphere—live Cuban band playing 🎶 The staff was incredibly friendly. 100% recommended.',
    date: '2026-02-18',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjVSn3NO95DD5Zrq3ApDpn9gK-3G4cCh4kIbYep0jngt46d2vc5k7w=w72-h72-p-rp-mo-ba2-br100',
    rating: 5,
    nombre: 'Ezequiel Carballo',
    url: 'https://maps.app.goo.gl/cantinalallorona',
    text: 'The tuna tostada with mango is a delight. The place is very comfortable with great energy from the diners and staff. Thanks Najar for the excellent service—recommended the best options for our tastes 👌',
    date: '2026-02-25',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjW0WhG5CYbQjXh6_kAFqqEk_RkL_4VXrZ4sl64G49dts35C3lZRcg',
    rating: 5,
    nombre: 'Abelonline',
    url: 'https://maps.app.goo.gl/cantinalallorona',
    text: 'Fantastic spot you might miss if you blink. Amazing floor-to-ceiling vine decor, solid service. The food is excellent—elote, guac with chicharrón (incredible), barbacoa taco and quesabirria. We went two nights in a row!',
    date: '2024-11-25',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjWzh_rXQHgxIYem6jgiGB0BK6U3UwxP2aduOpD5Z1ZuMr1Kp8EpNg=w72-h72-p-rp-mo-ba5-br100',
    rating: 5,
    nombre: 'Lili Coelho',
    url: 'https://maps.app.goo.gl/cantinalallorona',
    text: 'Top food! The new menu is incredible. Great service and the drinks are wonderful! Highly recommend going with friends 🍹',
    date: '2024-10-31',
  },
  {
    photo:
      'https://lh3.googleusercontent.com/a-/ALV-UjU6hsbL81jwtge5BeiLkVptdtmN_iWWRNJFQFtLqdPKxhs=w120-h120-p-rp-mo-ba4-br100',
    rating: 5,
    nombre: 'Miroslava Lazcano Cruz',
    url: 'https://maps.app.goo.gl/cantinalallorona',
    text: 'Always wanted to come here! Javier my waiter was attentive and super friendly, the food 10/10. The mezcal uufff 🥃🔥',
    date: '2026-02-10',
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
