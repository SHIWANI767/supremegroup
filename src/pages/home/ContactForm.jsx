import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yep from "yup";
import styled from "@emotion/styled";
import "react-phone-input-2/lib/material.css";
import { postAPIHandler } from "@/api-services/service";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import ContactDeatils from "./ContactDeatils";

const MainComponent = styled("Box")(({ theme }) => ({
  marginTop: "20px",
  background: "#006abc",
  "& .react-tel-input .form-control": {
    background: "#0000000D",
    color: "#626262",
    height: "52px",
    width: "100%",
    border: "1px solid #0000000D !important",
    borderRadius: "8px",
  },

  "& .heading": {
    color: "#fff",
    fontSize: "48px",
    fontWeight: "bold",
  },

  // "& .subHeading": {
  //   marginTop: "32px",
  // },

  "& .react-tel-input .selected-flag": {
    // background: "#FFFFFF0D",
    borderRadius: "0px",
  },
  // "& .MuiInput-root": {
  //   borderRadius: "8px",
  // },

  "& .react-tel-input .flag-dropdown.open .selected-flag": {
    background: "#FFFFFF0D",
  },

  "& .react-tel-input .special-label": {
    display: "none",
  },

  "& .react-tel-input .form-control:focus ": {
    boxShadow: "none",
  },
  "& .react-tel-input .country-list .country-name ": {
    color: "#000",
  },
  "& .btnCenter": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "10px 0px",
    },
    "& .MuiButton-root": {
      // background: "rgb(8, 11, 20)",
    },
    "& .fieldBox1": {
      "& .input-MuiOutlinedInput-input": {
        padding: "0px",
      },
    },
  },
  "& .phone-input-blur-error .form-control": {
    border: "1px solid #f44336 !important",
  },
}));

const ContactForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumberBlurred, setPhoneNumberBlurred] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const formInitialSchema = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  };

  const formValidationSchema = yep.object().shape({
    name: yep
      .string()
      .trim()
      .min(3, "Please enter atleast 3 characters.")
      .max(30, "You can enter only 30 characters.")
      .required("Name is required.")
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z])?[a-zA-Z]*)*$/g,
        "Please enter your name."
      ),
    email: yep
      .string()
      .trim()
      .email("Please enter valid email.")
      .required("Email is required.")
      .max(80, "Should not exceeds 80 characters.")
      .matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"),
    phoneNumber: yep
      .string()
      .required("Phone number is required.")
      .max(13, "Enter a valid phone number.")
      .min(7, "Must be only 7 digits.")
      .test(
        "notAllRepeatedDigits",
        "Phone number cannot have all repeated digits.",
        (value) => {
          const numericValue = value?.replace(/[^0-9]/g, "");
          return !/(\d)\1{6,}/.test(numericValue);
        }
      ),
    message: yep
      .string()
      .trim()
      .required("Message is required.")
      .min(3, "Please enter atleast 3 characters.")
      .max(600, "You can enter only 600 characters."),
  });
  const handleFormSubmit = async (values, resetForm) => {
    if (!captchaVerified) {
      toast.error("Please solve the CAPTCHA.");
      return;
    }
    try {
      setIsLoading(true);
      let dataToSend = {
        name: values.name,
        email: values.email.toLowerCase(),
        mobileNumber: "+" + values.phoneNumber,
        message: values.message,
      };
      const response = await postAPIHandler({
        endPoint: "addContactUs",
        dataToSend: dataToSend,
      });
      if (response?.status === 200) {
        toast.success(response?.data?.responseMessage);
        resetForm();
        router.push("/");
      } else {
        toast.error(response.data.responseMessage);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <MainComponent>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <ContactDeatils />
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box className="formRightBox">
              <Formik
                initialValues={formInitialSchema}
                validationSchema={formValidationSchema}
                onSubmit={(values, { resetForm }) =>
                  handleFormSubmit(values, resetForm)
                }
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  touched,
                  values,
                  setFieldValue,
                }) => (
                  <Form>
                    <Box className="fieldBox" mb={4}>
                      <TextField
                        fullWidth
                        variant="standard"
                        placeholder="Full Name"
                        name="name"
                        value={values.name}
                        error={Boolean(touched.name && errors.name)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                      <FormHelperText error>
                        {touched.name && errors.name}
                      </FormHelperText>
                    </Box>
                    <Box className="fieldBox" mb={4}>
                      <TextField
                        fullWidth
                        variant="standard"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        error={Boolean(touched.email && errors.email)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                      <FormHelperText error>
                        {touched.email && errors.email}
                      </FormHelperText>
                    </Box>
                    <Box className="fieldBox" mb={4}>
                      <TextField
                        fullWidth
                        variant="standard"
                        placeholder="Company"
                        name="company"
                      />
                    </Box>
                    <Box className="fieldBox1" mb={4}>
                      <TextField
                        fullWidth
                        variant="standard"
                        placeholder="Message"
                        name="message"
                        multiline
                        rows={3}
                        value={values.message}
                        error={Boolean(touched.message && errors.message)}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        disabled={isLoading}
                      />
                      <FormHelperText error>
                        {touched.message && errors.message}
                      </FormHelperText>
                    </Box>
                    <Box>
                      <Button
                        variant="outlined"
                        size="large"
                        color="primary"
                        type="submit"
                      >
                        Send
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </MainComponent>
  );
};

export default ContactForm;
