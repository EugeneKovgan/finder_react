import './Header.scss';
import logo_git from '../../assets/svg/git_icon.svg';
import { useState } from 'react';

const Header = ({ onChange }) => {
    const [search, setSearch] = useState('');

    const setUser = (e) => {
        setSearch(e.target.value);
    }

    const sendRequest = (e) => {
        if (e.code === 'Enter') {
            onChange(e.target.value)
            setSearch('')
        }
    }

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
                        value={search}
                        placeholder='Enter GitHub username'
                        onChange={setUser}
                        onKeyUp={(e) => sendRequest(e)}
                    // onKeyUp={sendRequest}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
