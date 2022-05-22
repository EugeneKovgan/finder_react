import './Footer.scss';
import arrow from "../../assets/svg/arrow.svg"
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Footer = ({ user, repo, reposOnPage, currentPage }) => {

    const numberOfRepos = user.public_repos;

    let num = numberOfRepos / reposOnPage
    // const [totalNumberPages, setTotalNumberPages] = useState('');
    console.log(numberOfRepos)
    console.log(reposOnPage)
    const handlePageClick = (data) => {
        console.log(data.selected)
    }

    return (
        <div className='Footer'>
            <div className='footer__content-container'>
                <div className="count-items">1-{numberOfRepos} of {numberOfRepos} items</div>
                <div className="pages-block">
                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        pageCount={num}
                        marginPagesDisplayed={reposOnPage}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"page-number-block"}
                        pageClassName={"page-number-block_item"}
                    />

                    {/* <img className='arrow-left arrow' src={arrow} alt="arrow" />
                    <div className="page-number-block">
                        <div className="page-number-block_item">1</div>
                        <div className="page-number-block_item">...</div>
                        <div className="page-number-block_item">{totalNumberPages}</div>
                    </div>
                    <img className='arrow-right arrow' src={arrow} alt="arrow" /> */}

                </div>

            </div>
        </div>
    );
};

export default Footer;
