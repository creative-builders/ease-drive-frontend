import { Link } from "react-router-dom"
import { EmailSignedIcon } from "../../../assets/icons/EmailSignedIcon"
import { HouseBuilding } from "../../../assets/icons/HouseBuilding"
import { PhoneIcon } from "../../../assets/icons/PhoneIcon"


const TermsOfUse = () => {

    return (
        <div className="bg-light flex flex-col items-center justify-center gap-6">
            <header className="mt-5">
                <h2 className="text-gray-700 text-center text-2xl not-italic font-bold leading-9">Terms and conditions</h2>
                <p className="text-center text-base not-italic font-normal leading-normal">last updated 12 Auguest 2025</p>
            </header>

            <main className="w-11/12 sm:w-4/5 flex flex-col gap-5 px-0 py-4">
                <article>
                    <h3 className="text-gray-700 text-xl not-italic font-bold leading-7">1. Introduction</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">Welcome to Ease-Drive, a platform developed to provide travelers and residents within Nigeria with an easy, reliable, and affordable way to book rides, shuttles, keke, taxis, and motorcycle (“okada”) drivers</p>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">By accessing or using the Ease-Drive platform (“the Service”), you agree to comply with and be bound by these Terms and Conditions. If you do not agree, you may not use the platform.</p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">2. Definitions</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">“User” refers to any individual using Ease-Drive to request or book transportation. 
                        “Driver” refers to any registered individual providing transport services through the Easy-Drive platform. 
                        “Platform” refers to the Ease-Drive web and/or mobile application.
                        “Booking” refers to a ride or delivery request made through the platform. 
                        “We,” “Us,” or “Our” refers to the Ease-Drive development and management team.
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">3. Eligibility</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">To use Ease-Drive, users and drivers must:
 
                        Be at least 18 years old or have guardian consent.  
                        Possess a valid university ID (for student registration, where applicable). 
                        Provide accurate and verifiable information during registration. 
                        Maintain compliance with university and local transportation regulations.
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">4. User Accounts</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">Users must register with a valid email address, phone number, and password. 
                        Drivers must provide valid identification, driver’s license, and vehicle information. 
                        You are responsible for maintaining confidentiality of your login credentials. 
                        Ease-Drive reserves the right to suspend or terminate accounts that provide false information or engage in fraudulent activity.
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">5. Booking & Ride Process</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">Users can book rides based on pickup and drop-off points, available drivers, and selected time (immediate or scheduled). 
                        Both User and Driver must click “Start Trip” at the beginning and “Trip Completed” at the end of a ride.
                        Failure by both parties to complete this process may result in non-payment to the driver and cancellation of the trip record. 
                        Bookings for goods transfer (waybilling) must include a clear description and picture of the items. 
                        Ease-Drive may record ride details, time stamps, and trip locations for safety and auditing purposes.
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">6. Payment Terms</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">Payments can be made through integrated payment gateways (e.g., Flutterwave, Stripe, or direct transfer). 
                        Drivers must not accept off-platform payments; any such transaction is done at your own risk and violates these Terms. 
                        Ease-Drive may charge a commission or percentage per trip or use a driver subscription model (to be specified during roll out). 
                        A digital receipt will be generated for every completed payment, showing transaction details, parties involved, and timestamp. 
                        Refunds, when applicable, will follow the Ease-Drive Refund Policy (available separately).
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">7. Ratings & Reviews</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">After each trip, users and drivers may leave ratings and feedback. 
                        Reviews must be honest, non-abusive, and not defamatory. 
                        Ease-Drive reserves the right to moderate or remove reviews that violate our community guidelines.
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">8. Drivers Obligation</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">Drivers agree to:
                        Maintain a valid driver’s license and roadworthy vehicle. 
                        Remain courteous, punctual, and professional. 
                        Use the Ease-Drive platform to accept and complete bookings only. 
                        Not engage in fraudulent activities or off-platform arrangements.
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">9. User Responsibilities</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">Users agree to:
                        Provide accurate pickup and drop-off information. 
                        Be available at the designated location on time. 
                        Avoid misuse of the app for harassment, spam, or false bookings. 
                        Refrain from making direct payment to drivers outside the platform.
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">10. Cancellations & Penalties</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">Cancellations should be made before the driver accepts or starts the trip.
                        Frequent cancellations or no-shows may result in temporary suspension.
                        Drivers who repeatedly decline or abandon bookings may also face account review
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">11. Notifications</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">Ease-Drive will send SMS, push, or in-app notifications for trip confirmations, updates, and receipts.
                        By using the platform, you consent to receive such notifications.
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">12. Data Privacy & Security</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">Ease-Drive collects necessary data (e.g., contact details, ride locations) for functionality and safety. 
                        All personal data will be stored and processed in line with our Privacy Policy. 
                        We implement security protocols to protect users, but cannot guarantee absolute protection from unauthorized access or system breaches.
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">13. Prohibited Conduct</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">You must not:
                        Hack, manipulate, or disrupt the Easy-Drive system or network.
                         Create fake accounts or attempt to impersonate others. 
                        Circumvent payment systems or misuse promotional offers. 
                        Post false, misleading, or harmful content.
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">14. Liability Disclaimer</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">Ease-Drive is a technology platform, not a transportation company.
                        We connect users and drivers but do not own vehicles or employ drivers directly. 
                        We are not liable for damages, delays, accidents, or disputes between users and drivers.
                         Users and drivers assume full responsibility for personal safety and property during trips.
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">15. Dispute Resolution</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">Disputes between users and drivers should first be reported through the Easy-Drive Support Center.
                        Ease-Drive may mediate but does not guarantee specific outcomes.
                        Persistent misconduct may lead to account suspension or permanent ban.
                    </p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">16. Intellectual Property</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">All trademarks, logos, and app content are property of Easy-Drive and may not be copied, redistributed, or used without written permission.</p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">17 Amendments</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">Ease-Drive may update these Terms periodically. Users will be notified of changes through the app or email. Continued use of the platform implies acceptance of updated terms.</p>
                </article>

                <article>
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">18. Governing Law</h3>
                    <p className="text-gray-700 text-base not-italic font-normal leading-6">These Terms are governed by the laws of Nigeria, with jurisdiction in Enugu State.</p>
                </article>

                <article className="flex flex-col gap-4">
                    <h3  className="text-gray-700 text-xl not-italic font-bold leading-7">19. Contact Information</h3>
                    <p className="flex flex-col gap-2 text-gray-700 text-base not-italic font-normal leading-6">For inquiries, feedback, or complaints, contact: <br />
                        <Link to={"mailto:info@ease-drive.com"} className="flex items-center gap-2"><EmailSignedIcon stroke="#000" /> info@ease-drive.com</Link>
                         
                        <Link to={"tel:+2349017912839"} className="flex items-center gap-2"><PhoneIcon stroke="#000" /> +234 9017912839 </Link>
                        
                        <span className="flex items-center gap-2"><HouseBuilding /> University of Nigeria, Nsukka – Innovation Hub</span> 
                        
                    </p>
                </article>
            </main>
            
        </div>
    )
}
export default TermsOfUse