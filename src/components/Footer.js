import * as React from 'react';
import { Box, Grid, Typography, Accordion, AccordionSummary, List, ListItem, ListItemText, ListItemIcon } from '@mui/material/';
import { Twitter, GitHub, LinkedIn, WhatsApp, ExpandMore } from '@mui/icons-material';

const styles = {
    list: {
        width: '100%',
        bgColor: 'background.paper',
    },
    row: {
        bgColor: 'background.paper',
        display: 'flex',
        flexDirection: 'row'
    }
}

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid className="boxContainer" container spacing={3}>
                {/* Sections */}
                <Grid sx={{ flexGrow: 1.2 }} className="Social">
                    <Typography className="brand" variant="h3" component="h4" >Code Is</Typography>
                    <Typography className="brand" variant="h3" component="h4" >Fun</Typography>
                    {/* 
                        Theme and Lang Buttons
                        Social Btns
                    */}
                    <List sx={styles.row} component="nav">
                        <a rel='noreferrer author' href='https://linkedin.com/in/nahuel-schmidt-720b57263/' target="_blank">
                            <ListItem button>
                                <ListItemIcon>
                                    <Twitter />
                                </ListItemIcon>
                            </ListItem>
                        </a>
                        <a rel='noreferrer author' href='/download/cv-nahuel-schmidt.pdf' download="cv-nahuel-schmidt.pdf">
                            <ListItem button>
                                <ListItemIcon>
                                    <GitHub />
                                </ListItemIcon>
                            </ListItem>
                        </a>
                        <a rel='noreferrer author' href='https://github.com/KloutDevs' target="_blank">
                            <ListItem button>
                                <ListItemIcon>
                                    <LinkedIn />
                                </ListItemIcon>
                            </ListItem>
                        </a>
                        <a rel='noreferrer author' href='https://github.com/KloutDevs' target="_blank">
                            <ListItem button>
                                <ListItemIcon>
                                    <WhatsApp />
                                </ListItemIcon>
                            </ListItem>
                        </a>
                    </List>
                    <List sx={styles.row} component="nav">
                            <ListItem button>
                                <Accordion disabled>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>Language</Typography>
                                    </AccordionSummary>
                                </Accordion>
                            </ListItem>
                            <ListItem button>
                                <Accordion disabled>
                                    <AccordionSummary
                                        expandIcon={<ExpandMore />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>Theme</Typography>
                                    </AccordionSummary>
                                </Accordion>
                            </ListItem>
                    </List>
                </Grid>
                <Grid sx={{ flexGrow: 1 }} className="Assets">
                    {/* 
                        An ordened list of
                        Assets directorys
                        - Certifies
                        - Designs
                        - Imgs
                        - Codes
                        - Galery
                    */}
                    <List sx={styles.list} dense={true}>
                        <ListItem>
                            <ListItemText className='categoryText'
                                primary="Assets"
                            />
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer assets' href='/certifies' target="_blank">
                                <ListItemText
                                    primary="/certifies"
                                />
                            </a>
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer assets' href='/designs' target="_blank">
                                <ListItemText
                                    primary="/designs"
                                />
                            </a>
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer assets' href='/imgs' target="_blank">
                                <ListItemText
                                    primary="/imgs"
                                />
                            </a>
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer assets' href='https://github.com/KloutDevs/personal-portfolio' target="_blank">
                                <ListItemText
                                    primary="/code"
                                />
                            </a>
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer assets' href='/galery' target="_blank">
                                <ListItemText
                                    primary="/galery"
                                />
                            </a>
                        </ListItem>
                    </List>
                </Grid>
                <Grid sx={{ flexGrow: 1 }} className="Support">
                    {/*
                        An ordened list of
                        the all links of
                        Support for my all Codes
                        - Discord
                        - Whatsapp
                        - Telegram
                     */}
                    <List sx={styles.list} dense={true}>
                        <ListItem>
                            <ListItemText className='categoryText'
                                primary="Support"
                            />
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer support' href='/comingsoon' target="_blank">
                                <ListItemText
                                    primary="Discord"
                                />
                            </a>
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer support' href='/comingsoon' target="_blank">
                                <ListItemText
                                    primary="Whatsapp"
                                />
                            </a>
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer support' href='/comingsoon' target="_blank">
                                <ListItemText
                                    primary="Telegram"
                                />
                            </a>
                        </ListItem>
                    </List>
                </Grid>
                <Grid sx={{ flexGrow: 1 }} className="Organizations">
                    {/* 
                     
                        An ordened list of
                        my organizations
                        - MoonLy
                        - Liber
                        - Sylen

                     */}
                    <List sx={styles.list} dense={true}>
                        <ListItem>
                            <ListItemText className='categoryText'
                                primary="Organizations"
                            />
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer assets' href='/' target="_blank">
                                <ListItemText
                                    primary="MoonLy"
                                />
                            </a>
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer assets' href='/' target="_blank">
                                <ListItemText
                                    primary="Liber"
                                />
                            </a>
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer assets' href='/' target="_blank">
                                <ListItemText
                                    primary="Sylen"
                                />
                            </a>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Box >
    )
}