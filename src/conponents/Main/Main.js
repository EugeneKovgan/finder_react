import './Main.scss';
import StartPage from './StartPage/StartPage';
import UserNotFoundPage from './UserNotFoundPage/UserNotFoundPage';

const Main = () => {
    return (
        <div className='Main'>
            <div className='main__content-container'>
                <StartPage />
                {/* <UserNotFoundPage /> */}
            </div>
        </div>
    );
};

export default Main;
