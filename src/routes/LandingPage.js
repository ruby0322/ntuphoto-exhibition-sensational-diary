
const LandingPageStyle =  {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};

const WelcomeButtonStyle = {
    position: 'absolute',
    backgroundPosition: 'contain',
    backgroundSize: 'cover',
    backgroundImage: 'url("/images/welcome-icon.png")',

};

const LandingPage = () => {
    return <div className='landing-page' style={LandingPageStyle}>
        <a href='/works' className='welcome-button' style={WelcomeButtonStyle}>
        </a>
    </div>;
};

export default LandingPage;
