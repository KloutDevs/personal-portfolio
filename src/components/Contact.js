import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button, ThemeProvider } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

export default function Contact(props) {
    let theme = props.theme; //Require the theme from the app.js
    /* All extra styles */
    let styles = {
        grid: {
            '& .MuiTypography-root':{
                color: theme.palette.mode === 'dark' ? '#ffffffd8' : 'rgba(0, 0, 0, 0.6)',
            }
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid id="contact-container" container spacing={3}>
                    <Grid sx={styles.grid} className='container' item xs={4}>
                        <Typography className='item' variant="h2" component="h4">
                            You have a new project?
                        </Typography>
                        <Typography className='item' variant="h6" component="h5">
                            Contact me and tell me what projects, or businesses, we could do together.
                        </Typography>
                        <Button className='item' variant="contained" endIcon={<WhatsApp />}>
                            CONTACT ME
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
