import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar'
import CustomTheme from '../utils/theme';
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

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <List sx={styles.list} component="nav">
            <ListItem button>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DocumentScannerIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </Grid>
        <Grid id="presentationContainer" item xs={5}>
          <Item id="presentation_item">
            <Typography id="title_typed" className='presentation_title' variant="h2" component="h3" >
              <Typed/>
            </Typography>
            <Typography className='presentation_subtitle' variant="h6" component="h5" >
              FullStack Developer
            </Typography>
            <Typography className='presentation_desc' component="p" >
              I have been programming in Javascript for more than 3 years and exploring a huge number of frameworks, today I focus on reinforcing my knowledge by learning all the languages ​​and tools on the market to achieve the best performance and quality in both my projects and jobs.
            </Typography>
            <Stack className='present_btn_stack' spacing={2} direction="row">
              <Button sx={styles.buttomKnowMore} variant="contained">Know More</Button>
            </Stack>
          </Item>
        </Grid>
        <Grid id="photoContainer" item xs>
          <Item id='photoItem'>
            <Avatar
              alt="Nahuel Schmidt"
              src="/assets/HomePhoto_withoutBg.png"
              sx={{ width: 425, height: 425 }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
