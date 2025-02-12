import React from 'react';
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import Cards from './components/Homecards';
// import Joblisting from './components/Joblistings';
// import Viewjobs from './components/Viewjobs';
import Mainlayout from './layouts/Mainlayout';
import Homepage from './Pages/Homepage';
const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Mainlayout/>}>
    <Route index element={<Homepage/>}/>
    
  </Route>,
));
const App = () => {
return (
    <RouterProvider router={router}/>
  )
}
export default App
