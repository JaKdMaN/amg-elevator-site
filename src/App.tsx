import React from 'react';

import Main from './components/Main/Main';
import Industries from './components/Industries/Industries';
import Options from "./components/options/Options";
import Gallery from "./components/Gallery/Gallery";
import Patreon from "./components/Patreon/Patreon";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "@assets/styles/App.scss"
import 'swiper/css/bundle'

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Industries/>
            <Options/>
            <Gallery/>
            <Patreon/>
            <Questions/>
            <Footer/>
        </div>
    );
}

export default App;
