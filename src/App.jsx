import React from 'react';
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Cards from './components/Homecards';
// import Joblisting from './components/Joblistings';
// import Viewjobs from './components/Viewjobs';
import Mainlayout from './layouts/Mainlayout';
import Homepage from './Pages/Homepage';
import Jobspage from './Pages/Jobspage';
import Addjobs from './Pages/Addjobs';
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Mainlayout/>}>
    <Route index element={<Homepage/>}/>
    <Route path='/jobs' element={<Jobspage/>}/>
    <Route path='/addjobs' element={<Addjobs/>}/>
  </Route>,
));
const App = () => {
return (
    <RouterProvider router={router}/>
  )
}
export default App
