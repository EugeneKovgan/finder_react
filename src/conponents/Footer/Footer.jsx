import './Footer.scss';
import arrow from "../../assets/svg/arrow.svg"
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='footer__content-container'>
                <div className="count-items">5-8 of 249 items</div>
                <div className="pages-block">
                    <img className='arrow-left arrow' src={arrow} alt="arrow" />
                    <img className='arrow-right arrow' src={arrow} alt="arrow" />
                </div>

            </div>
        </div>
    );
};

export default Footer;
