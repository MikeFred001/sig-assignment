import Typography from "./common/Typography";
import Link from "next/link";

export default function Nav() {
  const navItemStyling =
    "font-normal lg:p-0 lg:bg-transparent rounded-full py-[2px] px-2 bg-green4";
  return (
    <nav className="flex flex-col items-center gap-2 justify-between w-[60%] text-green1 py-10 lg:!flex-row lg:gap-0">
      <Link href="/">
        <Typography className={navItemStyling}>APPOINTMENTS</Typography>
      </Link>
      <Link href="/">
        <Typography className={navItemStyling}>MEDICAL CARD INFO</Typography>
      </Link>
      <Link href="/">
        <Typography className={navItemStyling}>FAQs</Typography>
      </Link>
      <Link href="/">
        <Typography className={navItemStyling}>PHARMACIES</Typography>
      </Link>
      <Link href="/">
        <Typography className={navItemStyling}>ABOUT</Typography>
      </Link>
    </nav>
  );
}
