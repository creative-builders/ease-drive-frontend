import React from "react";
import keke  from "../assets/images/keke-image.png"

const BidCard = ({
    profile_pic=keke,
    name="james",
    rating=4.5,
    transport_means = "keke",
    Amount="2000"
}) =>{

    return (
        // <div className="min-h-screen bg-gray-500">
        <div className="bg-white border border-green-500 rounded-xl flex p-3 gap-3">

            {/* first section */}
            <div className="w-3/5 h-full text-sm flex flex-col gap-4">
                <div className="flex w-full items-center gap-2">
                    <img src={profile_pic} alt="" className="w-10 h-10 rounded-full object-cover"/>
                    <p>{name}</p>
                    <img src={"/star.jpg"} alt="" className="w-3" />
                    <p>{rating}</p>
                </div>

                <div className="flex flex-col gap-4">
                    <p>{transport_means} <span><em className="decoration-double line-through">N</em>{Amount}</span></p>
                    <p className="text-xs">800m (5mins away)</p>
                </div>
                <p className="text-[11px] text-gray-400/50">Automatic | 3 seat | yellow</p>
                <div className="flex items-center justify-center gap-3 pr-2">
                    <button className="w-full py-2 cursor-pointer text-center rounded-xl text-green-300 bg-transparent border border-green-500">Decline</button>
                    <button className="w-full py-2 cursor-pointer text-center rounded-xl text-white bg-green-300">Accept</button>
                </div>
            </div>

            {/* second section */}
            <div className="w-2/5 h-full flex flex-col gap-5">
                <img src={profile_pic} alt="" className="w-full object-cover"/>
                <div className="flex items-center justify-between text-sm"><a className="text-green-500 w-full text-center" href="">View details</a></div>
            </div>
        </div>
        // <div className="min-h-screen bg-gray-500">
        //     <div className="h-fit-content w-full mx-auto xl:w-8/12 px-4 py-4">
        //         <section className="h-96 flex items-center justify-between">
        //         <div className="h-72 w-2/4 px-2 flex flex-col gap-4">
        //             <article className="w-2/4 flex border border-blue-500 items-center justify-between">
        //                 <div className="h-14 w-14 rounded-full border border-blue-500 bg-gray-200">
        //                     <img 
        //                         src={profile_pic} 
        //                         alt="" 
        //                         className="w-full h-full object-cover rounded-full"
        //                     />
        //                 </div>
        //                 <p>{name} {rating}</p>
        //             </article>
        //             <p>{transport_means} <span><em className="decoration-double line-through">N</em>{Amount}</span></p>
        //             <p>800m (5mins away)</p>
        //             </div>
        //         <div className="h-72 w-2/4"><img className="h-full w-full" src={keke} alt="" /></div>
        //         </section>
        //         <p></p>
        //         <div className="flex items-center justify-between text-sm"><p className="opacity-3">Automatic | 3 seat | yellow</p> <a className="text-blue-500" href="">View details</a></div>
        //         <div className="h-20 w-2/5 flex items-center justify-around">
        //             <button className="h-12 xl:w-4/5 cursor-pointer text-center rounded-xl text-green-300 bg-transparent border border-green-500">Decline</button>
        //             <button className="h-12 xl:w-4/5 cursor-pointer text-center rounded-xl text-white bg-green-300">Accept</button>
        //         </div>
        //     </div>
        // </div>
    )
}
export default BidCard