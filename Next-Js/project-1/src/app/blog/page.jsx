import TeamCard from '@/components/team/teamcard/TeamCard'
import Link from 'next/link'
import React from 'react'

const page = () => {
  


  return (



    <>
   <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center mt-12 max-md:max-w-xs mx-auto">
   
    
      <Link href="/blog/zuhaib">    blog1 </Link>
      <Link href="/blog/hamza" >    blog2 </Link>
      <Link href="/blog/sami"  >    blog3 </Link>
      <Link href="/blog/Ali"   >    blog4 </Link>
      <Link href="/blog/Joji"  >    blog5 </Link>
      <Link href="/blog/jazzy" >    blog6 </Link>
    </div>
    </>
  )
}

export default page