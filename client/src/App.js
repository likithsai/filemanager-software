import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

const App = () => {
    return (
        <div className="app">
            <Header title="Media Vault" />
            <div class="h-100 p-5 text-white bg-dark">
                <div className="container-md px-md-3 shadow-sm">
                    <h2>Change the background</h2>
                    <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                </div>
            </div>
            <main>
                <div class="album py-5 bg-light">
                    <div class="container px-4">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div class="col">
                                <div class="card">
                                    <img src="https://via.placeholder.com/250x250" width="100%" height="250" />
                                    <div class="card-body">
                                        <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-dark">9 MB</small>
                                            <small class="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div class="card-body">
                                        <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-dark">9 MB</small>
                                            <small class="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div class="card-body">
                                        <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-dark">9 MB</small>
                                            <small class="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div class="card-body">
                                        <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-dark">9 MB</small>
                                            <small class="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div class="card-body">
                                        <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-dark">9 MB</small>
                                            <small class="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div class="card-body">
                                        <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-dark">9 MB</small>
                                            <small class="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div class="card-body">
                                        <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-dark">9 MB</small>
                                            <small class="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div class="card-body">
                                        <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-dark">9 MB</small>
                                            <small class="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col">
                                <div class="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div class="card-body">
                                        <p class="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <small class="text-dark">9 MB</small>
                                            <small class="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* <Footer title="© likith sai"/> */}
        </div>
    );
}

export default App;