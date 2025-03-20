import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import HistoryIcon from "@mui/icons-material/History";

const drawerWidth = 240;

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Profile", icon: <AccountCircleIcon /> },
    { text: "Certificate", icon: <ReceiptIcon /> },
    { text: "Manual CPD", icon: <ReceiptIcon /> },
    { text: "Shop", icon: <ShoppingCartIcon /> },
    {
      text: "Request Certificate of Good Standing",
      icon: <CardMembershipIcon />,
    },
    { text: "Annual Membership", icon: <CardMembershipIcon /> },
    { text: "My Transactions", icon: <HistoryIcon /> },
  ];

  const drawer = (
    <List>
      {menuItems.map((item, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ marginRight: 2 }}>
              John Doe
            </Typography>
            <Avatar alt="John Doe" src="/static/images/avatar/1.jpg" />
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="menu options"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              backgroundColor: "#2C2F3F",
              color: "white",
            },
          }}
          open
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              backgroundColor: "#2C2F3F",
              color: "white",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Dashboard;
