//  Main.js

import React, { useState, useEffect } from 'react';
import Cards from './Card';
import InfiniteScroll from 'react-infinite-scroll-component';

const Main = (props) => {
    const [ data, setData ] = useState([]);
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                setData(json);
            });
    }, []);

    return (
        <main>
            <div className="album py-5 bg-light">
                <div className="container px-4">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
                    { 
                        data.map((item) => 
                            <Cards 
                                uniqkey={item.id}
                                title="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer." 
                                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                filesize="9 MB"
                                fileCreatedDate="Thu 15, 2019"
                            />
                        )
                    }
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;