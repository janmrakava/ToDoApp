import InboxIcon from '@mui/icons-material/Inbox';
import './SideBar.css'
const SideBar = () => {
    return (
        <>
        <div className='side-bar'>
            <div className='inbox'>                     
            <InboxIcon
                    sx={{
                        color: '#089cf5',
                        marginRight: '5px',               
                    }} /> 
                <span>Inbox</span>
            
            </div>
            
            <p>Today</p>
            <p>Upcoming</p>
            <p>Favorites</p>
            <p>Projects</p>           
        </div>    
        </>
    )
}

export default SideBar