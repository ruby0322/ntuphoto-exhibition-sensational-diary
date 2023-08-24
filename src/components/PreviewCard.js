import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const coverImages = [
    'https://images.unsplash.com/photo-1692736229769-5cb546195049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
    'https://images.unsplash.com/photo-1692736229800-4a93a1160541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
    'https://images.unsplash.com/photo-1691776287112-3e53e884b95a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80',
    'https://images.unsplash.com/photo-1692018827804-f4d0e743798c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1692369793878-e901e6dc052d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
    'https://images.unsplash.com/photo-1692102683620-0b1c23d1486a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1691767971416-2df5d50bcdc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1015&q=80',
    'https://images.unsplash.com/photo-1691918530969-0c28c87c1b99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1692082571320-e4480aea665d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1518055170961-34231019023a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
];

const titles = [
    '喵喵',
    '汪汪',
    '我是一隻貓咪',
    '我可愛嗎',
    '喵嗚',
    '喵',
    '你是貓派還是狗派',
    '我是貓派',
    '貓貓',
    '我討厭夠夠',
]

const CardCoverStyle = {
    filter: 'blur(4px) saturate(0%)',
};

const PreviewCard = ({ workId, locked }) => {

    const navigate = useNavigate();

    const onCardClick = () => {
        navigate(`${workId}`);
    }

    return <Card
        className='preview-card'
        onClick={onCardClick}
    >
        <CardActionArea sx={{
            height: '100%',
        }}>
            <CardMedia
                component="img"
                height='240'
                style={CardCoverStyle}
                image={coverImages[workId]}
                alt="green iguana"
            />
            <CardContent style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Typography gutterBottom variant="h5" component="div">
                    { titles[workId] }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    文字說明
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card >;
}

export default PreviewCard;