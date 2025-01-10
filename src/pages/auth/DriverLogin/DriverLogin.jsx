import React, { useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';

export default function DriverLogin() {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const handleHomepage = () => {
        navigate('/');
    };

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="h-screen w-screen bg-slate-950 flex items-center justify-around flex-col">
            <p className="text-lg text-red-700 text-center font-bold">Login</p>
            <form className="h-[500px] w-[80%] sm:w-[450px] flex flex-col items-center justify-around bg-slate-700 px-3 py-3 rounded-lg relative">
                <section className="h-14 w-full flex justify-between px-3 bg-red-700 items-center">
                    <article className="h-10 w-[180px] flex flex-col my-0">
                        <p className="text-3xlg"><span className="uppercase text-xl"></span>Drivers</p>
                        <span className="text-xs">Register to enjoy the features</span>
                    </article>
                    {/* <link className="border h-10 w-16 rounded cursor-pointer" to="/">close</link> */}
                    <button className="border h-10 w-16 rounded cursor-pointer" onClick={handleHomepage}>close</button>
                </section>

                <input className="h-10 w-full rounded indent-2 outline-none bg-slate-950 text-white" type="email" placeholder="Email" />

                <div className="h-10 w-full rounded indent-2 outline-none bg-slate-950 flex items-center gap-2">
                    <input
                        className="h-10 w-[90%] bg-transparent indent-2 outline-none text-white"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <i
                        className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"} text-white opacity-50 cursor-pointer`}
                        aria-hidden="true"
                        onClick={togglePasswordVisibility}
                    ></i>
                </div>
                <span className="text-white absolute top-[68%] right-4 text-[12px]"><a href="">Forget password</a></span>

                <button className="h-10 w-full rounded indent-2 outline-none bg-white text-black">Continue</button>
                <link typeof=''></link>
                <p className="text-white text-sm">Don't have an account? <Link to="/DriverSign" className="text-blue-400 cursor-pointer">Sign up</Link></p>
            </form>
        </div>
    );
}
