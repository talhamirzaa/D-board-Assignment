// src/Dashboard.js
import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useLocation, Link } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaCog } from 'react-icons/fa';
import { BiLogOut } from "react-icons/bi";
import { FiAlignJustify } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";




const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [filter, setFilter] = useState('All'); 

  const location = useLocation();
  const { uname} = location.state
  

  const handleFilterChange = (e) => {
     setFilter(e.target.value); 
    };
  
  // Sample chart data 
  const data = { 
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [ { label: '', data: filter === '2023' ? [75, 69, 90, 91, 76, 85] : filter === '2022' ? [45, 35, 60, 50, 56, 45] : [65, 59, 80, 81, 56, 55], 
    backgroundColor: 'rgb(202 138 4)', borderColor: 'rgb(161 98 7)', 
    borderWidth: 1, 
  }, ], 
};
  const pieData = { 
    labels: ['local', 'online','other'], 
    datasets: [{ 
      label: 'Sales Distribution', data: [12, 19, 3], 
      backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)',], 
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)',], 
      borderWidth: 1, 
      borderAlign:'inner',
    },
  ],
  };

  const options = {
    responsive: true, // Make the chart responsive
  maintainAspectRatio: false, // Allow the chart to fill the container
  plugins: {
    legend: {
      display: true, // Show the legend
      position: 'top', // Position the legend at the top
      labels: {
        boxWidth: 10, // Adjust the box width for the legend items
      },
    },
  },
  }

  const bar_options = {
    plugins: {
      legend: {
        display: false, // This will hide the legend
      },
    },
  };
  
  const toggleDropdown = () => {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('hidden');
}

  return (
    <div className="flex h-screen bg-gray-100"> 
  {/* Sidebar */} 
  <div className="w-64 md:flex flex-col bg-white shadow-md hidden"> 
    <div className="p-4 border-b"> 
      <h2 className="text-lg font-bold">Sales Dashboard</h2> 
    </div> 
    <ul className="mt-4 flex-grow overflow-hidden"> 
      <li className="flex items-center p-2 mb-1 hover:bg-yellow-700 hover:text-white rounded-full bg-yellow-600 cursor-pointer" > 
        <FaTachometerAlt className="mr-2" /> Dashboard 
      </li> 
      <li className="flex items-center p-2 hover:bg-yellow-700 hover:text-white rounded-full cursor-pointer"> 
        <FaUser className="mr-2" /> Profile 
      </li> 
      <li className="flex items-center p-2 hover:bg-yellow-700 hover:text-white rounded-full cursor-pointer"> 
        <FaCog className="mr-2" /> Settings 
      </li>
    </ul> 
    <Link to="/">
    <li className="flex items-center mb-3 p-2 hover:bg-yellow-700 hover:text-white rounded-full cursor-pointer"> 
        <BiLogOut className="mr-2"/> Logout
      </li> 
      </Link> 
      
  </div>

  {/* Collapsible Sidebar for Mobile */}
  <div className={`fixed inset-0 bg-white shadow-md transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
    <div className="p-4 border-b"> 
    
    <div className="flex flex-row-reverse ">
    <IoMdClose onClick={() => setSidebarOpen(!sidebarOpen)} />
    </div>
      <h2 className="text-lg font-bold">Sales Dashboard</h2> 
      
    </div> 
    <ul className="mt-4"> 
   
    <li className="flex items-center p-2 mb-1 hover:bg-yellow-700 hover:text-white rounded-full bg-yellow-600 cursor-pointer" onClick={() => setSidebarOpen(!sidebarOpen)} > 
        <FaTachometerAlt className="mr-2" /> Dashboard 
      </li> 
      
      <li className="flex items-center p-2 hover:bg-yellow-700 hover:text-white rounded-full cursor-pointer"> 
        <FaUser className="mr-2" /> Profile 
      </li> 
      <li className="flex items-center p-2 hover:bg-yellow-700 hover:text-white rounded-full cursor-pointer"> 
        <FaCog className="mr-2" /> Settings 
      </li>
      <li className="flex items-center p-2 hover:bg-yellow-700 hover:text-white rounded-full cursor-pointer"> 
        <BiLogOut className="mr-2"/> <Link to="/">Logout</Link> 
      </li> 
    </ul> 
  </div>

  {/* Main Content */}
  
  <div className="flex-1 flex flex-col px-0 pt-0">
    <div className="flex justify-between items-center bg-white rounded-2xl shadow-lg py-2 mb-4">
      <div className="flex flex-row ml-2">
    <button onClick={() => setSidebarOpen(!sidebarOpen)} className=" md:hidden text-yellow-700">
      {sidebarOpen ? 'Close Menu' : <FiAlignJustify className='text-3xl' />}
    </button>
      <h1 className="text-2xl md:text-3xl ml-1 font-bold text-lime-600 font-mono">D.I</h1>
      </div>
      <div className="flex items-center mr-2">
        <span className="mr-2 font-semibold italic">Hi, {uname}</span>
        <img
          alt=""
          src="https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8="
          className="inline-block h-10 w-10 rounded-full cursor-pointer"
          onClick={toggleDropdown}
        />
      </div>
    </div>

    <div id="dropdown" className="hidden absolute right-1 mt-12 w-24 bg-white border border-gray-300 rounded-full shadow-lg">
    <li className="flex items-center p-2 hover:bg-yellow-700 hover:text-white rounded-full cursor-pointer"> 
        <BiLogOut className="mr-2"/> <Link to="/">Logout</Link> 
      </li> 
        
    </div>
    

    {/* Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-2 md:mb-4 px-3">
      <div className="bg-white px-6 py-2 md:py-4 rounded-full shadow ">
        <h3 className="text-sm md:text-lg font-semibold">Total Sales</h3>
        <p className="text-md md:text-2xl font-bold">$10,000</p>
      </div>
      <div className="bg-white px-6 py-2 md:py-4 rounded-full shadow">
        <h3 className="text-sm md:text-lg font-semibold">Total Users</h3>
        <p className="text-md md:text-2xl font-bold">500</p>
      </div>
      <div className="bg-white px-6 py-2 md:py-4 rounded-full shadow">
        <h3 className="text-sm md:text-lg font-semibold">New Signups</h3>
        <p className="text-md md:text-2xl font-bold">50</p>
      </div>
    </div>

    <div className="mb-2 md:mb-4 mt-2 px-3">
    <label className="pl-2 mr-2">Year:</label>
      <select value={filter} onChange={handleFilterChange} className="bg-white py-1 px-2 w-24 rounded-full">
        <option value="All" className='text-sm p-0'>2024</option>
        <option value="2023" className='text-sm p-0'>2023</option>
        <option value="2022" className='text-sm p-0'>2022</option>
      </select>
    </div>

    {/* Charts Section */}
    <div className="lg:flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 overflow-hidden px-3">
      <div className="bg-white px-4 rounded-3xl shadow flex flex-col h-full">
        <h2 className="text-md md:text-xl font-semibold mt-3">Sales Overview</h2>
        <div className="flex-grow">
        <div className='h-fit md:h-full'>
        <Bar data={data} options={bar_options} />
        </div>
        </div>
      </div>
      <div className="bg-white px-4 rounded-3xl shadow flex flex-col h-full">
    <h2 className="text-md md:text-xl font-semibold mt-3">Sales Distribution</h2>
    <div className="flex-grow "> {/* Allow the chart to grow and fill the space */}
      <div className='h-fit md:h-full'>
      <Pie data={pieData} options={options} />
      </div>
    </div>
  </div>
    </div>
  </div>
</div>

  );
};

export default Dashboard;