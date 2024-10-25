import { NavLink, Outlet } from 'react-router-dom';
import profileImage from './assets/blank-profile-picture-973460_960_720.webp'

const RootLayout = () => {



    const navContent = <>

        <NavLink to='/dashboard'
            className={({ isActive }) =>
                `hover:bg-gray-300 transition-all px-14 py-2 rounded-md ${isActive ? "bg-blue-400 hover:bg-blue-400" : ""
                }`
            }>
            Dashboard
        </NavLink>
        <NavLink to='/add-income'
            className={({ isActive }) =>
                `hover:bg-gray-300 transition-all px-14 py-2 rounded-md ${isActive ? "bg-blue-400 hover:bg-blue-400" : ""
                }`
            }>
            Add Income
        </NavLink>
        <NavLink to='/add-expense'
            className={({ isActive }) => `hover:bg-gray-300 transition-all px-14 py-2 rounded-md ${isActive ? "bg-blue-400 hover:bg-blue-400" : ""}`}>
            Add Expense
        </NavLink>

        <NavLink
            to='/'
            className={({ isActive }) => `hover:bg-gray-300 transition-all min-w-[200px] px-14 py-2 rounded-md ${isActive ? "bg-pink-400 hover:bg-pink-400" : ""}`}>
            Statistics
        </NavLink>


    </>


    return (
        <div className='border min-h-screen bg-gradient-to-bl from-blue-200 to-blue-400'>

            <div className="navbar bg-gradient-to-bl from-blue-200 to-blue-400 sticky top-0 z-50 text-black max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu min-h-[600px] gap-5 flex font-semibold items-center menu-sm dropdown-content  bg-purple-200 rounded-box z-[1] mt-3 p-6 ">
                            {navContent}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Chamon Ali</a>
                </div>

                <div className="navbar-end">
                    <img src={profileImage} className='w-[50px] rounded-full' alt="" />
                </div>
            </div>

            <div className='grid text-gray-700  lg:grid-cols-12 grid-cols-1 gap-10 mt-10 max-w-7xl mx-auto  '>
                <div className='col-span-3 h-[300px] sticky top-20   hidden lg:block rounded-md p-6 bg-purple-200'>
                    <div className='flex flex-col gap-2 items-center'>
                        {navContent}
                    </div>
                </div>

                <div className='lg:col-span-9  col-span-1 bg-gray-200'>
                    <Outlet></Outlet>
                </div>
            </div>


        </div>
    );
};

export default RootLayout;