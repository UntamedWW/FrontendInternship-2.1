
import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import AboutPage from "./Pages/AboutPage/AboutPage"
import NavBar from './components/NavBar'
import UserProfile from "./Pages/UserProfile/UserProfile"
import UserAuthorization from "./Pages/UserAuthorization/UserAuthorization"
import CompanyProfile from './Pages/CompanyProfile/CompanyProfile'
import ListOfUsers from './Pages/ListOfUsers/ListOfPages'
import ListOfCompanies from './Pages/ListOfCompanies/ListOfCompanies'
import UserRegistration from './Pages/UserRegistration/UserRegistration'
import Modal from './components/Modal/Modal'
function App() {
  const [modalActive, setModalActive] = useState(true)
  return (
    <>
    <h1>Hi, welcome to this prob app!</h1>
    <NavBar />
      <Routes>
        <Route path='/' element={<UserProfile />} />
        <Route path='/aboutpage' element={<AboutPage />} />
        <Route path='/login' element={<UserAuthorization />} />
        <Route path='/company.profile' element={<CompanyProfile />} />
        <Route path='/list-of-users' element={<ListOfUsers />} />
        <Route path='/list-of-companies' element={<ListOfCompanies />} />
        <Route path='/registration' element={<UserRegistration />} />
      
      </Routes>
      <button className='open-btn' onClick={() => setModalActive(true)}>Open universal modal window</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <p>some random text</p>
      </Modal>
    </>
)}

export default App;