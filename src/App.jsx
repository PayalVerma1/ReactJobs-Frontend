import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import Mainlayout from './layouts/Mainlayout';
import Homepage from './Pages/Homepage';
import Jobspage from './Pages/Jobspage';
import JobPage, { jobLoader } from './Pages/JobPage';
import Notfound from './Pages/Notfound';
import AddJobPage from './Pages/AddJobPage';

const App = () => {
  const addJob = async (newjob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newjob),
    });
    return;
  };

  const deleteJob = async (id) => {
    console.log('delete', id);
    try {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });
      console.log(res);
      if (!res.ok) {
        throw new Error('Failed to delete job');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<Jobspage />} />
        <Route path="/addjobs" element={<AddJobPage addjobsubmit={addJob} />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
