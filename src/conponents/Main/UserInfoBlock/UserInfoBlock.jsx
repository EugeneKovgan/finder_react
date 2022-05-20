import './UserInfoBlock.scss';
import Repositories from '../Repositories/Repositories'
import UserInfo from '../UserInfo/UserInfo';

const UserInfoBlock = (props) => {
    return (
        <div className='UserInfoBlock'>
            <UserInfo user={props.user} />
            <Repositories repo={props.repo} />
        </div>
    );
};

export default UserInfoBlock;
