import React from 'react'

const GetInTouch = ({conclusion}) => {
    return (
        <>
            <h2 className='font-[500] text-[var(--color-maintext)] text-3xl mb-4 mt-12'>Get in touch</h2>
            <p className='text-[var(--color-sidetext)] text-md mt-[15px] mb-10'>{conclusion.para}</p>
            <form action="" >
                <fieldset className='flex flex-col gap-5 max-md:gap-2'>
                    <div className='w-100% flex gap-5 max-md:gap-2'>
                        <input name='Name' type="text" placeholder='Full Name' className=' bg-[var(--color-darkgray)] h-14 w-[50%] text-md font-[500] text-[var(--color-maintext)] p-3 border rounded-2xl border-[var(--color-gray)]' />
                        <input name='Email' type="email" placeholder='Email Address' className='  bg-[var(--color-darkgray)] h-14 w-[50%] text-md font-[500] text-[var(--color-maintext)] p-3 border rounded-2xl border-[var(--color-gray)]' />
                        {/* <input name='Email' type="email" placeholder='Email Address' className=' bg-[#f5f3f3b3] h-14 w-[50%] text-md font-[500] text-[#000000b3] p-3 border rounded-2xl border-[#dbdbdb]' /> */}

                    </div>
                    <textarea placeholder='Write your message' name="Message" id="" className='  bg-[var(--color-darkgray)] h-42 w-[100%] text-md font-[500] text-[var(--color-maintext)] p-4 border rounded-2xl border-[var(--color-gray)]' />
                    <button type='submit' className='h-14 w-auto hover:bg-[#383838] bg-black text-white rounded-2xl font-[600]'>Send Message</button>

                </fieldset>

            </form >
        </>
    )
}

export default GetInTouch