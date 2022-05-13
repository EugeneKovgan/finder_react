import './Header.scss';
import logo_git from '../../assets/svg/git_icon.svg';
import search_icon from '../../assets/svg/search_icon.svg';
const Header = () => {
    return (
        <div className='Header'>
            <div className='header__content-container'>
                <div className='logo-img'>
                    <img src={logo_git} alt='' />
                </div>
                <div className='header-search'>
                    <input
                        className='header-search_input'
                        type='text'
                        name=''
                        id=''
                        placeholder='Enter GitHub username'
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
