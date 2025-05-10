import Typography from "./common/Typography";
import EventList from "./EventList";

export default function UpcomingEvents() {
  return (
    <section>
      <Typography className="text-[3rem] text-center py-4">
        Upcoming Utah Medical Card Events
      </Typography>
      <EventList />
    </section>
  );
}
