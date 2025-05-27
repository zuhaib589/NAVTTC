import TeamCard from '@/components/team/teamcard/TeamCard'
import Link from 'next/link'
import React from 'react'

const page = () => {
  


  return (



    <>
   {/* <div classNameName="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center mt-12 max-md:max-w-xs mx-auto">
   
    
      <Link href="/blog/zuhaib">    blog1 </Link>
      <Link href="/blog/hamza" >    blog2 </Link>
      <Link href="/blog/sami"  >    blog3 </Link>
      <Link href="/blog/Ali"   >    blog4 </Link>
      <Link href="/blog/Joji"  >    blog5 </Link>
      <Link href="/blog/jazzy" >    blog6 </Link>
    </div> */}
  <div className="bg-gray-100 px-4 py-12">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          <div className="bg-white rounded-sm overflow-hidden">
            <img src="https://readymadeui.com/cardImg.webp" alt="Blog Post 1" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Lorem Ipsum Dolor</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
              <p className="text-orange-500 text-[13px] font-semibold mt-2">08 April 2024</p>
              <a href="javascript:void(0);" className="mt-6 inline-block px-4 py-2 rounded-sm tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium">Read More</a>
            </div>
          </div>

          <div className="bg-white rounded-sm overflow-hidden">
            <img src="https://readymadeui.com/hotel-img.webp" alt="Blog Post 2" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Consectetur Adipiscing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
              <p className="text-orange-500 text-[13px] font-semibold mt-2">08 April 2024</p>
              <a href="javascript:void(0);" className="mt-6 inline-block px-4 py-2 rounded-sm tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium">Read More</a>
            </div>
          </div>

          <div className="bg-white rounded-sm overflow-hidden">
            <img src="https://readymadeui.com/team-image.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Lorem Ipsum Sit Amet</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
              <p className="text-orange-500 text-[13px] font-semibold mt-2">08 April 2024</p>
              <a href="javascript:void(0);" className="mt-6 inline-block px-4 py-2 rounded-sm tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium">Read More</a>
            </div>
          </div>

          <div className="bg-white rounded-sm overflow-hidden">
            <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Lorem Ipsum Sit Amet</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
              <p className="text-orange-500 text-[13px] font-semibold mt-2">08 April 2024</p>
              <a href="javascript:void(0);" className="mt-6 inline-block px-4 py-2 rounded-sm tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium">Read More</a>
            </div>
          </div>

          <div className="bg-white rounded-sm overflow-hidden">
            <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Lorem Ipsum Sit Amet</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
              <p className="text-orange-500 text-[13px] font-semibold mt-2">08 April 2024</p>
              <a href="javascript:void(0);" className="mt-6 inline-block px-4 py-2 rounded-sm tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium">Read More</a>
            </div>
          </div>

          <div className="bg-white rounded-sm overflow-hidden">
            <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 3" className="w-full h-52 object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Lorem Ipsum Sit Amet</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...</p>
              <p className="text-orange-500 text-[13px] font-semibold mt-2">08 April 2024</p>
              <a href="javascript:void(0);" className="mt-6 inline-block px-4 py-2 rounded-sm tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>






    </>
  )
}

export default page