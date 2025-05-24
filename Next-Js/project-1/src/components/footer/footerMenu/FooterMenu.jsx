import Link from "next/link"


const FooterMenu = () => {
  return (
    <>
        <ul class="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
            <li><Link href="/" class="text-gray-300 hover:underline text-base">Home</Link></li>
            <li><Link href="/about" class="text-gray-300 hover:underline text-base">About</Link></li>
            <li><Link href="/service" class="text-gray-300 hover:underline text-base">Services</Link></li>
            <li><Link href="/contact-us" class="text-gray-300 hover:underline text-base">Contact</Link></li>
          </ul>
          
    </>
  )
}

export default FooterMenu