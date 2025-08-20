import React, { useState } from 'react'

export default function App() {
  const [color, setColor] = useState("black");

  const colorList = ["green", "red", "yellow", "blue"];

  let screenStyle = { backgroundColor: color };
  return (
    <div className='w-full h-screen duration-300' style={screenStyle}>


      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://github.com/SJaynesh" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JavaScript</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {colorList.map((val, index) => <button key={index} type="button" onClick={() => setColor(val)} className={`text-white bg--700 hover:bg-${val}-800 focus:outline-none focus:ring-4 focus:ring-${val}-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-${val}-600 dark:hover:bg-${val}-700 dark:focus:ring-${val}-800`}>{val[0].toUpperCase() + val.slice(1, val.length)}</button>
              )}

              {/* <button type="button" onClick={() => setColor("red")} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Red</button>
              <button type="button" onClick={() => setColor("yellow")} className="text-white bg-yellow-400 hover:bg-yellow-800 focus:outline-none focus:ring-4 focus:ring-yellow-400 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-yellow-400 dark:hover:bg-yellow-400 dark:focus:ring-yellow-800">Yellow</button> */}
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}
