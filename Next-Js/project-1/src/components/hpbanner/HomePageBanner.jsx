import HomePageBannerImage from "./hpbannerimage/HomePageBannerImage"
import HomePageBannerText from "./hpbannertext/HomePageBannerText"


const HomePageBanner = () => {
  return (
    <>
    <div className="max-w-screen-xl mx-auto ">
      <div className="bg-gradient-to-br from-purple-700 via-purple-400 to-purple-800 px-6 py-10 max-h-[500px]  overflow-hidden">
        
      <HomePageBannerText/>
      <HomePageBannerImage/>

      
      </div>
    </div>
    </>
  )
}

export default HomePageBanner