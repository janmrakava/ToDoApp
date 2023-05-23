import { Navbar } from '../components/NavBar/Navbar'
import SideBar from '../components/SideBar/SideBar'
import { useTranslation } from 'react-i18next';
import { Suspense } from "react"
import i18n from  'i18next';
import './App.css'

const languages = [
  { code: 'en', nativeName: 'English' },
  { code: 'cs', nativeName: 'Czech' },
  { code: 'es', nativeName: 'Spanish'}
]
const buttonLng = languages.map((lng) => {
  return (
    <button
      className='lng-change'
      key={lng.code}
      type='submit'
      onClick={() => i18n.changeLanguage(lng.code)}
    >
    {lng.nativeName}  

    </button>
  )
})

function App() {

  const { t } = useTranslation()

  return (
    <>
    <Suspense>
      <h2>{t('MainPage.text')}</h2>
     
      {buttonLng}
      <Navbar />
      <SideBar />
    </Suspense>
    </>
  )
}

export default App
