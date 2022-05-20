import './Main.scss';
import UserInfoBlock from './UserInfoBlock/UserInfoBlock';
import StartPage from './StartPage/StartPage';
import UserNotFoundPage from './UserNotFoundPage/UserNotFoundPage';

const Main = (props) => {

    return (
        <div className='Main'>
            <div className='styles.main__content-container'>
                {props.user ? <UserInfoBlock user={props.user} repo={props.repo} /> : <StartPage />}
            </div>
        </div>
    );
};

export default Main;
