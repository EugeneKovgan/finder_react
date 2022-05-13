import './UserNotFoundPage.scss';
import userNotFoundBig_icon from '../../../assets/svg/user-not-found-big_icon.svg';
const UserNotFoundPage = () => {
    return (
        <div className='UserNotFoundPage'>
            <div className='user-not-found-page__content-container'>
                <img src={userNotFoundBig_icon} alt='user-not-found-big_icon' />
                <div className='description'>User not found</div>
            </div>
        </div>
    );
};

export default UserNotFoundPage;
