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
    function handClick(){
        console.log("SERVICES: "+CustomTheme.palette.mode)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid id="services-container" container spacing={3}>
                <Grid item xs={4}>
                    <Item id="Title-container">
                        <Typography variant="h2" component="h3">
                            Services
                        </Typography>
                        <Typography component="h5">
                            All my services that you can acquire
                        </Typography>
                    </Item>
                </Grid>
                <Grid className="services-container">
                    <Item className='service-item'>
                        <Grid className='service-header'>
                            <Grid className='header-text'>
                                <Typography component="h4" variant="h3">
                                    19 total services
                                </Typography>
                            </Grid>
                            <Grid className='header-icon'>
                                <DataObject sx={{ color: CustomTheme.palette.primary.main }}/>
                            </Grid>
                        </Grid>
                        <Grid className='service-title'>
                            <Typography component="h3" variant="h2">
                                Front-End
                            </Typography>
                        </Grid>
                        <Grid className='service-viewmore'>
                            <Button sx={styles.buttomKnowMore} variant="contained">VIEW MORE</Button>
                        </Grid>
                    </Item>
                    <Item className='service-item'>
                    <Grid className='service-header'>
                            <Grid className='header-text'>
                                <Typography component="h4" variant="h3">
                                    19 total services
                                </Typography>
                            </Grid>
                            <Grid className='header-icon'>
                                <StorageIcon sx={{ color: CustomTheme.palette.primary.main }} />
                            </Grid>
                        </Grid>
                        <Grid className='service-title'>
                            <Typography component="h3" variant="h2">
                                Back-End
                            </Typography>
                        </Grid>
                        <Grid className='service-viewmore'>
                            <Button sx={styles.buttomKnowMore} variant="contained" onClick={handClick}>VIEW MORE</Button>
                        </Grid>
                    </Item>
                    <Item className='service-item'>
                    <Grid className='service-header'>
                            <Grid className='header-text'>
                                <Typography component="h4" variant="h3">
                                    19 total services
                                </Typography>
                            </Grid>
                            <Grid className='header-icon'>
                                <ColorLens sx={{ color: CustomTheme.palette.primary.main }} />
                            </Grid>
                        </Grid>
                        <Grid className='service-title'>
                            <Typography component="h3" variant="h2">
                                Designs
                            </Typography>
                        </Grid>
                        <Grid className='service-viewmore'>
                            <Button sx={styles.buttomKnowMore} variant="contained">VIEW MORE</Button>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
