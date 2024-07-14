import React from 'react';
import { FaCheckSquare } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { AiFillFlag } from "react-icons/ai";
import { MdContacts } from "react-icons/md";

const Dashboard = () => {
  return (
    <main className='font-font-primary text-[white] bg-[whitesmoke] mt-7 md:px-6 px-3'>
      <section className='flex items-center md:gap-3 gap-2 flex-wrap md:flex-nowrap md:flex-row'>
        <article className="relative md:py-10 md:px-12 py-7 w-[48%] rounded-xl bg-[#232323] border flex items-center justify-center gap-3 md:gap-5 border-primary md:w-[25%]">
          <FaCheckSquare className='text-5xl' />
          <div>
            <h4 className="text-[#03BD6C] font-[900] text-2xl">
              20
            </h4>
            <h5 className="text-[16px]">
              Total Gigs
            </h5>
          </div>
        </article>
        <article className="relative md:py-10 md:px-12 py-7 w-[48%] rounded-xl bg-[#232323] border flex items-center justify-center gap-3 md:gap-5 border-primary md:w-[25%]">
          <IoIosSave className='text-5xl' />
          <div>
            <h4 className="text-[#03BD6C] font-[900] text-2xl">
              55
            </h4>
            <h5 className="text-[16px]">
              Ongoing
            </h5>
          </div>
        </article>
        <article className="relative md:py-10 md:px-12 py-7 w-[48%] rounded-xl bg-[#232323] border flex items-center justify-center gap-3 md:gap-5 border-primary md:w-[25%]">
          <AiFillFlag className='text-5xl' />
          <div>
            <h4 className="text-[#03BD6C] font-[900] text-2xl">
              20
            </h4>
            <h5 className="text-[16px]">
              Issues
            </h5>
          </div>
        </article>
        <article className="relative md:py-10 md:px-12 py-7 w-[48%] rounded-xl bg-[#232323] border flex items-center justify-center gap-3 md:gap-5 border-primary md:w-[25%]">
          <MdContacts className='text-5xl' />
          <div>
            <h4 className="text-[#03BD6C] font-[900] text-2xl">
              20
            </h4>
            <h5 className="text-[16px]">
              Pending
            </h5>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Dashboard;