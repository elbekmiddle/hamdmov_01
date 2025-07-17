import React from 'react'

export default function page() {
  return (
    <div>
      <div className='flex items-center justify-between mt-4'>
        <div className='ml-[19.5%]'>
          <img src="https://clarity-tailwind.preview.uideck.com/images/logo.svg" alt="" />
        </div>
        <div className='flex gap-5 text-xl font-sans'>
          <li className='list-none'>Home</li>
          <li className='list-none'>Pages</li>
          <li className='list-none'>Blogs</li>
          <li className='list-none'>Support</li>
        </div>
        <div className='mr-[19.5%]'>
          <div className="flex flex-wrap items-center gap-8.5 mt-7 lg:mt-0">
        <div className="flex items-center gap-1.5">
          <a id="facebookBtn" aria-label="facebook social link" href="#" className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:duration-200 hover:text-dark">
            <svg className="fill-current" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4 8.58585V6.07664C10.4 5.10529 11.2059 4.31785 12.2 4.31785H14V1.67966L11.5565 1.50912C9.47255 1.36368 7.7 2.97636 7.7 5.01777V8.58585H5V11.224H7.7V16.5H10.4V11.224H13.1L14 8.58585H10.4Z" fill=""></path>
            </svg>
          </a>
          <a id="twitterBtn" aria-label="twitter social link" href="#" className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:duration-200 hover:text-dark">
            <svg className="fill-current" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_739_364)">
                <path d="M16.2781 4.30313L17.3469 2.95313C17.6562 2.5875 17.7406 2.30625 17.7688 2.16562C16.925 2.67188 16.1375 2.84063 15.6312 2.84063H15.4344L15.3219 2.72813C14.6469 2.1375 13.8031 1.82812 12.9031 1.82812C10.9344 1.82812 9.3875 3.45938 9.3875 5.34375C9.3875 5.45625 9.3875 5.625 9.41563 5.7375L9.5 6.3L8.90938 6.27188C5.30937 6.15938 2.35625 3.06563 1.87813 2.53125C1.09063 3.9375 1.54063 5.2875 2.01875 6.13125L2.975 7.70625L1.45625 6.8625C1.48438 8.04375 1.93437 8.97188 2.80625 9.64688L3.56562 10.2094L2.80625 10.5188C3.28437 11.9531 4.35313 12.5438 5.14062 12.7688L6.18125 13.05L5.19688 13.725C3.62188 14.85 1.65312 14.7656 0.78125 14.6813C2.55313 15.9188 4.6625 16.2 6.125 16.2C7.22188 16.2 8.0375 16.0875 8.23438 16.0031C16.1094 14.1469 16.475 7.11563 16.475 5.70938V5.5125L16.6438 5.4C17.6 4.5 17.9937 4.02188 18.2188 3.74063C18.1344 3.76875 18.0219 3.825 17.9094 3.85313L16.2781 4.30313Z" fill=""></path>
              </g>
              <defs>
                <clipPath id="clip0_739_364">
                  <rect width="18" height="18" fill="white" transform="translate(0.5)"></rect>
                </clipPath>
              </defs>
            </svg>
          </a>
          <a id="linkedinBtn" aria-label="linkedin social link" href="#" className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:duration-200 hover:text-dark">
            <svg className="fill-current" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.50004 3.50068C5.49976 4.11141 5.12924 4.661 4.56318 4.89028C3.99713 5.11957 3.34858 4.98277 2.92335 4.54439C2.49812 4.10601 2.38114 3.45359 2.62755 2.89478C2.87397 2.33597 3.43458 1.98236 4.04504 2.00068C4.85584 2.02502 5.5004 2.68951 5.50004 3.50068ZM5.54504 6.11068H2.54504V15.5007H5.54504V6.11068ZM10.2851 6.11068H7.30004V15.5007H10.2551V10.5732C10.2551 7.82816 13.8326 7.57316 13.8326 10.5732V15.5007H16.7951V9.55316C16.7951 4.92568 11.5001 5.09818 10.2551 7.37066L10.2851 6.11068Z" fill=""></path>
            </svg>
          </a>
          <a id="pinterestBtn" aria-label="pinterest social link" href="#" className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:duration-200 hover:text-dark">
            <svg className="fill-current" width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.00623 9.02818C1.06248 11.6438 2.27186 14.2594 4.32497 15.8344C4.97185 16.3126 5.67497 16.5938 6.40622 16.9032C6.09685 14.9063 6.85622 12.9094 7.2781 10.9407C7.33435 10.7438 7.36247 10.5188 7.36247 10.2938C7.36247 9.98443 7.24997 9.67505 7.1656 9.36568C7.08122 8.85943 7.13747 8.32505 7.36247 7.84693C7.67185 7.20005 8.4031 6.6938 9.04997 6.94693C9.6406 7.17193 9.8656 7.95943 9.7531 8.57818C9.6406 9.22505 9.3031 9.78755 9.13435 10.4063C8.93747 11.0251 8.9656 11.7844 9.4156 12.2063C9.83747 12.6001 10.5125 12.6282 11.0468 12.4032C11.8343 12.0657 12.3406 11.2782 12.65 10.4907C13.2125 9.02818 13.1 7.17193 11.9468 6.10318C11.4687 5.62505 10.7937 5.31568 10.0625 5.20318C8.82497 5.0063 7.47497 5.37193 6.6031 6.27193C5.73122 7.17193 5.33747 8.55005 5.7031 9.7313C5.8156 10.1251 6.0406 10.5188 6.12497 10.9126C6.20935 11.3063 6.18122 11.8126 5.89997 12.0938C5.87185 12.1219 5.84372 12.1501 5.78747 12.1782C5.73122 12.2063 5.64685 12.1501 5.5906 12.1219C5.05622 11.7844 4.63435 11.2501 4.38122 10.6876C3.59372 8.97193 3.98747 6.83443 5.22497 5.42818C6.46247 4.02193 8.45935 3.34693 10.3156 3.60005C12.0593 3.82505 13.775 4.86568 14.5062 6.4688C14.9562 7.42505 15.0406 8.52193 14.8718 9.56255C14.7031 10.6313 14.2812 11.6438 13.5781 12.4594C12.875 13.2751 11.8625 13.8376 10.7937 13.8938C9.92185 13.9501 8.99372 13.6407 8.54372 12.9094C8.26247 14.4282 7.7281 15.9188 6.9406 17.2407C6.91247 17.2969 8.7406 17.6907 8.90935 17.6907C10.9906 17.8594 13.2125 17.0438 14.8437 15.7501C19.3437 12.1782 18.8656 5.3438 14.4218 1.96881C12.1156 0.196933 9.38747 -0.140567 6.68747 0.815684C5.87185 1.09693 5.11247 1.57506 4.40935 2.08131C3.28436 2.92505 2.38436 4.02193 1.79373 5.28755C1.20311 6.44068 0.978106 7.73443 1.00623 9.02818Z" fill=""></path>
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-4.5">
          <button id="searchModalButton" aria-label="button for modal open" className="flex items-center justify-center w-11 h-11 rounded-full bg-gray lg:transition-all lg:ease-linear lg:duration-200 hover:bg-gray-2 hover:text-dark">
            <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.1875 17.4063L14.0313 13.2188C16.1563 10.3125 15.9375 6.15625 13.2812 3.53125C11.875 2.125 10 1.34375 8 1.34375C6 1.34375 4.125 2.125 2.71875 3.53125C-0.1875 6.4375 -0.1875 11.1875 2.71875 14.0938C4.125 15.5 6 16.2813 8 16.2813C9.90625 16.2813 11.6875 15.5625 13.0938 14.2813L18.3125 18.5C18.4375 18.5938 18.5938 18.6563 18.75 18.6563C18.9688 18.6563 19.1562 18.5625 19.2812 18.4063C19.5312 18.0938 19.5 17.6563 19.1875 17.4063ZM8 14.875C6.375 14.875 4.875 14.25 3.71875 13.0938C1.34375 10.7188 1.34375 6.875 3.71875 4.53125C4.875 3.375 6.375 2.75 8 2.75C9.625 2.75 11.125 3.375 12.2812 4.53125C14.6562 6.90625 14.6562 10.75 12.2812 13.0938C11.1562 14.25 9.625 14.875 8 14.875Z" fill=""></path>
            </svg>
          </button>

          <button className="bg-black rounded-md text-white font-medium flex py-2.5 px-5.5 bg-dark hover:opacity-90 lg:transition-all lg:ease-linear lg:duration-200">
            Subscribe
          </button>
        </div>
      </div>
        </div>
      </div>

      <div className='bg-[#dee2e6] w-[1000px] h-[350px] ml-[25%] rounded-2xl mt-15'><br />
        <img className='mt-[5px] ml-3 w-[500px]' src="https://clarity-tailwind.preview.uideck.com/images/hero-01.png" alt="" />
        <div className='ml-[54%] mt-[-26%]'>
          <a href="category.html" className="bg-[#c77dff53] w-[80px] p-[5px] h-[25px] text-[#3c096c] text-center inline-flex text-purple-dark bg-purple/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4">Lifestyle</a><br />
          <a className='text-[#15171a] text-[23px] font-bold'>Begin here to obtain a brief summary <br /> encompassing all the essential</a>
          <p className="text-[#5c6a78] mt-3">This comprehensive post serves as your cheat-sheet to swiftly <br />familiarize yourself with Ghost. Packed with crucial...</p>
          <div className="flex items-center gap-2.5 mt-5">
                  <a href="author.html" className="flex items-center gap-3">
                    <div className="flex w-6 h-6 rounded-full overflow-hidden">
                      <img src="https://clarity-tailwind.preview.uideck.com/images/user-01.png" alt="user"/>
                    </div>
                    <p className="text-sm">Adrio Devid</p>
                  </a>

                  <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>

                  <p className="text-sm">Sep 10, 2025</p>
          </div>
        </div>
      </div>
      <div className='flex gap-5 ml-[25%]'>
        <div className='bg-[#dee2e6] w-[510px] h-[200px] rounded-2xl mt-15'>
          <img className='ml-3 mt-2' src="https://clarity-tailwind.preview.uideck.com/images/hero-02.png" alt="" />
          <div className='ml-[54%] mt-[-35%]'>
          <a href="category.html" className="bg-[#1e5f9182] w-[100px] p-[5px] h-[25px] text-[#1e6091] text-center inline-flex text-purple-dark bg-purple/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4">Technology</a><br />
          <a className='text-[15.5px] font-bold'>14 Innovative Architectural <br /> Designs to Create a Vast <br />Interior Space</a>
          <div className="flex items-center gap-2.5">
                  <p className="text-sm">
                    <a href="author.html">By Adrio Devid</a>
                  </p>

                  <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>

                  <p className="text-sm">Sep 10, 2025</p>
          </div>
        </div>
        </div>
        <div className='bg-[#dee2e6] w-[510px] h-[200px] rounded-2xl mt-15'>
          <img className='ml-3 mt-2' src="https://clarity-tailwind.preview.uideck.com/images/hero-03.png" alt="" />
          <div className='ml-[54%] mt-[-35%]'>
          <a href="category.html" className="bg-[#00800077] w-[60px] p-[5px] h-[25px] text-[#008000] text-center inline-flex text-purple-dark bg-purple/[0.08] font-medium text-sm py-1 px-3 rounded-full mb-4">Travel</a><br />
          <a className='text-[15.5px] font-bold'>Traveller Visiting Ice Cave With  <br /> Amazing Eye-catching view <br />with nature</a>
          <div className="flex items-center gap-2.5">
                  <p className="text-sm">
                    <a href="author.html">By Adrio Devid</a>
                  </p>

                  <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>

                  <p className="text-sm">Sep 10, 2025</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
