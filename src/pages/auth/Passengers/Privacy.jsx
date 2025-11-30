import { useState } from "react"
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../components/CustomButton";

export default function Privacy(){

    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate("/signup-as")
    }

    return(
        <div className="bg-light flex flex-col items-center justify-center gap-6">
            <header className="mt-5">
                <h2 className="text-[#333] text-center text-2xl not-italic font-bold leading-9">Privacy Policy</h2>
                <p className="text-center text-base not-italic font-normal leading-normal">last updated 15 Auguest 2025</p>
            </header>

            <main className="w-11/12 sm:w-4/5 flex flex-col gap-5 px-0 py-4">
             <article>
                <h3 className="text-[#333] text-xl not-italic font-bold leading-7"> Introduction</h3>
                <p className="text-[#333] text-base not-italic font-normal leading-6">
                    Ease-Drive (“we,” “our,” or “us”) values your privacy and is committed to protecting your personal information. 
                    This Privacy Policy explains how we collect, use, store, and protect your data when you use our platform to book rides, 
                    interact with drivers, or manage your account.

                    By accessing or using Easy-Drive, you agree to this Privacy Policy
                </p>
             </article>

             <article>
                <h3 className="text-[#333] text-xl not-italic font-bold leading-7">Information We Collect</h3>
                <p className="text-[#333] text-base not-italic font-normal leading-6">We collect the following categories of information: <br />

                    a). Account Information
                    Full name, email address, phone number, and password.
                    Student ID or verification details (if required).
                    Payment method details (e.g., linked accounts through payment gateway) <br />

                    b). Ride Information
                    Pickup and drop-off locations.
                    Booking type (immediate or scheduled).
                    Trip timestamps, distance, and fare.
                    Driver and passenger IDs related to each trip. <br />

                    c). Device & Technical Data
                    Device type, IP address, browser type, operating system.
                    App usage analytics for performance optimization. <br />

                    d). Optional Data
                    Uploaded photos (e.g., user profile picture or luggage for waybilling).
                    Ratings and feedback after rides. <br />
                </p>
             </article>

             <article>
                <h3 className="text-[#333] text-xl not-italic font-bold leading-7">3. How We Use Your Information</h3>
                <p className="text-[#333] text-base not-italic font-normal leading-6">We use collected information to: <br />

                    Create and manage your user or driver account.
                    Process ride bookings and payments.
                    Provide real-time ride tracking and trip history. <br />

                    Send notifications (SMS, in-app, or email) for trip updates.
                    Resolve disputes between users and drivers. <br />

                    Enhance user experience through analytics and performance tracking.
                    Ensure security, prevent fraud, and enforce platform policies
                </p>
             </article>

             <article>
                <h3 className="text-[#333] text-xl not-italic font-bold leading-7">4. Data Storage and Security</h3>
                <p className="text-[#333] text-base not-italic font-normal leading-6">
                    All user and driver data are stored securely on Ease-Drive’s database servers. <br />

                    We use encryption, firewalls, and role-based access control to protect sensitive information. <br />

                    While we take reasonable precautions, no system is completely immune to security breaches. <br /> You agree that you use the platform at your own risk.
                </p>
             </article>

             <article>
                <h3 className="text-[#333] text-xl not-italic font-bold leading-7">5. Data Sharing</h3>
                <p className="text-[#333] text-base not-italic font-normal leading-6">
                    We do not sell or rent personal data to third parties.
                    We may share limited data only in these cases: <br />

                    With payment gateways (e.g., Flutterwave, Stripe) for secure transaction processing. <br />

                    With law enforcement when required by applicable law. <br />

                    With technical vendors providing infrastructure or security support under confidentiality agreements.
                </p>
             </article>

             <article>
                <h3 className="text-[#333] text-xl not-italic font-bold leading-7">6. Data Retention</h3>
                <p className="text-[#333] text-base not-italic font-normal leading-6">
                    User and driver data are retained for as long as accounts remain active. <br />

                    Ride records and payment transactions may be retained for audit and regulatory purposes (up to 5 years).
                </p>
             </article>

             <article>
                <h3 className="text-[#333] text-xl not-italic font-bold leading-7">7. Cookies & Analytics</h3>
                <p className="text-[#333] text-base not-italic font-normal leading-6">
                    Our web app may use cookies or similar technologies to: <br />

                    Keep you logged in.

                    Remember preferences. <br />

                    Improve navigation and analytics.
                    You may disable cookies in your browser, but most features may not function
                </p>
             </article>

             <article>
                <h3 className="text-[#333] text-xl not-italic font-bold leading-7">8. Your Rights</h3>
                <p className="text-[#333] text-base not-italic font-normal leading-6">
                    passengers and drivers may: <br />

                    Access, update, or delete their account data. <br />

                    Request a copy of stored personal data. <br />

                    Withdraw consent for marketing communications. <br />

                    Requests should be sent to info@ease-drive.com.
                </p>
             </article>

             <article>
                <h3 className="text-[#333] text-xl not-italic font-bold leading-7">9. Third-Party Links</h3>
                <p className="text-[#333] text-base not-italic font-normal leading-6">Our app may link to third-party websites (e.g., payment portals). <br /> Ease-Drive is not responsible for their privacy practices.</p>
             </article>

             <article>
                <h3 className="text-[#333] text-xl not-italic font-bold leading-7">10. Changes to This Policy</h3>
                <p className="text-[#333] text-base not-italic font-normal leading-6">We may update this Privacy Policy periodically. Updates will be announced via in-app notification or email. <br /> Continued use of the platform after updates means you accept the revised policy.</p>
             </article>

             <article>
                <h3 className="text-[#333] text-xl not-italic font-bold leading-7">11. Contact Information</h3>
                <p className="text-[#333] text-base not-italic font-normal leading-6">For privacy inquiries or concerns: <br />
                    📧 info@ease-drive.com
                </p>
             </article>

            </main>

            <div className="h-fit w-full lg:w-4/5 p-2 mb-6">
                <section className="flex items-center gap-4">
                    <input 
                    className="ml-2 outline-0 focus:ring-0 border border-grey-400 outline-none focus:outline-none" 
                    type="checkbox"
                    checked={isChecked}
                    onChange={()=>setIsChecked(!isChecked)}
                />
                <p>I agree to the terms and conditions</p>
                </section>

                <CustomButton
                    name="I Agree"
                    disabled={!isChecked}
                    btnClick={handleNavigate}
                    extendedStyles={`
                    px-4 py-4 w-full rounded-2xl text-white gap-2 mt-6 
                    ${isChecked ? "bg-green-800 cursor-pointer" : "bg-gray-600 cursor-not-allowed"}
                    `}
                />
            </div>

        </div>
    )
}