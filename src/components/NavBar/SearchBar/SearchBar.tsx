import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = () => {
    return (
        <>
        <div className='search-bar'>
            <SearchIcon 
                sx={{
                    color: 'white'
                }}
            />
            <input type="search" placeholder='Hledat' className='input-search'/>
         
        </div>
        
        </>
    )
}