import { Box, Button, Grid, IconButton, Snackbar } from "@mui/material";
import { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface ToastProps {
  duration?: number;
  showCloseButton?: boolean;
  vertical?: "top" | "bottom";
  horizontal?: "left" | "center" | "right";
}

export const Toast: React.FC<ToastProps> = ({
  duration = 3000,
  showCloseButton = false,
  vertical = "bottom",
  horizontal = "right",
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const buttons = (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Grid sx={{ textAlign: "right" }}>
        <Button
          onClick={handleClick}
          sx={{ bgcolor: "#009cfc", color: "#ffffff" }}
        >
          Show Toast
        </Button>
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ width: 500 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={duration}
        open={open}
        onClose={handleClose}
        message="I am Toast Component =)"
        key={vertical + horizontal}
        action={
          showCloseButton ? (
            <IconButton size="small" aria-label="close" onClick={handleClose}>
              <CloseRoundedIcon sx={{ color: "white" }} />
            </IconButton>
          ) : (
            ""
          )
        }
      />
    </Box>
  );
};
