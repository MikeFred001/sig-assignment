import Typography from "./common/Typography";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="border-t-3 border-green1">
      <div className="flex px-[10rem]">
        <Image
          src="/assets/updated-assets/UtahGrownLogoWhiteBorderCropped.png"
          alt="green and white Utah Grown Logo"
          width={325}
          height={325}
          className="object-cover mt-2"
        />
        <Typography className="self-end font-normal py-5 text-[1.1rem]">
          UTAH&apos;S CANNABIS COMMUNITY
        </Typography>
      </div>
      <div className="h-[7.5rem] bg-green1 text-grey3">
        <div className="mx-[15rem]">
          <div className="flex gap-10 justify-end p-3">
            <Typography className="text-grey3">
              Ⓒ2023 All Rights Reserved.
            </Typography>
            <Typography className="text-grey3">Terms and Conditions</Typography>
            <Typography className="text-grey3">Privacy Policy</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
