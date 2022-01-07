import React from 'react';
import { Link } from 'react-router-dom';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import Link from '@mui/material/Link';

const SellList = ({ products, title }) => {
  const itemData = [
    {
      img: 'https://upload.wikimedia.org/wikipedia/en/c/c1/Dkc_snes_boxart.jpg',
      title: 'Donkey Kong Country',
      description: 'SNES, USED, With Box',
      link: 'https://en.wikipedia.org/wiki/Donkey_Kong_Country',
      link: 'https://en.wikipedia.org/wiki/Donkey_Kong_Country',
      price: 15,
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Ffl_boxfront.jpg/220px-Ffl_boxfront.jpg',
      title: 'Final Fantasy Legend',
      description: 'GAMEBOY, NEW, With Box',
      link: 'https://finalfantasy.fandom.com/wiki/The_Final_Fantasy_Legend',
      link: 'https://finalfantasy.fandom.com/wiki/The_Final_Fantasy_Legend',
      price: 10,
    },
    {
      img: 'https://iheartoldgames.files.wordpress.com/2018/01/half-life.jpg',
      title: 'Half-Life',
      description: 'PC, NEW, With Box and Key',
      link: 'https://half-life.fandom.com/wiki/Half-Life',
      link: 'https://half-life.fandom.com/wiki/Half-Life',
      price: 5,
    },
    {
      img: 'https://scholarlykitchen.sspnet.org/wp-content/uploads/2021/03/NF-RGB_APNG-Logo-300x300.png',
      title: 'Fortnite Blue Cape NFT',
      description: 'NFT for blue cap, Fortnite',
      link: 'https://en.wikipedia.org/wiki/Bluecoat',
      link: 'https://en.wikipedia.org/wiki/Bluecoat',
      price: 999,
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png',
      title: 'Super Mario Bros',
      description: 'NES, USED, Without Box',
      link: 'https://en.wikipedia.org/wiki/Super_Mario_Bros.',
      link: 'https://en.wikipedia.org/wiki/Super_Mario_Bros.',
      price: 25,
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png',
      title: 'The Legend of Zelda',
      description: 'NES, USED, Without Box',
      link: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)',
      link: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)',
      price: 12,
    },

  ];



  return (
    <div>
    <h1>See whatz for sell here!</h1>
    <div className="flex-row">
    <ImageList sx={{ width: 1000, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <a href={item.link} target="_blank">
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          </a>
          <a href={item.git}>
          <ImageListItemBar
            title={item.title}
            subtitle={item.description}
            actionIcon={
              
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                ${item.price}
                <AddShoppingCartIcon />
              </IconButton>
              
            }
          />
          </a>
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  </div>
  );
};

export default SellList;