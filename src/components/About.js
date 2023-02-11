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
import Count from './Counter';

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

};

export default function AutoGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid id="about-container" container spacing={3}>
                <Grid item xs={4}>
                    <Item id="Title-container">
                        <Typography variant="h2" component="h3">
                            About Me
                        </Typography>
                        <Typography component="h5">
                            Subtitle, but IDK
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
                            Nostrud qui et adipisicing incididunt nostrud dolore ullamco laboris magna. Esse ex consectetur adipisicing aute eiusmod labore exercitation. Velit dolore adipisicing laborum reprehenderit dolor. Amet ad tempor consectetur officia cillum pariatur ex. Cupidatat aliqua Lorem ea commodo ex consectetur eu enim incididunt elit id.
                        </Typography>
                        <Stack id="dates" direction="row" spacing={2}>
                            <Button sx={styles.buttomKnowMore} variant="contained">Download CV</Button>
                            <Item className='dateInfo'>
                                <strong>+{data.stats.timeDeveloping} years</strong>
                            </Item>
                            <Item className='dateInfo'>
                                <strong>+{Count} Projects</strong>
                            </Item>
                            <Item className='dateInfo'>
                                <strong>+{data.stats.totalSkills} Skills</strong>
                            </Item>
                        </Stack>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
