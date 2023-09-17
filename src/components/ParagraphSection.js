import { Typography } from "@mui/material";
import React from "react";

const ParagraphStyle = {
  display: "flex",
  flexDirection: "column",
  alignSelf: "start",
};

const SubtitleStyle = {
  width: "100%",
  borderBottom: "1px #7CE6A8 solid",
  marginBottom: ".5rem",
};

const BodyGroupStyle = {
  display: "flex",
  gap: "1rem",
};

const calculateColumnCount = (lineCount, linesPerColumn) => {
  const cnt = parseInt(lineCount / linesPerColumn);
  if (cnt * linesPerColumn < lineCount) return cnt + 1;
  return cnt;
};

const ParagraphSection = ({ subtitle, lines, linesPerColumn }) => {
  const columnCount = calculateColumnCount(lines.length, linesPerColumn);

  return (
    <div style={ParagraphStyle}>
      <Typography variant="頁尾標題" style={SubtitleStyle}>
        {subtitle}
      </Typography>
      <div style={BodyGroupStyle}>
        {new Array(columnCount).fill(1).map((_, col) => {
          return (
            <Typography key={`ps-col${col}`} variant="頁尾內文">
              {new Array(linesPerColumn).fill(1).map((__, row) => {
                return (
                  <React.Fragment key={`ps-col${col}-row${row}`}>
                    {lines[col * linesPerColumn + row]}
                    <br />
                  </React.Fragment>
                );
              })}
            </Typography>
          );
        })}
      </div>
    </div>
  );
};

export default ParagraphSection;
