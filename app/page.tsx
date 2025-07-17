import React from 'react'

export default function page() {
  return (
    <div>
      <div className='flex flex-wrap items-center justify-between mt-4 px-4 md:px-12'>
        <div className='ml-[5%] md:ml-[10%] lg:ml-[19.5%]'>
          <img src="https://clarity-tailwind.preview.uideck.com/images/logo.svg" alt="" />
        </div>
        <div className='flex gap-3 sm:gap-4 md:gap-5 text-sm sm:text-base md:text-xl font-sans mt-4 md:mt-0'>
          <li className='list-none'>Home</li>
          <li className='list-none'>Pages</li>
          <li className='list-none'>Blogs</li>
          <li className='list-none'>Support</li>
        </div>
        <div className='mr-[5%] md:mr-[10%] lg:mr-[19.5%] mt-4 md:mt-0 w-full md:w-auto'>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              {/* Social buttons */}
              {/* Social icons unchanged */}
            </div>
            <div className="flex items-center gap-2">
              {/* Search and Subscribe button */}
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#dee2e6] w-[95%] md:w-[1000px] h-auto md:h-[350px] mx-auto rounded-2xl mt-10 p-4'>
        <img className='mt-2 w-full sm:w-[400px] md:w-[500px]' src="https://clarity-tailwind.preview.uideck.com/images/hero-01.png" alt="" />
        <div className='mt-6 md:mt-[-26%] md:ml-[54%]'>
          {/* Lifestyle category and text */}
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-5 mx-auto w-[95%] md:w-[90%] xl:w-[70%] mt-10'>
        <div className='bg-[#dee2e6] w-full lg:w-[510px] h-auto rounded-2xl p-4'>
          <img className='w-full sm:w-[300px] md:w-[400px] mt-2' src="https://clarity-tailwind.preview.uideck.com/images/hero-02.png" alt="" />
          <div className='mt-4 md:mt-[-35%] md:ml-[54%]'>
            {/* Technology card */}
          </div>
        </div>

        <div className='bg-[#dee2e6] w-full lg:w-[510px] h-auto rounded-2xl p-4'>
          <img className='w-full sm:w-[300px] md:w-[400px] mt-2' src="https://clarity-tailwind.preview.uideck.com/images/hero-03.png" alt="" />
          <div className='mt-4 md:mt-[-35%] md:ml-[54%]'>
            {/* Travel card */}
          </div>
        </div>
      </div>
    </div>
  )
}
