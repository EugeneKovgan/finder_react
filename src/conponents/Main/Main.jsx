import './Main.scss';
import UserInfoBlock from './UserInfoBlock/UserInfoBlock';

const Main = ({ user, repo }) => {

    return (
        <div className='Main'>
            <div className='styles.main__content-container'>
                <UserInfoBlock user={user} repo={repo} />
            </div>
        </div>
    );
};

export default Main;
