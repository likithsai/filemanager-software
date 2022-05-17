import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import Header from './component/Header';
// import Footer from './component/Footer';

const App = () => {
    return (
        <div className="app">
            <Header title="Media Vault" />
            <main>
                <div className="album py-5 bg-light">
                    <div className="container px-4">
                        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3">
                            <div className="col">
                                <div className="card">
                                    <ReactPlayer url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' width="100%" height="100%" controls={true} />
                                    <div className="card-body">
                                        <p className="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-dark">9 MB</small>
                                            <small className="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <ReactPlayer url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' width="100%" height="100%" controls={true} />
                                    <div className="card-body">
                                        <p className="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-dark">9 MB</small>
                                            <small className="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div className="card-body">
                                        <p className="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-dark">9 MB</small>
                                            <small className="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div className="card-body">
                                        <p className="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-dark">9 MB</small>
                                            <small className="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div className="card-body">
                                        <p className="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-dark">9 MB</small>
                                            <small className="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div className="card-body">
                                        <p className="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-dark">9 MB</small>
                                            <small className="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div className="card-body">
                                        <p className="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-dark">9 MB</small>
                                            <small className="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div className="card-body">
                                        <p className="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-dark">9 MB</small>
                                            <small className="text-muted">Thu 15, 2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <img src="https://picsum.photos/200" width="100%" height="250" />
                                    <div className="card-body">
                                        <p className="card-text fw-bold">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <small className="text-dark">9 MB</small>
                                            <small className="text-muted">Thu 15, 2019</small>
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