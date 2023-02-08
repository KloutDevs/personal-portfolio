import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function TitlebarImageList() {
    return (
        <ImageList sx={{ width: 500, height: 450 }}>
            <ImageListItem key="Logos" cols={2}>
                <ListSubheader component="div">Logos</ListSubheader>
            </ImageListItem>
            {logos.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            >
                                <ArrowForwardIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
            <ImageListItem key="Miniatures" cols={2}>
                <ListSubheader component="div">Miniatures</ListSubheader>
            </ImageListItem>
            {miniatures.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            >
                                <ArrowForwardIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
            <ImageListItem key="Headers" cols={2}>
                <ListSubheader component="div">Headers</ListSubheader>
            </ImageListItem>
            {headers.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            >
                                <ArrowForwardIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
            <ImageListItem key="Banners" cols={2}>
                <ListSubheader component="div">Banners</ListSubheader>
            </ImageListItem>
            {banners.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            >
                                <ArrowForwardIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const logos = [
    {
        img: '/assets/designs/logos/2',
        title: 'S Logo',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/logos/3',
        title: 'Tenshi Logo',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/logos/4',
        title: 'P Logo',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/logos/5',
        title: 'Z Logo',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/logos/6',
        title: 'Tenshi V2 Logo',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/logos/7',
        title: 'R Logo',
        author: 'KloutDevs',
        type: 'png',
    }
];
const miniatures = [
    {
        img: '/assets/designs/miniatures/1',
        title: 'Legends Rage',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/miniatures/2',
        title: 'Banners',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/miniatures/3',
        title: 'Logos',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/miniatures/4',
        title: 'Headers',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/miniatures/5',
        title: 'Legends Rage v2',
        author: 'KloutDevs',
        type: 'png',
    }
];
const headers = [
    {
        img: '/assets/designs/headers/2',
        title: 'SyroKz',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/headers/3',
        title: 'ANONYMOUS',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/headers/4',
        title: 'Syroko',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/headers/5',
        title: 'New Style',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/headers/6',
        title: 'Legends Rage',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/headers/7',
        title: 'SyroKz',
        author: 'KloutDevs',
        type: 'png',
    }
];
const banners = [
    {
        img: '/assets/designs/banners/2',
        title: 'SENDEL',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/banners/3',
        title: 'Reuz Design',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/banners/4',
        title: 'Master',
        author: 'KloutDevs',
        type: 'png',
    },
    {
        img: '/assets/designs/banners/5',
        title: 'SyroKz',
        author: 'KloutDevs',
        type: 'png',
    }
];