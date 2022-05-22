import './Footer.scss';
import arrow from "../../assets/svg/arrow.svg"
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const Footer = ({ user, repo, reposOnPage, currentPage }) => {

    const numberOfRepos = user.public_repos;

    let pagesTotal = numberOfRepos / reposOnPage
    // const [totalNumberPages, setTotalNumberPages] = useState('');
    console.log(numberOfRepos)
    console.log(reposOnPage)
    const handlePageClick = (data) => {
        console.log(data.selected)
    }

    return (
        <div className='Footer'>
            <div className='footer__content-container'>
                {numberOfRepos > 1 && <>
                    <div className="count-items">1-{numberOfRepos} of {numberOfRepos} items</div>
                    <div className="pages-block">
                        {pagesTotal > 1 &&
                            <ReactPaginate
                                previousLabel={'<'}
                                nextLabel={'>'}
                                breakLabel={'...'}
                                pageCount={pagesTotal}
                                marginPagesDisplayed={reposOnPage}
                                pageRangeDisplayed={2}
                                onPageChange={handlePageClick}
                                containerClassName={"page-number-block"}
                                pageClassName={"page-number-block_item"}
                                previousClassName={'arrow-left arrow'}
                                nextClassName={'arrow-right arrow'}
                                breakClassName={"page-number-block_item"}
                                activeClassName={'active'}
                            />}
                    </div>
                </>
                }
            </div>
        </div>
    );
};

export default Footer;
