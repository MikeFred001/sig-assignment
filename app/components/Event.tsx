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
      <Typography className="text-center text-green2 w-25 text-[1.5rem]">
        {location}
      </Typography>
      <div className="flex flex-col w-[50%]">
        <Typography className="text-green1 text-[2rem] font-sans font-extrabold">
          {date}
        </Typography>
        <Typography className="text-green2 text-[1.5rem]">
          {startTime} - {endTime}
        </Typography>
        <Typography className="text-green2 text-[1.5rem]">{notice}</Typography>
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
