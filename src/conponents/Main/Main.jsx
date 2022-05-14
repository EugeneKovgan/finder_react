import './Main.scss';
import Repositories from './Repositories/Repositories';
import StartPage from './StartPage/StartPage';
import UserInfo from './UserInfo/UserInfo';
import UserNotFoundPage from './UserNotFoundPage/UserNotFoundPage';

const Main = () => {
    return (
        <div className='Main'>
            <div className='main__content-container'>
                {/* <StartPage /> */}
                {/* <UserNotFoundPage /> */}
                <UserInfo />
                <Repositories />
            </div>
        </div>
    );
};

export default Main;
