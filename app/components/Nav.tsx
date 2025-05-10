import Typography from "./common/Typography";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex flex-col items-center gap-2 justify-between w-[60%] text-green1 py-10 lg:flex-row lg:gap-0">
      <Link href="/">
        <Typography className="font-normal">APPOINTMENTS</Typography>
      </Link>
      <Link href="/">
        <Typography className="font-normal">MEDICAL CARD INFO</Typography>
      </Link>
      <Link href="/">
        <Typography className="font-normal">FAQs</Typography>
      </Link>
      <Link href="/">
        <Typography className="font-normal">PHARMACIES</Typography>
      </Link>
      <Link href="/">
        <Typography className="font-normal">ABOUT</Typography>
      </Link>
    </nav>
  );
}
