import { CheckCircle, Dangerous, Error } from '@mui/icons-material';
import { Box, Grid, ImageList, ImageListItem, Paper, Tab, Tabs, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',

    color: theme.palette.text.secondary,
}));

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

export default function AutoGrid() {

    const [category, setcategory] = React.useState('one');
    const [filter, setFilter] = React.useState(null);
    const [items, setItems] = React.useState(itemData);

    function updateItems(category, filter){
        let categories = {
            one: "all",
            two: "works",
            three: "projects",
            four: "organizations"
        }
        let newItems = [];
        items.forEach((item) => {
            console.log(`I-CATEGORY ${item.category}   S-CATEGORY ${categories[category]}`);
            console.log(`I-STATE ${item.state}     S-FILTER ${filter}`);
            if(item.category === categories[category] && filter !== null && item.state === filter){
                newItems.push(item);
            }else if(categories[category] === 'all' && filter !== null && item.state === filter){
                newItems.push(item);
            }else{
                newItems = itemData;
            }
            console.log('NEW ITEMS');
            console.log(newItems);
        });
        setItems(newItems);
        console.log('ESTABLISHED ITEMS')
        console.log(items);
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
                            <ToggleButton className='okButton' value="okBtn" aria-label="okBtn">
                                <CheckCircle />
                            </ToggleButton>
                            <ToggleButton className='inProcessButton' value="inProcessButton" aria-label="inProcessButton">
                                <Error />
                            </ToggleButton>
                            <ToggleButton className='notstartedButton' value="notstartedButton" aria-label="notstartedButton">
                                <Dangerous />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
