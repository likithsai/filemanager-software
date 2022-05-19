//  footer
import React from 'react';

const Footer = (props) => {
    return (
        <footer className="py-4 bg-white shadow-sm text-center border-top">
            <div className="container">
                <p className="mb-1 text-muted">{props.title}</p>
            </div>
        </footer>
    );
}

export default Footer;