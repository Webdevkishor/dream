import React from 'react';

const GigItem = ({ title, image, deadline_number, deadline_days, expertise }) => {
    return (
        <div className='w-[350px] rounded-lg border border-[#D3D3D3]'>
            <img className='rounded-t-lg' src={image} alt="AV" />
            <aside className='p-4 flex flex-col gap-1'>
                <h3 className='text-lg'>
                    {title}
                </h3>
                <h4 className={`text-[white] capitalize pl-2 pr-10 self-start ${expertise.toLowerCase() === "skilled" ? 'bg-[#F115F5]': 'bg-[#36B7FE]'}`}>
                    {expertise}
                </h4>
                <h5 className='text-sm self-end'>
                    Deadline: {deadline_number} {deadline_days}
                </h5>
            </aside>
        </div>
    )
}

export default GigItem;