import React from 'react';
import MainContainer from './MainPageContainer';
import Header from './Header';
import Footer from './Footer';
import AdminLogin from './login/AdminLogin';
import StudentLogin from './login/StudentLogin';
import CompanyLogin from './login/CompanyLogin';


function MainPage() {
    return (
        <>
                <Header />
                <MainContainer />
                <Footer/>
                {/* <AdminLogin/> */}
                {/* <StudentLogin/> */}
                {/* <CompanyLogin/> */}
        </>
    );
}

export default MainPage;
