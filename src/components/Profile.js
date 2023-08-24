import FacebookIcon from '@mui/icons-material/Facebook';
import { Avatar, Typography } from '@mui/material';

const ProfileHeaderStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    width: '100%',
}

const ProfileBodyStyle = {
    display: 'flex',
    flexDirection: 'row',
    justfiyContent: 'center',
    alignItems: 'center', 
    gap: '1.2rem',
};

const ProfileStyle = {
    // width: '100%',
    marginTop: '0.5rem',
    padding: '0.9rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    borderRadius: '8px',
    border: 'var(--font-primary) 2px solid',
    // backgroundColor: 'rgba(105, 177, 135, 0.1)',
    // backdropFilter: 'blur(2px)',
    maxWidth: '100%',
    gap: '1rem'
};
  
const ProfileNameStyle = {
    display: 'block',
    width: '6rem',
    wordBreak: 'keep-all',
    borderBottom: '2px var(--font-primary) solid',
};


const Profile = () => {
    return <div style={ProfileStyle}>
        <div style={ProfileHeaderStyle}>
            <Avatar sx={{ width: 50, height: 50 }} alt="Profile Picture" src="images/star.png" />
            <div style={ProfileHeaderStyle}>
                <Typography style={ProfileNameStyle} variant='作者名字'>
                    曾妤勤
                </Typography>
                <a href='https://zh.wikipedia.org/zh-tw/%E7%91%9E%E5%85%8B%E6%90%96' target='_blank' rel="noreferrer">
                    <FacebookIcon
                        className='link-icon'
                        sx={{
                            color: 'var(--secondary-bg)',
                            width: '2rem',
                            height: '2rem',
                    }}/>
                </a>
            </div>  
        </div>
        <div style={ProfileBodyStyle}> 
            <Avatar style={{
                width: '1.8rem',
                height: '1.8rem',
                marginLeft: '.65rem',
            }} alt="Profile Picture" src="/images/star.png" />
            <Typography
                variant='作品理念內文'
                style={{
                    
                }}
            >
                業餘攝影師，鐵道有北漂夢卻還是眷戀每個逃離台北的時光 嚮往自由的靈魂努力不在生活中留下遺憾
            </Typography>
        </div>
    </div>;
}

export default Profile;