import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import AboutPage from "./Pages/AboutPage/AboutPage"
import NavBar from './components/NavBar'
import UserProfile from "./Pages/UserProfile/UserProfile"
import UserAuthorization from "./Pages/UserAuthorization/UserAuthorization"
import CompanyProfile from './Pages/CompanyProfile/CompanyProfile'
import ListOfUsers from './Pages/ListOfUsers/ListOfUsers'
import ListOfCompanies from './Pages/ListOfCompanies/ListOfCompanies'
import UserRegistration from './Pages/UserRegistration/UserRegistration'
import Modal from './components/Modal/Modal'
import './components/Modal/Modal.css'
import Alert from './components/Alert'
import StartPage from './Pages/StartPage'

function App() { 
  const [modalActive, setModalActive] = useState(false)
  let items = ["Company1", "Company2", "Company3"]
  let persons = [""]
  
  const handleSelectedItem = (item: string) => {
    console.log(item)
  }

  const handleSelectedUser = (user: string) => {
    console.log(user)
  }

  const [AlertVisible, SetAlertVisibiality] = useState(false);

  return (
    <>
      <h1>Hi, welcome to this prob app!</h1>
      <NavBar></NavBar>
      <Routes >
        <Route path='/' element={<StartPage />} />
        <Route path='/aboutpage' element={<AboutPage />} />
        <Route path='/login' element={<UserAuthorization />} />
        <Route path='/company.profile' element={<CompanyProfile />} />
        <Route path='/list-of-users' element={<ListOfUsers heading='List of users' onSelectedUser={handleSelectedUser} />} />
        <Route path='/list-of-companies' element={<ListOfCompanies items={items} heading='List of companies' onSelectedItem={handleSelectedItem}/>} />
        <Route path='/registration' element={<UserRegistration />} />
      </Routes>
      <Modal active={modalActive} setActive={setModalActive}> </Modal>
      <div>
        {AlertVisible && <Alert onClose={() => SetAlertVisibiality(false) }>Alert is opened!</Alert>}
        <button color='primary' onClick={() => SetAlertVisibiality(true)}>Alert</button>
      </div>
    </>
  )
}



export default App;