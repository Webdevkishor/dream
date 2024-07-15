import React, { useEffect, useState } from 'react';
import GigItem from '../../../components/seller/gig-item';
import { useAuthStore } from '../../../store/auth-store';
import { get, ref } from 'firebase/database';
import { appRealDb } from '../../../utils/app-db';

const MyGigs = () => {

    const { currentUser } = useAuthStore();

    const [gigs, setGigs] = useState([]);

    useEffect(() => {
        if(currentUser) {
            fetchGigs();
        }
    }, [currentUser]);

    const fetchGigs = async () => {
        try {
            const userRef = ref(appRealDb, `gigData/${currentUser?.uid}`);
            const userGigs = await get(userRef);
            setGigs(Object.values(userGigs.val()));
        } catch (error) {
            console.error("Error fetching user gigs", error);
        }
    }

    return (
        <main className='font-font-primary bg-[whitesmoke] mt-7 md:px-6 px-3'>
            <aside className='flex flex-col md:flex-row mt-7 items-center gap-4 px-1 overflow-x-scroll'>
                {
                    gigs.map((gig) => (
                        <GigItem key={gig.id} title={gig.title} expertise={gig.expertise_level} deadline_number={gig.deadline_number} deadline_days={gig.deadline_date} image={gig.images[0]} />
                    ))
                }
            </aside>
        </main>
    )
}

export default MyGigs;