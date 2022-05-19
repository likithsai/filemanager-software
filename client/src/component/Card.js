//  card.js
import React from 'react';
import ReactPlayer from 'react-player'

const Cards = (props) => {
    return(
        <div key={props.uniqkey} className="col">
            <div className="card">
                <ReactPlayer url={props.url} width="100%" height="100%" controls={true} />
                <div className="card-body">
                    <div className="d-flex align-item-center justify-content-between mb-3">
                        <p className="card-text fw-bold text-elipsis">{props.title}</p>
                    </div>
                    <div className="mb-3">
                        <div className="badge bg-secondary me-1"><i className="bi bi-list me-2" /><span>#example</span></div>
                        <div className="badge bg-secondary me-1"><i className="bi bi-list me-2" /><span>#sa</span></div>
                        <div className="badge bg-secondary me-1"><i className="bi bi-list me-2" /><span>#example</span></div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-dark">{props.filesize}</small>
                        <small className="text-muted">{props.fileCreatedDate}</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;