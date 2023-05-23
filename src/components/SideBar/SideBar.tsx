import InboxIcon from '@mui/icons-material/Inbox';
import './SideBar.css'
import { useTranslation } from 'react-i18next';

const SideBar = () => {
    const { t } = useTranslation()

    
    return (
        <>
        <div className='side-bar'>
        <div className='inbox'>                     
            <InboxIcon
                    sx={{
                        color: '#089cf5',
                        marginRight: '5px',               
                    }} /> 
                <span>{t('SideBar.inbox')}</span>            
            </div>            
            <p>{t('SideBar.today')}</p>
            <p>{t('SideBar.upcoming')}</p>
            <p>{t('SideBar.favorites')}</p>
            <p>{t('SideBar.projects')}</p>           
        </div>    
        </>
    )
}

export default SideBar