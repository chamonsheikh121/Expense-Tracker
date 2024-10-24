import React, { useContext } from 'react';
import Title from './Title';
import { AuthContext } from './AuthProvider';
import Submit from './Submit';
import { RiDeleteBin4Fill } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import img from './assets/C0SPERjD4hfgAAAAAElFTkSuQmCC.png'

const AddExpense = () => {
    const { currentDate } = useContext(AuthContext)
    return (
        <div>
            <div className='grid md:grid-cols-12 grid-cols-1 gap-6 p-2'>
                <div className='col-span-6 flex flex-col justify-center bg-gray-300 p-2 space-y-5'>
                    <Title title={'add expense'}></Title>
                    <div>
                        <p className='inputLabel'>Title :</p>
                        <div className='w-full flex items-center '>
                            <input className='creativeInput flex-1' type="number" name="" id="" placeholder='Expense title' /><span className='ml-2'>TK</span>
                        </div>
                    </div>
                    <div>
                        <p className='inputLabel'>Amount :</p>
                        <div className='w-full flex items-center '>
                            <input className='creativeInput flex-1' type="number" name="" id="" placeholder='Input amount' /><span className='ml-2'>TK</span>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between gap-5 lg:gap-24'>
                        <div className='flex-1'>
                            <p className='inputLabel'>Expense category :</p>
                            <select className="select creativeSelect select-bordered select-sm md:w-full w-1/2 max-w-xs">
                                <option disabled defaultValue={'Small'}>Small</option>
                                <option>Small Apple</option>
                                <option>Small Orange</option>
                                <option>Small Tomato</option>
                            </select>
                        </div>
                        <div className='flex-1'>
                            <p className='inputLabel'>Date :</p>
                            <input type="date" className='creativeDate md:w-full w-1/2'  defaultValue={currentDate} name="" id="" />
                        </div>

                    </div>
                    <textarea className='creativeInput w-full p-2 min-h-20' placeholder='Income Description' name="" id=""></textarea>
                    <div className='text-center'>
                        <Submit></Submit>
                    </div>
                </div>
                <div className='col-span-6 space-y-5'>

                    <div className='space-y-2'>
                        <div className='flex items-center h-10 gap-5'>
                            <input type="search" placeholder='Search by title' className='flex-1 creativeInput' name="" id="" /><button className='flex items-center h-full border-gray-500 btn btn-sm hover:bg-white'>Search <CiSearch size={20} className='cursor-pointer'></CiSearch></button>
                        </div>
                        <div className='flex justify-between
                        '>
                            <div className='flex items-center gap-2 text-sm'>
                                <input type="checkbox" defaultChecked className="checkbox checkbox-sm border-black" /> <span>Category</span>
                            </div>
                            <select className="select creativeSelect select-bordered select-sm  max-w-xs">
                                <option disabled defaultValue={'Small'}>Small</option>
                                <option>Small Apple</option>
                                <option>Small Orange</option>
                                <option>Small Tomato</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <h5 className='mb-2'>Last 5 expenses</h5>
                        <div className='space-y-2'>
                            <div className='rounded-md bg-gray-300 p-2 flex items-center justify-between'>
                                <div className='flex items-start gap-2'>
                                    <img src={img} className='w-[50px] rounded-full object-cover' alt="" />
                                    <div>
                                        <h4 className='font-bold text-[18px]'>Expense title here</h4>
                                        <p className='text-sm font-semibold'>Food 300 TK on 10 Oct, 2024</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <RiDeleteBin4Fill size={25} className='text-red-700 cursor-pointer'></RiDeleteBin4Fill>
                                    <AiFillEdit size={25} className=' cursor-pointer'></AiFillEdit>
                                </div>
                            </div>
                            <div className='rounded-md bg-gray-300 p-2 flex items-center justify-between'>
                                <div className='flex items-start gap-2'>
                                    <img src={img} className='w-[50px] rounded-full object-cover' alt="" />
                                    <div>
                                        <h4 className='font-bold text-[18px]'>Expense title here</h4>
                                        <p className='text-sm font-semibold'>Food 300 TK on 10 Oct, 2024</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <RiDeleteBin4Fill size={25} className='text-red-700 cursor-pointer'></RiDeleteBin4Fill>
                                    <AiFillEdit size={25} className=' cursor-pointer'></AiFillEdit>
                                </div>
                            </div>
                            <div className='rounded-md bg-gray-300 p-2 flex items-center justify-between'>
                                <div className='flex items-start gap-2'>
                                    <img src={img} className='w-[50px] rounded-full object-cover' alt="" />
                                    <div>
                                        <h4 className='font-bold text-[18px]'>Expense title here</h4>
                                        <p className='text-sm font-semibold'>Food 300 TK on 10 Oct, 2024</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <RiDeleteBin4Fill size={25} className='text-red-700 cursor-pointer'></RiDeleteBin4Fill>
                                    <AiFillEdit size={25} className=' cursor-pointer'></AiFillEdit>
                                </div>
                            </div>
                            <div className='rounded-md bg-gray-300 p-2 flex items-center justify-between'>
                                <div className='flex items-start gap-2'>
                                    <img src={img} className='w-[50px] rounded-full object-cover' alt="" />
                                    <div>
                                        <h4 className='font-bold text-[18px]'>Expense title here</h4>
                                        <p className='text-sm font-semibold'>Food 300 TK on 10 Oct, 2024</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <RiDeleteBin4Fill size={25} className='text-red-700 cursor-pointer'></RiDeleteBin4Fill>
                                    <AiFillEdit size={25} className=' cursor-pointer'></AiFillEdit>
                                </div>
                            </div>
                            <div className='rounded-md bg-gray-300 p-2 flex items-center justify-between'>
                                <div className='flex items-start gap-2'>
                                    <img src={img} className='w-[50px] rounded-full object-cover' alt="" />
                                    <div>
                                        <h4 className='font-bold text-[18px]'>Expense title here</h4>
                                        <p className='text-sm font-semibold'>Food 300 TK on 10 Oct, 2024</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <RiDeleteBin4Fill size={25} className='text-red-700 cursor-pointer'></RiDeleteBin4Fill>
                                    <AiFillEdit size={25} className=' cursor-pointer'></AiFillEdit>
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-5'>
                            <div className='text-center mt-5'>
                                <Link to='/add-expense/view-all-expenses'><button>View all ....</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddExpense;