import Header from "./components/Header";
import ThingsToKnow from "./components/ThingsToKnow";
import UpcomingEvents from "./components/UpcomingEvents";
import Typography from "./components/common/Typography";
import BannerAd from "./components/BannerAd";
import UtahMedCardInfo from "./components/UtahMedCardInfo";
import ReviewUsBanner from "./components/ReviewUsBanner";
import FAQs from "./components/FAQs";
import UtahCannabisPharmacies from "./components/UtahCannabisPharmacies";
import AboutUtahGrown from "./components/AboutUtahGrown";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-[570px] bg-green1" />
      <Typography className="text-center text-[1.8rem] text-green1 py-1 font-normal">
        Utah&apos;s Cannabis Community
      </Typography>
      <main className="flex flex-col gap-6 px-[10rem] -mb-5">
        <UpcomingEvents />
        <ThingsToKnow />
        <BannerAd src="/assets/MockBannerAd@2x.png" />
        <UtahMedCardInfo />
        <ReviewUsBanner />
        <FAQs />
        <UtahCannabisPharmacies />
        <AboutUtahGrown />
      </main>
      <Footer />
    </div>
  );
}
