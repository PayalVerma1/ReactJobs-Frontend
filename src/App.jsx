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
import JobPage ,{jobLoader} from './Pages/JobPage';
import Notfound from './Pages/Notfound';
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Mainlayout/>}>
    <Route index element={<Homepage/>}/>
    <Route path='/jobs' element={<Jobspage/>}/>
    <Route path='/jobs/:id' element={<JobPage/>} loader={jobLoader}/>
    <Route path='*' element={<Notfound/>}/>
  </Route>,
));
const App = () => {
return (
    <RouterProvider router={router}/>
  )
}
export default App
