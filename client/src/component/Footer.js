//  footer
import React from 'react';

const Footer = (props) => {
    return (
        <footer class="py-4 bg-light shadow-sm text-center">
            <div class="container">
                <p class="mb-1 text-muted">{props.title}</p>
            </div>
        </footer>
    );
}

export default Footer;