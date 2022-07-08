import React from 'react'

const Buscador = () => {
  return (
    <div className='container bg-white rounded-2xl flex w-11/12 m-auto justify-around items-center px-3 h-12 mt-3'>
        <div className='w-9/12'>
            <label className="relative block">
                <span className="sr-only">Buscar</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white h-8 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm" placeholder="Buscar..." type="text" name="search"/>
            </label>
        </div>
        <div className=''>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
        </div>
    </div>
  )
}

export default Buscador