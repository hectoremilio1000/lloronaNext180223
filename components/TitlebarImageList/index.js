import React from 'react'
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Section from "../../Modules/styles/section";

function TitlebarImageList() {
  return (
    <Section>
      <div>
        <h4 className="text-center tituloSection">Ancestral</h4>
        <h2 className="text-center subTituloSection">Proceso</h2>
        <div className="linea"></div>
      </div>
      <ImageList>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {itemData.map(item => (
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
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                ></IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div className="subSubDiv1Banner">
        <a href="https://wa.me/+5215549242477">
          <button type="button" className="buttonComponente">
            ¡Comprar ahora!
          </button>
        </a>
      </div>
    </Section>
  );
}

const itemData = [
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/IMG_9982.jpg",
    title: "Nuestro Palenque, Santa Catarina Minas, Oaxaca",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/IMG_9984.jpg",
    title: "Molienda con manos de artesanos oaxaqueños",
  },
  {
    img: "https://images.squarespace-cdn.com/content/5f04aed9153c537f9abcb851/1595359863647-9FCGVBUGXDSW2IKBDQLF/IMG_1905.jpg?format=1000w&content-type=image%2Fjpeg",
    title: "Fermentación 100% libre de químicos",
  },
  {
    img: "https://imagenesrutalab.s3.amazonaws.com/llorona/mezcal/IMG_9983.jpg",
    title: "Destilación en Ollas de Barro de Cobre",
    cols: 2,
  },
];

export default TitlebarImageList;