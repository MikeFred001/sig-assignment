import Typography from "./common/Typography";
import Image from "next/image";
import FooterBase from "./FooterBase";

export default function Footer() {
  return (
    <footer className="border-t-3 border-green1">
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
      <FooterBase />
    </footer>
  );
}
