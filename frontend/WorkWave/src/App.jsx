import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Navbar from './pages/Navbar/Navbar'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import IssueDetails from './pages/IssueDetails/IssueDetails'
import Subscription from './pages/Subscription/Subscription'
import Auth from './pages/Auth/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from './pages/Redux/Auth/Action'
import { store } from './pages/Redux/Store'
import { fetchProjects } from './pages/Redux/Project/Action'
import UpgradeSucess from './pages/Subscription/UpgradeSucess'
import AcceptInvitaion from './pages/Project/AcceptInvitation'

function App() {
  const dispatch=useDispatch();
  const {auth}=useSelector(store=>store)
  useEffect(()=>{
    dispatch(getUser())
    dispatch(fetchProjects({}))
  },[auth.jwt])
  console.log(auth);
  return (
    <>

     {auth.user?

      <div>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project/:id' element={<ProjectDetails/>}/>
      <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails/>}/>
      <Route path='/upgrade_plane' element={<Subscription/>}/>
      <Route path='/upgrade_plan/success' element={<UpgradeSucess/>}/>
      <Route path='/accept_invitation' element={<AcceptInvitaion/>}/>
     </Routes>
     </div>
     
     :<Auth/>
     }
      
    
    </>
  )
}

export default App
