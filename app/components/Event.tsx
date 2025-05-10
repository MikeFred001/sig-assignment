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
    <div className="flex flex-col lg:flex-row justify-between items-center border-1 border-green1 rounded-2xl p-1 md:px-10 md:py-6 bg-grey3">
      <Typography className="text-center text-green2 w-auto lg:w-25 text-[1.5rem]">
        {location}
      </Typography>
      <div className="flex flex-col items-center md:items-start w-auto md:w-[50%]">
        <Typography className="text-green1 text-[1.25rem] lg:text-[2rem] font-sans font-extrabold">
          {date}
        </Typography>
        <Typography className="text-green2 text-[1.15rem] lg:text-[1.5rem]">
          {startTime} - {endTime}
        </Typography>
        <Typography className="text-green2 text-[1.15rem] lg:text-[1.5rem]">
          {notice}
        </Typography>
      </div>
      <Button className="py-1 my-1 w-full sm:w-auto lg:!py-4 text-[1.25rem]">
        Book Time
      </Button>
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
