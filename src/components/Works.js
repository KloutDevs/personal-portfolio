import { CheckCircle, Cancel, Error } from '@mui/icons-material';
import { Box, Grid, ImageList, ImageListItem, Paper, Tab, Tabs, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
        category: "works",
        state: "finalized"
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
        category: "works",
        state: "finalized"
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
        category: "works",
        state: "finalized"
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
        category: "projects",
        state: "finalized"
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
        category: "projects",
        state: "in-progress"
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
        category: "projects",
        state: "in-progress"
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
        category: "projects",
        state: "in-progress"
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
        category: "projects",
        state: "in-progress"
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
        category: "projects",
        state: "in-progress"
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
        category: "projects",
        state: "not-started"
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
        category: "projects",
        state: "not-started"
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
        category: "projects",
        state: "not-started"
    },
];

export default function Works(props) {
    const [category, setcategory] = React.useState('one'); // Set the category for the updateItems func
    const [filter, setFilter] = React.useState(null); // Set the filter for the updateItems func
    const [items, setItems] = React.useState(itemData); // Set the items for the galery loop
    let theme = props.theme; // Require the theme from the app.js

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

    function updateItems(updateCategory, updateFilter) {
        let categories = {
            one: "all",
            two: "works",
            three: "projects",
            four: "organizations"
        }
        let newItems = [];
        itemData.forEach((item) => {
            if (item.category === categories[updateCategory] && item.state === updateFilter) {
                newItems.push(item);
            } else if (item.category === categories[updateCategory] && updateFilter === null) {
                newItems.push(item);
            } else if (categories[updateCategory] === 'all' && item.state === updateFilter) {
                newItems.push(item);
            } else if (categories[updateCategory] === 'all' && updateFilter === null) {
                newItems = itemData;
            }
        });
        setItems(newItems);
    }

    const handleCategory = (event, newcategory) => {
        setcategory(newcategory);
        updateItems(newcategory, filter);
    };

    const handleFilter = (event, nextFilter) => {
        setFilter(nextFilter);
        updateItems(category, nextFilter);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid id="works-container" container spacing={3}>
                    <Grid item xs={4}>
                        <Item id="Title-container">
                            <Typography variant="h2" component="h3">
                                Works
                            </Typography>
                            <Typography component="h5">
                                All of my works, projects, organizations.
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid className='options-container' item xs={6}>
                        <Box className='box-tabs' sx={{ width: '100%' }}>
                            <Tabs
                                className='tabs-container'
                                value={category}
                                onChange={handleCategory}
                                textColor="secondary"
                                indicatorColor="primary"
                            >
                                <Tab className='worksTab' value="one" label="ALL" />
                                <Tab className='projectsTab' value="two" label="WORKS" />
                                <Tab className='orgsTab' value="three" label="PROJECTS" />
                                <Tab className='orgsTab' value="four" label="ORGANIZATIONS" disabled />
                            </Tabs>
                        </Box>
                    </Grid>
                    <Grid className='works-galery' item xs={9}>
                        <Item className='galery-container'>
                            <Box className='galery-box' sx={{ width: 900, height: 450, overflowY: 'scroll' }}>
                                <ImageList variant="masonry" cols={3} gap={8}>
                                    {items.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <img
                                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Box>
                        </Item>
                        <Item className='galery-filter'>
                            <ToggleButtonGroup
                                className='worksFilter'
                                orientation="vertical"
                                value={filter}
                                exclusive
                                onChange={handleFilter}
                            >
                                <ToggleButton className='okButton' value="finalized" aria-label="okBtn">
                                    <CheckCircle />
                                </ToggleButton>
                                <ToggleButton className='inProcessButton' value="in-progress" aria-label="inProcessButton">
                                    <Error />
                                </ToggleButton>
                                <ToggleButton className='notstartedButton' value="not-started" aria-label="notstartedButton">
                                    <Cancel />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
