import Link from "next/link"


const logo = () => {
  return (
    <>
        <Link href="/" className="max-sm:hidden"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
        </Link>
        <Link href="/" className="hidden max-sm:block"><img src="https://readymadeui.com/readymadeui-short.svg" alt="logo" className="w-9" />
        </Link>
    </>
  )
}

export default logo