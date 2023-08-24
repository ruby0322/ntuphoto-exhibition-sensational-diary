import '@fontsource/noto-serif-tc';
import { Typography } from '@mui/material';
import ImageListPreview from '../components/ImageListPreview';
import Profile from '../components/Profile';
import WorkSubtitle from '../components/WorkSubtitle';

const Work = () => {

    return <div className='paper-container'>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '50rem',
            minHeight: '92vh',
            marginTop: '2rem',
            marginBottom: '3rem',
            gap: '1.2rem',
        }}>
            <WorkSubtitle content='語音導覽' /> 
            <audio style={{
                width: '100%',
            }} controls src="https://cdn.discordapp.com/attachments/893439505988743178/1143828698043273237/National_Taiwan_University_4.m4a">
                <a href="https://cdn.discordapp.com/attachments/893439505988743178/1143828698043273237/National_Taiwan_University_4.m4a"> Download audio </a>
            </audio>
            <ImageListPreview />
            <WorkSubtitle content='創作理念' /> 
            <Typography variant='作品理念內文' sx={{
                textAlign: 'justify',
                paddingLeft: '1rem',
                paddingRight: '0.3rem',
                // textAlign: 'justify',
            }}>
                本屆藝術季《洄 Reviver》以「永續」為核心，除了環境面的永續之外，亦以藝術的形式探索時間面的永續。於你而言，「過去與未來」、「生存與死亡」、「瞬間與不朽」是無法改變的事實，抑或是可以被重新定義的概念呢？
            </Typography>
            <WorkSubtitle content='創作自述' /> 
            <Typography variant='作品理念內文' sx={{
                marginLeft: '1rem',
                paddingRight: '0.3rem',
                // paddingLeft: '1rem',
                // borderLeft: 'solid #C4C4C1 10px',
            }}>
                本屆藝術季《洄 Reviver》以「永續」為核心，除了環境面的永續之外，亦以藝術的形式探索時間面的永續。於你而言，「過去與未來」、「生存與死亡」、「瞬間與不朽」是無法改變的事實，抑或是可以被重新定義的概念呢？

                <br />
                <br />

                在漫長的時間軸上，我們究竟是穿梭於不同時空的靈魂，還是被時間束縛與禁錮的區區個體？洄將「永續」分為四個階段：毀滅與混沌、動盪與追尋、時間與回溯、未來與重生， 讓大家透過藝術展覽與實作活動，探索自我與「永續」的關係。
                
                <br />
                <br />
                願在當中的某個瞬間，你會找「洄」自己。
            </Typography>

            <Profile />
        </div>
    </div>;
}

export default Work;