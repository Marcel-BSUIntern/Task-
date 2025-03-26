import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormGroup,
  Checkbox,
  Button,
  Typography,
  Input,
  Grid,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "800px",
  maxHeight: "95vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const RegistrationModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    prcId: "",
    attendanceType: "Online",
    firstName: "",
    lastName: "",
    middleName: "",
    suffix: "",
    email: "",
    contactNo: "",
    bundleType: "bundle",
    selectedEvents: ["pfrs9", "pfrs16", "pfrs15"],
    selectedSubEvents: [],
    paymentProof: null,
    paymentMethod: "Bank Transfer", // New field for payment method
    referenceCode: "", // New state for reference code
  });

  const [errors, setErrors] = useState({});

  const events = [
    {
      id: "pfrs9",
      label: "PFRS Toolkit: A Refresher on PFRS 9 Inventories OL - ₱500.00",
    },
    {
      id: "pfrs16",
      label: "PFRS Toolkit: A Refresher on PFRS 16 Leases OL - ₱500.00",
    },
    {
      id: "pfrs15",
      label:
        "PFRS Toolkit: A Refresher on PFRS 15 Revenue from Contracts with Customers OL - ₱500.00",
    },
  ];

  const subEvents = [
    { id: "sub1", label: "Sub-Event 1 - ₱200.00", price: 200 },
    { id: "sub2", label: "Sub-Event 2 - ₱300.00", price: 300 },
    { id: "sub3", label: "Sub-Event 3 - ₱400.00", price: 400 },
  ];

  const calculateTotal = () => {
    const eventCost = formData.selectedEvents.length * 500;
    const subEventCost = formData.selectedSubEvents.reduce((total, subId) => {
      const subEvent = subEvents.find((sub) => sub.id === subId);
      return subEvent ? total + subEvent.price : total;
    }, 0);

    return eventCost + subEventCost;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (
      (["firstName", "lastName", "middleName", "suffix"].includes(name) &&
        !/^[A-Za-z\s]*$/.test(value)) ||
      (name === "contactNo" && !/^\d*$/.test(value))
    ) {
      return; // Prevent invalid input
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "bundleType" && value === "bundle"
        ? { selectedEvents: events.map((event) => event.id) } // Select all events
        : {}),
    }));
  };

  const handleEventChange = (event) => {
    const { checked, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      selectedEvents: checked
        ? [...prev.selectedEvents, value]
        : prev.selectedEvents.filter((e) => e !== value),
    }));
  };

  const handleSubEventChange = (event) => {
    const { checked, value } = event.target;
    setFormData((prev) => {
      const updatedSelectedSubEvents = checked
        ? [...prev.selectedSubEvents, value]
        : prev.selectedSubEvents.filter((sub) => sub !== value);

      return {
        ...prev,
        selectedSubEvents: updatedSelectedSubEvents,
      };
    });
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, paymentProof: e.target.files[0] }));
  };

  const validateForm = () => {
    let newErrors = {};

    // Required fields validation
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.middleName.trim())
      newErrors.middleName = "Middle Name is required";
    if (!formData.suffix.trim()) newErrors.suffix = "Suffix is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.contactNo.trim()) {
      newErrors.contactNo = "Contact number is required";
    } else if (!/^\d{10,}$/.test(formData.contactNo)) {
      newErrors.contactNo = "Enter a valid contact number (at least 10 digits)";
    }
    if (!formData.referenceCode.trim())
      newErrors.referenceCode = "Reference Code is required";
    if (formData.paymentProof === null) {
      newErrors.paymentProof = "Payment proof is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Data:", formData);
      handleClose();
    }
  };

  const handleCloseWithReset = () => {
    setFormData({
      prcId: "",
      attendanceType: "Online",
      firstName: "",
      lastName: "",
      middleName: "",
      suffix: "",
      email: "",
      contactNo: "",
      bundleType: "bundle",
      selectedEvents: ["pfrs9", "pfrs16", "pfrs15"], // Ensure this is always an array
      selectedSubEvents: [], // Also ensure this is an array
      paymentProof: null,
      paymentMethod: "Bank Transfer",
      referenceCode: "",
    });
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
          Registration: PFRS Toolkit Package
        </Typography>

        <TextField
          fullWidth
          label="PRC ID (Required if member)"
          name="prcId"
          value={formData.prcId}
          onChange={handleInputChange}
          margin="dense"
        />

        <FormControl component="fieldset">
          <RadioGroup
            row
            name="attendanceType"
            value={formData.attendanceType}
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="Online"
              control={<Radio />}
              label="Online"
            />
          </RadioGroup>
        </FormControl>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              margin="dense"
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              margin="dense"
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Middle Name"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
              margin="dense"
              error={!!errors.middleName}
              helperText={errors.middleName}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Suffix"
              name="suffix"
              value={formData.suffix}
              onChange={handleInputChange}
              margin="dense"
              error={!!errors.suffix}
              helperText={errors.suffix}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              margin="dense"
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Contact No."
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
              margin="dense"
              error={!!errors.contactNo}
              helperText={errors.contactNo}
            />
          </Grid>
        </Grid>

        <FormControl component="fieldset">
          <RadioGroup
            row
            name="bundleType"
            value={formData.bundleType}
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="bundle"
              control={<Radio />}
              label="Bundle (Attend all)"
            />
            <FormControlLabel
              value="individual"
              control={<Radio />}
              label="Individual (Choose event)"
            />
          </RadioGroup>
        </FormControl>

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Bundle Events Contents</strong> (You can remove Events that
          you will not attend)
        </Typography>
        <FormGroup>
          {events.map((event) => (
            <FormControlLabel
              key={event.id}
              control={
                <Checkbox
                  checked={formData.selectedEvents.includes(event.id)}
                  onChange={handleEventChange}
                  value={event.id}
                  disabled={formData.bundleType === "bundle"} // Disable in Bundle mode
                />
              }
              label={
                <Typography sx={{ color: "blue" }}>{event.label}</Typography>
              }
            />
          ))}
        </FormGroup>

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          <strong>Select Sub-Events</strong> (Optional)
        </Typography>

        <FormGroup>
          {subEvents.map((sub) => (
            <FormControlLabel
              key={sub.id}
              control={
                <Checkbox
                  checked={formData.selectedSubEvents.includes(sub.id)}
                  onChange={handleSubEventChange}
                  value={sub.id}
                />
              }
              label={
                <Typography sx={{ color: "green" }}>{sub.label}</Typography>
              }
            />
          ))}
        </FormGroup>

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Total Due: ₱{calculateTotal()}.00
        </Typography>

        <Box
          sx={{
            width: "100%", // Take full width
            maxWidth: "100%", // Allow it to expand
            padding: { xs: 2, sm: 3 },
            marginTop: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Payment Breakdown
          </Typography>
          <Grid container spacing={1}>
            {/* Display individual Events */}
            {formData.selectedEvents.map((eventId) => {
              const event = events.find((e) => e.id === eventId);
              return (
                <React.Fragment key={eventId}>
                  <Grid item xs={6}>
                    <Typography>{event?.label}:</Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="right">
                    <Typography>₱500.00</Typography>
                  </Grid>
                </React.Fragment>
              );
            })}

            {/* Display individual Sub-Events */}
            {formData.selectedSubEvents.map((subId) => {
              const subEvent = subEvents.find((sub) => sub.id === subId);
              return (
                <React.Fragment key={subId}>
                  <Grid item xs={6}>
                    <Typography>{subEvent?.label}:</Typography>
                  </Grid>
                  <Grid item xs={6} textAlign="right">
                    <Typography>₱{subEvent?.price}.00</Typography>
                  </Grid>
                </React.Fragment>
              );
            })}

            {/* Total Amount */}
            <Grid item xs={6}>
              <Typography fontWeight="bold">Total:</Typography>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Typography fontWeight="bold">₱{calculateTotal()}.00</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            width: "100%", // Take full width
            maxWidth: "100%", // Allow it to expand
            padding: { xs: 2, sm: 3 },
            marginTop: 2,
            border: "1px solid #ddd",
            borderRadius: 2,
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography variant="subtitle1">Payment Method</Typography>
          <FormControl component="fieldset">
            <RadioGroup
              row
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <FormControlLabel
                value="Bank Transfer"
                control={<Radio />}
                label="Bank Transfer"
              />
              <FormControlLabel
                value="Credit Card"
                control={<Radio />}
                label="Credit Card"
              />
            </RadioGroup>
          </FormControl>

          <Typography variant="subtitle2" sx={{ mt: 2 }}>
            Reference Code
          </Typography>

          <TextField
            fullWidth
            label="Enter Reference Code"
            name="referenceCode"
            value={formData.referenceCode}
            onChange={handleInputChange}
            margin="dense"
            error={!!errors.referenceCode}
            helperText={errors.referenceCode}
          />

          <Typography variant="subtitle3" sx={{ mt: 2 }}>
            Bank Screenshot Proof
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              border: "1px solid black",
              width: "100%",
              padding: "4px",
              mt: 1,
            }}
          >
            <Button
              variant="outlined"
              component="label"
              sx={{
                textTransform: "none",
                marginRight: "8px",
              }}
            >
              Choose File
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            <Typography variant="body2" sx={{ color: "gray" }}>
              {formData.paymentProof
                ? formData.paymentProof.name
                : "No file chosen"}
            </Typography>
          </Box>
          {errors.paymentProof && (
            <Typography variant="body2" color="error" sx={{ mt: 1 }}>
              {errors.paymentProof}
            </Typography>
          )}
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button
            onClick={handleCloseWithReset}
            sx={{ flex: 1, mr: 1, border: "1px solid black" }}
          >
            Close
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ flex: 1 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default RegistrationModal;
