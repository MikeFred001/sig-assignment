import Image from "next/image";
import Typography from "./common/Typography";

export default function ThingToKnow2() {
  return (
    <div className="flex gap-8">
      <div className="flex gap-6 items-center w-[22rem] mb-10">
        <Image
          src="/assets/updated-assets/Number2@2x.png"
          alt="Awaiting Certification Icon"
          width={50}
          height={50}
        />
        <Typography className="text-[1.5rem]">
          Check in with your QMP
        </Typography>
      </div>
      <div className="flex flex-col gap-1 translate-y-3">
        <Typography>1. QMP Registration</Typography>
        <Typography>2. Medical Evaluation/Consultation</Typography>
        <Typography>3. Payment</Typography>
      </div>
    </div>
  );
}
