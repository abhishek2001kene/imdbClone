import React from 'react'




import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>

        {/* <img className='w-[50px]' src={} alt="" /> */}

        <Link to='/' className='text-gray-500 text-3xl font-bold'>Movies</Link>

        <Link to='/watchlist' className='text-gray-500 text-3xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar