import './Header.scss';
import axios from "axios";
import logo_git from '../../assets/svg/git_icon.svg';
import { useState } from 'react';
import API from '../API';
const Header = ({ onChange }) => {
    const [search, setSearch] = useState('');
    const [repo, setRepo] = useState([]);

    const getUser = (e) => {
        setSearch(e.target.value);
        // hendlNameChange()
    }

    const hendlNameChange = () => {
        onChange(repo)
    }

    const sendRequest = async (e) => {
        if (e.code === 'Enter') {
            try {
                const response = await axios.get(`https://api.github.com/users/${search}`);
                const userGetedInfo = response.data;
                console.log(userGetedInfo);
                setRepo(userGetedInfo)
                console.log(repo.id)
            } catch (e) {
                console.log(e);
            }
            // const userGetedInfo = API(search)
            // setRepo(userGetedInfo)
            // console.log(repo.id)
            hendlNameChange()
            setSearch((''));
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
                        // name=''
                        // id=''
                        value={search}
                        placeholder='Enter GitHub username'
                        onChange={getUser}
                        onKeyUp={sendRequest}
                    />
                </div>
                <div className="div">id = {repo.id}</div>
                <div className="div">name = {repo.login}</div>
            </div>
        </div>
    );
};

export default Header;
