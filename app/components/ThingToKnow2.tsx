import Image from "next/image";
import Typography from "./common/Typography";

export default function ThingToKnow2() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="flex flex-col md:flex-row gap-1 items-center md:justify-baseline md:gap-6 w-[22rem] mx-auto md:mx-0 md:mb-10">
        <Image
          src="/assets/updated-assets/Number2@2x.png"
          alt="Awaiting Certification Icon"
          width={50}
          height={50}
        />
        <Typography className="text-[1.15rem] md:text-[1.5rem]">
          Check in with your QMP
        </Typography>
      </div>
      <div className="flex flex-col mx-auto md:mx-0 gap-1 md:translate-y-3">
        <Typography>1. QMP Registration</Typography>
        <Typography>2. Medical Evaluation/Consultation</Typography>
        <Typography>3. Payment</Typography>
      </div>
    </div>
  );
}
