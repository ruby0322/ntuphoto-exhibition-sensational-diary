import InDevelopmentMask from '../components/InDevelopmentMask';

const FeedbackStyle = {
  marginTop: "3rem",
  width: "100%",
  maxWidth: "85vw",
  display: "flex",
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",
};

const Feedback = () => {
  return (
    <div className="feedback" style={FeedbackStyle}>
      <InDevelopmentMask />
    </div>
  );
};

export default Feedback;
