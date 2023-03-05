/* GENERAL IMPORTS */

import * as React from 'react';
import './App.css';

/* MATERIAL UI IMPORTS */

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';
import AppBar from '@mui/material/AppBar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


/* COMPONENTS IMPORT */

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Services from './components/Services';
import Skills from './components/Skills';
import Works from './components/Works';
import Footer from './components/Footer';

/* VARIABLES */

const drawerWidth = 240; // On the Mobile View, the menu width is this.
const navItems = [
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
    value: "contact",
    icon: <ForwardToInboxIcon />
  }
];

function App() {
  const [themeMode, setMode] = React.useState(false); // Default is Dark Mode
  const [mobileOpen, setMobileOpen] = React.useState(false); // Define if is Mobile
  const [currentPage, setCurrentPage] = React.useState(navItems[0].value);
  const theme = createTheme({ // Create the theme
    palette: {
      mode: (themeMode) ? 'dark' : 'light',
      primary: {
        main: '#d3454f;',
        dark: '#933037'
      },
      secondary: {
        main: '#d3454f;',
        dark: '#933037'
      }
    },
  });

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  }; // Toggle the Mobile Mode

  const handleModeChange = (e) => {
    setMode(!themeMode);
  }; // Change the Theme

  const handleChange = (event, newValue) => {
    console.log(event);
    if (currentPage !== newValue) { // If the newValue isn't already selected ->
      let scrollTo = document.querySelector(`.${newValue}`).getBoundingClientRect().top + window.pageYOffset;
      let appBar = document.querySelector('.MuiAppBar-root').offsetHeight;
      window.scrollTo({ top: scrollTo - appBar, behavior: 'smooth' }); // Scroll To the selectedPage
    }
  }; // Select a page

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const navbarHeight = document.querySelector('.MuiAppBar-root').offsetHeight;
    const homePage = document.querySelector('.home').offsetTop - navbarHeight * 4;
    const aboutPage = document.querySelector('.about').offsetTop - navbarHeight * 4;
    const skillsPage = document.querySelector('.skills').offsetTop - navbarHeight * 4;
    const servicesPage = document.querySelector('.services').offsetTop - navbarHeight * 4;
    const worksPage = document.querySelector('.works').offsetTop - navbarHeight * 4;
    const contactPage = document.querySelector('.contact').offsetTop - navbarHeight * 4;
    if (scrollPosition >= homePage && scrollPosition < aboutPage) {
      setCurrentPage('home');
    } else if (scrollPosition >= aboutPage && scrollPosition < skillsPage) {
      setCurrentPage('about');
    } else if (scrollPosition >= skillsPage && scrollPosition < servicesPage) {
      setCurrentPage('skills');
    } else if (scrollPosition >= servicesPage && scrollPosition < worksPage) {
      setCurrentPage('services');
    } else if (scrollPosition >= worksPage && scrollPosition < contactPage) {
      setCurrentPage('works');
    } else if (scrollPosition >= contactPage) {
      setCurrentPage('contact');
    }
  }; // Handle the Navbar on scroll

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff',
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#414141' : '#c9c9c9',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.primary.main,
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#414141' : '#c9c9c9',
      borderRadius: 20 / 2,
    },
  })); // Create the Theme Switch

  // Create a items array for the navigation bar
  const items = navItems.map((item, index) => <BottomNavigationAction key={`bna-${index}`} showLabel={true} label={item.label} value={item.value} icon={item.icon} />);

  /* All extra styles */

  let styles = {
    appBar: {
      backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#fff'
    },
    appBarButton: {
      marginRight: 2,
      display: { sm: 'none' }
    },
    appBarTitle: {
      flexGrow: 1,
      display: { xs: 'none', sm: 'block' },
      color: theme.palette.mode === 'dark' ? '#ffffffd8' : 'rgba(0, 0, 0, 0.8)',
    },
    normalNavigation: {
      display: { xs: 'none', sm: 'flex' },
      '& .MuiBottomNavigation-root': { backgroundColor: 'transparent' }
    },
    drawer: {
      display: { xs: 'block', sm: 'none' },
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      '& .MuiTypography-root': { my: 2, color: theme.palette.mode === 'dark' ? '#ffffffd8' : '#000' },
      '& .MuiListItemButton-root': { textAlign: 'center' },
      '& .MuiBox-root': { textAlign: 'center' }
    }
  }

  /* Additional */

  const drawer = (
    // Draw the left responsive menu
    <Box onClick={handleDrawerToggle}>
      <Typography variant="h6">
        Portfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label + "-appBar"} disablePadding>
            <ListItemButton>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  /* This code use the React Effect Hook 
     for manage the scroll.
  */

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <ThemeProvider theme={theme}>
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={styles.appBar} color="transparent">
          <Toolbar>
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={styles.appBarButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={styles.appBarTitle}
            >
              KloutDevs
            </Typography>
            <Box sx={styles.normalNavigation}>
              <BottomNavigation showLabels onChange={handleChange} sx={{ width: 500 }} value={currentPage} >
                {items}
              </BottomNavigation>
              <FormGroup>
                <FormControlLabel
                  control={<MaterialUISwitch onClick={handleModeChange} checked={themeMode} sx={{ m: 1 }} />}
                />
              </FormGroup>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={document.body}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={styles.drawer}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <section className="page_block home" id="Home">
        <Home theme={theme} />
      </section>
      <section className="page_block about" id="About">
        <About theme={theme} />
      </section>
      <section className="page_block skills" id="Skills">
        <Skills theme={theme} />
      </section>
      <section className="page_block services" id="Services">
        <Services theme={theme} />
      </section>
      <section className="page_block works" id="Works">
        <Works theme={theme} />
      </section>
      <section className="page_block contact" id="Contact">
        <Contact theme={theme} />
      </section>
      <footer>
        <Footer theme={theme} />
      </footer>
    </div>
  </ThemeProvider>;
}

export default App;
