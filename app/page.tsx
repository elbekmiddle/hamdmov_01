import React from 'react'

export default function Page() {
  return (
    <div>
      {/* Header */}
      <div className='flex flex-wrap items-center justify-between mt-4 px-4 md:px-12'>
        {/* Logo */}
        <div className='ml-[5%] md:ml-[10%] lg:ml-[19.5%]'>
          <img src="https://clarity-tailwind.preview.uideck.com/images/logo.svg" alt="Logo" />
        </div>

        {/* Navbar */}
        <ul className='flex gap-3 sm:gap-4 md:gap-5 text-sm sm:text-base md:text-xl font-sans mt-4 md:mt-0'>
          <li className='list-none cursor-pointer hover:text-blue-600 transition'>Home</li>
          <li className='list-none cursor-pointer hover:text-blue-600 transition'>Pages</li>
          <li className='list-none cursor-pointer hover:text-blue-600 transition'>Blogs</li>
          <li className='list-none cursor-pointer hover:text-blue-600 transition'>Support</li>
        </ul>

        {/* Icons (Placeholder) */}
        <div className='mr-[5%] md:mr-[10%] lg:mr-[19.5%] mt-4 md:mt-0 w-full md:w-auto'>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              {/* Social icons could be added here */}
              <button className="text-sm text-gray-600">FB</button>
              <button className="text-sm text-gray-600">IG</button>
            </div>
            <div className="flex items-center gap-2">
              {/* Search and Subscribe */}
              <input type="text" placeholder="Search..." className="border rounded-md px-2 py-1 text-sm" />
              <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className='bg-[#dee2e6] w-[95%] md:w-[1000px] h-auto md:h-[350px] mx-auto rounded-2xl mt-10 p-4 relative'>
        <img className='mt-2 w-full sm:w-[400px] md:w-[500px]' src="https://clarity-tailwind.preview.uideck.com/images/hero-01.png" alt="Hero" />
        <div className='mt-6 md:mt-0 md:absolute md:top-[25%] md:right-[5%] md:w-[40%]'>
          <span className="text-sm text-blue-600 uppercase">Lifestyle</span>
          <h2 className="text-xl md:text-2xl font-semibold mt-2">How to live a minimal lifestyle in 2025</h2>
          <p className="text-sm text-gray-600 mt-2">Discover the principles of simplicity and conscious living in a fast-paced world.</p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className='flex flex-col lg:flex-row gap-5 mx-auto w-[95%] md:w-[90%] xl:w-[70%] mt-10'>
        {/* Card 1 - Technology */}
        <div className='bg-[#dee2e6] w-full lg:w-[510px] h-auto rounded-2xl p-4 relative'>
          <img className='w-full sm:w-[300px] md:w-[400px] mt-2' src="https://clarity-tailwind.preview.uideck.com/images/hero-02.png" alt="Tech" />
          <div className='mt-4 md:mt-0 md:absolute md:top-[25%] md:right-[5%] md:w-[40%]'>
            <span className="text-sm text-green-600 uppercase">Technology</span>
            <h2 className="text-xl md:text-2xl font-semibold mt-2">Top 10 AI Tools You Must Try in 2025</h2>
            <p className="text-sm text-gray-600 mt-2">Explore groundbreaking tools transforming the digital industry today.</p>
          </div>
        </div>

        {/* Card 2 - Travel */}
        <div className='bg-[#dee2e6] w-full lg:w-[510px] h-auto rounded-2xl p-4 relative'>
          <img className='w-full sm:w-[300px] md:w-[400px] mt-2' src="https://clarity-tailwind.preview.uideck.com/images/hero-03.png" alt="Travel" />
          <div className='mt-4 md:mt-0 md:absolute md:top-[25%] md:right-[5%] md:w-[40%]'>
            <span className="text-sm text-orange-600 uppercase">Travel</span>
            <h2 className="text-xl md:text-2xl font-semibold mt-2">5 Hidden Travel Destinations in Central Asia</h2>
            <p className="text-sm text-gray-600 mt-2">Uncover untouched gems and plan your next unforgettable adventure.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
