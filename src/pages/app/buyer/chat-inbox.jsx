import React, { useEffect, useState } from 'react';
import MobileNavbar from '../../../components/buyer/mobile-navbar';
import Navbar from '../../../components/buyer/navbar';
import { collection, doc, getDocs } from 'firebase/firestore';
import { chatsDb } from '../../../utils/chats-db';
import { useAuthStore } from '../../../store/auth-store';
import { Link } from 'react-router-dom';

const ChatInbox = () => {

    const { currentUser } = useAuthStore();

    const [sellers, setSellers] = useState([]);

    const fetchUsers = async () => {
        try {
            const userRef = doc(chatsDb, "buyer-chats", currentUser?.uid);
            const inboxRef = collection(userRef, "inbox");
            const inboxSnap = await getDocs(inboxRef);

            const users = [];
            inboxSnap.forEach((doc) => {
                users.push({
                    uid: doc.id,
                    ...doc.data()
                });
            });
            setSellers(users);
        } catch (error) {
            console.error("Error fetching users", error);
        }
    }

    useEffect(() => {
        if(currentUser) {
            fetchUsers();
        }
    }, [currentUser])

    return (
        <main>
            <MobileNavbar />
            <Navbar />
            <section className='font-font-primary mt-8 px-10'>
                <h2 className='mt-6 font-medium text-center text-xl'>
                    Chat Inbox
                </h2>
                <div className='bg-[whitesmoke] rounded-md border border-[#D3D3D3] md:max-w-[750px] w-full mx-auto mt-10 md:p-10 p-4'>
                    {
                        sellers.map((seller) => (
                            <Link key={seller?.uid} to={`/buyer/chats/${seller?.uid}`} className='flex gap-3 items-center bg-[#D3D3D3] rounded-md px-7 py-3'>
                                <img className='h-[50px] w-[50px] rounded-full' src={seller?.photo} alt="AV" />
                                <h4 className='text-lg'>
                                    {seller?.name}
                                </h4>
                            </Link>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default ChatInbox;