import './Repositories.scss';
// import RepositoryItem from '../RepositoryItem/RepositoryItem';

const Repositories = (props) => {
    let counter = 0
    let itemRepo = props.repo.map((item) => {
        counter++
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
                <div className='repositories_title'>Repositories ({counter})</div>
                <div className='repositories_list'>
                    {itemRepo}
                </div>
            </div>
        </div>
    );
};

export default Repositories;
