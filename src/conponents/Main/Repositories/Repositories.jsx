import './Repositories.scss';
import RepositoryItem from '../RepositoryItem/RepositoryItem';

const Repositories = () => {
    return (
        <div className='Repositories'>
            <div className='repositories__container'>
                <div className='repositories_title'>Repositories (249)</div>
                <div className='repositories_list'>
                    <RepositoryItem />
                    <RepositoryItem />
                    <RepositoryItem />
                </div>
            </div>
        </div>
    );
};

export default Repositories;
