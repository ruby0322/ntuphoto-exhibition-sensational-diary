import { Typography } from '@mui/material';

const WorkSubtitle = ({ content, variant }) => {
    return <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',
        paddingRight: '10px',
    }}>
        <div className='icon' style={{
            backgroundImage: 'url("/images/star.png")',
        }} > </div>
        <Typography variant={variant ? variant : '作品理念標題'} sx={{
        }}>
            { content }
        </Typography>
    </div>;
}

export default WorkSubtitle;