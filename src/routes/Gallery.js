import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Avatar, Badge, Box, Tooltip } from '@mui/material';
import PreviewCard from '../components/PreviewCard';

const GalleryStyle = {
    marginBottom: '3rem',
    minHeight: '92vh',
};

const SenseTypeStyle = {
    display: 'flex',
    alignItems: 'space-bewteen',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: '2rem',
    marginBottom: '1rem',
    flexWrap: 'wrap',
};

const GalleryConatinerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    paddingTop: '2.5rem',
};

const Gallery = () => {
    return <div style={GalleryConatinerStyle}>
        <div style={SenseTypeStyle}>
            <Tooltip arrow title="聆" placement="top">
                <Badge
                    className='sense-icon'
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={<CheckCircleIcon style={{color: 'var(--secondary-bg)'}} />}
                    >
                    <Avatar
                        sx={{ width: 60, height: 60 }}
                        alt="Ear Icon"
                        src="/images/ear-icon.png"
                    />
                </Badge>
            </Tooltip>
            <Tooltip arrow title="觀" placement="top">
                <Avatar
                    className='sense-icon'
                    sx={{ width: 60, height: 60 }}
                    alt="Eye Icon"
                    src="/images/eye-icon.png"
                />
            </Tooltip>
            <Tooltip arrow title="觸" placement="top">
                <Avatar
                    className='sense-icon'
                    sx={{ width: 60, height: 60 }}
                    alt="Hand Icon"
                    src="/images/hand-icon.png"
                    />
            </Tooltip>
            <Tooltip arrow title="嗅" placement="top">
                <Avatar
                    className='sense-icon'
                    sx={{ width: 60, height: 60 }}
                    alt="Nose Icon"
                    src="/images/nose-icon.png"
                    />
            </Tooltip>
            <Tooltip arrow title="感" placement="top">
                <Avatar
                    className='sense-icon'
                    sx={{ width: 60, height: 60 }}
                    alt="Nose Icon"
                    src="/images/heart-icon.png"
                    />
            </Tooltip>
        </div>
        <Box
            style={GalleryStyle}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'start',
                alignContent: 'flex-start',
                flexDirection: 'row',
                gap: '2.5rem',
            }}
        >
            {
                [...Array(10).keys()].map((work, id) => {
                    return <PreviewCard key={`work-${id}`} workId={id} />;
                })
            }
        </Box>
    </div>;
};

export default Gallery;
  