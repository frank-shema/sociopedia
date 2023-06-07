import React from 'react'
import { BrowserRouter , Navigate , Routes , Route } from 'react-router-dom'
import HomePage from 'scenes/homepage'
import LoginPage from 'scenes/loginpage'
import ProfilePage from 'scenes/profilePage'


export default function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/'  element={<LoginPage/>} />
      <Route path='/home' element={< HomePage/>}/>
      <Route path='/profile/:userId' element={<ProfilePage/>} />
     </Routes>
     </BrowserRouter> 
    </div>
  )
}
