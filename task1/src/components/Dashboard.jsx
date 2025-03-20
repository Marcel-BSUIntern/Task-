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
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
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
  const [tabIndex, setTabIndex] = useState(0);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
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
    <Box sx={{ display: "flex", width: "100vw", overflowX: "hidden" }}>
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
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
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

        {/* Permanent Drawer for larger screens */}
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
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, width: "100%" }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6">My Progress</Typography>
                <Tabs
                  value={tabIndex}
                  onChange={handleTabChange}
                  textColor="primary"
                  indicatorColor="primary"
                >
                  <Tab label="Competency" />
                </Tabs>
                {tabIndex === 0 && (
                  <Box sx={{ overflowX: "auto" }}>
                    <table
                      className="min-w-full text-gray-500 mt-2"
                      style={{ width: "100%" }}
                    >
                      <thead>
                        <tr>
                          <th className="text-left py-2 px-4">Competency</th>
                          <th className="text-left py-2 px-4">Total Credits</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { competency: "A", credits: 0 },
                          { competency: "B", credits: 8 },
                          { competency: "C", credits: 0 },
                        ].map((row, index) => (
                          <tr key={index}>
                            <td className="py-2 px-4">{row.competency}</td>
                            <td className="py-2 px-4">{row.credits}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card elevation={2}>
              <CardContent>
                <Typography variant="h6">MEMBER'S ID</Typography>
                <Typography>PRC no.: 000001</Typography>
                <Typography>Name: John Doe</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
