import React, { useEffect } from 'react';
import { useSetupStore } from '../../store/setup-store';

const Personal = () => {

    const { setup, setSetup } = useSetupStore();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSetup({
            ...setup,
            [name]: value
        });
    }

    return (
        <div  className='w-full flex flex-col'>
            <h2 className='font-medium text-center'>
                Personal Details
            </h2>
            <article className='flex flex-col md:flex-row items-center justify-center gap-5 mt-8 w-full md:w-[70%] mx-auto'>
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
            <button className='py-1 px-8 md:mr-28 self-end rounded-md bg-primary font-font-primary text-lg text-[white] my-12'>
                Next
            </button>
        </div>
    )
}

export default Personal;