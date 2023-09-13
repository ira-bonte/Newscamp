import React from 'react'
import Navbar from "../componenets/Navbar";

const Form = () => {
  return (
    <>   
     <Navbar />
     <div className='bg-black'>
     <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">LOGIN</h1>
     </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-50">
    <form className="bg-white shadow-md rounded px-8 pt-3 pb-8 mb-4 w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Ira Bonte"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="irabonte123@gmail.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
          Telephone
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Tel"
          type="number"
          placeholder="0792332012"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Confirm Password
        </label>
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 text-xs italic">Re-enter your password.</p>
      </div>
      <div className='flex items-center justify-between bg-aliceblue'>
         <div className="flex items-center justify-between">
            <a
                href="/articlesdetails"
                className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
            </a>
         </div>
         <div className="flex items-center justify-between">
         <a
          href="/home"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
             >
               Cancel
         </a>
         </div>
      </div>
    </form>
  </div>
   </>
  )
}

export default Form;
