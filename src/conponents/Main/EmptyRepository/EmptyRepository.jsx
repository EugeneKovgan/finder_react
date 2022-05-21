import './EmptyRepository.scss';
import empty_icon from '../../../assets/svg/empty-list_icon.svg';
const EmptyRepository = () => {
    return (
        <div className='EmptyRepository'>
            <div className='empty-repository__content-container'>
                <img src={empty_icon} alt='search-big_icon' />
                <div className='description'>Repository list is empty</div>
            </div>
        </div>
    );
};

export default EmptyRepository;
