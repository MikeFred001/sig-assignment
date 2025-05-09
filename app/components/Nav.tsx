import Typography from "./common/Typography";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between w-[60%] text-green1 py-10">
      <Link href="/">
        <Typography>APPOINTMENTS</Typography>
      </Link>
      <Link href="/">
        <Typography>MEDICAL CARD INFO</Typography>
      </Link>
      <Link href="/">
        <Typography>FAQs</Typography>
      </Link>
      <Link href="/">
        <Typography>PHARMACIES</Typography>
      </Link>
      <Link href="/">
        <Typography>ABOUT</Typography>
      </Link>
    </nav>
  );
}
