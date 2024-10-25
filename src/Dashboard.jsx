
import { ResponsiveContainer } from 'recharts';
import Title from './Title';
import { PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';



const Dashboard = () => {


    const [lastDate, setLastDate] = useState('Today')

    const addMoney = 500;
    const cost = 700;

    // Calculate the remaining money (which is addMoney - cost)
    const remainingMoney = addMoney - cost;

    // Data for the chart
    const dataIncomeCost = [
        { name: 'Remaining Money', value: remainingMoney > 0 ? remainingMoney : 0 },
        { name: 'Cost', value: cost },
    ];



    // Define colors: green for remaining money, red for cost
    const colors = ['#008000', '#FF0000'];




    return (
        <div className='p-5'>
            <div className='mt-5 mb-10'>
            <Title title={'Dashboard'}></Title>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <div className='creativeDashboardCard relative text-white'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-60'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] left-5 space-y-3'>
                        <h5 className='font-bold'>Current Balance:</h5>
                        <h2 className='text-4xl font-extrabold'>2432 <sup className='text-xl'>TK</sup></h2>
                    </div>
                </div>
                <div className='creativeDashboardCard relative text-white'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-60'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] left-5 space-y-3'>
                        <h5 className='font-bold'>Total Deposit :</h5>
                        <h2 className='text-4xl font-extrabold'>2432 <sup className='text-xl'>TK</sup></h2>
                    </div>
                </div>
                <div className='creativeDashboardCard relative text-white'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-60'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] left-5 space-y-3'>
                        <h5 className='font-bold'>Total Expense:</h5>
                        <h2 className='text-4xl font-extrabold'>2432 <sup className='text-xl'>TK</sup></h2>
                    </div>
                </div>
                <div className='creativeDashboardCard relative text-white'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-60'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] left-5 space-y-3'>
                        <h5 className='font-bold'>Total Add Money Count:</h5>
                        <h2 className='text-4xl font-extrabold'>2432 </h2>
                    </div>
                </div>
                <div className='creativeDashboardCard relative text-white'>
                    <div className='absolute top-0 left-0 w-full h-full bg-black rounded-md opacity-60'></div>
                    <div className='absolute top-[50%] translate-y-[-50%] left-5 space-y-3'>
                        <h5 className='font-bold'>Total Expense Count:</h5>
                        <h2 className='text-4xl font-extrabold'>2432 </h2>
                    </div>
                </div>
            </div>



            <div className='text-end mt-10'>
                <select onChange={(e) => setLastDate(e.target.value)} className='bg-white px-10  py-2 text-left' name="" id="">
                    <option value="Today">Today</option>
                    <option value="Last day">Last day</option>
                    <option value="Last 7 days">Last 7 days</option>
                    <option value="Last 30 days">last 30 days</option>
                </select>
            </div>
            <div className='flex items-center justify-center gap-10'>
                <h1 className=" text-2xl font-bold "><span className=''>{lastDate}</span> your <br />
                    <span className='flex items-center justify-center'>
                        <span className='w-[300px] block'>Income</span> = 500 tk </span>
                    <span className='flex items-center justify-center'>
                        <span className='w-[300px] block'>Expense</span> = 700 tk </span></h1>
                <div className="relative w-2/4">


                    <div style={{ transform: 'translate(-50%, -50%)' }} className="absolute z-50 top-[50%] left-[50%] flex items-center justify-center flex-col">
                        <p className={`${remainingMoney <= 0 ? 'text-red-600' : 'text-gray-600'}`}>{remainingMoney <= 0 ? 'Finished' : 'Available'}</p>
                        <h3 className={`font-bold ${remainingMoney <= 0 ? 'text-red-600' : 'text-green-600'}`}>{remainingMoney}</h3>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <PieChart>
                            <Pie
                                data={dataIncomeCost}
                                cx="50%"
                                cy="50%"
                                innerRadius={60} // This makes it a doughnut chart
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"

                            >
                                {dataIncomeCost.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>



        </div>
    );
};

export default Dashboard;