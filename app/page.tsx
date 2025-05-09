import Header from "./components/Header";
import UpcomingEvents from "./components/UpcomingEvents";
import Typography from "./components/common/Typography";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-[570px] bg-green1" />

      <Typography className="text-center text-[1.8rem] text-green1 py-1">
        Utah&apos;s Cannabis Community
      </Typography>
      <UpcomingEvents />
    </div>
  );
}
