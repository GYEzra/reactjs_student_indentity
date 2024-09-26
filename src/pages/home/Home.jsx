import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import BrandInfo from "../../components/BrandInfo/BrandInfo";
import SubscriptionPlans from "../../components/SubscriptionPlans/SubscriptionPlans";
import Services from "../../components/Services/Services";
import TrendingList from "../../components/TrendingList/TrendingList.jsx";
import CardSlider from "../../components/CardSlider/CardSlider.jsx";
import WalletLogin from "../../components/WalletLogin/WalletLogin.jsx";
import LogoCarousel from "../../components/LogoCarousel/LogoCarousel.jsx";
import Service1 from "../../components/Service1/Service.jsx";
import NFTGallery from "../../components/NFTGallery/NFTGallery.jsx";
import ContactUs from "../ContactUs/ContactUs.jsx";
const Home = () => {
  return (
    <div>

      <Navbar />
      <Header/>
      <CardSlider/>
      <FeaturedProducts/>
      <WalletLogin/>
      <div className="LogoCarousel">
        <LogoCarousel/>
      </div>
     
      <Services/>
      <TrendingList/>
      <NFTGallery/>
      <Service1/>
      <BrandInfo/>
      <SubscriptionPlans/>
      <div className="homeContainer">
        <MailList/>
 
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
