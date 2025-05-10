import Image from "next/image";
import Typography from "./common/Typography";

export default function ThingToKnow3() {
  return (
    <div className="flex flex-col md:flex-row gap-1 md:gap-8">
      <div className="flex flex-col md:flex-row gap-1 md:gap-6 items-center mx-auto md:mx-0 md:justify-baseline self-start">
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
      <div className="flex flex-col gap-3 translate-y-3">
        <Typography className="text-center md:text-start">
          If this is a renewal, congratulations! You are ready to shop...
        </Typography>
        <Typography className="text-center md:text-start">
          If you are a new patient, here&apos;s some help to get your started...
        </Typography>
        <div className="ml-auto mr-auto px-8 md:ml-auto md:mr-0">
          <Typography>1. Meet with Pharmacist</Typography>
          <Typography>2. Set up your Portal Account</Typography>
          <Typography>3. Start Shopping</Typography>
          <Typography>
            **Don&apos;t forget to take advantage of new patient deals**
          </Typography>
        </div>
      </div>
    </div>
  );
}
