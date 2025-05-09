import Typography from "./common/Typography";

export default function Nav() {
  return (
    <nav className="flex justify-between w-[60%] text-green1 py-10">
      <Typography>APPOINTMENTS</Typography>
      <Typography>MEDICAL CARD INFO</Typography>
      <Typography>FAQs</Typography>
      <Typography>PHARMACIES</Typography>
      <Typography>ABOUT</Typography>
    </nav>
  );
}
