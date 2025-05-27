

const StatsDetail = ({title,desc,value}) => {
  return (
    <>
     <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3 w-16 h-16">
              <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div className="mt-4">
              <p className="text-lg font-semibold text-slate-900">{title}</p>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{desc}</p>
              <p className="text-slate-600 text-sm mt-2">{value}</p>
            </div>
          </div>
    </>
  )
}

export default StatsDetail