import './Navbar.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { SearchBar } from './SearchBar/SearchBar';

export const Navbar = () => {
    return (
        <>
        <nav className="navbar">
        <MenuSharpIcon 
            sx={{
                margin: '10px',
                marginLeft: '20px',
                color: 'white'                
            }}        
        />
        <HomeOutlinedIcon 
            sx={{
                color: 'white',
            }}
        />
        <SearchBar />

        </nav>
        
        
        </>
    )
}