import React from 'react'
import { Link } from 'react-router-dom'
import {FaExclamationTriangle} from "react-icons/fa"
const Notfound = () => {
  return (
    <>
        <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="fas fa-exclamation-triangle text-yellow-400 text-8xl fa-4x mt-10 mb-4"></FaExclamationTriangle>
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
        >Go Back</Link>
    </section></>
  )
}

export default Notfound