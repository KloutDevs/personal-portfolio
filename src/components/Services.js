import ColorLens from '@mui/icons-material/ColorLens';
import DataObject from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton ,Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import Count from 'react-countup';
import CustomTheme from '../utils/theme';
import PropTypes from 'prop-types';

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

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;
  
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
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

export default function AutoGrid() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

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
                                    <Count start={0} end={19} duration={1.8} delay={0} /> total services
                                </Typography>
                            </Grid>
                            <Grid className='header-icon'>
                                <DataObject sx={{ color: CustomTheme.palette.primary.main }} />
                            </Grid>
                        </Grid>
                        <Grid className='service-title'>
                            <Typography component="h3" variant="h2">
                                Front-End
                            </Typography>
                        </Grid>
                        <Grid className='service-viewmore'>
                            <Button sx={styles.buttomKnowMore} variant="contained" onClick={handleClickOpen} >VIEW MORE</Button>
                            <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                            >
                                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                                    Modal title
                                </BootstrapDialogTitle>
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
                            </BootstrapDialog>
                        </Grid>
                    </Item>
                    <Item className='service-item'>
                        <Grid className='service-header'>
                            <Grid className='header-text'>
                                <Typography component="h4" variant="h3">
                                    <Count start={0} end={19} duration={1.8} delay={0} /> total services
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
                            <Button sx={styles.buttomKnowMore} variant="contained" >VIEW MORE</Button>
                        </Grid>
                    </Item>
                    <Item className='service-item'>
                        <Grid className='service-header'>
                            <Grid className='header-text'>
                                <Typography component="h4" variant="h3">
                                    <Count start={0} end={19} duration={1.8} delay={0} /> total services
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
