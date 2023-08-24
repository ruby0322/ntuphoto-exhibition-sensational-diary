import { Typography } from '@mui/material';

const ParagraphStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'start',
};

const SubtitleStyle = {
    width: '100%',
    borderBottom: '1px #7CE6A8 solid',
    marginBottom: '.5rem',
};

const BodyGroupStyle = {
    display: 'flex',
    gap: '1rem',
};

const calculateColumnCount = (lineCount, linesPerColumn) => {
    const cnt = parseInt(lineCount / linesPerColumn);
    if (cnt * linesPerColumn < lineCount)
        return cnt + 1;
    return cnt;
}

const ParagraphSection = ({ subtitle, lines, linesPerColumn }) => {

    const columnCount = calculateColumnCount(lines.length, linesPerColumn);
    console.log(lines)
    console.log(columnCount)

    return <div style={ParagraphStyle}>
        <Typography variant='頁尾標題' style={SubtitleStyle}>
            { subtitle }
        </Typography>
        <div style={BodyGroupStyle}>
            {
                (new Array(columnCount).fill(1)).map((_, col) => {
                    return <Typography variant='頁尾內文'>
                        {
                            (new Array(linesPerColumn).fill(1)).map((__, row) => {
                                return <>
                                    {lines[col * linesPerColumn + row]}<br />
                                </>;
                            })
                        }
                    </Typography>;
                })
            }
        </div>
    </div>;
}

export default ParagraphSection;