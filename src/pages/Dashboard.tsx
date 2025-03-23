import React, { useState } from 'react';
import { VideoContainer } from '@/components/VideoContainer';
import { Navbar } from '@/components/Navbar2';
import LipSyncAnimation from '@/components/Animation';
import { Chat } from '@/components/chat';

const Dashboard = () => {
  const [hasInteracted, setHasInteracted] = useState(false)
  const sentence = "HELLO WORLD";
  const handleFirstInteraction = () => {
    setHasInteracted(true);
  }
  return (
    <>
      {/* Navbar */}
      <div className="flex flex-col bg-white overflow-hidden">
        <Navbar />
      </div>
  
      {/* Main layout */}
      <div className="flex h-screen relative">
        
        {/* Stick Figure Animation on the left*/}
        <div className="w-[30%] flex flex-col flex-grow">
          <div className="w-full">
            <LipSyncAnimation sentence={sentence} interval={1000} />
          </div>
        </div>
  
        {/* Video on the right*/}
        <div className="w-[70%] flex">
          <div className="w-full h-full p-4 lg:p-2 lg:pl-2">
            <VideoContainer />
          </div>
        </div>
  
        {/* Chat input */}
        <Chat />
      </div>
    </>
  );
  
};

export default Dashboard;
