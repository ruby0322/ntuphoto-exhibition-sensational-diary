import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LockMask from './components/LockMask';
import Feedback from './routes/Feedback';
import Gallery from './routes/Gallery';
import LandingPage from './routes/LandingPage';
import Work from './routes/Work';


const theme = createTheme({
  typography: {
    workTitle: {
      fontSize: '2rem',
      color: '#69B187',
    },
    作品理念標題: {
      fontSize: '1.5rem',
      color: '#69B187',
      fontWeight: '800',
      fontFamily: 'Zen Maru Gothic, sans-serif',
    },
    作品理念內文: {
      fontSize: '1rem',
      color: 'black',
      fontWeight: '400',
      fontFamily: 'sans-serif',
    },
    作者名字: {
      fontSize: '1.3rem',
      color: '#AD8FC1',
      fontWeight: '800',
      fontFamily: 'Zen Maru Gothic, sans-serif',
    },
    頁尾標題: {
      fontSize: '1rem',
      color: '#7CE6A8',
      fontWeight: '800',
    },
    頁尾內文: {
      fontSize: '1rem',
      color: 'white',
      fontWeight: '200',
    },
    頁首連結: {
      fontSize: '1rem',
      fontWeight: '700',
      color: 'black',
    },
    頁尾品牌名字: {
      fontSize: '1rem',
      color: 'white',
      fontWeight: '400',
    },
    測試: {
      fontSize: '1rem',
      color: '#85E6AD',
      fontWeight: '800',
    },
    遮罩大字: {
      fontFamily: 'Zen Maru Gothic, sans-serif',
      color: 'white',
      fontSize: '4rem',
      fontWeight: '800',
    },  
    遮罩小字: {
      color: 'white',
      fontSize: '1.2rem',
      fontWeight: '800',
      fontFamily: 'sans-serif',
    },  
  },
});

const PageBackgroundStyle = {
  backgroundImage: 'url("/images/horizontal-bg.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'repeat-y',
}

const AppComponent = <div className='page' style={PageBackgroundStyle}>
  <LockMask />
  <Header className='__debug' />
  <div className='main'>
    <div className='main-content'>
      <Routes>
        <Route path='/works/:workId' element={<Work />} />
        <Route path='/works/' element={<Gallery />} />
        <Route path='/feedback/' element={<Feedback />} />
      </Routes>
    </div>
    <Footer className='__debug' />
  </div>
</div>;

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={10}
          autoHideDuration={1000}
          hideIconVariant
        />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/*' element={AppComponent} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
