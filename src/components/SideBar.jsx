import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useNavigate } from 'react-router-dom';
import BarChartOutlined from '@mui/icons-material/BarChartOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Groups2Icon from '@mui/icons-material/Groups2';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import passwordCheck from "../assets/images/passwordCheck.png";
import box from "../assets/images/box.png";
import boxactive from "../assets/images/boxactive.png";
import star from "../assets/images/star.png";
import staractive from "../assets/images/staractive.png";
import helpactive from "../assets/images/helpactive.png";
import messagetext from "../assets/images/messagetext.png";
import activeVectorIcon from "../assets/images/apartactive.png";
import defaultVectorIcon from "../assets/images/Vector.png";

const drawerWidth = 112;

export default function SideBar() {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (path) => {
        setSelectedItem(path);
        navigate(path);
    };

    const menuItems = [
        { icon: <BarChartOutlined style={{ backgroundColor: "#475FD9", color: "white", borderRadius: "5px", width: 28, height: 28 }} />, path: "/vector" },
        { icon: <img src={selectedItem === "/dashboard/apartments-list" ? activeVectorIcon : defaultVectorIcon} alt="Vector Icon" style={{ width: selectedItem === "/dashboard/apartments-list" ? "40px" : "28px", height: selectedItem === "/dashboard/apartments-list" ? "40px" : "28px" }} />, path: "/dashboard/apartments-list" },
        { icon: <PeopleAltOutlinedIcon style={{ color: "#475FD9" }} />, path: "/PeopleProfile" },
        { icon: <Groups2Icon style={{ color: "#475FD9", borderBottom: "3px solid #FF3333", paddingBottom: "10px" ,width: "40px", height: "40px" }} />, path: "/Groups" },
        { icon: selectedItem === "/dashboard/help-center" ? <img src={helpactive} alt="Help Icon Active" style={{ width: "40px", height: "40px" }} /> : <LiveHelpIcon style={{ color: "#475FD9" }} />, path: "/dashboard/help-center" },
        { icon: <NotificationImportantIcon style={{ color: "#475FD9", borderBottom: "3px solid #FF3333", paddingBottom: "10px",width: "40px", height: "40px"  }} />, path: "/notificationimportant" },
        { icon: <img src={passwordCheck} alt="password-Check" style={{ width: 28, height: 28 }} />, path: "/Checkpassword" },
        { icon: <img src={selectedItem === "/dashboard/inventory-list" ? boxactive : box} alt="box" style={{ width: selectedItem === "/dashboard/inventory-list" ? 40 : 28, height: selectedItem === "/dashboard/inventory-list" ? 40 : 28 }} />, path: "/dashboard/inventory-list" },
        { icon: <img src={selectedItem === "/dashboard/reviews-apartments" ? staractive : star} alt="star" style={{ width: selectedItem === "/dashboard/reviews-apartments" ? 40 : 28, height: selectedItem === "/dashboard/reviews-apartments" ? 40 : 28 }} />, path: "/dashboard/reviews-apartments" },
        { icon: <img src={messagetext} alt="message-text" style={{ width: 24, height: 24, borderBottom: "2px solid red", paddingBottom: "4px" }} />, path: "/dashboard/chat" }
    ];

    return (
        <Drawer
            sx={{
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    position: 'fixed',
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center', 
                    paddingBottom: "32px",
                    paddingTop: "32px",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <List sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                {menuItems.map((item) => (
                    <ListItem key={item.path} disablePadding sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <ListItemButton onClick={() => handleItemClick(item.path)} sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                            <ListItemIcon sx={{ minWidth: "unset", display: "flex", justifyContent: "center" }}>
                                {item.icon}
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
    
}
