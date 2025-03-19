import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Added navigation
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import logo from "../assets/logo IIAP.png"; // ✅ Added logo import

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #3b8d99, #6bbaa7)",
        padding: "20px",
        position: "relative", // ✅ Allows absolute positioning for the button
        flexDirection: "column", // ✅ Aligns logo and title above the form
      }}
    >
      {/* ✅ Logo and Institute Name */}
      <Box
        sx={{
          textAlign: "center",
          mb: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="IIAP Logo"
          style={{ height: "60px", display: "block" }}
        />
        <Typography variant="subtitle1" fontWeight="bold" mt={1}>
          Institute of Internal Auditors Philippines
        </Typography>
      </Box>

      {/* ✅ Floating Button in the Top-Right Corner */}
      <Button
        variant="contained"
        onClick={() => navigate("/dashboard")}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          bgcolor: "#1976d2",
          "&:hover": { bgcolor: "#155a9a" },
          borderRadius: "10px",
          fontSize: "0.85rem",
        }}
      >
        Go to Dashboard
      </Button>

      <Paper
        elevation={3}
        sx={{
          width: "600px", // Increased width to make it wider
          padding: "25px 40px", // Balanced padding
          borderRadius: "15px", // Rounded corners
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow
        }}
      >
        {/* Title */}
        <Typography variant="h6" fontWeight="bold" mb={1}>
          Member's Portal
        </Typography>

        {/* Email Input */}
        <TextField
          fullWidth
          label="Enter Email Address."
          variant="outlined"
          margin="dense"
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": { borderRadius: "10px" }, // Slightly rounded field
          }}
        />

        {/* Password Input */}
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="dense"
          size="small"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": { borderRadius: "10px" }, // Slightly rounded field
          }}
        />

        {/* Remember Me */}
        <FormControlLabel
          control={<Checkbox size="small" />}
          label="Remember Me"
          sx={{ mt: 1, fontSize: "14px" }}
        />

        {/* Buttons */}
        <Box sx={{ mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#3b5bfd",
              "&:hover": { bgcolor: "#324dcf" },
              borderRadius: "10px",
              fontSize: "0.85rem",
              padding: "8px 0",
            }}
          >
            Login
          </Button>

          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#2dc76d",
              "&:hover": { bgcolor: "#24a05d" },
              borderRadius: "10px",
              fontSize: "0.85rem",
              padding: "8px 0",
              mt: 1,
            }}
          >
            Register
          </Button>
        </Box>

        {/* Forgot Password */}
        <Typography
          variant="body2"
          sx={{
            color: "#3b5bfd",
            mt: 1.5,
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Forgot Password?
        </Typography>

        {/* Notice */}
        <Typography
          variant="caption"
          display="block"
          sx={{
            mt: 2,
            textAlign: "justify",
            fontSize: "0.85rem",
          }}
        >
          <strong>PREVIOUS USERS:</strong> If you are registered from{" "}
          <strong>previous membership portal</strong>, please enter your PRC
          license no. and click Forgot Password. Signup instructions will be
          sent to your email.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
