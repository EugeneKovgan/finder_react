import './UserInfoBlock.scss';
import Repositories from '../Repositories/Repositories'
import UserInfo from '../UserInfo/UserInfo';

const UserInfoBlock = ({ user, repo }) => {
    return (
        <div className='UserInfoBlock'>
            <UserInfo user={user} />
            <Repositories repo={repo} />
        </div>
    );
};

export default UserInfoBlock;
