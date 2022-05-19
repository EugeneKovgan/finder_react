import logo from './logo.svg';
import { useState } from 'react';
import './App.scss';
import Header from './conponents/Header/Header';
import Footer from './conponents/Footer/Footer';
import Main from './conponents/Main/Main';

function App() {
    const [repo, setRepo] = useState('');
    const hendlNameChange = (repo) => {
        setRepo(repo);
    };
    return (
        <div className='App'>
            <Header onChange={hendlNameChange} />
            <Main repo={repo} />

            <Footer />
        </div>
    );
}

export default App;
