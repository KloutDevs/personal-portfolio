import { ThemeProvider } from '@emotion/react';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import CustomTheme from '../utils/theme.js';
import * as React from 'react';
import Typed from './type.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: (theme.height) ? theme.height : '30rem',
  textAlign: 'center',

  color: theme.palette.text.secondary,
}));

const styles = {
  list: {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
  },
  buttomKnowMore: {
    bgcolor: CustomTheme.palette.primary.main,
    '&:hover': {
      bgcolor: CustomTheme.palette.primary.dark
    }
  },

};

export default function AutoGrid(props) {

  const scrollTo = () => {
    let scrollTo = document.querySelector(`.about`).getBoundingClientRect().top + window.pageYOffset;
    let appBar = document.querySelector('.MuiAppBar-root').offsetHeight;
    window.scrollTo({ top: scrollTo - appBar, behavior: 'smooth' }); // Scroll To the About Page
  }

  return (
    <ThemeProvider theme={props.theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item theme={props.theme} xs={1}>
            <List sx={styles.list} component="nav">
              <a rel='noreferrer author' href='https://linkedin.com/in/nahuel-schmidt-720b57263/' target="_blank">
                <ListItem button>
                  <ListItemIcon>
                    <LinkedInIcon />
                  </ListItemIcon>
                </ListItem>
              </a>
              <a rel='noreferrer author' href='/download/cv-nahuel-schmidt.pdf' download="cv-nahuel-schmidt.pdf">
                <ListItem button>
                  <ListItemIcon>
                    <DocumentScannerIcon />
                  </ListItemIcon>
                </ListItem>
              </a>
              <a rel='noreferrer author' href='https://github.com/KloutDevs' target="_blank">
                <ListItem button>
                  <ListItemIcon>
                    <GitHubIcon />
                  </ListItemIcon>
                </ListItem>
              </a>
            </List>
          </Grid>
          <Grid id="presentationContainer" item xs={5}>
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
                src="/assets/programming.png"
                sx={{ width: 425, height: 425 }}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
