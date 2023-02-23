import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import CustomTheme from '../utils/theme';
import data from './portfolioData';
import { ThemeProvider } from '@emotion/react';
import Count from 'react-countup';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: CustomTheme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...CustomTheme.typography.body2,
    padding: CustomTheme.spacing(1),
    textAlign: 'center',

    color: CustomTheme.palette.text.secondary,
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
                                src="/assets/AboutPhoto.jpeg"
                                sx={{ width: 320, height: 320 }}
                            />
                        </Item>
                        <Item id="desc-item">
                            <Typography id="desc" component="p">
                            I am a FullStack Junior programmer, and I am passionate about what I do, I try to do my best knowing always what I am doing as well as what I want to achieve. I am interested in long-term projects, such as managing servers and/or large-scale applications serving a large number of users or simply helping companies manage themselves in the most efficient ways.
                            </Typography>
                            <Stack id="dates" direction="row" spacing={2}>
                                <a className='cv-download-btn' rel='author' href='/download/cv-nahuel-schmidt.pdf' download="cv-nahuel-schmidt.pdf">
                                    <Button sx={styles.buttomKnowMore} variant="contained">Download CV</Button>
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
