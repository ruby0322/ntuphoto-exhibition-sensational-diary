import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

const options = [
  "Show some love to MUI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content",
];

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

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List
        component="nav"
        aria-label="Device settings"
        style={{
          border: "3px solid rgb(105, 177, 135)",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="When device is locked"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
