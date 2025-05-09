import Typography from "./common/Typography";

export default function Event({ location, date, startTime, endTime }) {
  return (
    <div className="flex justify-between">
      <Typography className="text-center text-green2">{location}</Typography>
      <div>
        <Typography className="text-center text-green2">{date}</Typography>
        <Typography className="text-center text-green2">
          {startTime} - {endTime}
        </Typography>
      </div>
    </div>
  );
}

interface EventProps {
  location: string;
  date: string;
  startTime: string;
  endTime: string;
}
