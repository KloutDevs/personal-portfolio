import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Certifies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Programming</ListSubheader>
      </ImageListItem>
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
              <a rel='noreferrer' href={item.url} target="_blank">
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </a>
            }
          />
        </ImageListItem>
      ))}
      <ImageListItem key="Subheader2" cols={2}>
        <ListSubheader component="div">Language</ListSubheader>
      </ImageListItem>
    </ImageList>
  );
}

const itemData = [
  {
    img: '/assets/certifies/responsive-web-design-fbc.png',
    title: 'Responsive Web Design',
    url: 'https://www.freecodecamp.org/certification/fccc9f0e5d8-4a22-4dbb-9b45-67df686e409f/responsive-web-design',
    author: 'FreeBotCamp',
    type: 'png',
  },
  {
    img: '/assets/certifies/javascript-algorithms-and-data-structures-fbc.png',
    title: 'Javascript Algorithms',
    url: 'https://www.freecodecamp.org/certification/fccc9f0e5d8-4a22-4dbb-9b45-67df686e409f/javascript-algorithms-and-data-structures',
    author: 'FreeBotCamp',
    type: 'png',
  },
  {
    img: '/assets/certifies/concepts-obc.png',
    title: 'Concepts of Programming',
    url: 'https://community.open-bootcamp.com/user/nahuelschmidt09/certificaciones/88e5a9d8-6e63-4e3e-8f2b-4649bcf2029d',
    author: 'OpenBootCamp',
    type: 'png',
  },
  {
    img: '/assets/certifies/react-redux-sl.jpg',
    title: 'React + Redux',
    url: 'https://www.sololearn.com/certificates/CT-JSSO5IMC',
    author: 'SoloLearn',
    type: 'jpg',
  },
  {
    img: '/assets/certifies/javascript-sl.jpg',
    title: 'Javascript',
    url: 'https://www.sololearn.com/certificates/CT-9ELT0JOM',
    author: 'SoloLearn',
    type: 'jpg',
  },
  {
    img: '/assets/certifies/php-sl.jpg',
    title: 'PHP',
    url: 'https://www.sololearn.com/certificates/CT-FD8P2G2M',
    author: 'SoloLearn',
    type: 'jpg',
  },
  {
    img: '/assets/certifies/html-sl.jpg',
    title: 'HTML',
    url: 'https://www.sololearn.com/certificates/CT-IOTHLMLU',
    author: 'SoloLearn',
    type: 'jpg',
  },
  {
    img: '/assets/certifies/css-sl.jpg',
    title: 'CSS',
    url: 'https://www.sololearn.com/certificates/CT-EMLO2TAT',
    author: 'SoloLearn',
    type: 'jpg',
  }
];