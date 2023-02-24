import ArticleIcon from '@mui/icons-material/Article';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StorageIcon from '@mui/icons-material/Storage';
import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from "@mui/material/LinearProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import CustomTheme from '../utils/theme';
import Certifies from './CertifiesGalery.tsx';
import data from './portfolioData';

let front = data.langStats.front;
let back = data.langStats.back

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',

    color: theme.palette.text.secondary,
}));

const StyledProgress = styled(LinearProgress)(() => ({
    height: "0.5rem",
    borderRadius: 5
}));

export default function AutoGrid() {
    return (
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
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Grid className="accordionIcon">
                                    <DataObjectIcon sx={{ fontSize: 40, color: CustomTheme.palette.primary.main }} />
                                </Grid>
                                <Grid>
                                    <Typography className='accordionTitleObject' sx={{ width: '100%', flexShrink: 0 }}>
                                        Front-End Developer
                                    </Typography>
                                    <Typography className='accordionSubtitleObject' sx={{ color: "#aab4be" }}>More of 3 years.</Typography>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
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
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Grid className="accordionIcon">
                                    <StorageIcon sx={{ fontSize: 40, color: CustomTheme.palette.primary.main }} />
                                </Grid>
                                <Grid>
                                    <Typography className='accordionTitleObject' sx={{ width: '100%', flexShrink: 0 }}>
                                        Back-End Developer
                                    </Typography>
                                    <Typography className='accordionSubtitleObject' sx={{ color: "#aab4be" }}>More of 3 years.</Typography>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
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

                    {/*                     <Item>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Grid className="accordionIcon">
                                    <ColorLensIcon sx={{ fontSize: 40, color: CustomTheme.palette.primary.main }} />
                                </Grid>
                                <Grid>
                                    <Typography className='accordionTitleObject' sx={{ width: '100%', flexShrink: 0 }}>
                                        All of my Designs
                                    </Typography>
                                    <Typography className='accordionSubtitleObject' sx={{ color: "#aab4be" }}>My GFX and VFX works.</Typography>
                                </Grid>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Designs />
                            </AccordionDetails>
                        </Accordion>
                    </Item> */}
                    <Item>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Grid className="accordionIcon">
                                    <ArticleIcon sx={{ fontSize: 40, color: CustomTheme.palette.primary.main }} />
                                </Grid>
                                <Grid>
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
                </Grid>
            </Grid>
        </Box>
    );
}
