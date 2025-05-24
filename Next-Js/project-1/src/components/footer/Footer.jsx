import FooterLogo from "./footerLogo/FooterLogo"
import FooterMenu from "./footerMenu/FooterMenu"

const Footer = () => {
  return (
    <>
    <footer class="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 py-10 px-10 tracking-wide">
      <div class="max-w-screen-xl mx-auto">
        <div class="flex flex-wrap items-center md:justify-between max-md:flex-col gap-6">
        
        <FooterLogo/>
        <FooterMenu/>
           
        </div>

        <hr class="my-6 border-gray-500" />

        <p class="text-center text-gray-300 text-base">© ReadymadeUI. All rights reserved.</p>
      </div>
    </footer>
    </>
  )
}

export default Footer