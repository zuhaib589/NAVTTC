import TeamCard from "./teamcard/TeamCard"
import TeamHeading from "./teamheading/TeamHeading"


const Team = () => {
  return (
    <>
    <div class="py-4">
      <div class="max-w-5xl max-lg:max-w-2xl mx-auto">

       <TeamHeading/>

        <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center mt-12 max-md:max-w-xs mx-auto">
        
       <TeamCard img="https://readymadeui.com/team-1.webp" name="Saqib" role="Web Developer" desc="Developer of web and applications."/>
       <TeamCard img="https://readymadeui.com/team-2.webp" name="Ali" role="Seo Expert" desc="I grow websites through search."/>
       <TeamCard img="https://readymadeui.com/team-3.webp" name="Ayesha" role="UI/UX" desc="I design smooth, user-focused interfaces."/>
       <TeamCard img="https://readymadeui.com/team-4.webp" name="Amna" role="DevOps" desc="I automate deployment and infrastructure workflows."/>
       <TeamCard img="https://readymadeui.com/team-5.webp" name="Saad" role="Graphic Designer" desc="I craft visuals that communicate clearly"/>
       <TeamCard img="https://readymadeui.com/team-6.webp" name="Saima" role="Content Writer" desc="I write content that drives engagement." />

        



        </div>
      </div>
    </div>
    </>
  )
}

export default Team