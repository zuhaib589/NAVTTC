

const Login = () => {
  return (
    <>
     <div class="flex items-center max-lg:ml-auto space-x-4">
          <button type="button" class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white text-[15px] font-medium flex items-center justify-center gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              class="cursor-pointer fill-white inline w-4 h-4">
              <circle cx="10" cy="7" r="6" data-original="#000000" />
              <path
                d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                data-original="#000000" />
            </svg>
            Login
          </button>

          <button id="toggleOpen" class="lg:hidden cursor-pointer">
            <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
    
    
    </>
  )
}

export default Login