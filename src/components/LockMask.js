import { Backdrop, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const ProgressBarStyle = {
  height: "1.5rem",
  borderRadius: "10px",
};

const deltaToReadableTime = (delta) => {
  return {
    days: parseInt(delta / 86400000),
    hours: parseInt((parseInt(delta / 1000) % 86400) / 3600),
    minutes: parseInt(((parseInt(delta / 1000) % 86400) % 3600) / 60),
    seconds: ((parseInt(delta / 1000) % 86400) % 3600) % 60,
  };
};

const LockMask = () => {
  const [open, setOpen] = useState(true);
  const [delta, setDelta] = useState(0);

  const readableTime = deltaToReadableTime(delta);

  const updateOpen = () => {
    if (Date.now() >= 1694912400000) {
      setOpen(false);
    } else {
      setDelta(1694912400000 - Date.now());
    }
  };

  useEffect(() => {
    const updateOpenId = setInterval(updateOpen, 1000);
    return () => clearInterval(updateOpenId);
  }, []);

  return (
    <Backdrop
      sx={{
        color: "#fff",
        backdropFilter: "blur(12px)",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          width: "50vw",
          minWidth: "20rem",
        }}
      >
        <Typography
          style={{
            textAlign: "center",
          }}
          variant="遮罩大字"
        >
          敬請期待
        </Typography>
        <LinearProgress
          style={ProgressBarStyle}
          variant="determinate"
          value={(1 - delta / (30 * 86400 * 1000)) * 100}
        />
        <Typography
          style={{
            textAlign: "center",
          }}
          variant="遮罩小字"
        >
          距離開展 9/17（日）09:00 還有
          <br />
          {readableTime["days"]} 日 {readableTime["hours"]} 時{" "}
          {readableTime["minutes"]} 分 {readableTime["seconds"]} 秒
        </Typography>
      </div>
    </Backdrop>
  );
};

export default LockMask;
