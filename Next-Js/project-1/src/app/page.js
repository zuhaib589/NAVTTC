import HomePageBanner from "@/components/hpbanner/HomePageBanner";
import Stats from "@/components/stats/Stats";
import Team from "@/components/team/Team";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HomePageBanner/>
    <Team/>
    <Stats/>


    </>
  );
}
