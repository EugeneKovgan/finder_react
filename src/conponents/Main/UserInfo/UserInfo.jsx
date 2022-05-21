import './UserInfo.scss';
import followers_icon from '../../../assets/svg/followers_icon.svg';
import following_icon from '../../../assets/svg/following_icon.svg';

const UserInfo = ({ user }) => {

    return (
        <div className='UserInfo'>
            <div className='user_info__container'>
                <img className='user_info__avatar' src={user.avatar_url} alt='avatar_1' />
                <div className='description_block'>
                    <a href={user.html_url} target="blank">
                        <div className='description_block__name'>{!user.name ? user.login : user.name}</div>
                    </a>
                    <div className='description_block__link'>

                        <a href={user.html_url} target="blank">{user.login}</a>
                    </div>
                    <div className='description_block__footer'>
                        <div className='description_block__footer_followers'>
                            <img src={followers_icon} alt='followers_icon' />
                            <p>{user.followers} followers</p>
                        </div>
                        <div className='description_block__footer_following'>
                            <img src={following_icon} alt='following_icon' />
                            <p>{user.following} following</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
