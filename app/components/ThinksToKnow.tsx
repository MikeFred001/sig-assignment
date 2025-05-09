import Typography from "./common/Typography";
import EventList from "./EventList";

export default function ThingsToKnow() {
  return (
    <div className="THINGS-TO-KNOW">
      <Typography className="text-[2.5rem] text-center py-4">
        Things to know before your appointment
      </Typography>
      <main className="border-2 border-orange-400 flex flex-col gap-4 px-[10rem]">
        <EventList />
      </main>
    </div>
  );
}
