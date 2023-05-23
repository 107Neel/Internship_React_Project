import { Avatar, Button, Popover, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

export const Apple = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [anchorE1, setAnchorE1] = useState(null);

  const Navigate = useNavigate();

  const onHomebtnClick = () => {
    console.log("Button Clicked");
    console.log("Name: ", name);
    console.log("Email: ", email);
    Navigate("/");
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
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: "blue" }}>NM</Avatar>
        <span>Neel Modi</span>
      </div>

      <div
        style={{
          padding: 5,
          display: "flex",
          flexDirection: "column",
          rowGap: 8,
        }}
      >
        <TextField
          variant="outlined"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Button variant="contained" onClick={onHomebtnClick}>
          Submit
        </Button>
      </div>

      <Popover
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
  );
};
