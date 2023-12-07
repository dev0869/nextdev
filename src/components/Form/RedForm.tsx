import { TextField } from "@mui/material";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { addtestride } from "../features/auth/authServices";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import './index.css';
export const RedForm = () => {

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
    const { values, handleChange, handleSubmit, resetForm } = useFormik({
      initialValues: {
        name: "",
        email: "",
        number: "",
        bike: "",
        state: "",
        city: "",
      },
      onSubmit: async (values) => {
        console.log(values);
        const res = await addtestride(values);
        if (res.status !== undefined) {
          toast.success("You booking for test bike is sucessfully Submitted");
          handleClose();
          resetForm();
        } else {
          toast.error(res);
        }
      },
    });
  const [isFocused, setIsFocused] = useState(false);
 const productArr = [
    "Alfa k1",
    "Alfa R1",
    "Alfa R3",
    "Alfa R5",
    "Delta R3",
    "Delta V6",
    "Delta E5",
  ];
  const handleFocus = () => {
    setIsFocused(true);
  };
  const labelStyles = {
    color: "white",
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyles = {
    backgroundColor: isFocused ? "transparent" : "transparent",
    color: "white",
  };
  return (
    <>
      <div className="textinputmain">
        <div className="text">
          <h1>BOOK A TEST RIDE NOW</h1>
          <p>Take A JH EV Ride And Experience The Thrill</p>
        </div>
        <br />
        {/* dsad */}

        <Form onSubmit={handleSubmit}>
          <div className="textsubfield">
            <TextField
              className="textfield"
              id="standard-basic"
              label="Name"
              name="name"
              required
              onChange={handleChange}
              value={values.name}
              InputProps={{
                style: inputStyles,
                onFocus: handleFocus,
                onBlur: handleBlur,
              }}
              InputLabelProps={{
                style: labelStyles,
              }}
              variant="standard"
            />
            <TextField
              InputProps={{
                style: inputStyles,
                onFocus: handleFocus,
                onBlur: handleBlur,
              }}
              InputLabelProps={{
                style: labelStyles,
              }}
              name="email"
              required
              onChange={handleChange}
              value={values.email}
              type="email"
              id="standard-basic"
              label="Email No."
              variant="standard"
            />
            <TextField
              InputProps={{
                style: inputStyles,
                onFocus: handleFocus,
                onBlur: handleBlur,
              }}
              InputLabelProps={{
                style: labelStyles,
              }}
              name="number"
              required
              onChange={handleChange}
              value={values.number}
              id="standard-basic"
              label="Mobile Number"
              variant="standard"
            />
            <Form.Group controlId="formBasicSelect">
              <Form.Control
                className="select"
                as="select"
                name="bike"
                onChange={handleChange}
                required
              >
                <option value="">Select Vehicle</option>
                {productArr.map((itm, i) => (
                  <option key={i}>{itm}</option>
                ))}
              </Form.Control>
            </Form.Group>

            <TextField
              InputProps={{
                style: inputStyles,
                onFocus: handleFocus,
                onBlur: handleBlur,
              }}
              InputLabelProps={{
                style: labelStyles,
              }}
              name="state"
              required
              onChange={handleChange}
              value={values.state}
              id="standard-basic"
              label="State"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="City"
              InputProps={{
                style: inputStyles,
                onFocus: handleFocus,
                onBlur: handleBlur,
              }}
              name="city"
              required
              onChange={handleChange}
              value={values.city}
              InputLabelProps={{
                style: labelStyles,
              }}
              variant="standard"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "12px",
              marginTop: "12px",
            }}
          >
            <button
              type="submit"
              onClick={handleClose}
              style={{
                border: "1px solid white",
                color: "white",
                padding: "8px 12px",
                borderRadius: "10px",
              }}
            >
              Submit
            </button>
          </div>
        </Form>
      </div>

    </>
  );
};

