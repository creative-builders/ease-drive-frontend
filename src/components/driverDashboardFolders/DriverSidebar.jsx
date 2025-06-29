import { useState } from 'react'
import scan from '../../assets/icons/scan.svg'
import message from '../../assets/icons/message-text.svg'
import menu from '../../assets/icons/menu-board.svg'

const items = [
    { id: 1, label: "Dashboard", icon: message },
    { id: 2, label: "Request", icon: message },
    { id: 3, label: "History", icon: menu },
    { id: 4, label: "Earning", icon: scan },
];

const DriverSidebar = ({ className, activeTab, setActiveTab }) => {

    const [active, setActive] = useState("Dashboard");
    console.log(message);

    return <div className={`h-screen w-64 pt-2 bg-[rgba(238,253,241,1)] ${className}`}>
      <h2 className="capitalize text-xl font-semibold ml-8">easedrive</h2>

        <main className="h-72 mt-16 flex flex-col items-center justify-between p-2">
            {items.map((item) => {
                const isActive = activeTab === item.label;
                return (
                <article
                    key={item.id}
                    onClick={() => setActiveTab(item.label)}
                    className={`h-12 w-4/5 cursor-pointer px-4 flex items-center justify-evenly transition-all duration-200 
                    
                    ${
                        isActive
                        ? "bg-[#d0fad8] text-[rgba(32,174,58,1)] border-l-[3px] border-l-[rgba(32,174,58,1)]"
                        : "hover:bg-[rgba(238,253,241,1)]"
                    }`}
                >
                    <img 
                        src={item.icon} 
                        alt={item.label} 
                         className={`w-5 h-5 transition duration-200 ${
                        isActive
                        ? "filter brightness-0 invert-[55%] sepia-[84%] saturate-[463%] hue-rotate-[66deg]"
                        : ""
                    }`}
                    />
                    <p>{item.label}</p>
                </article>
                );
            })}
        </main>
    </div>
}
export default DriverSidebar