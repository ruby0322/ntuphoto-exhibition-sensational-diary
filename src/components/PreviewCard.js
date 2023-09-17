import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardCoverStyle = {};

const PreviewCard = ({ name, coverImage, title, index }) => {
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`${name}`);
  };

  return (
    <Card className="preview-card" onClick={onCardClick}>
      <CardActionArea
        sx={{
          height: "100%",
        }}
      >
        <CardMedia
          component="img"
          height="240"
          style={CardCoverStyle}
          image={`/images/cover/compressed/${name} 大.jpeg`}
          alt={`cover-${name}`}
        />
        <CardContent
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "12px",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              width: 36,
              height: 36,
            }}
            style={{
              backgroundColor: "rgba(105, 177, 135, 0.7)",
            }}
          >
            {index >= 10 ? index : `0${index}`}
          </Avatar>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "7px",
              alignContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Typography
              style={{
                maxWidth: "85%",
                height: "100%",
              }}
              variant="h5"
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {name}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PreviewCard;
