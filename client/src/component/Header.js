//  Header
import React from 'react';

const Header = (props) => {
    return (
        <header className="shadow-sm sticky-top bg-dark">
            <div className="collapse border-bottom" id="navbarHeader">
                <div className="container">
                    <div className="row px-3">
                        <div className="col-sm-12 col-md-12 pb-4 pt-5">
                            <div className="active-cyan-4 mb-4">
                                <input className="form-control" type="text" placeholder="Search for Images, Videos, PDF, etc." aria-label="Search for Images, Videos, PDF, etc." />
                            </div>    
                            <ul className="list-group">
                                <li className="list-group-item text-white bg-dark px-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="/images" className="text-white text-decoration-none">
                                            <i className="bi bi-images me-3 text-warning"></i>
                                            <span>Images</span>
                                        </a>
                                        <div className="d-flex align-item-center badge bg-warning">
                                            <span className="me-2 text-dark">12</span>
                                            <i className="bi bi-arrow-right-circle-fill text-dark"></i>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item text-white bg-dark px-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="/videos" className="text-white text-decoration-none">
                                            <i className="bi bi-camera-reels me-3 text-warning"></i>
                                            <span>Videos</span>
                                        </a>
                                        <div className="d-flex align-item-center badge bg-warning">
                                            <span className="me-2 text-dark">463</span>
                                            <i className="bi bi-arrow-right-circle-fill text-dark"></i>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item text-white bg-dark px-0">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="/pdfs" className="text-white text-decoration-none">
                                            <i className="bi bi-file-earmark-pdf me-3 text-warning"></i>
                                            <span>PDF</span>
                                        </a>
                                        <div className="d-flex align-item-center badge bg-warning">
                                            <span className="me-2 text-dark">7</span>
                                            <i className="bi bi-arrow-right-circle-fill text-dark"></i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container px-4 my-2">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-3 text-warning" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                    <strong>{props.title}</strong>
                </a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="bi bi-list text-warning fs-5"></span>
                </button>
                </div>
            </div>
        </header>
    );
}

export default Header;