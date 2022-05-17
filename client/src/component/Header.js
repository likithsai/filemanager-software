//  Header
import React from 'react';

const Header = (props) => {
    return (
        <header className="shadow-sm sticky-top bg-dark">
            <div className="collapse" id="navbarHeader">
                <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 py-4">
                    {/* <p className="text-muted mb-2 px-0">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p> */}
                    
                    <ul class="list-group">
                        <li class="list-group-item text-white bg-dark px-0">
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="/images" class="text-white text-decoration-none">
                                    <i class="bi bi-images me-3"></i>
                                    <span>Images</span>
                                </a>
                                <div class="d-flex align-item-center badge bg-secondary">
                                    <span class="me-2">12</span>
                                    <i class="bi bi-arrow-right-circle-fill text-white"></i>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item text-white bg-dark px-0">
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="/videos" class="text-white text-decoration-none">
                                    <i class="bi bi-camera-reels me-3"></i>
                                    <span>Videos</span>
                                </a>
                                <div class="d-flex align-item-center badge bg-secondary">
                                    <span class="me-2">463</span>
                                    <i class="bi bi-arrow-right-circle-fill text-white"></i>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item text-white bg-dark px-0">
                            <div class="d-flex align-items-center justify-content-between">
                                <a href="/pdfs" class="text-white text-decoration-none">
                                    <i class="bi bi-file-earmark-pdf me-3"></i>
                                    <span>PDF</span>
                                </a>
                                <div class="d-flex align-item-center badge bg-secondary">
                                    <span class="me-2">7</span>
                                    <i class="bi bi-arrow-right-circle-fill text-white"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                    <strong>{props.title}</strong>
                </a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
            </div>
        </header>
    );
}

export default Header;