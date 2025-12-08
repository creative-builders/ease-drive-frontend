

export const ShimmerBlock  = ( { extendedStyles }) => {
return(
  <div 
  className={`relative overflow-hidden bg-gray-300 ${extendedStyles}`}
  aria-hidden="true"
  >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/90 to-transparent" ></div>
  </div>
)
}



const SkeletonList = () => {
  return(
  <div className="flex flex-col">
    <div className="relative mb-2 w-full rounded-lg h-[36px] overflow-hidden bg-white rounded-lg">
     <ShimmerBlock extendedStyles={"h-full rounded-lg"}/>
    </div>

      {/* Skeleton layout */}
      <ShimmerBlock extendedStyles={"h-[17px] w-[72px] bg-gray-300 rounded mb-2 animate-pulse"}/>
    </div>
  )
}


export const DashboardHomeLoader = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-4">
      <div className="bg-transparent lg:bg-white p-4 rounded-[10px] w-full h-screen lg:min-w-[480px] lg:min-h-[734px]">
      <ShimmerBlock extendedStyles={"p-1.5 h-full rounded-lg"}/>
    </div>
     
     {/*custom destination and select ride loader  */}
     <div className="w-full lg:basis-full lg:h-full p-4 lg:p-0 bg-transparent">
      <div className="mb-6 p-1.5 lg:p-[14px] bg-white min-h-[210px] rounded-2xl">
         {[...Array(3)].map((_,i) => (
        <SkeletonList key={i}/>
        ))}
      </div>
      <div className="px-[14px] py-4 bg-white basis-full min-h-[210px] rounded-2xl">
        {[...Array(7)].map((_,i) => (
        <SkeletonList key={i}/>
        ))}
      </div>
     </div>
     
    </div>
   
  );
};


