
import { Button } from '@/components/ui/button';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const Navbar = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    toast.success('Logged out successfully');
    // Navigate to recharging page
    navigate('/recharging');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[7%] shadow-lg bg-white z-50">
      <div className="flex justify-between items-center px-4 py-2 w-full">
        {/* Logo Section */}
        <div className="flex justify-start">
          <Link to="/">
            <span className="text-xl font-medium">Feynman.ai ⭐️</span>
          </Link>
        </div>

        {/* Sign Out Button */}
        <div>
          <Button
            onClick={logOut}
            className="bg-black text-white hover:bg-white hover:text-black border-2 border-black rounded-md transition-colors"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};
