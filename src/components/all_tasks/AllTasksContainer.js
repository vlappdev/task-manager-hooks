import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function AllTasksContainer(props) {

    const [tasks] = useState(props.cards);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    const [tasksPerPage] = useState(10);
    const [pageNumbers] = useState((initPageNumbers = []) =>{

        for(let i = 1; i <= Math.ceil(tasks.length/tasksPerPage); i++){
            initPageNumbers.push(i);
        }

        return initPageNumbers
    });

    const [isNextBtnActive, setIsNextBtnActive] = useState('');
    const [isPrevBtnActive, setIsPrevBtnActive] = useState('disabled');

    const lastIndexOnPage = currentPageNumber * tasksPerPage;
    const firstIndexOnPage = lastIndexOnPage - tasksPerPage;

    const currentPage = tasks.slice(firstIndexOnPage, lastIndexOnPage);

    const handleClick = (number, e) => {
        e.preventDefault();
        navButtonsIsActive(number);
        setCurrentPageNumber(number)
    };

    const navButtonsIsActive = (number) => {

        switch (number) {
            case Math.max(...pageNumbers):
                setIsNextBtnActive("disabled");
                break;
            case Math.min(...pageNumbers):
                setIsPrevBtnActive("disabled");
                break;
            default:
                setIsNextBtnActive("");
                setIsPrevBtnActive("");
        }
    };

    const prevPage = (currentPage, e) => {
        e.preventDefault();
        const prevPage = currentPage - 1;
        currentPage > Math.min(...pageNumbers) && setCurrentPageNumber(prevPage)
        navButtonsIsActive(prevPage);
    };

    const nextPage = (currentPage, e) => {
        e.preventDefault();
        const nextPage = currentPage + 1;
        currentPage < Math.max(...pageNumbers) && setCurrentPageNumber(nextPage)
        navButtonsIsActive(nextPage);
    };

    const isActive = number =>{
        return number === currentPageNumber? "active": "";
    };

    return (
        <div className="all-tasks w-100 px-5 py-4">
            <div className="pb-4">
                <div>
                    <h2>All Tasks</h2>
                </div>
            </div>
            <ul className="list-group">
                {
                    currentPage.map( task => {
                        const priorityColor = task.priority.replace(" ", "-");
                        return <li key={ task.cardId } className={`list-group-item ${priorityColor}`}>{task.title}</li>
                    })
                }
            </ul>
            <ul className="pagination">
                <li className={`page-item ${isPrevBtnActive}`}>
                    <Link to="" onClick={ (e) => prevPage(currentPageNumber, e) } className="page-link">Previous</Link>
                </li>
                {
                    pageNumbers.map( (number, index)=> {
                         return <li key={index} className={`page-item ${isActive(number)}`}>
                                    <Link to="" onClick={(e) => handleClick(number, e)}
                                          className="page-link">{number}</Link>
                                </li>
                    })
                }
                <li className={`page-item ${isNextBtnActive}`}>
                    <Link to="" onClick={(e) => nextPage(currentPageNumber, e)} className="page-link">Next</Link>
                </li>
            </ul>
        </div>

    );
}

export default AllTasksContainer;