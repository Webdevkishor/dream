import React from 'react';
import MobileNavbar from '../../../components/buyer/mobile-navbar';
import Navbar from '../../../components/buyer/navbar';

const ChatInbox = () => {
    return (
        <main>
            <MobileNavbar />
            <Navbar />
            <section className='font-font-primary mt-8 px-10'>
                <h2 className='mt-6 font-medium text-center text-xl'>
                    Chat Inbox
                </h2>
                <div className='bg-[whitesmoke] rounded-md border border-[#D3D3D3] md:max-w-[750px] mx-auto mt-10'>
                    
                </div>
            </section>
        </main>
    )
}

export default ChatInbox;