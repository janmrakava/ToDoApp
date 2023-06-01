import InboxIcon from '@mui/icons-material/Inbox';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AssignmentIcon from '@mui/icons-material/Assignment';
import './SideBar.css'
import { useTranslation } from 'react-i18next';

const SideBar = () => {
    const { t } = useTranslation()

    
    return (
        <>
        <div className='side-bar'>
            <div className='side-bar-item'>                     
                <InboxIcon
                        sx={{
                            color: '#089cf5',
                            marginRight: '20px',     
                                      
                        }} /> 
                    <span>{t('SideBar.inbox')}</span>            
            </div>  
            <div className='side-bar-item'>
                <CalendarTodayIcon 
                    sx={{
                        color: '#487D2C',
                        marginRight: '20px',     
                    }}                  
                />
                <span>{t('SideBar.today')}</span>                
            </div>          
            <div className='side-bar-item'>
                <CalendarMonthIcon 
                    sx={{
                        color: '#922BD1',
                        marginRight: '20px',     
                    }}                  
                />
                <span>{t('SideBar.upcoming')}</span>                
            </div>   
            <div className='side-bar-item'>
                <FavoriteIcon 
                    sx={{
                        color: '#EFB820',
                        marginRight: '20px',     
                    }}                  
                />
                <span>{t('SideBar.favorites')}</span>                
            </div> 
            <div className='side-bar-item'>
                <AssignmentIcon 
                    sx={{
                        color: '#EF205D',
                        marginRight: '20px',     
                    }}                  
                />
                <span>{t('SideBar.projects')}</span>                
            </div> 
            
                     
        </div>    
        </>
    )
}

export default SideBar