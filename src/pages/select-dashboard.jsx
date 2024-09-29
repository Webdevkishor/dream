import React from 'react';
import { Link } from 'react-router-dom';

const SelectDashboard = () => {
    return (
        <main className='h-screen flex items-center justify-center flex-col w-full gap-10'>
            <Link className='py-3 px-20 rounded-md bg-primary font-font-primary text-xl text-[white]' to={'/seller/dashboard'}>
                Go to Seller
            </Link>
            <Link className='py-3 px-20 rounded-md bg-primary font-font-primary text-xl text-[white]' to={'/buyer'}>
                Go to Buyer/Students
            </Link>
        </main>
    )
}

export default SelectDashboard;