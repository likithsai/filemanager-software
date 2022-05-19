import React, { useState } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

// import Footer from './component/Footer';

const App = () => {
    return (
        <div className="app">
            <Header title="Media Vault" />
            <Main />
            <Footer title="© likith sai"/>
        </div>
    );
}

export default App;