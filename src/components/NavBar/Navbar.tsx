import './Navbar.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SearchBar } from './SearchBar/SearchBar';

export const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <div className='container-navbar'>
                <MenuSharpIcon 
                    sx={{
                        margin: '10px',
                        marginLeft: '20px',
                        color: 'white'                
                    }}
                    className='material-icon'      
                />
                <HomeOutlinedIcon 
                    sx={{
                        color: 'white',
                    }}
                    className='material-icon'
                />
                <SearchBar />
            </div>
            <div className='container-navbar'>               
                <AddIcon className='material-icon'/>
                <DoneIcon className='material-icon'/>
                <HelpOutlineIcon className='material-icon'/>
                <div className='notification'>
                    <NotificationsNoneIcon className='material-icon'/> 
                    <p>0/5</p>
                </div>
                <AccountCircleIcon className='material-icon'/>
            </div>
        </nav>
        
        
        </>
    )
}