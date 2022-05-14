import logo from './logo.svg';
import './App.scss';
import Header from './conponents/Header/Header';
import Footer from './conponents/Footer/Footer';
import Main from './conponents/Main/Main';

function App() {
    return (
        <div className='App'>
            <Header />
            <Main value='llll' />
            <Footer />
        </div>
    );
}

export default App;
