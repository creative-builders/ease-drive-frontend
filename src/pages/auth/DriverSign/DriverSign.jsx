import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export default function DriverSign(){
    const [active, setActive] = useState(false)
    const navigate = useNavigate()

    const handleHomepage = () =>{
        navigate('/')
    }
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const [Confirmpassword, setConfirmPassword] = useState('');

    const toggleConfirmPasswordVisibility = () => {
        setConfirmShowPassword((prevState) => !prevState);
    };

    return(
        <div className="h-screen w-screen bg-slate-950 flex items-center justify-around flex-col">

                <p className="text-lg text-red-700 text-center font-bold">Signup</p>
            <form className="h-3/4 w-[450px] flex flex-col items-center justify-around bg-slate-700 px-3 py-3 rounded-lg">
                <section className="h-14 w-full flex justify-between px-3 bg-red-700 items-center">
                  <article className="h-10 w-[180px] flex flex-col my-0">
                    <p className="text-3xlg"><span className="uppercase text-xl"></span>Drivers</p>
                    <span className="text-xs">Register to enjoy the features</span>
                  </article>
                  <button className="border h-10 w-16 rounded cursor-pointer" onClick={handleHomepage}>close</button>
                </section>
                {/* <label className="ml-0 origin-left">Username</label> */}
                <input className="h-10 w-full rounded indent-2 outline-none bg-slate-950" type="text" id="" placeholder="Username" />
                {/* <label className="ml-0 origin-left">Email</label> */}
                <input className="h-10 w-full rounded indent-2 outline-none bg-slate-950" type="email" id="" placeholder="Email" />
                {/* <label className="ml-0 origin-left">Password</label> */}
                    <div className="h-10 w-full rounded indent-2 outline-none bg-slate-950 flex items-center gap-11">
                        <input
                            className="h-10 w-80 bg-transparent indent-2 outline-none text-white"
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
                        {/* <label className="ml-0 origin-left">Confirm Password</label> */}
                        <div className="h-10 w-full rounded indent-2 outline-none bg-slate-950 flex items-center gap-11">
                            <input
                                className="h-10 w-80 bg-transparent indent-2 outline-none text-white"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                value={Confirmpassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <i
                                className={`fa ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"} text-white opacity-50 cursor-pointer`}
                                aria-hidden="true"
                                onClick={toggleConfirmPasswordVisibility}
                            ></i>
                        </div>
                <main className="h-10 w-full rounded bg-transparent flex items-center gap-2">
                    <input className="rounded border bg-transparent" type="checkbox" id="" />
                    <p className="text-gray-400 text-sm">I agree to our <a className="text-white font-bold" href="">privacy policy</a> and <a className="text-white font-bold" href="">terms and conditions</a></p>
                </main>
            </form>

        </div>
    )
} 