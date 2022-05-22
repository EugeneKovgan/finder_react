import './Repositories.scss';
import EmptyRepository from '../EmptyRepository/EmptyRepository';

const Repositories = ({ user, repo }) => {
    const numberOfRepos = user.public_repos
    let itemRepo = repo.map((item) => {
        return (
            <div className='RepositoryItem' key={item.id}>
                <a href={item.clone_url} target="blank">
                    <div className='repository_item__container'>
                        <div className='repository_item_title'>{item.name}</div>
                        <div className='repository_item_description'>
                            {item.description}
                        </div>
                    </div>
                </a>
            </div>
        )
    })

    return (
        <div className='Repositories'>
            <div className='repositories__container'>
                {numberOfRepos === 0 ? <EmptyRepository /> :
                    <>
                        <div className='repositories_title'>Repositories ({numberOfRepos})</div>

                        <div className='repositories_list'>
                            {itemRepo}
                        </div>
                    </>}

            </div>
        </div>
    );
};

export default Repositories;
