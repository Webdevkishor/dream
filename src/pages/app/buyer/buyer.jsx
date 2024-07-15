import React, { useEffect } from 'react';
import Navbar from '../../../components/buyer/navbar';
import MobileNavbar from '../../../components/buyer/mobile-navbar';
import { useAuthStore } from '../../../store/auth-store';
import { MdMessage } from "react-icons/md";
import { useGigStore } from '../../../store/gig-store';
import GigItem from '../../../components/buyer/gig-item';
import { FaFilter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Buyer = () => {

    const { currentUser } = useAuthStore();
    const { fetchGigs, allGigs } = useGigStore();

    useEffect(() => {
        fetchGigs();
    }, []);

    return (
        <main>
            <MobileNavbar />
            <Navbar />
            <section className='font-font-primary mt-8 px-10'>
                <div className='flex items-center justify-between gap-5 bg-[black] rounded-lg px-10 py-5'>
                    <h4 className='text-xl text-primary font-medium'>
                        Welcome <span className='text-[white]'>{currentUser?.name},</span>
                    </h4>
                    <Link to={'/buyer/chats'}>
                        <MdMessage className='text-3xl text-[white]' />
                    </Link>
                </div>
                <h2 className='mt-6 font-medium text-xl'>
                    Recommended for you
                </h2>
                <aside className='flex flex-col md:flex-row mt-7 items-center gap-4 px-1 overflow-x-scroll'>
                    {
                        allGigs.map((gig) => (
                            <GigItem key={gig.id} gigId={gig.id} title={gig.title} expertise={gig.expertise_level} price={gig.gig_cost} image={gig.images[0]} />
                        ))
                    }
                </aside>
            </section>
            <section className='font-font-primary mt-8 px-10'>
                <div className='flex items-center justify-between border-b py-1 px-4'>
                    <h3 className='text-lg'>
                        {allGigs.length} Gigs Available
                    </h3>
                    <h4 className='flex items-center gap-2 text-lg'>
                        <FaFilter className='text-xl' />
                        Filter Gigs
                    </h4>
                </div>
                <aside className='flex flex-col md:flex-row mt-7 items-center gap-4 px-1 overflow-x-scroll'>
                    {
                        allGigs.map((gig) => (
                            <GigItem key={gig.id} gigId={gig.id} title={gig.title} expertise={gig.expertise_level} price={gig.gig_cost} image={gig.images[0]} />
                        ))
                    }
                </aside>
            </section>
        </main>
    )
}

export default Buyer;