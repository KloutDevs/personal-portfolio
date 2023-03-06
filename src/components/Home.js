/* GENERAL IMPORTS */

import * as React from 'react';
import Typed from './type.js';
import data from './portfolioData.js';

/* MATERIAL UI IMPORTS */

import { ThemeProvider } from '@emotion/react';
import { Typography, Avatar, Box, Button, Grid, List, ListItem, ListItemIcon, Paper, Stack } from '@mui/material';
import { DocumentScanner, GitHub, LinkedIn } from '@mui/icons-material';
import { styled } from '@mui/material/styles';


export default function Home(props) {
  let theme = props.theme; // Require the theme from the App.js

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff',
    ...theme.typography.body2,
    backgroundImage: 'none',
    padding: theme.spacing(1),
    height: (theme.height) ? theme.height : '30rem',
    textAlign: 'center',
    '& .MuiTypography-root': {
      color: theme.palette.mode === 'dark' ? '#ffffffd8' : 'rgba(0, 0, 0, 0.8)',
    }
  })); // Paper Style

  /* All Styles */

  const styles = {
    list: {
      width: '100%',
      maxWidth: 360,
      '& .MuiButtonBase-root .MuiListItemIcon-root': {
        color: theme.palette.mode === 'dark' ? '#ffffffd8' : '#262626',
        '&:hover': {
          color: theme.palette.mode === 'dark' ? '#fff' : '#000'
        }
      }
    },
    buttomKnowMore: {
      bgcolor: theme.palette.primary.main,
      '&:hover': {
        bgcolor: theme.palette.primary.dark
      }
    },
    img: {
      borderRadius: 0,
      width: 425,
      height: 425
    }
  };

  /* SCROLL TO Function for the Know More Button */

  const scrollTo = () => {
    let scrollTo = document.querySelector(`.about`).getBoundingClientRect().top + window.pageYOffset;
    let appBar = document.querySelector('.MuiAppBar-root').offsetHeight;
    window.scrollTo({ top: scrollTo - appBar, behavior: 'smooth' }); // Scroll To the About Page
  }

  return (
    <ThemeProvider theme={props.theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <List sx={styles.list} component="nav">
              <a rel='noreferrer author' href={data.links.linkedin} target="_blank">
                <ListItem button>
                  <ListItemIcon>
                    <LinkedIn />
                  </ListItemIcon>
                </ListItem>
              </a>
              <a rel='noreferrer author' href='/download/cv-nahuel-schmidt.pdf' download="cv-nahuel-schmidt.pdf">
                <ListItem button>
                  <ListItemIcon>
                    <DocumentScanner />
                  </ListItemIcon>
                </ListItem>
              </a>
              <a rel='noreferrer author' href={data.links.github} target="_blank">
                <ListItem button>
                  <ListItemIcon>
                    <GitHub />
                  </ListItemIcon>
                </ListItem>
              </a>
            </List>
          </Grid>
          <Grid id="presentationContainer" item xs>
            <Item theme={props.theme} id="presentation_item">
              <Typography id="title_typed" className='presentation_title' variant="h2" component="h3" >
                <Typed />
              </Typography>
              <Typography className='presentation_subtitle' variant="h6" component="h5" >
                FullStack Developer
              </Typography>
              <Typography className='presentation_desc' component="p" >
                I have been programming in Javascript for more than 3 years and exploring a huge number of frameworks, today I focus on reinforcing my knowledge by learning all the languages ​​and tools on the market to achieve the best performance and quality in both my projects and jobs.
              </Typography>
              <Stack onClick={scrollTo} className='present_btn_stack' spacing={2} direction="row">
                <Button sx={styles.buttomKnowMore} variant="contained">Know More</Button>
              </Stack>
            </Item>
          </Grid>
          <Grid id="photoContainer" item xs>
            <Item theme={props.theme} id='photoItem'>
              <Avatar
                alt="Nahuel Schmidt"
                src="/assets/imgs/programming.png"
                sx={styles.img}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
