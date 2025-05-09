import Header from "./components/Header";
import ThingsToKnow from "./components/ThingsToKnow";
import UpcomingEvents from "./components/UpcomingEvents";
import Typography from "./components/common/Typography";
import BannerAd from "./components/BannerAd";
import UtahMedCardInfo from "./components/UtahMedCardInfo";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-[570px] bg-green1" />

      <Typography className="text-center text-[1.8rem] text-green1 py-1">
        Utah&apos;s Cannabis Community
      </Typography>
      <main className="border-2 border-orange-400 flex flex-col gap-6 px-[10rem]">
        <UpcomingEvents />
        <ThingsToKnow />
        <BannerAd src="/assets/MockBannerAd@2x.png" />
        <UtahMedCardInfo />
      </main>
    </div>
  );
}
