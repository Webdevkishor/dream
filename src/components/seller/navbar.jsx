import React from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { useAuthStore } from '../../store/auth-store';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const { currentUser, handleSignOut } = useAuthStore();
    const navigate = useNavigate();

    return (
        <header className={`w-full flex md:min-w-[750px] mt-8 py-3 justify-between items-center md:px-9 px-4 font-font-primary transition-all duration-300 ease-out`}>
            <h4 className="text-xl text-primary font-medium">
                Welcome <span className='text-secondary hidden md:inline'>{currentUser?.name},</span>
            </h4>
            <aside className="flex gap-2 items-center">
                <Link to={'/seller/post-gig'} className='py-2 px-6 rounded-md bg-primary flex items-center transition-all duration-200 ease-out gap-2 font-medium text-[white] border border-primary active:bg-[transparent] active:text-primary'>
                    <FaPlusCircle className='text-xl' />
                    New Gig
                </Link>
                <button onClick={() => handleSignOut(navigate)} className='rounded-md bg-primary flex items-center transition-all duration-200 ease-out gap-2 font-medium text-[white] border border-primary active:bg-[transparent] active:text-primary'>
                    Log Out
                </button>
            </aside>
        </header>
    )
}

export default Navbar;