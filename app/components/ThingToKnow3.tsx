import Image from "next/image";
import Typography from "./common/Typography";

export default function ThingToKnow3() {
  return (
    <div className="flex gap-8">
      <div className="flex gap-6 items-center">
        <Image
          src="/assets/updated-assets/Number3@2x.png"
          alt="Awaiting Certification Icon"
          width={50}
          height={50}
        />
        <Typography className="text-[1.5rem]">
          Renewal or New Patient?
        </Typography>
      </div>
      <div className="flex flex-col gap-3 translate-y-4">
        <Typography>
          If this is a renewal, congratulations! You are ready to shop...
        </Typography>
        <Typography>
          If you are a new patient, here&apos;s some help to get your started...
        </Typography>
      </div>
    </div>
  );
}
