import './Footer.scss';
import arrow from "../../assets/svg/arrow.svg"

const Footer = ({ user }) => {
    return (
        <div className='Footer'>
            <div className='footer__content-container'>
                <div className="count-items">5-8 of {user.public_repos} items</div>
                <div className="pages-block">
                    <img className='arrow-left arrow' src={arrow} alt="arrow" />

                    <div className="page-number-block">
                        <div>{user.public_repos}</div>
                        <div className="page-number-block_item">1</div>
                        <div className="page-number-block_item">2</div>
                        <div className="page-number-block_item">...</div>
                        <div className="page-number-block_item">5</div>

                    </div>
                    <img className='arrow-right arrow' src={arrow} alt="arrow" />

                </div>

            </div>
        </div>
    );
};

export default Footer;
