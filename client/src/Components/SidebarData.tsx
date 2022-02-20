import HomeIcon from '@material-ui/icons/Home'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BadgeIcon from '@mui/icons-material/Badge';
import React from 'react'

//Definiendo los elementos dentro del SideBar

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Employees",
        icon: <BadgeIcon/>,
        link: "/"
    },
    {
        title: "Admin",
        icon: <AdminPanelSettingsIcon/>,
        link: "/"
    },
]


