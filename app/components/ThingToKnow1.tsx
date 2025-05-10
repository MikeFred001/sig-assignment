import Image from "next/image";
import Typography from "./common/Typography";
import Button from "./common/Button";

export default function ThingToKnow1() {
  return (
    <div className="flex flex-col gap-3 md:gap-0">
      <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-center">
        <Image
          src="/assets/updated-assets/Number1@2x.png"
          alt="Awaiting Certification Icon"
          width={50}
          height={50}
        />
        <Typography className="text-[1.15rem] md:text-[1.5rem] text-center py-0 md:py-4">
          You&apos;re going to register with the state of Utah. You can start
          this before you arrive.
        </Typography>
      </div>

      <div className="flex flex-col md:flex-row gap-2 lg:gap-6 items-center lg:ml-24 pt-3">
        <Button className="w-[10rem] lg:w-[13rem]">UtahID.org</Button>
        <Typography className="text-center md:text-start">
          Obtain access to your Utah Digital ID
        </Typography>
      </div>

      <div className="flex flex-col md:flex-row gap-2 lg:gap-6 items-center lg:ml-24 pt-3 flex-wrap">
        <Button className="w-[10rem] lg:w-[13rem]">EVS.Utah.gov</Button>
        <Typography className="text-center md:text-start">
          Fill out all the fields until you get to &quot;Awaiting
          Certification&quot; status
        </Typography>
        <div className="w-full -mt-3">
          <Image
            src="/assets/updated-assets/AwaitingCert-Image.png"
            alt="Awaiting Certification Icon"
            width={225}
            height={225}
            className="mx-auto mt-2 md:mt-0 md:ml-51"
          />
        </div>
      </div>
    </div>
  );
}
