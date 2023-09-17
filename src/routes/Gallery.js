import { Avatar, Badge, Box, Tooltip } from "@mui/material";
import PreviewCard from "../components/PreviewCard";

const GalleryStyle = {
  marginBottom: "3rem",
  minHeight: "92vh",
};

const SenseTypeStyle = {
  display: "flex",
  alignItems: "space-bewteen",
  justifyContent: "center",
  alignSelf: "center",
  gap: "2rem",
  marginBottom: "1rem",
  flexWrap: "wrap",
};

const GalleryConatinerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.5rem",
  paddingTop: "2.5rem",
};

const coverImages = {
  葉書碩: "https://i.imgur.com/6AOh0BY.jpg",
  林玟伶: "https://i.imgur.com/Jhg0nOy.jpg",
  李建霖: "https://i.imgur.com/rbIgHjK.jpg",
  林祐群: "https://i.imgur.com/prSeyfO.jpg",
  林繼堽: "https://i.imgur.com/revdW1K.jpg",
  石瑛: "https://i.imgur.com/GpJpi5m.jpg",
  蔡侑霖: "https://i.imgur.com/LyaCkgR.jpg",
};

const titles = {
  葉書碩: "semicolon",
  林玟伶: "一面牆的厚度",
  李建霖: "發呆・蘭嶼",
  林祐群: "咖啡日記",
  林繼堽: "Cat & Camera",
  石瑛: "Death In the Sea",
  U0: "非同步溝通",
  許哲睿: "異曲同工 x 相由自造",
  徐振瑜: "forest",
  簡廷翰: "memories",
};

const names = [
  "簡廷翰",
  "林祐群",
  "石瑛",
  "林玟伶",
  "徐振瑜",
  "葉書碩",
  "林繼堽",
  "李建霖",
  "U0",
  "許哲睿",
];

const senseIcons = ["聆", "觀", "觸", "嗅", "品"];

const Gallery = () => {
  return (
    <div style={GalleryConatinerStyle}>
      <div style={SenseTypeStyle}>
        {senseIcons.map((icon) => {
          return (
            <Tooltip
              arrow
              title={icon}
              placement="top"
              key={`sense-icon-${icon}`}
            >
              <Badge
                className="sense-icon"
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              >
                <Avatar
                  sx={{ width: 54, height: 54 }}
                  alt={`${icon} Icon`}
                  src={`/images/${icon}.png`}
                />
              </Badge>
            </Tooltip>
          );
        })}
      </div>
      <Box
        style={GalleryStyle}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "start",
          alignContent: "flex-start",
          flexDirection: "row",
          gap: "2.5rem",
        }}
      >
        {names.map((name, index) => {
          console.log(`rotate(${(index % 2 ? -1 : 1) * 3}deg)`);
          return (
            <PreviewCard
              index={index + 1}
              key={`preview-card-${index}`}
              name={name}
              coverImage={coverImages[name]}
              style={{
                transform: `rotate(${(index % 2 ? -1 : 1) * 3}deg)`,
              }}
              title={titles[name]}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default Gallery;
