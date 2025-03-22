import React, { useState } from 'react';
import { VideoContainer } from '@/components/VideoContainer';
import { Navbar } from '@/components/Navbar2';
import { Animation } from '@/components/Animation';
import { Chat } from '@/components/chat';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  return (
    <>
    <div className="flex flex-col bg-white overflow-hidden">
      {/*Navbar*/}
      <div><Navbar/></div>
    </div>

    <div className="flex min-h-screen relative">
      {/* Main Content */}
      <div className="flex-1 w-full relative">
        {/* Main dashboard container with Video */}
        <div className="w-full h-full min-h-screen p-4 lg:p-2 lg:pl-2">
          <div className="w-[70%] max-w-screen-xl h-full ml-auto justify-end">
            <VideoContainer />
          </div>
        </div>
        
        {/* Stick Figure Animation */}
        <div className="hidden lg:block fixed bottom-8 left-[230px] z-40">
          {/* <Animation /> */}
        </div>
      </div>
      
      {/* Chat Input */}
      <Chat />
    </div>
    </>
  );
};

export default Dashboard;
