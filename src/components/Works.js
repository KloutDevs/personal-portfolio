import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
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
                            All of my works, projects, organizations.
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
