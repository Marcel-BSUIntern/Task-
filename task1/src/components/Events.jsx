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
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EventIcon from "@mui/icons-material/Event";
import PeopleIcon from "@mui/icons-material/People";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/logo IIAP.png";
import levelup from "../assets/levelup.png"; // Import the event image
import recentImage from "../assets/recent.png";

const Events = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [level, setLevel] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle}>
      <List>
        {["Events", "Membership", "Subscription", "Contact Us", "About Us"].map(
          (text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* Navbar */}
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
              style={{
                height: isMobile ? "30px" : "40px",
                marginRight: "10px",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: isMobile ? "16px" : "20px",
              }}
            >
              Institute of Internal Auditors
              <Typography sx={{ fontSize: isMobile ? "12px" : "16px" }}>
                Philippines
              </Typography>
            </Typography>
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {[
              "Events",
              "Membership",
              "Subscription",
              "Contact Us",
              "About Us",
            ].map((item) => (
              <Button
                key={item}
                color="inherit"
                sx={{ fontSize: "16px", margin: "0 10px" }}
              >
                {item}
              </Button>
            ))}
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

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>

      {/* Banner */}
      <Box
        sx={{
          backgroundImage:
            "url('https://images.squarespace-cdn.com/content/v1/6267a166a1232f0ba9502de7/1669901535383-37IXDVB00UNOH2CNFDX0/Corporate-Events-Hotel-Meeting-Spaces.jpg?format=1500w')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: isMobile ? "250px" : "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          px: isMobile ? 2 : 5,
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          color="black"
          sx={{ fontSize: isMobile ? "32px" : "64px" }}
        >
          Upcoming Event Lists
        </Typography>
      </Box>

      {/* Search & Filters */}
      <Container
        sx={{
          mt: 5,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          displayEmpty
          variant="outlined"
          sx={{
            width: isMobile ? "100%" : "250px",
            height: 45,
            backgroundColor: "white",
          }}
        >
          <MenuItem value="">Level & Competency</MenuItem>
          <MenuItem value="Beginner">Beginner</MenuItem>
          <MenuItem value="Intermediate">Intermediate</MenuItem>
          <MenuItem value="Advanced">Advanced</MenuItem>
        </Select>
        <TextField
          variant="outlined"
          placeholder="Search Event"
          sx={{
            width: isMobile ? "100%" : "400px",
            height: 45,
            backgroundColor: "white",
          }}
        />
      </Container>

      {/* Event Card */}
      <Container
        sx={{ mt: 5, width: "100%", maxWidth: "1920px", mx: "auto", px: 2 }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            maxWidth: "100%",
          }}
        >
          <img
            src={levelup}
            alt="Level Up on Excel Event"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              marginBottom: "10px",
            }}
          />

          <CardContent
            sx={{ textAlign: { xs: "center", md: "left" }, width: "100%" }}
          >
            <Typography variant="h5" fontWeight="bold">
              LEVEL UP ON EXCEL: A WEBINAR SERIES ON ADVANCED EXCEL WITH
              MICROSOFT ACCESS (DAY 1)
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: 1, mb: 2 }}
            >
              This series of webinars will educate participants on the functions
              and the advanced Excel formulas required to function as an Excel
              power user.
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EventIcon sx={{ mr: 1 }} /> Jan 05, 2026 - Jan 05, 2027 | 06:30
              PM - 08:30 PM
            </Typography>

            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PeopleIcon sx={{ mr: 1 }} /> Registration Fee:
            </Typography>
            <Typography variant="body2">
              - With Good Standing: ₱375.00
            </Typography>
            <Typography variant="body2">
              - Without Good Standing/Non-member: ₱500.00
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "orange", fontWeight: "bold", mt: 2 }}
            >
              ON-GOING REGISTRATION
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 1 }}>
              REGISTER NOW
            </Button>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            mt: 5,
          }}
        >
          <img
            src={recentImage}
            alt="Recent Developments in Taxation"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              marginBottom: "10px",
            }}
          />
          <CardContent>
            <Typography variant="h5" fontWeight="bold">
              Recent Developments in Taxation
            </Typography>
            <Typography variant="body2" color="textSecondary">
              In light of the recent struggle of businesses due to the effects
              of the COVID-19 pandemic, the CREATE was enacted into law to
              alleviate some of the pressure businesses face in the form of
              reorganized tax laws. This discussion will cover the objectives,
              changes to the law, and implications of the CREATE Act on various
              taxpayers. This webinar aims to equip tax practitioners, general
              accountants, business owners, and accountancy students with a
              basic understanding of the new law and how these changes affect
              them. This will allow the participants to make more informed
              decisions moving forward regarding matters that deal with this
              change.
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Date
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EventIcon sx={{ mr: 1 }} /> Jan 07, 2026 - Jan 07, 2026 | 10:00
              AM - 12:00 PM
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Regstration Fee for Member(Online):
            </Typography>
            <Typography variant="body2" color="textSecondary">
              - With Good Standing
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PeopleIcon sx={{ mr: 1 }} /> ₱375.00
            </Typography>
            <Typography variant="body2" color="textSecondary">
              - - With Not Good Standing/Non-member
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PeopleIcon sx={{ mr: 1 }} /> ₱500.00
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "orange", fontWeight: "bold", mt: 2 }}
            >
              ON-GOING REGISTRATION
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 1 }}>
              REGISTER NOW
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Events;
