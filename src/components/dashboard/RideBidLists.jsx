import { RideBidItem } from "./RideBidItem";

export const RideBidLists = ({
  rideBids
}) => {

  if (!rideBids || rideBids.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-xl">
        <p className="text-neutral-400 font-semibold text-sm lg:text-2xl">No bids yet! <br /> Your ongoing bids will appear here.</p>
      </div>
    );
  }

  return (
    <>
      {rideBids.map((rideBid) => (
        <RideBidItem key={rideBid._id} rideBid={rideBid} />
      ))}
    </>
  )
}
