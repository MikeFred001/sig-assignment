import Typography from "./common/Typography";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between w-[60%] text-green1 py-10">
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
