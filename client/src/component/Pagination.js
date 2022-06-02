import React from 'react';

const Pagination = ({ currentPage, todosPerPage, totalTodos, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalTodos / todosPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="mt-4 d-flex align-items-center justify-content-between">
            <p className="text-center text-muted">Showing {todosPerPage} items out of {totalTodos} items.</p>
            <ul className='pagination d-flex justify-content-center'>
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {
                    pageNumbers.map(number => (
                        <li key={number} className={`page-item ${ (number == currentPage) ? 'active' : '' }`}>
                            <a onClick={() => paginate(number)} href='!#' className="page-link">{number}</a>
                        </li>
                    ))
                }
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;