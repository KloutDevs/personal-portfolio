/* GENERAL IMPORTS */

import * as React from 'react';
import data from './portfolioData';
import Count from 'react-countup';

/* MATERIAL UI IMPORTS */

import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Typography, Box, Paper, Grid, Stack, Button, Avatar } from '@mui/material';

export default function About(props) {
    let theme = props.theme; // Require the theme from the app.js

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff',
        ...theme.typography.body2,
        backgroundImage: 'none',
        padding: theme.spacing(1),
        textAlign: 'center',
        '& .MuiTypography-root': {
            color: theme.palette.mode === 'dark' ? '#ffffffd8' : 'rgba(0, 0, 0, 0.6)',
        },
        color: theme.palette.mode === 'dark' ? '#ffffffd8' : 'rgba(0, 0, 0, 0.7)',
    })); // Paper Styles

    /* All extra styles */

    const styles = {
        buttonStyled: {
            bgcolor: theme.palette.primary.main,
            '&:hover': {
                bgcolor: theme.palette.primary.dark
            }
        },

    };

    return (
        <ThemeProvider theme={props.theme} >
            <Box sx={{ flexGrow: 1 }}>
                <Grid id="about-container" container spacing={3}>
                    <Grid item xs={4}>
                        <Item id="Title-container">
                            <Typography variant="h2" component="h3">
                                About Me
                            </Typography>
                            <Typography component="h5">
                                Remember that you can talk to me to get to know me even better
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid id="two-content" item xs={9}>
                        <Item id="avatar-container">
                            <Avatar id="avatar-item"
                                alt="Nahuel Schmidt"
                                src="/assets/imgs/AboutPhoto.jpeg"
                                sx={{ width: 320, height: 320 }}
                            />
                        </Item>
                        <Item id="desc-item">
                            <Typography id="desc" component="p">
                                I am a FullStack Junior programmer, and I am passionate about what I do, I try to do my best knowing always what I am doing as well as what I want to achieve. I am interested in long-term projects, such as managing servers and/or large-scale applications serving a large number of users or simply helping companies manage themselves in the most efficient ways.
                            </Typography>
                            <Stack id="dates" direction="row" spacing={2}>
                                <a className='cv-download-btn' rel='author' href={data.links.download} download={data.links.cv}>
                                    <Button sx={styles.buttonStyled} variant="contained">Download CV</Button>
                                </a>
                                <Item className='dateInfo'>
                                    <strong>+<Count start={0} end={data.stats.timeDeveloping} duration={1.5} delay={0} /> years</strong>
                                </Item>
                                <Item className='dateInfo'>
                                    <strong><Count start={0} end={data.stats.totalProjects} duration={1.5} delay={0} /> Projects</strong>
                                </Item>
                                <Item className='dateInfo'>
                                    <strong><Count start={0} end={data.stats.totalSkills} duration={1.5} delay={0} /> Skills</strong>
                                </Item>
                            </Stack>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
