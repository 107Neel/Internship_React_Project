import { Avatar, Button, Popover, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import LogoutIcon from "@mui/icons-material/Logout";
import { Formik } from "formik";
import * as Yup from "yup";

export const Apple = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [anchorE1, setAnchorE1] = useState(null);

  const Navigate = useNavigate();

  // const onHomebtnClick = () => {
  //   console.log("Button Clicked");
  //   console.log("Name: ", name);
  //   console.log("Email: ", email);
  //   Navigate("/");
  // };

  useEffect(() => {}, []);

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(
      3,
      "Please make sure you have entered you name with atleast 3 char."
    ),
    email: Yup.string().email("Please enter a valid email address"),
  });

  const initialValues = {
    name: "",
    email: "",
  };

  const onFormSubmit = (values) => {
    console.log("On the form submitted", values);
    alert("Form Submmited");
  };

  const handleClick = (event) => {
    console.log(123);
    setAnchorE1(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorE1(null);
    setOpen(false);
  };

  return (
    <div style={{ padding: 5 }}>
      {/* <div>Apple 🍎</div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          cursor: "pointer",
        }}
      >
        <div
          onClick={handleClick}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            columnGap: 5,
          }}
        >
          <Avatar sx={{ bgcolor: "blue" }}>NM</Avatar>
        </div>
      </div>

      <div
        style={{
          padding: 5,
          display: "flex",
          flexDirection: "column",
          rowGap: 8,
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onFormSubmit}
        >
          {({
            value,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 5,
                }}
              >
                <TextField
                  variant="outlined"
                  type="text"
                  label="Name"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.name && (
                  <span
                    style={{
                      padding: 5,
                      color: "red",
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    {errors.name}
                  </span>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 5,
                }}
              >
                <TextField
                  variant="outlined"
                  type="email"
                  label="Email"
                  id="email"
                  placeholder="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {touched.email && (
                  <span
                    style={{
                      padding: 5,
                      color: "red",
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    {errors.email}
                  </span>
                )}
              </div>
              <Button variant="contained" type="submit" className="">
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

{
  /* <Popover
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        anchorEl={anchorE1}
        onClose={handleClose}
      >
        <div
          style={{
            padding: 5,
          }}
        >
          <h5>Neel Modi</h5>
          <LogoutIcon onClick={onHomebtnClick} />
        </div>
      </Popover>
    </div>
  ); */
}
