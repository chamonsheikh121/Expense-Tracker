import { Chart } from "react-google-charts";
  import React, { PureComponent } from 'react';
  import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
  import Title from './Title';
  import { PieChart, Pie, Sector, Cell } from 'recharts';






const Statistics = () => {



  const dataPie = [
    ["Task", "Hours per Day"],
    ["Work", 500],
    ["Eat", 23],
    ["Commute", 24],
    ["Watch TV", 25],
    ["Sleep", 500],

  ];
  const dataColumn = [
    ["Element", "Density", { role: "style" }],
    ["Work", 70, '#3366CC'],
    ["Eat", 23, "#DC3912"],
    ["Commute", 24, "#FF9900"],
    ["Watch TV", 25, "#109618"],
    ["Sleep", 500, "#990099"],

  ];

  const options = {
    title: "My Daily Activities",

  };



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






  // monthly 

  const expensesFromDB = [
    { day: 1, Work: 40, Eat: 20, Commute: 15, WatchTV: 10, Sleep: 12 },
    { day: 2, Work: 30, Eat: 25, Commute: 20, WatchTV: 15, Sleep: 10 },
    { day: 3, Work: 32, Eat: 23, Commute: 23, WatchTV: 32, Sleep: 12 },
    // No data for day 4
    { day: 5, Work: 30, Eat: 15, Commute: 10, WatchTV: 5, Sleep: 8 },
  ];

  const array1To31 = [];
  for (let i = 1; i <= 31; i++) {
    array1To31.push(i);
  }

  // Create a map for the expenses for easy lookup
  const expensesMap = {};
  expensesFromDB.forEach(expense => {
    expensesMap[expense.day] = expense;
  });

  const data = array1To31.map(day => {
    const expense = expensesMap[day] || {}; // Get the expense for the day or an empty object
    return {
      name: `${day}`,
      Work: expense.Work || null,  // If no expense, use null
      Eat: expense.Eat || null,
      Commute: expense.Commute || null,
      WatchTV: expense.WatchTV || null,
      Sleep: expense.Sleep || null,
    };
  });

  console.log(data);
  // month pie
  const dataMonthPie = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


  // const date1 = new Date("2024-10-24T14:00:00Z");
  // const date2 = new Date("2024-12-24T14:00:00Z");
  // const different = (date2-date1)/(1000*60*60*24);
  // console.log(different);

  return (
    <div className="bg-white">
      <div className="py-5 ">
        <Title title={'Daily stats'}></Title>
      </div>
      <div className="flex">
        <Chart
          chartType="PieChart"
          data={dataPie}
          options={options}
          width={"90%"}
          height={"400px"}
        />
        <Chart chartType="ColumnChart" width="90%" height="400px" data={dataColumn} />
      </div>


{/* daily income and expense */}

      <div className="relative ">
        <h1 style={{transform:'translateY(-50%)'}} className="absolute left-10 z-50 top-[50%] text-2xl font-bold">Today's income and expense </h1>

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



      <div className="py-5 bg-white">
        <Title title={'Monthly stats'}></Title>
      </div>
      <Chart
        chartType="PieChart"
        data={dataPie}
        options={options}
        width={"90%"}
        height={"400px"}
      />
      <div className=" ">
        
        <BarChart
          width={900}
          height={300}
          data={data}
          margin={{

          }}
        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Work" stackId="a" fill="#DC3912" />
          <Bar dataKey="Eat" stackId="a" fill="#FF9900" />
          <Bar dataKey="Commute" stackId="a" fill="#109618" />
          <Bar dataKey="WatchTV" stackId="a" fill="#990099" />
          <Bar dataKey="Sleep" stackId="a" fill="#f1bf0a" />
        </BarChart>
      </div>





      {/* <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer> */}

      {/* Monthly income and expense */}

      <div className="relative ">
        <h1 style={{transform:'translateY(-50%)'}} className="absolute left-10 z-50 top-[50%] text-2xl font-bold">Monthly income and expense </h1>

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
      


      <div className="py-5 bg-white">
        <Title title={'Yearly stats'}></Title>
      </div>


      <Chart
        chartType="PieChart"
        data={dataPie}
        options={options}
        width={"90%"}
        height={"400px"}
      />
      <div className="">
        
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{

          }}
        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Work" stackId="a" fill="#DC3912" />
          <Bar dataKey="Eat" stackId="a" fill="#FF9900" />
          <Bar dataKey="Commute" stackId="a" fill="#109618" />
          <Bar dataKey="WatchTV" stackId="a" fill="#990099" />
          <Bar dataKey="Sleep" stackId="a" fill="#f1bf0a" />
        </BarChart>
      </div>



      <div className="relative ">
        <h1 style={{transform:'translateY(-50%)'}} className="absolute left-10 z-50 top-[50%] text-2xl font-bold">Monthly income and expense </h1>

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
  );
};

export default Statistics;