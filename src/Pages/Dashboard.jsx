import Sidebar from "../components/Sidebar";
import NotificationNav from '../assets/comman/notification-nav.svg'; 
import UserProfile from '../assets/comman/user-profile.svg';
import UploadCsv from "../components/UploadCsv";
const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
      <div className="flex justify-between">
      <h1 className="font-bold sm:text-2xl text-base">Upload CSV</h1>
      <div className='hidden gap-6 lg:flex'>
        <img src={NotificationNav}/>
        <img src={UserProfile}/>
      </div>
      </div>
        
        <UploadCsv/>
      </div>
    </div>
  );
};

export default Dashboard;
