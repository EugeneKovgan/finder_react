import './Repositories.scss';
import RepositoryItem from '../RepositoryItem/RepositoryItem';

const Repositories = (props) => {
    return (
        <div className='Repositories'>
            <div className='repositories__container'>
                <div className='repositories_title'>Repositories ({props.repo.public_repos})</div>
                <div className='repositories_list'>
                    <RepositoryItem repo={props.repo} />
                </div>
            </div>
        </div>
    );
};

export default Repositories;
