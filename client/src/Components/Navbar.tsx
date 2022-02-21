import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BadgeIcon from '@mui/icons-material/Badge';
import HomeIcon from '@material-ui/icons/Home'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { IconButton } from '@material-ui/core';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListOFEmployees from './ListOfEmployees';







const drawerWidth = 240;

export function Navbar() {
    

    return (

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        USUARIO 
                        &nbsp;
                        &nbsp;
                        <Button>
                                LOGOUT
                        </Button>
                    </Typography>
                    
                    

                    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
                        Home
                    </Typography>
                    <IconButton>
                        <HomeIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List >
                    {['Employee', 'admin',].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <BadgeIcon /> : <AdminPanelSettingsIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
            <Toolbar />
                <div>
                 
                     <ListOFEmployees></ListOFEmployees>   
                </div>
            </Box>
        </Box>

    )
}

export default Navbar