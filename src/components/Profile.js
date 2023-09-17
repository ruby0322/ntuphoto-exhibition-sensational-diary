import InstagramIcon from "@mui/icons-material/Instagram";
import LinkIcon from "@mui/icons-material/Link";
import { Avatar, Typography } from "@mui/material";

const ProfileHeaderStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  width: "100%",
};

const ProfileBodyStyle = {
  display: "flex",
  flexDirection: "row",
  justfiyContent: "center",
  alignItems: "center",
  gap: "1.2rem",
  width: "100%",
};

const ProfileStyle = {
  marginTop: "0.5rem",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  borderRadius: "8px",
  border: "var(--font-primary) 2px solid",
  maxWidth: "85vw",
  width: "50rem",
  gap: "1rem",
};

const ProfileNameStyle = {
  display: "block",
  width: "6rem",
  wordBreak: "keep-all",
  borderBottom: "2px var(--font-primary) solid",
};

const bios = {
  葉書碩: `我是葉書碩，24歲。
    嘗試將情感注入不同的媒材，最近使用的是照片。將情感濃縮成影像，稀釋成思考與共鳴。`,
  李建霖: `七月初去蘭嶼旅行，帶著一身屬於蘭嶼的膚色回到台北。`,
  林祐群: `A postdoc in NTHU. Research interest: gravitational waves, deep learning, multi-messenger astronomy. Mainly use large format camera for photography works.`,
  U0: `被幸運過度飼養而貪婪，時常因此四分五裂。`,
  簡廷翰: `哈囉，我是簡廷翰，大二，男生，平時喜歡拍照玩玩遊戲，目前正在苦惱何謂藝術、該怎麼去嘗試。`,
  許哲睿: `拾起相機剛滿一年，喜歡心理學、神秘學、冰淇淋以及閱讀小說。熱愛雙拼創作，透過兩張照片的並置創造新的觀看視角，為尋常的生活場景增添趣味。近期的煩惱是如何拍出具有靜物感的人像。`,
  林玟伶: `林玟伶，喜歡拍照、透過影像之特殊性與在意的事物產生各種創作。`,
  石瑛: `生活常在隨心所欲和保持規律中來回拉扯，目前作息時區大概在斐濟，但是生活熱情被泡在台北潮濕曖昧的天氣裡。喜歡海，喜歡音樂，喜歡辣和甜食，也喜歡冬天曬過太陽的棉被。覺得自己蛀牙的時候會忍一忍，希望痛覺自己消失。`,
  徐振瑜: `自然保留區位在象山山腳吳興街公寓裡的一台 Sony 相機中。`,
  林繼堽: `業餘攝影師，鐵道迷。`,
};

const others = {
  葉書碩: "https://linktr.ee/shuo_film",
  林祐群: "https://zsefbhuk747.myportfolio.com/",
};

const instagrams = {
  葉書碩: "https://www.instagram.com/shuo_film/",
  林玟伶: "https://www.instagram.com/reinvent_ir/",
  李建霖: 1,
  林祐群: "",
  林繼堽: "https://instagram.com/cklin_photo/",
  石瑛: "https://instagram.com/sying_pho_o/",
  U0: "https://www.instagram.com/tsai_u0/",
  許哲睿: "https://instagram.com/5222hallucination/",
  徐振瑜: "https://www.instagram.com/jhenyu_jpg/",
  簡廷翰: "https://www.instagram.com/han_film/",
};

const Profile = ({ name }) => {
  return (
    <div style={ProfileStyle}>
      <div style={ProfileHeaderStyle}>
        <Avatar
          sx={{ width: 50, height: 50 }}
          alt="Profile Picture"
          src={`/images/avatar/${name} 小.jpeg`}
        />
        <div style={ProfileHeaderStyle}>
          <Typography style={ProfileNameStyle} variant="作者名字">
            {name}
          </Typography>
          <div
            style={{
              display: "flex",
              gap: ".5rem",
            }}
          >
            {instagrams[name] ? (
              <a href={instagrams[name]} target="_blank" rel="noreferrer">
                <InstagramIcon
                  className="link-icon"
                  sx={{
                    color: "var(--secondary-bg)",
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </a>
            ) : (
              <></>
            )}
            {others[name] ? (
              <a href={others[name]} target="_blank" rel="noreferrer">
                <LinkIcon
                  className="link-icon"
                  sx={{
                    color: "var(--secondary-bg)",
                    width: "2rem",
                    height: "2rem",
                  }}
                />
              </a>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div style={ProfileBodyStyle}>
        <Avatar
          style={{
            width: "1.8rem",
            height: "1.8rem",
            marginLeft: ".65rem",
            backgroundSize: "cover",
          }}
          alt="Profile Picture"
          src="/images/star.png"
        />
        <Typography variant="作品理念內文">{bios[name]}</Typography>
      </div>
    </div>
  );
};

export default Profile;
