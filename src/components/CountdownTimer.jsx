import React, { useEffect, useState } from "react";

export const CountdownTimer = ({ onSubmit, title, minutes }) => {
    const [timeLeft, setTimeLeft] = useState(parseInt(minutes) * 60); // 4 minutes
    const [showCountdown, setShowCountdown] = useState(true);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (timeLeft === 0) {
            setShowCountdown(false);
            setIsReady(true);
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="text-[#1E1E1E] text-xl font-semibold px-6 py-3 rounded-xl w-fit">
                <span
                    className={`text-lg font-bold px-2 transition 
                        ${isReady ? "text-green-600 cursor-pointer" : "text-gray-400 cursor-not-allowed"}
                    `}
                    onClick={isReady ? onSubmit : undefined}
                >
                    {title}
                </span>

                <span className="ml-0 text-lg font-inter">
                    {showCountdown ? (
                        <span className="text-blue-400">{formatTime(timeLeft)}</span>
                    ) : (
                        <a href="">
                            <span className="text-green-600 cursor-pointer" onClick={onSubmit}>
                                Now
                            </span>
                        </a>
                    )}
                </span>
            </div>
        </div>
    );
};

export default CountdownTimer;
