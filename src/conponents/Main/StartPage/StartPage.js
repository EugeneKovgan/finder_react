import './StartPage.scss';
import searchBig_icon from '../../../assets/svg/search-big_icon.svg';
const StartPage = () => {
    return (
        <div className='StartPage'>
            <div className='start-page__content-container'>
                <img src={searchBig_icon} alt='search-big_icon' />
                <div className='description'>Start with searching a GitHub user</div>
            </div>
        </div>
    );
};

export default StartPage;
