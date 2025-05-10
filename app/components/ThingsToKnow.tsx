import Typography from "./common/Typography";
import ThingToKnow1 from "./ThingToKnow1";
import ThingToKnow2 from "./ThingToKnow2";
import ThingToKnow3 from "./ThingToKnow3";

export default function ThingsToKnow() {
  return (
    <section className="THINGS-TO-KNOW pb-10">
      <Typography className="text-[2.5rem] text-center pt-8 pb-4">
        Things to know before your appointment
      </Typography>
      <div className="flex flex-col gap-8">
        <ThingToKnow1 />
        <ThingToKnow2 />
        <ThingToKnow3 />
      </div>
    </section>
  );
}
