import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FlagIcon from "@mui/icons-material/Flag";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./modal.css";
import FlagDropdownPopup from "./flagPopup/Flagpopup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "40%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

const ActiveDetailModalBody = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <FlagIcon
        className="flag"
        sx={{ textTransform: "none", cursor: "pointer" }}
        onClick={handleOpen}
      ></FlagIcon>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="Request-heading">
            <p className="heading-first">
              {<FlagIcon className="flag" />}Flag Front Porch
            </p>
            <p className="heading-second">
              4421 Limnos Ct, Elk Grove 95758-7000
            </p>
          </div>
          <div>
            <form>
              <div>
                <Typography className="modal-heading">
                  Note : <span className="required">(Required)</span>
                </Typography>

                <TextareaAutosize
                  minRows={5}
                  style={{
                    width: "100% ",
                    padding: "10px",
                    borderRadius: "10px",
                    margin: "10px 0px",
                  }}
                  placeholder="Additional comments"
                />
              </div>
              <div>
                <Typography className="modal-heading">
                  Skill : <span className="required">(Required)</span>
                </Typography>

                <div>
                  <FlagDropdownPopup items={["Select One"]} />
                </div>
              </div>

              <div>
                <Typography className="modal-heading">
                  Responsibility :
                </Typography>

                <div>
                  <FlagDropdownPopup items={["Select One (optional)"]} />
                </div>
              </div>

              <div>
                <div>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography className="modal-heading">
                        Attach Photos :
                      </Typography>
                      <FlagDropdownPopup items={["Select image to attach"]} />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography className="modal-heading">Cost :</Typography>
                      <Typography className="cost">$5421</Typography>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </form>
          </div>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={handleClose} className="popup-back-btn">
              Cancel
            </Button>
            <Button className="popup-back-btn2">Send Notification</Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ActiveDetailModalBody