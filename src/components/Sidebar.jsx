import { useState } from 'react';
import HamburgerMenu from '../assets/comman/hamburger.svg'; 
import NotificationNav from '../assets/comman/notification-nav.svg'; 
import UserProfile from '../assets/comman/user-profile.svg';
import Logo from "../assets/logo/logoncompany.svg";
import Cross from "../assets/comman/cross.svg"
import DashboardIcon from '../assets/dashboard-icons/dashboard.svg';
import Chart from "../assets/dashboard-icons/chart.svg"
import Schedule from "../assets/dashboard-icons/schedule.svg"
import Ticket from "../assets/dashboard-icons/ticket.svg"
import Settings from "../assets/dashboard-icons/setting.svg"
import Notification from "../assets/dashboard-icons/notification.svg"
import Calendar from "../assets/dashboard-icons/calendar.svg"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar - visible in large screens */}
      <aside className={`hidden lg:flex flex-col bg-white h-screen w-64 ${isOpen ? '' : 'hidden'}`}>
        {/* Sidebar Header */}
        <div className="p-4">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col ml-4">
        <ul className="p-4">
            <li className='flex gap-4 mb-6'>
                <img src={DashboardIcon}/>
              <a href="#" className="hover:underline text-[#9A9AA9]">
                Dashboard
              </a>
            </li>
            <li className='flex gap-4 mb-6'>
                <img src={Chart}/>
              <a href="#" className="hover:underline text-[#605BFF]">
                Upload
              </a>
            </li>
            <li className='flex gap-4 mb-6'>
                <img src={Ticket}/>
              <a href="#" className="hover:underline text-[#9A9AA9]">
                Invoice
              </a>
            </li>
            <li className='flex gap-4 mb-6'>
                <img src={Schedule}/>
              <a href="#" className="hover:underline text-[#9A9AA9]">
                Schedule
              </a>
            </li>
            <li className='flex gap-4 mb-6'>
                <img src={Calendar}/>
              <a href="#" className="hover:underline text-[#9A9AA9]">
                Calendar
              </a>
            </li>
            <li className='flex gap-4 mb-6'>
                <img src={Notification}/>
              <a href="#" className="hover:underline text-[#9A9AA9]">
                Notification
              </a>
            </li>
            <li className='flex gap-4 mb-6'>
                <img src={Settings}/>
              <a href="#" className="hover:underline text-[#9A9AA9]">
                Setting
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Hamburger menu - visible in medium and small screens */}
      <div className="lg:hidden w-[100vw] bg-white flex items-center justify-between p-4">
      <div className='flex gap-4'>
      <button onClick={toggleSidebar}>
          <img src={HamburgerMenu} alt="Menu" className="w-6 h-6" />
        </button>
        <img src={Logo}/>
      </div>
      <div className='flex gap-6'>
        <img src={NotificationNav}/>
        <img src={UserProfile}/>
      </div>
        
      </div>

      {/* Overlay - visible when the sidebar is open in medium and small screens
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-0 z-50"
          onClick={toggleSidebar}
        ></div>
      )} */}

      {/* Sidebar for medium and small screens */}
      <aside className={`lg:hidden fixed inset-y-0 left-0 w-[70vw] rounded-r-[30px] bg-white ${isOpen ? '' : 'hidden'}`}>
        {/* Sidebar Header */}
        <div className="p-4">
          <img src={Logo} alt="Logo" />
          <div
          className="lg:hidden absolute top-4 right-4"
          onClick={toggleSidebar}
        ><img src={Cross}/></div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex flex-col ml-4">
          <ul className="p-4">
            <li className='flex gap-4 mb-4'>
                <img src={DashboardIcon}/>
              <a href="#" className="hover:underline text-[#9A9AA9]">
                Dashboard
              </a>
            </li>
            <li className='flex gap-4 mb-4'>
                <img src={Chart}/>
              <a href="#" className="hover:underline text-[#605BFF]">
                Upload
              </a>
            </li>
            <li className='flex gap-4 mb-4'>
                <img src={Ticket}/>
              <a href="#" className="hover:underline text-[#9A9AA9]">
                Invoice
              </a>
            </li>
            <li className='flex gap-4 mb-4'>
                <img src={Schedule}/>
              <a href="#" className="hover:underline text-[#9A9AA9]">
                Schedule
              </a>
            </li>
            <li className='flex gap-4 mb-4'>
                <img src={Calendar}/>
              <a href="#" className="hover:underline text-[#9A9AA9]">
                Calendar
              </a>
            </li>
            <li className='flex gap-4 mb-4'>
                <img src={Notification}/>
              <a href="#" className="hover:underline text-[#9A9AA9]">
                Notification
              </a>
            </li>
            <li className='flex gap-4 mb-4'>
                <img src={Settings}/>
              <a href="#" className="hover:underline text-[#9A9AA9]">
                Setting
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
