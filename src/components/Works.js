import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import StorageIcon from '@mui/icons-material/Storage';
import { Typography, Button } from '@mui/material';
import CustomTheme from '../utils/theme';
import ColorLens from '@mui/icons-material/ColorLens';
import DataObject from '@mui/icons-material/DataObject';
import Tabs from './Tabs.tsx';
import WorksGalery from './WorksGalery.tsx';
import WorksGaleryFilter from './WorksGaleryFilter.tsx';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
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

}

export default function AutoGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid id="works-container" container spacing={3}>
                <Grid item xs={4}>
                    <Item id="Title-container">
                        <Typography variant="h2" component="h3">
                            Works
                        </Typography>
                        <Typography component="h5">
                            All of my Works/Projects/Organizations
                        </Typography>
                    </Item>
                </Grid>
                <Grid className='options-container' item xs={6}>
                    <Tabs/>
                </Grid>
                <Grid className='works-galery' item xs={9}>
                    <Item className='galery-container'>
                        <WorksGalery/>
                    </Item>
                    <Item className='galery-filter'>
                        <WorksGaleryFilter/>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
