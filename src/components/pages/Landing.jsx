import React from 'react';
import Discord from '../home/Discord';
import Header from '../home/Header';
import News from '../home/News';
import Footer from '../home/Footer';
import CommandList from '../home/CommandList'; 

/* The Landing Page for the web app */
const Landing = () => {
    return (
        <>
            <Header pageName="Auction Bot" classNames="bg-header" />
            <News />
            <Discord />
            <CommandList />
            <Footer />
        </>
    );
}

export default Landing;