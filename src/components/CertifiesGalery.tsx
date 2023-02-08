import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Document, Page } from 'react-pdf';

const MyPDFViewer = ({ url }) => (
  <Document
    file={url}
    renderMode="canvas"
    onLoadSuccess={({ numPages }) => {
      console.log(`Number of pages: ${numPages}`);
    }}
  >
    <Page pageNumber={1} />
  </Document>
);

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Programming</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          {item.type === 'pdf' ? (
            <MyPDFViewer url={item.img} />
          ) : (
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          )}
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <ArrowForwardIcon />
              </IconButton>
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
    img: '/assets/certifies/responsive-web-design-fbc.pdf',
    title: 'Responsive Web Design',
    author: 'FreeBotCamp',
    type: 'png',
  },
  {
    img: '/assets/certifies/javascript-algorithms-and-data-structures-fbc.pdf',
    title: 'Javascript Algorithms',
    author: 'FreeBotCamp',
    type: 'png',
  },
  {
    img: '/assets/certifies/concepts-obc.pdf',
    title: 'Concepts of Programming',
    author: 'OpenBootCamp',
    type: 'png',
  },
  {
    img: '/assets/certifies/react-redux-sl.jpg',
    title: 'React + Redux',
    author: 'SoloLearn',
    type: 'jpg',
  },
  {
    img: '/assets/certifies/javascript-sl.jpg',
    title: 'Javascript',
    author: 'SoloLearn',
    type: 'jpg',
  },
  {
    img: '/assets/certifies/php-sl.jpg',
    title: 'PHP',
    author: 'SoloLearn',
    type: 'jpg',
  },
  {
    img: '/assets/certifies/html-sl.jpg',
    title: 'HTML',
    author: 'SoloLearn',
    type: 'jpg',
  },
  {
    img: '/assets/certifies/css-sl.jpg',
    title: 'CSS',
    author: 'SoloLearn',
    type: 'jpg',
  }
];