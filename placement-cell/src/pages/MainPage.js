import React from 'react';
// import theme from './theme';
import MainContainer from './MainPageContainer';
import Header from './Header';
import Footer from './Footer';
import AdminLogin from './login/AdminLogin';
import StudentLogin from './login/StudentLogin';
import CompanyLogin from './login/CompanyLogin';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme';

function MainPage() {
    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
                {/* <Header /> */}
                {/* <MainContainer /> */}
                {/* <AdminLogin/> */}
                {/* <StudentLogin/> */}
                <CompanyLogin/>
                {/* <Footer/> */}
            {/* </ThemeProvider> */}
        </>
    );
}

export default MainPage;
