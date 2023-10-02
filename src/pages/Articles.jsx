import React from 'react'
import { Link } from "react-router-dom";
import {AiOutlineEye } from "react-icons/ai"
import Navbar from '../componenets/Navbar';


const Articles =()=> {
  return (
 <div>
   <Navbar />
    <div className="mt-4">
        <h2 className="text-center font-medium text-xl sm:text-2xl">Articles</h2>

        <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-6 md:px-10 lg:px-20 mt-5">
          {/* Related news card */}
          <Link
            to="/articlesdetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/8.jpg"
                alt="politics"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Rwanda Coding Academy and SOS Technical High
             School approves on collaboration in Ed.system
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://www.thoughtco.com/thmb/o2xaDCaMW93CkSN0kVm53Rj5-Iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarackObama-799035cd446c443fb392110c01768ed0.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Barack Obama gives his final speech on the competition which was taking place in the USA
             
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/6.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             SOS Technical High School Students get to travel to Carnegie Mellon University to study about CyberSecurity
            </h2>
          </Link>
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/11.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Prices of some medicines in pharmacies have startd to decrease because of the bad quality the medicines have and probably being taken as drugs
            </h2>
          </Link> 
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/12.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Nshizi App is starting to be used by many people because of the creativity and innovation in the designing of this app
            </h2>
          </Link>
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/13.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Burabyo Yvan a.k.a Yvan Buravan Rwandan artist dies of pancreatic cancer in the morning of the 17<sup>th</sup>August 2022
            </h2>
          </Link>
          </div>
      <div className="mt-4">
        <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-6 md:px-10 lg:px-20 mt-5">
          {/* Related news card */}
          <Link
            to="/articlesdetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/8.jpg"
                alt="politics"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Rwanda Coding Academy and SOS Technical High
             School approves on collaboration in Ed.system
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://www.thoughtco.com/thmb/o2xaDCaMW93CkSN0kVm53Rj5-Iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarackObama-799035cd446c443fb392110c01768ed0.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Barack Obama gives his final speech on the competition which was taking place in the USA
             
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/6.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             SOS Technical High School Students get to travel to Carnegie Mellon University to study about CyberSecurity
            </h2>
          </Link>
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/11.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Prices of some medicines in pharmacies have startd to decrease because of the bad quality the medicines have and probably being taken as drugs
            </h2>
          </Link>
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/12.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Nshizi App is starting to be used by many people because of the creativity and innovation in the designing of this app
            </h2>
          </Link>
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/13.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Burabyo Yvan a.k.a Yvan Buravan Rwandan artist dies of pancreatic cancer in the morning of the 17<sup>th</sup>August 2022
            </h2>
          </Link>
        </div>
     </div>
     <div className="mt-4">
        <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-6 md:px-10 lg:px-20 mt-5">
          {/* Related news card */}
          <Link
            to="/articlesdetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/8.jpg"
                alt="politics"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Rwanda Coding Academy and SOS Technical High
             School approves on collaboration in Ed.system
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://www.thoughtco.com/thmb/o2xaDCaMW93CkSN0kVm53Rj5-Iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarackObama-799035cd446c443fb392110c01768ed0.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Barack Obama gives his final speech on the competition which was taking place in the USA
             
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/6.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             SOS Technical High School Students get to travel to Carnegie Mellon University to study about CyberSecurity
            </h2>
          </Link>
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/11.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Prices of some medicines in pharmacies have startd to decrease because of the bad quality the medicines have and probably being taken as drugs
            </h2>
          </Link>
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/12.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Nshizi App is starting to be used by many people because of the creativity and innovation in the designing of this app
            </h2>
          </Link>
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/13.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Burabyo Yvan a.k.a Yvan Buravan Rwandan artist dies of pancreatic cancer in the morning of the 17<sup>th</sup>August 2022
            </h2>
          </Link>
        </div>
        <div className="mt-4">
        <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-6 md:px-10 lg:px-20 mt-5">
          {/* Related news card */}
          <Link
            to="/articlesdetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/8.jpg"
                alt="politics"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Rwanda Coding Academy and SOS Technical High
             School approves on collaboration in Ed.system
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="https://www.thoughtco.com/thmb/o2xaDCaMW93CkSN0kVm53Rj5-Iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarackObama-799035cd446c443fb392110c01768ed0.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Barack Obama gives his final speech on the competition which was taking place in the USA
             
            </h2>
          </Link>

          {/* Related news card */}
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/6.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             SOS Technical High School Students get to travel to Carnegie Mellon University to study about CyberSecurity
            </h2>
          </Link>
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/11.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Prices of some medicines in pharmacies have startd to decrease because of the bad quality the medicines have and probably being taken as drugs
            </h2>
          </Link>
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/12.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Nshizi App is starting to be used by many people because of the creativity and innovation in the designing of this app
            </h2>
          </Link>
          <Link
            to="/articlesDetails"
            className="bg-white w-full sm:w-1/2 md:w-1/3 mt-4 p-4 rounded-xl flex flex-col gap-2"
          >
            {/* image container */}
            <div className="bg-black w-full h-[150px] rounded-xl">
              <img
                src="../../../images/13.jpg"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* short details */}

            <div className="ml-4 flex justify-between">
              <div className="bg-blue-100 rounded-2xl">
                <p className="text-blue-400 text-xs px-2 sm:px-[0.7em] py-[0.25em] font-thin uppercase">
                  read more
                </p>
              </div>

              {/* social items */}
              <div className="flex gap-3">
                <div className="flex gap-2 text-gray-500  items-center">
                  <AiOutlineEye />
                  <p className="text-xs  text-gray-500 font-[600]">2.5m</p>
                </div>
              </div>
            </div>
            <h2 className="text-sm font-semibold">
             Burabyo Yvan a.k.a Yvan Buravan Rwandan artist dies of pancreatic cancer in the morning of the 17<sup>th</sup>August 2022
            </h2>
          </Link>
        </div>
     </div>
     </div>
     </div>
     </div>

     
  )
}


export default Articles;
