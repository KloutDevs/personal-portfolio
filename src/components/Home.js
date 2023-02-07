import * as React from 'react';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderIcon from '@mui/icons-material/Folder'
import Divider from '@mui/material/Divider';
//import CustomTheme from '../utils/theme';

function createStyle(...args) {
  let style = createTheme(args[0]);
  return style;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  height: (theme.height) ? theme.height : '30rem',
  textAlign: 'center',

  color: theme.palette.text.secondary,
}));

let othersBox = createStyle({
  height: '15rem'

});

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};


export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
            </ListItem>
            <Divider light />
            <ListItem button>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={5}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}