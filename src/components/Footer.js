import * as React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemText } from '@mui/material/';

const styles = {
    list: {
        width: '100%',
        bgColor: 'background.paper'
    }
}

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid className="boxContainer" container spacing={3}>
                {/* Sections */}
                <Grid sx={{ flexGrow: 1 }} className="Social">
                    <Typography variant="h3" component="h4" >Code Is Fun</Typography>
                    {/* 
                        Theme and Lang Buttons
                        Social Btns
                    */}
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
                            <ListItemText
                                primary="Assets"
                            />
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer assets' href='/' target="_blank">
                                <ListItemText
                                    primary="/certifies"
                                />
                            </a>
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer assets' href='/' target="_blank">
                                <ListItemText
                                    primary="/designs"
                                />
                            </a>
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer assets' href='/' target="_blank">
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
                            <a rel='noreferrer assets' href='/' target="_blank">
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
                            <ListItemText
                                primary="Support"
                            />
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer support' href='/' target="_blank">
                                <ListItemText
                                    primary="Discord"
                                />
                            </a>
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer support' href='/' target="_blank">
                                <ListItemText
                                    primary="Whatsapp"
                                />
                            </a>
                        </ListItem>
                        <ListItem>
                            <a rel='noreferrer support' href='/' target="_blank">
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
                            <ListItemText
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