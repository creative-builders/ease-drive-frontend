

export function InfoCard({ title, value, footer, InfoIcon }) {
    return (
        <div className="flex flex-col justify-center items-start gap-2 lg:w-[257px]
     lg:h-[124px] w-[184px] h-[96px] p-4 rounded-lg border border-neutral-200 bg-white">
            {/* Title */}

            {title &&
                <div className="flex items-center gap-2">
                    <div className=" flex justify-center items-center bg-green-50 lg:w-[38px] lg:h-[38px] h-[18px] w-[18px] rounded-full">
                        <InfoIcon />
                    </div>
                    <div>
                        <h4 className="lg:text-lg text-base text-primary-700 font-medium font-poppins">
                            {title}
                        </h4>
                    </div>
                </div>


            }

            {/* Value */}
            {value && <h1 className="lg:text-2xl text-base font-semibold font-poppins text-gray-800">₦{value}</h1>}

            {/* Footer / Extra content */}
            {footer && <p className="lg:text-[10px] tex-[8px] text-primary-700  font-semibold">{footer}</p>}
        </div>
    );
}
