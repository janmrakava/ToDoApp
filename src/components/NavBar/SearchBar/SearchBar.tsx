import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';

export const SearchBar = () => {
    const { t } = useTranslation()
    const placeHolderText: string = t('SearchBar.text') 
    return (
        <>
        <div className='search-bar'>            
            <SearchIcon                                
                className='search-icon'
            />
            <input type="text" placeholder={placeHolderText}  className='input-bar'/>
         
        </div>
        
        </>
    )
}