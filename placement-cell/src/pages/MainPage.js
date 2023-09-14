import React from 'react';
// import theme from './theme';
import MainContainer from './MainPageContainer';
import Header from './Header';
import Footer from './Footer';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme';

function MainPage() {
    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
                <Header />
                <MainContainer />
                <Footer/>
            {/* </ThemeProvider> */}
        </>
    );
}

export default MainPage;
