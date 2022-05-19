import './UserInfo.scss';
import followers_icon from '../../../assets/svg/followers_icon.svg';
import following_icon from '../../../assets/svg/following_icon.svg';

const UserInfo = (props) => {

    return (
        <div className='UserInfo'>
            <div className='user_info__container'>
                <img className='user_info__avatar' src={props.repo.avatar_url} alt='avatar_1' />
                <div className='description_block'>
                    <div className='description_block__name'>{!props.repo.name ? props.repo.login : props.repo.name}</div>
                    <div className='description_block__link'>

                        <a href={props.repo.html_url} target="blank">{props.repo.login}</a>
                    </div>
                    <div className='description_block__footer'>
                        <div className='description_block__footer_followers'>
                            <img src={followers_icon} alt='followers_icon' />
                            <p>{props.repo.followers} followers</p>
                        </div>
                        <div className='description_block__footer_following'>
                            <img src={following_icon} alt='following_icon' />
                            <p>{props.repo.following} following</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
