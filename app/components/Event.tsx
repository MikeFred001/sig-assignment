import Typography from "./common/Typography";
import Button from "./common/Button";

export default function Event({
  location,
  date,
  startTime,
  endTime,
  notice,
}: EventProps) {
  return (
    <div className="flex justify-between items-center border-1 border-green1 rounded-2xl px-10 py-6 bg-grey3">
      <Typography className="text-center text-green2 w-20">
        {location}
      </Typography>
      <div className="flex flex-col w-[50%] gap-1">
        <Typography className="text-green1">{date}</Typography>
        <Typography className="text-green2">
          {startTime} - {endTime}
        </Typography>
        <Typography className="text-green2">{notice}</Typography>
      </div>
      <Button className="!py-4 text-[1.25rem]">Book Time</Button>
    </div>
  );
}

interface EventProps {
  location: string;
  date: string;
  startTime: string;
  endTime: string;
  notice: string;
}
