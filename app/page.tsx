import React from 'react';

export default function page() {
  return (
    <div className="flex flex-col items-center px-4">

      {/* Header */}
      <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between py-4">
        {/* Logo */}
        <img src="https://clarity-tailwind.preview.uideck.com/images/logo.svg" alt="Logo" className="h-8" />

        {/* Menu */}
        <ul className="flex gap-4 text-base font-medium">
          <li>Home</li>
          <li>Pages</li>
          <li>Blogs</li>
          <li>Support</li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-3">
          <a href="#" className="text-sm">FB</a>
          <a href="#" className="text-sm">IG</a>
        </div>
      </div>

      {/* Hero Card */}
      <div className="w-full max-w-screen-md bg-[#dee2e6] rounded-2xl overflow-hidden mt-6">
        <img
          src="https://clarity-tailwind.preview.uideck.com/images/hero-01.png"
          alt="Hero Image"
          className="w-full"
        />
        <div className="p-4">
          <p className="text-sm text-blue-600 font-semibold">LIFESTYLE</p>
          <h2 className="text-xl font-bold mt-1">
            How to live a minimal lifestyle in 2025
          </h2>
          <p className="text-sm text-gray-700 mt-2">
            Discover the principles of simplicity and conscious living in a fast-paced world.
          </p>
        </div>
      </div>

      {/* Two Side Cards */}
      <div className="w-full max-w-screen-xl flex flex-col lg:flex-row gap-6 mt-10">

        {/* Left Card */}
        <div className="flex-1 bg-[#dee2e6] rounded-2xl overflow-hidden">
          <img
            src="https://clarity-tailwind.preview.uideck.com/images/hero-02.png"
            alt="Technology"
            className="w-full"
          />
          <div className="p-4">
            <p className="text-sm text-green-600 font-semibold">TECHNOLOGY</p>
            <h2 className="text-xl font-bold mt-1">
              Top 10 AI Tools You Must Try in 2025
            </h2>
            <p className="text-sm text-gray-700 mt-2">
              Explore groundbreaking tools transforming the digital industry today.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="flex-1 bg-[#dee2e6] rounded-2xl overflow-hidden">
          <img
            src="https://clarity-tailwind.preview.uideck.com/images/hero-03.png"
            alt="Travel"
            className="w-full"
          />
          <div className="p-4">
            <p className="text-sm text-orange-500 font-semibold">TRAVEL</p>
            <h2 className="text-xl font-bold mt-1">
              5 Hidden Travel Destinations in Central Asia
            </h2>
            <p className="text-sm text-gray-700 mt-2">
              Uncover untouched gems and plan your next unforgettable adventure.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
