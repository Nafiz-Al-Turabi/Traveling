import React from 'react';
import Navbar from '../../../shared/NavBar/Navbar';
import Banner from '../../../components/Banner/Banner';
import TopDest from '../../../components/TopDest/TopDest';
import TopServices from '../../../components/TopServices/TopServices';
import HappyClient from '../../../components/HappyClient/HappyClient';
import Footer from '../../../components/TravelFooter/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <TopDest></TopDest>
            <TopServices></TopServices>
            <HappyClient></HappyClient>
            <Footer></Footer>
        </div>
    );
};

export default Home;