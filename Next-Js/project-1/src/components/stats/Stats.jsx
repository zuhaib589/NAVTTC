import StatsDetail from "./statsdetail/StatsDetail"


const Stats = () => {
  return (
    <>
    <div class="bg-gradient-to-r from-blue-500 to-purple-500 p-8">
      <div class="container mx-auto">

        <h2 class="text-4xl font-semibold text-white mb-8">Statistics</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

         <StatsDetail title="Total Users" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. metus mi consectetur felis turpis vitae ligula." value="1,200"  />
         <StatsDetail title="Revenue" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. metus mi consectetur felis turpis vitae ligula." value="$50,000" />
         <StatsDetail title="Issues" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. metus mi consectetur felis turpis vitae ligula." value="5" />

    
        </div>
      </div>
    </div>
    </>
  )
}

export default Stats