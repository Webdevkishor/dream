import React from 'react';
import Navbar from '../../components/buyer/navbar';
import MobileNavbar from '../../components/buyer/mobile-navbar';
import { useSetupStore } from '../../store/setup-store';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthStore } from '../../store/auth-store';
import { appDb } from '../../utils/app-db';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Setup = () => {

    const { currentUser } = useAuthStore();
    const { setup, setSetup } = useSetupStore();

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSetup({
            ...setup,
            [name]: value
        });
    }

    const finishSetup = async () => {
        try {
            await setDoc(doc(appDb, 'user-profiles', currentUser?.uid), setup);
            toast.success('Setup completed successfully');
            navigate('/dashboard');
        } catch (error) {
            console.error("Error completing setup", error);
            toast.error('Setup failed');
        }
    }

    return (
        <main>
            <MobileNavbar />
            <Navbar />
            <section className='my-10 font-font-primary w-full md:px-32 px-4'>
                <h2 className='text-center font-medium text-2xl text-secondary'>
                    Setup your profile
                </h2>
                <div  className='w-full flex flex-col md:w-[70%] mx-auto mt-10'>
                    <h2 className='font-medium text-left'>
                        Personal Details <span className='text-red-500'>*</span>
                    </h2>
                    <article className='flex flex-col md:flex-row items-center justify-center gap-5 mt-2 w-full mx-auto'>
                        <aside className='flex flex-col gap-2 items-center md:w-[50%] w-full'>
                            <input name='name' onChange={handleInputChange} value={setup.name} type="text" placeholder='Full Name' className='border border-[#D3D3D3] py-2 px-4 rounded-md w-full outline-primary' />
                            <input name='email' onChange={handleInputChange} value={setup.email} type="email" placeholder='Email' className='border border-[#D3D3D3] py-2 px-4 rounded-md w-full outline-primary' />
                            <input name='phone' onChange={handleInputChange} value={setup.phone} type="tel" placeholder='Phone' className='border border-[#D3D3D3] py-2 px-4 rounded-md w-full outline-primary' />
                            <input name='dob' onChange={handleInputChange} value={setup.dob} type="date" placeholder='Date of Birth' className='border border-[#D3D3D3] py-2 px-4 rounded-md w-full outline-primary' />
                        </aside>
                        <aside className='flex flex-col gap-2 items-center md:w-[50%] w-full'>
                            <input name='industry' onChange={handleInputChange} value={setup.industry} type="text" placeholder='Current Industry' className='border border-[#D3D3D3] py-2 px-4 rounded-md w-full outline-primary' />
                            <input name='profession' onChange={handleInputChange} value={setup.profession} type="text" placeholder='Profession' className='border border-[#D3D3D3] py-2 px-4 rounded-md w-full outline-primary' />
                            <input name='state' onChange={handleInputChange} value={setup.state} type="text" placeholder='State' className='border border-[#D3D3D3] py-2 px-4 rounded-md w-full outline-primary' />
                            <input name='pin' onChange={handleInputChange} value={setup.pin} type="number" placeholder='PIN' className='border border-[#D3D3D3] py-2 px-4 rounded-md w-full outline-primary' />
                        </aside>
                    </article>
                </div>
                <button onClick={finishSetup}>
                    Submit
                </button>
            </section>
        </main>
    )
}

export default Setup;