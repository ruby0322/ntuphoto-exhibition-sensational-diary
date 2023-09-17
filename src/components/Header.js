import { Avatar } from "@mui/material";

const HeaderStyle = {
  // paddingLeft: '10px',
  width: "100vw",
  height: "8vh",
  paddingTop: ".5rem",
  paddingBottom: ".5rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  zIndex: "1",
  // backgroundColor: 'rgba(105, 177, 135, 0.8)',
  // backdropFilter: 'blur(2px)',
};

const LogoStyle = {
  width: "3.8rem",
  height: "3.8rem",
  borderRadius: "50%",
  backgroundColor: "rgba(255,255,255,0.4)",
  marginLeft: ".5rem",
  border: "var(--secondary-bg) solid 3px",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px",
  // boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
};

const NavigationStyle = {
  width: "15rem",
  marginRight: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "rgba(221,221,221, 0.8)",
  paddingTop: ".45rem",
  paddingBottom: ".45rem",
  paddingLeft: ".15rem",
  paddingRight: ".15rem",
  borderRadius: "4vh",
  boxShadow: "rgba(0, 0, 0, 0.4) 0px 5px 15px",
  // boxShadow: 'rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
};

const links = ["works", "about", "feedback"];

const Header = () => {
  return (
    <div style={HeaderStyle}>
      <a href="/" className="brand">
        <Avatar style={LogoStyle} src="/images/logo.png" />
      </a>
      <div style={NavigationStyle}>
        {links.map((link, idx) => (
          <a
            key={`nav-${idx + 1}`}
            style={{
              backgroundImage: `url("/images/nav${idx + 1}.png")`,
            }}
            className="nav-link"
            href={`/${link}`}
          >
            {/* */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
