import './Header.scss';
import logo_git from '../../assets/svg/git_icon.svg';
import { useState } from 'react';
const Header = () => {
    const [value, setValue] = useState('Enter GitHub username');
    return (
        <div className='Header'>
            <div className='header__content-container'>
                <div className='logo-img'>
                    <img src={logo_git} alt='logo_git' />
                </div>
                <div className='header-search'>
                    <input
                        className='header-search_input'
                        type='text'
                        name=''
                        id=''
                        value={value}
                        // placeholder='Enter GitHub username'
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
