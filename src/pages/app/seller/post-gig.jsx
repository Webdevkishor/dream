import React from 'react';
import { IoImageOutline } from "react-icons/io5";

const PostGig = () => {
  return (
    <main className='font-font-primary pt-28 md:px-6 px-3 bg-[whitesmoke] flex flex-col'>
        <form method='post' className='bg-[white] md:p-10 flex flex-col gap-10 p-5 my-6 rounded-lg border border-[#D3D3D3] w-full md:max-w-[1000px] mx-auto'>
            <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
                <article className='md:w-[30%] w-full'>
                    <h4 className='font-medium text-xl'>
                        Gig Title
                    </h4>
                    <p className='text-[gray] text-[0.9rem] mt-2'>
                        As your Gig storefront, your <span className='font-bold'>title is the most important place</span> to include keywords that buyers would likely use to search for a service like yours.
                    </p>
                </article>
                <textarea name="title" rows={'3'} placeholder="I will do something I'm really good at" className='px-3 resize-none outline-primary rounded-md py-2 border border-[#D3D3D3] md:w-[500px] w-full' />
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
                <article className='md:w-[30%] w-full'>
                    <h4 className='font-medium text-xl'>
                        Category
                    </h4>
                    <p className='text-[gray] text-[0.9rem] mt-2'>
                        Choose the category and sub-category most suitable for your Gig.
                    </p>
                </article>
                <aside className='flex flex-col md:flex-row items-center gap-3 md:w-[500px] w-full'>
                    <select name="category" className={`border py-2 px-4 rounded-md outline-primary border-[#D3D3D3] md:w-[50%] w-full`}>
                        <option value={""}>SELECT A CATEGORY</option>
                    </select>
                    <select name="category" className={`border py-2 px-4 rounded-md md:w-[50%] w-full outline-primary border-[#D3D3D3]`}>
                        <option value={""}>SELECT A SUBCATEGORY</option>
                    </select>
                </aside>
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
                <article className='md:w-[30%] w-full'>
                    <h4 className='font-medium text-xl'>
                        Search Tags
                    </h4>
                    <p className='text-[gray] text-[0.9rem] mt-2'>
                        Tag your Gig with buzz words that are relevant to the services you offer. Use all 5 tags to get found.
                    </p>
                </article>
                <textarea name="search-tags" rows={'3'} placeholder="5 tags maximum (Separate by commas)*" className='px-3 resize-none outline-primary rounded-md py-2 border border-[#D3D3D3] md:w-[500px] w-full' />
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
                <article className='md:w-[30%] w-full'>
                    <h4 className='font-medium text-xl'>
                        Images
                    </h4>
                    <p className='text-[gray] text-[0.9rem] mt-2'>
                        Get noticed by the right buyers with visual examples of your services.
                    </p>
                </article>
                <aside className='md:w-[500px] flex flex-col md:flex-row items-center gap-2 w-full'>
                    <div className='flex flex-col justify-center py-2 items-center md:w-[50%] border-[#D3D3D3] w-full border rounded-md'>
                        <IoImageOutline className='text-5xl text-[#D3D3D3]' />
                        <p className='text-md text-[gray]'>
                            Select a photo
                        </p>
                        <label htmlFor="choosePhoto" className='-mt-1'>
                            <button className='text-[blue] text-[13px] hover:underline'>
                                Browse
                            </button>
                            <input type="file" className='hidden' />
                        </label>
                    </div>
                    <div className='flex flex-col justify-center py-2 items-center md:w-[50%] border-[#D3D3D3] w-full border rounded-md'>
                        <IoImageOutline className='text-5xl text-[#D3D3D3]' />
                        <p className='text-md text-[gray]'>
                            Select a photo
                        </p>
                        <label htmlFor="choosePhoto" className='-mt-1'>
                            <button className='text-[blue] text-[13px] hover:underline'>
                                Browse
                            </button>
                            <input type="file" className='hidden' />
                        </label>
                    </div>
                    <div className='flex flex-col justify-center py-2 items-center md:w-[50%] border-[#D3D3D3] w-full border rounded-md'>
                        <IoImageOutline className='text-5xl text-[#D3D3D3]' />
                        <p className='text-md text-[gray]'>
                            Select a photo
                        </p>
                        <label htmlFor="choosePhoto" className='-mt-1'>
                            <button className='text-[blue] text-[13px] hover:underline'>
                                Browse
                            </button>
                            <input type="file" accept='application/pdf' className='hidden' />
                        </label>
                    </div>
                </aside>
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
                <article className='md:w-[30%] w-full'>
                    <h4 className='font-medium text-xl'>
                        Description
                    </h4>
                    <p className='text-[gray] text-[0.9rem] mt-2'>
                        Briefly Describe Your Gig
                    </p>
                </article>
                <textarea name="description" rows={'8'} placeholder="Describe here..." className='px-3 resize-none outline-primary rounded-md py-2 border border-[#D3D3D3] md:w-[500px] w-full' />
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
                <article className='md:w-[30%] w-full'>
                    <h4 className='font-medium text-xl'>
                        Requirements
                    </h4>
                    <p className='text-[gray] text-[0.9rem] mt-2'>
                        Briefly Explain Your Requirements for this gig
                    </p>
                </article>
                <textarea name="requirements" rows={'8'} placeholder="Explain here..." className='px-3 resize-none outline-primary rounded-md py-2 border border-[#D3D3D3] md:w-[500px] w-full' />
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
                <article className='md:w-[30%] w-full'>
                    <h4 className='font-medium text-xl'>
                        Pricing
                    </h4>
                    <p className='text-[gray] text-[0.9rem] mt-2'>
                        Scope and Pricing of Your Gig
                    </p>
                </article>
                <aside className='flex flex-col md:flex-row items-center gap-3 md:w-[500px] w-full'>
                    <label htmlFor="gig" className='flex items-center gap-3'>
                        <p className='text-lg font-medium'>
                            Gig
                        </p>
                        <input name='price' type="number" placeholder='Rs. 0' className={`border border-[#D3D3D3] py-2 px-4 rounded-md w-full outline-primary`} />
                    </label>
                    <label htmlFor="gig" className='flex items-center gap-3'>
                        <p className='text-lg font-medium'>
                            Revisions
                        </p>
                        <input name='price' type="number" placeholder='Rs. 0' className={`border border-[#D3D3D3] py-2 px-4 rounded-md w-full outline-primary`} />
                    </label>
                </aside>
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
                <article className='md:w-[30%] w-full'>
                    <h4 className='font-medium text-xl'>
                        Expertise
                    </h4>
                    <p className='text-[gray] text-[0.9rem] mt-2'>
                        Choose the expertise level suitable for your Gig.
                    </p>
                </article>
                <aside className='flex flex-col md:flex-row items-center gap-3 md:w-[500px] w-full'>
                    <select name="expertise-level" className={`border py-2 px-4 rounded-md outline-primary border-[#D3D3D3] w-full`}>
                        <option value={""}>SELECT AN EXPERTISE</option>
                        <option value={"unskilled"}>UNSKILLED</option>
                        <option value={"skilled"}>SKILLED + STARRED</option>
                    </select>
                </aside>
            </div>
            <div className='flex flex-col md:flex-row gap-5 items-start justify-center'>
                <article className='md:w-[30%] w-full'>
                    <h4 className='font-medium text-xl'>
                        Deadline
                    </h4>
                    <p className='text-[gray] text-[0.9rem] mt-2'>
                        Specify the time taken for the completion of this gig
                    </p>
                </article>
                <aside className='flex flex-col md:flex-row items-center gap-3 md:w-[500px] w-full'>
                    <input name='number' type="number" placeholder='0' className={`border border-[#D3D3D3] py-2 px-4 rounded-md w-full outline-primary`} />
                    <select name="date" className={`border py-2 px-4 rounded-md outline-primary border-[#D3D3D3] w-full`}>
                        <option value={"days"}>DAYS</option>
                        <option value={"months"}>MONTHS</option>
                        <option value={"years"}>YEARS</option>
                    </select>
                </aside>
            </div>
        </form>
        <button className='py-2 self-end px-8 rounded-md bg-primary mb-10 mr-32 flex items-center transition-all duration-200 ease-out gap-2 font-medium text-[white] border border-primary active:bg-[transparent] active:text-primary'>
            Post
        </button>
    </main>
  )
}

export default PostGig;