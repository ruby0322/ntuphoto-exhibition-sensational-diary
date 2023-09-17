import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Avatar, Rating, Tooltip, Typography } from "@mui/material";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import ParagraphSection from "./ParagraphSection";

const FooterContainerStyle = {
  backgroundColor: "var(--secondary-bg)",
  width: "100%",
  padding: "2.5rem",
  MozBoxSizing: "border-box",
  WebkitBoxSizing: "border-box",
  boxSizing: "border-box",
};

const BrandGroupStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.5rem",
};

const FooterInnerContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignSelf: "center",
};

const SocialMediaLinksStyle = {
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  // alignItems: 'center',
  gap: "1rem",
};

const CopyrightStyle = {
  marginTop: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const LogoStyle = {
  border: "var(--secondary-bg) solid 3px",
  backgroundColor: "white",
};

const copy = async (text) => {
  await navigator.clipboard.writeText(text);
};

const Footer = () => {
  const [liked, setLiked] = useState(
    localStorage.getItem("liked-ntuphoto") === "liked",
  );

  const handleClickVariant = (message, variant) => () => {
    localStorage.setItem("liked-ntuphoto", true);
    if (!liked) setLiked(true);
    enqueueSnackbar(message, { variant });
    /* call some API to inform client */
  };

  return (
    <div style={FooterContainerStyle}>
      <div style={FooterInnerContainerStyle}>
        <div className="footer">
          <div className="brand-container">
            <div style={BrandGroupStyle}>
              <Tooltip arrow title="美術設計：曾妤勤" placement="top">
                <Avatar
                  style={LogoStyle}
                  sx={{
                    width: 72,
                    height: 72,
                  }}
                  src="/images/logo.png"
                />
              </Tooltip>
              <Typography variant="頁尾品牌名字">
                臺大攝影研究社
                <br />
                112-1 期初展 感官日記
              </Typography>
            </div>
            <div style={SocialMediaLinksStyle}>
              <Tooltip arrow title="複製電子郵件" placement="top">
                <EmailIcon
                  onClick={() => {
                    copy("ntuphoto@gmail.com");
                    handleClickVariant("已複製電子郵件至剪貼簿", "success")();
                  }}
                  className="link-icon"
                  sx={{
                    color: "white",
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </Tooltip>
              <Tooltip arrow title="詢問社團事務" placement="top">
                <a
                  href="https://www.facebook.com/ntuphoto"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon
                    className="link-icon"
                    sx={{
                      color: "white",
                      width: "2rem",
                      height: "2rem",
                    }}
                  />
                </a>
              </Tooltip>
              <Tooltip arrow title="追蹤最新動態" placement="top">
                <a
                  href="https://instagram.com/ntuphoto_official?igshid=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon
                    className="link-icon"
                    sx={{
                      color: "white",
                      width: "2rem",
                      height: "2rem",
                    }}
                  />
                </a>
              </Tooltip>
            </div>
          </div>
          <ParagraphSection
            linesPerColumn={4}
            subtitle="策展團隊"
            lines={["曾妤勤", "陳筠珊", "林其蓁", "顧寬証"]}
          />
          <ParagraphSection
            linesPerColumn={4}
            subtitle="參展人員"
            lines={[
              "許哲睿",
              "林祐群",
              "徐振瑜",
              "林其蓁",
              "簡廷翰",
              "蔡侑霖",
              "林玟伶",
              "石瑛",
              "李建霖",
              "林繼堽",
              "葉書碩",
            ]}
          />
          <ParagraphSection
            linesPerColumn={2}
            subtitle="特別感謝"
            lines={["楊鎮豪", "彭菘瑋"]}
          />
          <ParagraphSection
            linesPerColumn={4}
            subtitle="聯絡資訊"
            lines={[
              "社團事宜詢問 臺大攝影社粉專",
              "網頁漏洞回報 ruby0322@ntu.im",
            ]}
          />
        </div>
        <div style={CopyrightStyle}>
          <Typography
            variant="頁尾內文"
            style={{
              textAlign: "center",
            }}
          >
            版權所有 © 2023 臺大攝影研究社
            <br />
            Copyright © 2023 NTUPhoto
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            alignContent: "center",
            alignItem: "center",
            justifyContent: "center",

            marginTop: ".5rem",
            opacity: "0.8",
          }}
        >
          <Tooltip
            arrow
            title="Website made with <3 by Ruby Ku"
            placement="top"
          >
            <Rating
              className="heart"
              disabled={liked}
              onClick={handleClickVariant("謝謝你／妳的用心感受 💞", "success")}
              style={{
                color: "#ff6d75",
                transform: "scale(1.4)",
              }}
              name="customized-color"
              defaultValue={liked ? 1 : 0}
              getLabelText={(value) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              precision={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              max={1}
              value={liked ? 1 : 0}
              emptyIcon={
                <FavoriteBorderIcon
                  style={{ color: "white" }}
                  fontSize="inherit"
                />
              }
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Footer;
