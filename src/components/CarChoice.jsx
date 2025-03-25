import BidCard from "./BidCard";


export default function CarChoice(){
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 p-1">
        {
            [...Array(4)].map(data => (
                <BidCard />
            ))
        }
    </div>
  )
}
