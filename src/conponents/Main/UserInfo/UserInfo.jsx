import './UserInfo.scss';
import avatar_1 from '../../../assets/img/avatar_1.png';
import followers_icon from '../../../assets/svg/followers_icon.svg';
import following_icon from '../../../assets/svg/following_icon.svg';

const UserInfo = () => {
    return (
        <div className='UserInfo'>
            <div className='user_info__container'>
                <img className='user_info__avatar' src={avatar_1} alt='avatar_1' />
                <div className='description_block'>
                    <div className='description_block__name'>Dan Abramov</div>
                    <div className='description_block__link'>
                        <a href=''> gaearon</a>
                    </div>
                    <div className='description_block__footer'>
                        <div className='description_block__footer_followers'>
                            <img src={followers_icon} alt='followers_icon' />
                            <p>65.8k followers</p>
                        </div>
                        <div className='description_block__footer_following'>
                            <img src={following_icon} alt='following_icon' />
                            <p>65.8k followers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
