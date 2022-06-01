import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

// import Footer from './component/Footer';

const App = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api")
        // fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
            });
    }, []);

    return (
        <div className="app">
            <Header title="Media Vault" dataItems={data} />
            <Main dataItems={data} />
            <Footer title="© likith sai"/>
        </div>
    );
}

export default App;