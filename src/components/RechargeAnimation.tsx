
import React, { useEffect, useState } from 'react';
import { Battery, BatteryCharging } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RechargeAnimation: React.FC = () => {
  const [chargeLevel, setChargeLevel] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setChargeLevel(prev => {
        // When fully charged, redirect to homepage
        if (prev >= 100) {
          clearInterval(intervalId);
          setTimeout(() => navigate('/'), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
    
    return () => clearInterval(intervalId);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 animate-fade-in">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6">Feynman is recharging...</h1>
        <div className="flex justify-center items-center mb-8">
          {chargeLevel < 100 ? (
            <BatteryCharging size={80} className="text-green-500 animate-pulse" />
          ) : (
            <Battery size={80} className="text-green-500" />
          )}
        </div>
        <div className="w-64 h-3 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500 transition-all duration-300 ease-out"
            style={{ width: `${chargeLevel}%` }}
          />
        </div>
        <p className="mt-3 text-gray-600">{chargeLevel}% complete</p>
      </div>
    </div>
  );
};

export default RechargeAnimation;
