
import { ToWhereLocationIcon } from '../assets/icons/ToWhereLocationIcon'

export const DestinationBar = () => {
  return (
    <div className='w-[12x] min-h-[119px] flex flex-col items-center gap-y-[5px]'>
        <div className='shrink-0 h-4 w-4 bg-green-100 py-[9px] px-2 rounded-full flex justify-center items-center'>
         <span className='block w-[10px] h-[10px] bg-accent-600 rounded-full p-[5px]'></span>
        </div>
        <div className='shrink-0 w-[2px] h-[78px] border border-neutral-400'></div>
        <div className='shrink-0 h-4 w-4 bg-green-100 rounded-full flex justify-center items-center'>
            <ToWhereLocationIcon className="w-[22px] h-[22px]"/>
        </div>
    </div>
  )
}
