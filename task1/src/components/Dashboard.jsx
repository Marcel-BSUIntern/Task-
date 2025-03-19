import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  TextField,
  Select,
  MenuItem,
  Card,
  CardContent,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo IIAP.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        {["Events", "Membership", "Subscription", "Contact Us", "About Us"].map(
          (text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
        <ListItem button onClick={() => navigate("/")}>
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {/* Navigation Bar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgba(44, 62, 80, 0.7)",
          backdropFilter: "blur(10px)",
          padding: "10px 0",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Institute of Internal Auditors
              <Typography>Philippines</Typography>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button color="inherit" sx={{ fontSize: "16px", margin: "0 10px" }}>
              Events
            </Button>
            <Button color="inherit" sx={{ fontSize: "16px", margin: "0 10px" }}>
              Membership
            </Button>
            <Button color="inherit" sx={{ fontSize: "16px", margin: "0 10px" }}>
              Subscription
            </Button>
            <Button color="inherit" sx={{ fontSize: "16px", margin: "0 10px" }}>
              Contact Us
            </Button>
            <Button color="inherit" sx={{ fontSize: "16px", margin: "0 10px" }}>
              About Us
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              sx={{ fontSize: "16px", borderColor: "white" }}
              onClick={() => navigate("/")}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/6267a166a1232f0ba9502de7/1669901535383-37IXDVB00UNOH2CNFDX0/Corporate-Events-Hotel-Meeting-Spaces.jpg?format=1500w')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          color: "white",
          textAlign: "left",
          fontWeight: "bold",
          paddingLeft: "50px",
        }}
      >
        <Typography variant="h2" fontWeight="bold" sx={{ fontSize: "64px" }}>
          Upcoming Event Lists
        </Typography>
      </Box>

      {/* Search and Filter Section */}
      <Container
        sx={{
          mt: 5,
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Select
          displayEmpty
          variant="outlined"
          sx={{ minWidth: 250, height: 45, backgroundColor: "white" }}
        >
          <MenuItem value="">Level & Competency</MenuItem>
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermediate">Intermediate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </Select>
        <TextField
          variant="outlined"
          placeholder="Search Event"
          sx={{ width: "400px", height: 45, backgroundColor: "white" }}
        />
      </Container>

      {/* Event Listings */}
      <Container sx={{ mt: 5 }}>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <img
            src="/event-banner.jpg"
            alt="Event"
            style={{ width: "150px", height: "auto", marginRight: "20px" }}
          />
          <CardContent>
            <Typography variant="h5" fontWeight="bold">
              Level Up on Excel:
            </Typography>
            <Typography variant="body2" color="textSecondary">
              A WEBINAR SERIES ON ADVANCED EXCEL WITH MICROSOFT ACCESS (DAY 1)
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
