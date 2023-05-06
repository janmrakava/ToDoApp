import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    return (
        <>
        <div className='search-bar'>            
            <SearchIcon                                
                className='search-icon'
            />
            <input type="text" placeholder='Hledat' className='input-bar'/>
         
        </div>
        
        </>
    )
}