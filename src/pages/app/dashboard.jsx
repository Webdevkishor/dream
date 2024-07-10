import React from 'react';
import { useAuthStore } from '../../store/auth-store';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const { handleSignOut } = useAuthStore();
  const navigate = useNavigate();

  return (
    <div>Dashboard
      <button onClick={() => handleSignOut(navigate)} className="bg-primary rounded-md px-10 py-2 text-[white]">
        Signout
      </button>
    </div>
  )
}

export default Dashboard;