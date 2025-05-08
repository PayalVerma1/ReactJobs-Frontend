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
import Editjob from './Pages/Editjob';

// Base API URL - keep it consistent
const API_BASE_URL = '/api';

// Loader for the edit job page
const editJobLoader = async ({ params }) => {
  const res = await fetch(`${API_BASE_URL}/addjobs/${params.id}`);
  if (!res.ok) {
    throw new Error("Failed to load job data");
  }
  return res.json();
};

const App = () => {
  const addJob = async (newjob) => {
    try {
      const res = await fetch(`${API_BASE_URL}/addjobs/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newjob),
      });
      
      if (!res.ok) {
        throw new Error('Failed to add job');
      }
      
      return await res.json();
    } catch (error) {
      console.error('Error adding job:', error);
      throw error; // Re-throw to be handled by the component
    }
  };

  const deleteJob = async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/addjobs/${id}`, {
        method: 'DELETE',
      });
      
      if (!res.ok) {
        throw new Error('Failed to delete job');
      }
      
      return true; // Return success indicator
    } catch (error) {
      console.error('Error deleting job:', error);
      throw error;
    }
  };

  const updateJob = async (job) => {
    try {
      const res = await fetch(`${API_BASE_URL}/addjobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(job),
      });
      
      if (!res.ok) {
        throw new Error('Failed to update job');
      }
      
      return await res.json(); 
    } catch (error) {
      console.error('Error updating job:', error);
      throw error;
    }
  };


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<Jobspage />} loader={jobLoader} />
        <Route path="/addjobs" element={<AddJobPage addjobsubmit={addJob} />} />
        <Route 
          path="/jobs/:id" 
          element={<JobPage deleteJob={deleteJob} />} 
          loader={jobLoader} 
        />
        <Route 
          path="/edit-job/:id" 
          element={<Editjob updatejobsubmit={updateJob} />} 
          loader={editJobLoader} 
        />
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;