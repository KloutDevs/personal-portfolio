import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SendIcon from '@mui/icons-material/Send';
import { Typography, Button } from '@mui/material';

export default function Contact() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid id="contact-container" container spacing={3}>
                <Grid className='container' item xs={4}>
                    <Typography variant="h2" component="h4">
                        You have a new project?
                    </Typography>
                    <Typography variant="h6" component="h5">
                        Contact me and tell me what projects, or businesses, we could do together.
                    </Typography>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        CONTACT ME
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}
