import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Link } from 'react-router-dom';
import logo from "../../assets/ChatGPT Image Jul 25, 2025, 07_16_33 PM.png"

const drawerWidth = 240;

function ClientLayout(props) {
  const {children , window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);


   let clientLists = [
   {
    name :'Dashboard',
    url : '/client-dashboard',
    icon : <DashboardIcon />
   },
   { 
    name :'Menu',
    url : "/client-menu",
    icon : <MenuBookIcon />
   }, 
   {
    name :'Order',
    url :"/client-order",
    icon :  <RestaurantMenuIcon />
   }, 
   {
    name :'Restaurant',
    url : "/client-restaurant",
    icon : <StorefrontIcon/>
   }
  ]



  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };




  const drawer = (
    <div>
      <div style={{backgroundColor:"#0b70cfff", textAlign:"center"}}> <img src={logo} alt="" style={{width:"100px", height:"58px", borderRadius:"50%"}}/></div>
      <List>
        {clientLists.map((list, index) => (
          <ListItem key={list.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {list.icon}
              </ListItemIcon>
              <Link to={list.url}>{list.name}</Link>
              {/* <ListItemText primary= /> */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Customer Saylani PAPA
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

ClientLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ClientLayout;