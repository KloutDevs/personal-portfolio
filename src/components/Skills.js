/* GENERAL IMPORTS */
import * as React from 'react';
import data from './portfolioData';

/* MATERIAL UI IMPORTS */

import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Typography, Accordion, AccordionDetails, AccordionSummary, Box, Grid, LinearProgress, List, ListItem, ListItemText, Paper } from '@mui/material';
import { ExpandMore, Article, DataObject, Storage, ColorLens } from '@mui/icons-material';

/* COMPONENTS IMPORTS */

import Certifies from './CertifiesGalery.tsx';

export default function Skills(props) {
    //const [expand, setExpand] = React.useState(null); Coming Soon
    let theme = props.theme; // Require the theme from the app.js
    let front = data.langStats.front; // Front data
    let back = data.langStats.back // Back data

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

    const StyledProgress = styled(LinearProgress)(() => ({
        height: "0.5rem",
        borderRadius: 5
    })); // Progress Styles

    /* All extra styles */

    const styles = {
        CertifiesTitle: {
            flexGrow: 1
        },
        listSkills: {
            '& .MuiLinearProgress-root': {
                backgroundColor: "#d2a0a4"
            },
            '& .css-17282r-MuiLinearProgress-bar1': {
                backgroundColor: `${theme.palette.primary.main}`
            }
        }
    }
    return (
        <ThemeProvider theme={props.theme} >
            <Box sx={{ flexGrow: 1 }}>
                <Grid id="skills-container" container spacing={3}>
                    <Grid item xs={4}>
                        <Item id="Title-container">
                            <Typography variant="h2" component="h3">
                                Skills
                            </Typography>
                            <Typography component="h5">
                                My technical level and Certifies.
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid className="two-content" item xs={9}>
                        <Item>
                            <Accordion >
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                >
                                    <Grid className="accordionIcon">
                                        <DataObject sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                                    </Grid>
                                    <Grid>
                                        <Typography className='accordionTitleObject' sx={{ width: '100%', flexShrink: 0 }}>
                                            Front-End Developer
                                        </Typography>
                                        <Typography className='accordionSubtitleObject' sx={{ color: "#aab4be" }}>More of 3 years.</Typography>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails sx={{ height: "auto" }}>
                                    <List sx={styles.listSkills}>
                                        {
                                            front.map((language) => (
                                                <ListItem id="listedProgramsData" key={language.label}>
                                                    <Grid className="listedProgramsText">
                                                        <ListItemText primary={language.label} />
                                                        {/* <ListItemText className="lpSecText" secondary={language.time} /> */}
                                                    </Grid>
                                                    <ListItemText primary={<StyledProgress color="secondary" variant="determinate" value={language.progress} />} />
                                                </ListItem>
                                            ))}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Item>
                        <Item>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                >
                                    <Grid className="accordionIcon">
                                        <Storage sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                                    </Grid>
                                    <Grid>
                                        <Typography className='accordionTitleObject' sx={{ width: '100%', flexShrink: 0 }}>
                                            Back-End Developer
                                        </Typography>
                                        <Typography className='accordionSubtitleObject' sx={{ color: "#aab4be" }}>More of 3 years.</Typography>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List sx={styles.listSkills}>
                                        {back.map((language) => (
                                            <ListItem id="listedProgramsData" key={language.label}>
                                                <Grid className="listedProgramsText">
                                                    <ListItemText primary={language.label} />
                                                    {/* <ListItemText className="lpSecText" secondary={language.time} /> */}
                                                </Grid>
                                                <ListItemText primary={<StyledProgress color="secondary" variant="determinate" value={language.progress} />} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </AccordionDetails>
                            </Accordion>
                        </Item>
                    </Grid>
                    <Grid className="two-content" item xs={9}>
                        <Item>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                >
                                    <Grid className="accordionIcon">
                                        <Article sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                                    </Grid>
                                    <Grid sx={styles.CertifiesTitle} className="CertifiesTitle">
                                        <Typography className='accordionTitleObject' sx={{ width: '100%', flexShrink: 0 }}>
                                            All of my Certifies
                                        </Typography>
                                        <Typography className='accordionSubtitleObject' sx={{ color: "#aab4be" }}>Programming and Language certifies.</Typography>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Certifies />
                                </AccordionDetails>
                            </Accordion>
                        </Item>
                        <Item>
                            <Accordion disabled>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                >
                                    <Grid className="accordionIcon">
                                        <ColorLens sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                                    </Grid>
                                    <Grid>
                                        <Typography className='accordionTitleObject' sx={{ width: '100%', flexShrink: 0 }}>
                                            All of my Designs
                                        </Typography>
                                        <Typography className='accordionSubtitleObject' sx={{ color: "#aab4be" }}>My GFX and VFX works.</Typography>
                                    </Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                </AccordionDetails>
                            </Accordion>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
