import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBin4Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import img from './assets/C0SPERjD4hfgAAAAAElFTkSuQmCC.png'
import { BsArrowLeft } from 'react-icons/bs';


const AllExpenses = () => {

    const data = [
        { "id": 1, "name": "John" },
        { "id": 2, "name": "Jane" },
        { "id": 3, "name": "Michael" },
        { "id": 4, "name": "Sarah" },
        { "id": 5, "name": "David" },
        { "id": 6, "name": "Emily" },
        { "id": 7, "name": "Daniel" },
        { "id": 8, "name": "Olivia" },
        { "id": 9, "name": "James" },
        { "id": 10, "name": "Sophia" },
        { "id": 11, "name": "Christopher" },
        { "id": 12, "name": "Emma" },
        { "id": 13, "name": "Matthew" },
        { "id": 14, "name": "Ava" },
        { "id": 15, "name": "Joshua" },
        { "id": 16, "name": "Isabella" },
        { "id": 17, "name": "Andrew" },
        { "id": 18, "name": "Mia" },
        { "id": 19, "name": "Ethan" },
        { "id": 20, "name": "Amelia" },
        { "id": 21, "name": "Joseph" },
        { "id": 22, "name": "Charlotte" },
        { "id": 23, "name": "Samuel" },
        { "id": 24, "name": "Harper" },
        { "id": 25, "name": "Alexander" },
        { "id": 26, "name": "Lily" },
        { "id": 27, "name": "Benjamin" },
        { "id": 28, "name": "Ella" },
        { "id": 29, "name": "Henry" },
        { "id": 30, "name": "Grace" },
        { "id": 31, "name": "Logan" },
        { "id": 32, "name": "Chloe" },
        { "id": 33, "name": "Liam" },
        { "id": 34, "name": "Scarlett" },
        { "id": 35, "name": "Mason" },
        { "id": 36, "name": "Aria" },
        { "id": 37, "name": "Lucas" },
        { "id": 38, "name": "Zoe" },
        { "id": 39, "name": "Jackson" },
        { "id": 40, "name": "Ellie" },
        { "id": 41, "name": "Sebastian" },
        { "id": 42, "name": "Layla" },
        { "id": 43, "name": "Aiden" },
        { "id": 44, "name": "Luna" },
        { "id": 45, "name": "Owen" },
        { "id": 46, "name": "Hannah" },
        { "id": 47, "name": "Elijah" },
        { "id": 48, "name": "Avery" },
        { "id": 49, "name": "Gabriel" },
        { "id": 50, "name": "Aubrey" },
        { "id": 51, "name": "Carter" },
        { "id": 52, "name": "Evelyn" },
        { "id": 53, "name": "Jack" },
        { "id": 54, "name": "Nora" },
        { "id": 55, "name": "Wyatt" },
        { "id": 56, "name": "Riley" },
        { "id": 57, "name": "Julian" },
        { "id": 58, "name": "Hazel" },
        { "id": 59, "name": "Grayson" },
        { "id": 60, "name": "Victoria" },
        { "id": 61, "name": "Isaac" },
        { "id": 62, "name": "Penelope" },
        { "id": 63, "name": "Nathan" },
        { "id": 64, "name": "Lillian" },
        { "id": 65, "name": "Caleb" },
        { "id": 66, "name": "Zoey" },
        { "id": 67, "name": "Ryan" },
        { "id": 68, "name": "Addison" },
        { "id": 69, "name": "Asher" },
        { "id": 70, "name": "Willow" },
        { "id": 71, "name": "Leo" },
        { "id": 72, "name": "Lucy" },
        { "id": 73, "name": "Dylan" },
        { "id": 74, "name": "Stella" },
        { "id": 75, "name": "Ezra" },
        { "id": 76, "name": "Paisley" },
        { "id": 77, "name": "Thomas" },
        { "id": 78, "name": "Elliana" },
        { "id": 79, "name": "Hudson" },
        { "id": 80, "name": "Violet" },
        { "id": 81, "name": "Matthew" },
        { "id": 82, "name": "Madison" },
        { "id": 83, "name": "Joshua" },
        { "id": 84, "name": "Maya" },
        { "id": 85, "name": "Anthony" },
        { "id": 86, "name": "Isla" },
        { "id": 87, "name": "Christopher" },
        { "id": 88, "name": "Natalie" },
        { "id": 89, "name": "Charles" },
        { "id": 90, "name": "Aaliyah" }
    ]


    const [slicedData, setSlicedData] = useState(10);
    const [currentVisible, setCurrentVisible] = useState(20)
    console.log(currentVisible);
    const [FSD, setFSD] = useState(data.slice(0, slicedData))
    const [SSD, setSSD] = useState(data.slice(FSD.length, FSD.length + slicedData))

    console.log(SSD);
    const loadMore = () => {
        setSlicedData(slicedData + 10)
        setCurrentVisible(currentVisible + 20)
        setFSD(data.slice(0, slicedData + 10))
        setSSD((data.slice(slicedData + 10, slicedData + 10 + slicedData + 10)))

    };
    const loadLess = () => {
        setSlicedData(slicedData - 10)
        setCurrentVisible(currentVisible - 20)
        setFSD(data.slice(0, slicedData - 10))
        setSSD((data.slice(slicedData - 10, slicedData - 10 + slicedData - 10)))

    };


    return (
        <div className="bg-gray-100
">

            <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-5 space-y-2">

                    {
                        FSD.length > 0 ? FSD.map((firstData, index) => <div className='space-y-2'>
                            <div className='rounded-md bg-gray-300 p-2 flex items-center justify-between'>
                                <div className='flex items-start gap-2'>
                                    <img src={img} className='w-[50px] rounded-full object-cover' alt="" />
                                    <div>
                                        <h4 className='font-bold text-[18px]'>{firstData.name}</h4>
                                        <p className='text-sm font-semibold'>Salary 200 TK on 10 Oct, 2024</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5'>
                                    f    <RiDeleteBin4Fill size={25} className='text-red-700 cursor-pointer'></RiDeleteBin4Fill>
                                    <AiFillEdit size={25} className=' cursor-pointer'></AiFillEdit>
                                </div>
                            </div>

                        </div>) : null
                    }

                </div>
                <span className="hidden md:block lg:w-[5px] w-[2px] mt-10 mb-10 bg-gray-400 "></span>
                <div className="flex-1 p-5 space-y-2">

                    {
                        SSD.length > 0 ? SSD.map((data, index) => <div className='space-y-2'>
                            <div className='rounded-md bg-gray-300 p-2 flex items-center justify-between'>
                                <div className='flex items-start gap-2'>
                                    <img src={img} className='w-[50px] rounded-full object-cover' alt="" />
                                    <div>
                                        <h4 className='font-bold text-[18px]'>{data.name}</h4>
                                        <p className='text-sm font-semibold'>{data.id} Salary 200 TK on 10 Oct, 2024</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5'>
                                    <RiDeleteBin4Fill size={25} className='text-red-700 cursor-pointer'></RiDeleteBin4Fill>
                                    <AiFillEdit size={25} className=' cursor-pointer'></AiFillEdit>
                                </div>
                            </div>

                        </div>) : null
                    }

                </div>

            </div>
            <div className='pl-10 '>
                <Link to='/add-expense'>
                    <button className='flex items-center'><BsArrowLeft></BsArrowLeft> <span className='text-sm pb-1'>back</span></button></Link>
            </div>
            <div className="text-center py-10">
                {currentVisible >= data.length ? <button disabled={currentVisible < data.length} onClick={loadLess} className="btn btn-sm">Show Less</button> : <button onClick={loadMore} className="btn btn-sm">Load More</button>}

            </div>

        </div>
    );
};

export default AllExpenses;