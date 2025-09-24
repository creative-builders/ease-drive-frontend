import star from '../../assets/icons/starVector.svg'
import mapVector from '../../assets/images/MapVector.svg'

const Ongoing = () => {
    return <div className="h-52 w-full max-w-md mx-auto p-3 bg-[rgba(249,254,252,1)] flex flex-col items-start justify-around rounded-md">
        <h2 className="captialize text-xl font-[poppins] font-medium">ongoing ride</h2>
        <main className="h-20 w-full">
            <img src={mapVector} alt="" className='h-full w-full object-cover' />
        </main>
        <section className="h-14 w-full flex items-center justify-between px-2 py-1">
            <aside className="h-full w-32 flex items-center justify-center gap-2">
                <img src="" alt="" className="h-8 w-8 rounded-full" />
                <div className="h-10 w-16">
                    <p className="text-xs font-medium">Happiness</p>
                    <span className="text-[10px] flex items-start justify-center gap-1">
                        <img src={star} className='h-5 w-4' alt="" />
                        <span className='mt-1'>4.5</span>
                    </span>
                </div>
            </aside>
            <aside className="h-full w-16 flex flex-col items-end gap-2">
                <span className="text-[10px]">keke</span>
                <p className="text-xs font-medium">500</p>
            </aside>
        </section>
    </div>
}
export default Ongoing