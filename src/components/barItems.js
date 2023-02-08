import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StoreIcon from '@mui/icons-material/Store';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ToggleButton from './ToggleButton';

let navArr = [
    {
        label: "Home",
        value: "home",
        icon: <HomeIcon />
    },
    {
        label: "About",
        value: "about",
        icon: <CoPresentIcon />
    },
    {
        label: "Skills",
        value: "skills",
        icon: <EmojiEventsIcon />
    },
    {
        label: "Services",
        value: "services",
        icon: <StoreIcon />
    },
    {
        label: "Works",
        value: "works",
        icon: <BusinessCenterIcon />
    },
    {
        label: "Contact",
        value: "contactme",
        icon: <ForwardToInboxIcon />
    }
]

export default function LabelBottomNavigation() {
    const [value, setValue] = React.useState(navArr[0].value);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //const items = navArr.map((item, index) => <a key={`a-${index}`} href={`#${item.label}`}><BottomNavigationAction key={`bna-${index}`} showLabel={true} label={item.label} value={item.value} icon={item.icon} /></a>)
    const items = navArr.map((item, index) => <BottomNavigationAction key={`bna-${index}`} showLabel={true} label={item.label} value={item.value} icon={item.icon} />)

    return (
        <BottomNavigation showLabels sx={{ width: 500 }} value={value} onChange={handleChange}>
            {items}
            <ToggleButton />
        </BottomNavigation>
    );
}

