import './App.scss';
import Header from './conponents/Header/Header';
import Footer from './conponents/Footer/Footer';
import Main from './conponents/Main/Main';
import StartPage from './conponents/Main/StartPage/StartPage';
import UserNotFoundPage from './conponents/Main/UserNotFoundPage/UserNotFoundPage';
import Loader from './conponents/Main/Loader/Loader';
import axios from 'axios';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

function App() {
    const [user, setUser] = useState('');
    const [repo, setRepo] = useState('');
    const [loading, setLoading] = useState(false);
    const [noUser, setNoUser] = useState(false);

    const [reposOnPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);

    const sendRequest = async (value) => {
        try {
            setLoading(true);
            const response = await axios.get(`https://api.github.com/users/${value}`);
            const userGetedInfo = response.data;
            setNoUser(false);

            console.log(userGetedInfo);
            setUser(userGetedInfo);
            console.log(user.id);
            await sendRequestRepo(value);
        } catch (e) {
            console.log(e);
            setNoUser(true);
        } finally {
            setLoading(false);
        }
    };

    const sendRequestRepo = async (value) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${value}/repos`);
            const repoGetedInfo = response.data;

            // console.log(repoGetedInfo);
            setRepo(repoGetedInfo);
        } catch (e) {
            console.log(e);
        } finally {
        }
    };

    return (
        <div className='App'>
            <Header onChange={sendRequest} />
            {loading ? (
                <Loader />
            ) : (
                <>
                    {user && repo && !noUser ? (
                        <Main user={user} repo={repo} />
                    ) : noUser ? (
                        <UserNotFoundPage />
                    ) : (
                        <StartPage />
                    )}
                </>
            )}

            {user && !noUser && <Footer user={user} repo={repo} reposOnPage={reposOnPage} currentPage={currentPage} />}
        </div>
    );
}

export default App;
