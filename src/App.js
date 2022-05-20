import logo from './logo.svg';
import { useState } from 'react';
import './App.scss';
import Header from './conponents/Header/Header';
import Footer from './conponents/Footer/Footer';
import Main from './conponents/Main/Main';

function App() {
    const [user, setUser] = useState('');
    const [repo, setRepo] = useState('');
    const hendlNameChange = (user, repo) => {
        setUser(user);
        setRepo(repo);
    };
    return (
        <div className='App'>
            <Header onChange={hendlNameChange} />
            <Main user={user} repo={repo} />
            <Footer />
        </div>
    );
}

export default App;
