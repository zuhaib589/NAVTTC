
import Login from "./login/Login";
import Logo from "./Logo/logo";
import Navigation from "./navigation/Navigation";

const Header = () => {
  return (
    <>
   <header class="flex shadow-[0px_0px_16px_rgba(17,_17,_26,_0.1)] py-4 px-4 sm:px-6 bg-white min-h-[70px] tracking-wide relative z-50">
      <div class="flex flex-wrap items-center justify-between gap-4 w-full max-w-screen-xl mx-auto">
    
      <Logo/>

      <Navigation/>

       <Login/>
       
      </div>
    </header>
    </>
  )
}

export default Header