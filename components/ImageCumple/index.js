import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Section from '../../Modules/styles/section';

function ImageCumple() {
  return (
    <Section>
      <div>
        <h4 className="text-center tituloSection">Experiencias únicas</h4>
        <h2 className="text-center subTituloSection">
          que generan grandes ganancias
        </h2>
        <div className="linea"></div>
      </div>
      <ImageList>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                ></IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Section>
  );
}

const itemData = [
  {
    img: '/img/franquicia/diseno-exterior.webp',
    title: 'Diseño único exterior',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/img/franquicia/diseno-industrial-terraza.webp',
    title: 'Diseño industrial contrastando con una terraza floral',
  },
  {
    img: '/img/franquicia/menu-veggie.webp',
    title: 'Menú Veggie',
  },
  {
    img: '/img/franquicia/mixologia-autor.webp',
    title: 'Mixología de autor',
    cols: 2,
  },
  {
    img: '/img/franquicia/embajadores-marca.webp',
    title: 'Embajadores de la Marca',
    cols: 2,
  },
  {
    img: '/img/franquicia/bebidas-unicas.webp',
    title: 'Bebidas Únicas',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/img/franquicia/experiencias-gastronomicas.webp',
    title: 'Experiencias gastronómicas',
    cols: 2,
  },
  {
    img: '/img/franquicia/hamburguesas-trendy.webp',
    title: 'Hamburguesas Trendy',
    rows: 2,
    cols: 2,
    featured: true,
  },
];

export default ImageCumple;
