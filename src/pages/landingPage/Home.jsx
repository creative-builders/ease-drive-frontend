import { HeroSection } from '../../components/new-landingPage/HeroSection'
import { WhySection } from '../../components/new-landingPage/WhySection'
import { HowItWorksSection } from '../../components/new-landingPage/HowItWorksSection'
import { KeyFeaturesSection } from '../../components/new-landingPage/KeyFeatures'
import FaqSection from '../../components/landing page/Faq'
import Header from '../../layout/header'
import Footer from '../../layout/footer/Footer'

 const Home = () => {
    return (
        <div className="bg-[#FDFDFD] min-h-screen">
            <Header/>
            <HeroSection />
            <WhySection />
            <HowItWorksSection />
            <KeyFeaturesSection />
            <FaqSection/>
            <Footer/>
        </div>
    )
}
export default Home
