import './Header.scss';
import axios from "axios";
import logo_git from '../../assets/svg/git_icon.svg';
import { useState } from 'react';

const Header = ({ onChange }) => {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState([]);
    const [repo, setRepo] = useState([]);

    const getUser = (e) => {
        setSearch(e.target.value);
        // hendlNameChange()
    }

    const hendlNameChange = () => {
        onChange(user, repo)
    }

    const sendRequest = async (e) => {
        if (e.code === 'Enter') {
            try {
                const response = await axios.get(`https://api.github.com/users/${search}`);
                const userGetedInfo = response.data;
                console.log(userGetedInfo);
                setUser(userGetedInfo)
                console.log(user.id)
                sendRequestRepo()
            } catch (e) {
                console.log(e);
            }
            hendlNameChange()
            setSearch((''));
        }
    }
    const sendRequestRepo = async (e) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${search}/repos`);
            const repoGetedInfo = response.data;
            console.log(repoGetedInfo);
            setRepo(repoGetedInfo)
        } catch (e) {
            console.log(e);
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
                        onChange={getUser}
                        onKeyUp={sendRequest}
                    />
                </div>
                <div className="div">id = {user.id}</div>
                <div className="div">name = {user.login}</div>
            </div>
        </div>
    );
};

export default Header;
