import * as React from "react";
export const Skip = (props) => (

    <div className="flex justify-center items-center gap-2">
        <div>
            <h4 className="text-[#F48020] font-inter font-medium leading-relaxed text-xl ">{props.title}</h4>
        </div>
        <div>
            <svg
                width={32}
                height={33}
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                {...props}
            >
                <path
                    d="M26.6668 16.4998H5.3335"
                    stroke="#F48020"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M20.0004 23.1666C20.0004 23.1666 26.6669 18.2567 26.6669 16.4999C26.6669 14.7431 20.0002 9.83325 20.0002 9.83325"
                    stroke="#F48020"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    </div>
);

