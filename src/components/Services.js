/* GENERAL IMPORTS */
import * as React from 'react';
import PropTypes from 'prop-types';
import Count from 'react-countup'; // The Counter Component
import data from './portfolioData';

/* MATERIAL UI IMPORTS */

import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper, IconButton, Button, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
import { DataObject, Storage, Close } from '@mui/icons-material';
//import ColorLens from '@mui/icons-material/ColorLens'; This is for the Designs Item

function ModalTitle(props) {
    const { children, onClose, ...other } = props; // Get props
    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <Close />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

/* Modal Props */

ModalTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

/* COMPONENT */

export default function Services(props) {
    const [modal, setModal] = React.useState(false); // Mange the Modal
    const [modalContent, setModalContent] = React.useState(null); // Manage the Modal Content

    let theme = props.theme; // Require the theme from the app.js

    const handleClickOpen = () => { // Handle View More Btn
        setModal(true); // Turn on the modal
    };
    const handleClose = () => { // Handle Modal on Close
        setModal(false); // Turn of the modal
        setModalContent(null); // And  remove the content
    };

    let DialogInfo = { // Dialog Data
        front: {
            title: (<ModalTitle id="customized-dialog-title" onClose={handleClose}>
                {data.services.front.title}
            </ModalTitle>),
            body: (<DialogContent dividers>
                <Typography gutterBottom>
                    {data.services.front.body}
                </Typography>
            </DialogContent>),
            actions: data.services.front.actions,
            totalServices: data.services.front.totalServices,
        },
        back: {
            title: (<ModalTitle id="customized-dialog-title" onClose={handleClose}>
                {data.services.back.title}
            </ModalTitle>),
            body: (<DialogContent dividers>
                <Typography gutterBottom>
                    {data.services.back.body}
                </Typography>
            </DialogContent>),
            actions: data.services.back.actions,
            totalServices: data.services.back.totalServices,
        }
    }

    const handleModalContent = (props) => { // Define the Modal Content
        if (DialogInfo[props] !== undefined && DialogInfo[props] !== null) {
            let content = DialogInfo[props];
            setModalContent(content);
        }
    }

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
    const Modal = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
        '& .MuiDialog-paper .MuiTypography-root': {
            color: theme.palette.mode === 'dark' ? '#ffffffd8' : 'rgba(0, 0, 0, 0.6)',
        }
    })); // Modal Styled

    /* All extra styles */

    const styles = {
        buttonStyled: {
            bgcolor: theme.palette.primary.main,
            '&:hover': {
                bgcolor: theme.palette.primary.dark
            }
        },

    }

    return (
        <ThemeProvider theme={props.theme}>
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
                                        <Count start={0} end={DialogInfo.front.totalServices} duration={1.8} delay={0} /> total services
                                    </Typography>
                                </Grid>
                                <Grid className='header-icon'>
                                    <DataObject sx={{ color: theme.palette.primary.main }} />
                                </Grid>
                            </Grid>
                            <Grid className='service-title'>
                                <Typography component="h3" variant="h2">
                                    Front-End
                                </Typography>
                            </Grid>
                            <Grid className='service-viewmore'>
                                <Button sx={styles.buttonStyled} variant="contained" onClick={() => { handleClickOpen(); handleModalContent('front') }} >VIEW MORE</Button>
                            </Grid>
                        </Item>
                        <Item className='service-item'>
                            <Grid className='service-header'>
                                <Grid className='header-text'>
                                    <Typography component="h4" variant="h3">
                                        <Count start={0} end={DialogInfo.back.totalServices} duration={1.8} delay={0} /> total services
                                    </Typography>
                                </Grid>
                                <Grid className='header-icon'>
                                    <Storage sx={{ color: theme.palette.primary.main }} />
                                </Grid>
                            </Grid>
                            <Grid className='service-title'>
                                <Typography component="h3" variant="h2">
                                    Back-End
                                </Typography>
                            </Grid>
                            <Grid className='service-viewmore'>
                                <Button sx={styles.buttonStyled} variant="contained" onClick={() => { handleClickOpen(); handleModalContent('back') }} >VIEW MORE</Button>
                            </Grid>
                        </Item>

                        {/* This Item is the Designs Services but is actually off
                                         <Item className='service-item'>
                        <Grid className='service-header'>
                            <Grid className='header-text'>
                                <Typography component="h4" variant="h3">
                                    <Count start={0} end={19} duration={1.8} delay={0} /> total services
                                </Typography>
                            </Grid>
                            <Grid className='header-icon'>
                                <ColorLens sx={{ color: theme.palette.primary.main }} />
                            </Grid>
                        </Grid>
                        <Grid className='service-title'>
                            <Typography component="h3" variant="h2">
                                Designs
                            </Typography>
                        </Grid>
                        <Grid className='service-viewmore'>
                            <Button sx={styles.buttonStyled} variant="contained">VIEW MORE</Button>
                            <Modal
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={modal}
                            >
                                <ModalTitle id="customized-dialog-title" onClose={handleClose}>
                                    Modal title
                                </ModalTitle>
                                <DialogContent dividers>
                                    <Typography gutterBottom>
                                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                        consectetur ac, vestibulum at eros.
                                    </Typography>
                                    <Typography gutterBottom>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                                    </Typography>
                                    <Typography gutterBottom>
                                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                                        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                                        ullamcorper nulla non metus auctor fringilla.
                                    </Typography>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={handleClose}>
                                        Save changes
                                    </Button>
                                </DialogActions>
                            </Modal>
                        </Grid>
                    </Item> */}
                        <Modal
                            id="dialogFront"
                            onClose={handleClose}
                            open={modal}
                        >
                            {modalContent !== null ? modalContent.title : ''}
                            {modalContent !== null ? modalContent.body : ''}
                            {modalContent !== null ? modalContent.actions : ''}
                        </Modal>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
