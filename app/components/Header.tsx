import Nav from "./Nav";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 h-[350px] lg:h-[520px] text-black flex flex-col items-center w-full bg-[url('/assets/updated-assets/TopHeaderImage@2x.png')] bg-cover bg-center w-full">
      <Nav />
      <Image
        src="/assets/updated-assets/UtahGrownLogoWhiteBorderCropped@2x.png"
        alt="green utah grown logo with white border"
        className="absolute bottom-0 w-[80%] sm:w-[42%] translate-y-12"
        width={600}
        height={5}
      />
    </header>
  );
}
