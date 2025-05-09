import Typography from "./common/Typography";
import EventList from "./EventList";

export default function UpcomingEvents() {
  return (
    <div className="UPCOMING-CARD-EVENTS">
      <Typography className="text-[3rem] text-center py-4">
        Upcoming Utah Medical Card Events
      </Typography>
      <EventList />
    </div>
  );
}
