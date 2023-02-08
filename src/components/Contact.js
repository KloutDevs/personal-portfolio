import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import StorageIcon from '@mui/icons-material/Storage';
import ArticleIcon from '@mui/icons-material/Article';
import { Typography, Button, Avatar } from '@mui/material';
import CustomTheme from '../utils/theme';
import Certifies from './CertifiesGalery.tsx';
import Designs from './DesignsGalery.tsx';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LinearProgress from "@mui/material/LinearProgress";

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
            <Grid id="contact-container" container spacing={3}>
                <Grid item xs={4}>
                    <Item id="Title-container">
                        <Typography variant="h2" component="h3">
                            Contact Me
                        </Typography>
                        <Typography component="h5">
                            Tell me about the projects we can do together.
                        </Typography>
                    </Item>
                    <Typography variant="h2" component="h3">
                        Lorem
                    </Typography>
                    <Button sx={styles.buttomKnowMore} variant="contained">VIEW MORE</Button>

                </Grid>
                <Avatar id="avatar-item"
                    alt="Nahuel Schmidt"
                    src="/assets/AboutPhoto.jpeg"
                    sx={{ width: 320, height: 320 }}
                />
            </Grid>
        </Box>
    );
}
