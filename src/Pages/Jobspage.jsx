import React from 'react';
import Joblistings from '../components/Joblistings';

export const jobsLoader = async () => {
  const res = await fetch('/api/jobs');
  if (!res.ok) {
    throw new Error('Failed to fetch jobs');
  }
  return res.json();
};

const Jobspage = () => {
  return (
    <>
      <Joblistings />
    </>
  );
};

export default Jobspage;