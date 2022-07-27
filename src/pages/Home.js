import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className='home-page'>
            <Header />
            <Form />
            <Footer />
        </div>
    );
};

export default Home;