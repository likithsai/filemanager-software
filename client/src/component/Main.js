//  Main.js

import React, { useState, useEffect } from 'react';
import Cards from './Card';
import Pagination from './Pagination';

const Main = (props) => {
    const [ todosPerPage ] = useState(30);
    const [ currentPage, setCurrentPage ] = useState(1);
    //  pagination
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    return (
        <main>
            <div className="album py-5 bg-light">
                <div className="container px-4">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
                    { 
                        props.dataItems.slice(indexOfFirstTodo, indexOfLastTodo).map((item) => 
                            <Cards 
                                uniqkey={item.filename}
                                title={item.filename} 
                                url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                filesize="9 MB"
                                fileCreatedDate="Thu 15, 2019"
                            />
                        )
                    }
                    </div>
                </div>
                
                <Pagination
                    currentPage = {currentPage}
                    todosPerPage={todosPerPage}
                    totalTodos={props.dataItems.length}
                    paginate={(pageNumber) => {
                        setCurrentPage(pageNumber);
                    }}
                />
            </div>
        </main>
    );
}

export default Main;