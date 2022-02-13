import React from 'react';
import useAuth from '../../../Hooks/useAuth';
// import AdminHeader from '../../Shared/Header/AdminHeader/AdminHeader';
// import UserHeader from '../../Shared/UserHeader/UserHeader';

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
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, Outlet } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Footer from '../../../Shared/Footer/Footer';

const drawerWidth = 240;


const Dashboard = (props) => {
    const { user, admin } = useAuth();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link style={{ textDecoration: 'none', color: '#FF6C27' }} to="/">
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <h6 className="my-0">Home</h6>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#FF4A17' }} to="/dashboard">
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <h6 className="my-0">Dashboard</h6>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#FF4A17' }} to="/products">
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText >
                            <h6 className="my-0">Products</h6>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#FF4A17' }} to={`dashboard/myorder`}>
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText >
                            <h6 className="my-0">My Order</h6>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#FF4A17' }} to={`dashboard/reviewprovide`}>
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText >
                            <h6 className="my-0">Review</h6>
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: '#FF4A17' }} to={`dashboard/manageorder`}>
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText >
                            <h6 className="my-0">Manage All Order</h6>
                        </ListItemText>
                    </ListItem>
                </Link>

                {/* Admin Section  */}
                <Link style={{ textDecoration: 'none', color: '#FF4A17' }} to={`dashboard/addnewproduct`}>
                    <ListItem button>
                        <ListItemIcon sx={{ color: 'black' }}>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText >
                            <h6 className="my-0">Add New Product</h6>
                        </ListItemText>
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div>
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
                            Responsive drawer
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
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
                    <Outlet></Outlet>
                    <Footer></Footer>
                </Box>
            </Box>










            {/* {admin && user.email?
            <AdminHeader></AdminHeader>
            :
            <UserHeader></UserHeader>
            
            }
            <h1 className="text-center text-primary mt-5"> Welcome To Deshboard </h1> */}
        </div>
    );
};

export default Dashboard;